import type { ClientIDv2, PaginatedOptions, URLorID } from "../types"
import type {
  Userv2,
  UserLikesv2,
  UserLikesv2Element,
  TrackElement,
  UserTracksv2,
} from "../types/user"

import got from "got"
import resolve from "./resolve"
import {
  APIv2,
  defaultLimit,
  getClientIDv2,
  PaginatedResponse,
  paginateNext,
  scrapeData,
  SCRAPE_FIND,
  urlify,
} from "./util"

/**
 * Get a user by ID using the APIv2
 * @param id A user ID
 * @param client_id client_id for APIv2
 */
const getByID = async (id: number, client_id: ClientIDv2) => {
  const url = urlify(`users/${id}`, APIv2)
  const searchParams = { client_id }

  return await got(url, { searchParams }).json<Userv2>()
}

/**
 * Get a user by URL using the APIv2
 * @param url A user URL
 */
const getByURL = async (url: string) => {
  const scraped = await scrapeData(urlify(url))
  const userData = scraped.find(SCRAPE_FIND.user)
  if (!userData) throw new Error("No user data found.")

  const [data] = userData.data
  return data as Userv2
}

/**
 * Get a user by either URL or ID using the APIv2.
 *
 * If you use a user ID, you can provide a v2 client_id to save one scrape request (recommended).
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

/**
 * Get a user's likes by either URL or ID using the APIv2.
 * Using an ID is recommended, as it saves one resolve request.
 *
 * You can provide a v2 client_id to save one scrape request (recommended).
 * Uses `util.getClientIDv2` to find a client_id if none is provided.
 * @param identifier A user URL or ID
 * @param options Optional options object.
 * @param options.limit Limit the amount of tracks returned. Defaults to 50.
 * @param options.client_id client_id for APIv2.
 */
user.likes = async (identifier: URLorID, { limit = 50, client_id }: PaginatedOptions = {}) => {
  if (typeof identifier === "string") identifier = (await resolve(identifier)).id
  if (!client_id) client_id = await getClientIDv2()

  const url = urlify(`users/${identifier}/likes`, APIv2)
  const searchParams = { client_id, limit }

  const data = await got(url, { searchParams }).json<UserLikesv2>()

  const ret: PaginatedResponse<UserLikesv2Element[]> = data
  /* istanbul ignore next */
  if (data.next_href) ret.next = paginateNext(data.next_href, searchParams)
  return ret
}

/**
 * Get a user's tracks by either URL or ID using the APIv2.
 * Using an ID is recommended, as it saves one resolve request.
 *
 * You can provide a v2 client_id to save one scrape request (recommended).
 * Uses `util.getClientIDv2` to find a client_id if none is provided.
 * @param identifier A user URL or ID
 * @param options Optional options object.
 * @param options.limit Limit the amount of tracks returned. Defaults to 50.
 * @param options.client_id client_id for APIv2.
 */
user.tracks = async (
  identifier: URLorID,
  { limit = defaultLimit, client_id }: PaginatedOptions = {}
) => {
  if (typeof identifier === "string") identifier = (await resolve(identifier)).id
  if (!client_id) client_id = await getClientIDv2()

  const searchParams = { client_id, limit }
  const url = urlify(`users/${identifier}/tracks`, APIv2)
  const data = await got(url, { searchParams }).json<UserTracksv2>()

  const ret: PaginatedResponse<TrackElement[]> = data
  /* istanbul ignore next */
  if (data.next_href) ret.next = paginateNext(data.next_href, searchParams)
  return ret
}

user.id = getByID
user.url = getByURL

export default user
