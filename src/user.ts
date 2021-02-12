import type { ClientIDv2, URLorID } from "../types"
import type { Userv2, UserLikesv2, Collection } from "../types/user"

import ky from "ky-universal"
import {
  APIv2,
  getClientIDv2,
  PaginatedResponse,
  paginateNext,
  scrapeData,
  ScrapeIDs,
  urlify,
} from "./util"
import resolve from "./resolve"

/**
 * Get a user by ID using the APIv2
 * @param id A user ID
 * @param client_id client_id for APIv2
 */
const getByID = async (id: number, client_id: ClientIDv2) => {
  const url = urlify(`users/${id}`, APIv2)
  const searchParams = { client_id }

  const data = await ky(url, { searchParams }).json()
  return data as Userv2
}

/**
 * Get a user by URL using the APIv2
 * @param url A user URL
 */
const getByURL = async (url: string) => {
  const scraped = await scrapeData(urlify(url))
  const userData = scraped.find(({ id }) => id === ScrapeIDs.user)
  if (!userData) throw new Error("No user data found.")

  const [data] = userData.data
  return data as Userv2
}

/**
 * Get a user by either URL or ID using the APIv2.
 *
 * You can provide a v2 client_id to speed up the process (recommended).
 * Uses `util.getClientIDv2` to find a client_id if none is provided.
 * @param identifier A user URL or ID
 * @param client_id Optional client_id for APIv2.
 */
const user = async (identifier: URLorID, client_id?: ClientIDv2): Promise<Userv2> => {
  if (typeof identifier === "string") return await getByURL(identifier)

  if (typeof identifier === "number") {
    if (!client_id) client_id = await getClientIDv2()
    return await getByID(identifier, client_id)
  }

  throw new Error("Source must be a string (URL) or a number (ID)")
}

export interface LikesOptions {
  limit?: number
  client_id?: ClientIDv2
}
/**
 * Get a user's likes by either URL or ID using the APIv2.
 *
 * You can provide a v2 client_id to speed up the process (recommended).
 * Uses `util.getClientIDv2` to find a client_id if none is provided.
 * @param identifier A user URL or ID
 * @param options Optional options object.
 * @param options.limit Limit the amount of tracks returned. Defaults to 50.
 * @param options.client_id client_id for APIv2.
 */
user.likes = async (
  identifier: URLorID,
  { limit = 50, client_id }: LikesOptions = {}
): Promise<PaginatedResponse<Collection[]>> => {
  if (typeof identifier === "string") identifier = (await resolve(identifier)).id
  if (!client_id) client_id = await getClientIDv2()

  const url = urlify(`users/${identifier}/likes`, APIv2)
  const searchParams = { client_id, limit }

  const data = (await ky(url, { searchParams }).json()) as UserLikesv2

  const ret: PaginatedResponse<Collection[]> = data
  /* istanbul ignore next */
  if (data.next_href) ret.next = paginateNext(data.next_href, searchParams)
  return ret
}

user.id = getByID
user.url = getByURL

export default user
