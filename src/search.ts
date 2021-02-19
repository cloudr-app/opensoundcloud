import type { PaginatedOptions } from "../types"
import type { Search, SearchResult } from "../types/search"

import ky from "ky-universal"
import {
  APIv2,
  defaultLimit,
  getClientIDv2,
  PaginatedResponse,
  paginateNext,
  urlify,
} from "./util"

const searchFactory = (urlPath: string) => async (
  query: string,
  { limit = defaultLimit, client_id }: PaginatedOptions = {}
): Promise<PaginatedResponse<SearchResult[]>> => {
  if (!client_id) client_id = await getClientIDv2()

  const url = urlify(urlPath, APIv2)
  const searchParams = {
    client_id,
    limit,
    q: query,
  }
  const req = await ky(url, { searchParams })
  const data = (await req.json()) as Search

  const ret: PaginatedResponse<SearchResult[]> = data

  /* istanbul ignore next */
  if (data.next_href) ret.next = paginateNext(data.next_href, searchParams)

  return ret
}

export type SearchFunction = (
  query: string,
  options?: PaginatedOptions
) => Promise<PaginatedResponse<SearchResult[]>>

export interface OpensoundcloudSearch {
  (query: string, options?: PaginatedOptions): Promise<PaginatedResponse<SearchResult[]>>
  users: SearchFunction
  tracks: SearchFunction
  albums: SearchFunction
  playlists: SearchFunction
}

/**
 * Search tracks, users and playlists.
 *
 * You can provide a v2 client_id to save one scrape request (recommended).
 * Uses `util.getClientIDv2` to find a client_id if none is provided.
 * @param query search query
 * @param options Optional options object.
 * @param options.limit Limit the amount of tracks returned. Defaults to 50.
 * @param options.client_id client_id for APIv2.
 */
// @ts-expect-error not sure how to fix this, but the other functions get
// declared right below
const search: OpensoundcloudSearch = searchFactory("search")

search.users = searchFactory("search/users")
search.tracks = searchFactory("search/tracks")
search.albums = searchFactory("search/albums")
search.playlists = searchFactory("search/playlists_without_albums")

// TODO write tests
// TODO write jsdoc
// TODO write docs

export default search
