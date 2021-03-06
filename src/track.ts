import type { Trackv2 } from "../types/track"
import type { ClientIDv2, URLorID } from "../types"

import got from "got"
import { APIv2, getClientIDv2, scrapeData, SCRAPE_FIND, urlify } from "./util"

/**
 * Get a track by ID using the APIv2
 * @param id A track ID
 * @param client_id client_id for APIv2
 */
const getByID = async (id: number, client_id: ClientIDv2): Promise<Trackv2> => {
  const url = urlify(`tracks/${id}`, APIv2)
  const searchParams = { client_id }

  return await got(url, { searchParams }).json<Trackv2>()
}

/**
 * Get a track by URL using the APIv2
 * @param url A track URL
 */
const getByURL = async (url: string) => {
  const scraped = await scrapeData(urlify(url))
  const trackData = scraped.find(SCRAPE_FIND.trackWithTranscodings)
  if (!trackData) throw new Error("No track data found.")

  const [data] = trackData.data
  return data as Trackv2
}

/**
 * Get a track by either URL or ID using the APIv2.
 *
 * If you use a track ID, you can provide a v2 client_id to save one scrape request (recommended).
 * Uses `util.getClientIDv2` to find a client_id if none is provided.
 * @param identifier A track URL or ID
 * @param client_id Optional client_id for APIv2.
 */
const track = async (identifier: URLorID, client_id?: ClientIDv2): Promise<Trackv2> => {
  if (typeof identifier === "string") return await getByURL(identifier)

  if (typeof identifier === "number") {
    if (!client_id) client_id = await getClientIDv2()
    return await getByID(identifier, client_id)
  }

  throw new Error("Source must be a string (URL) or a number (ID)")
}

track.stream = async (identifier: URLorID | Trackv2, client_id?: ClientIDv2) => {
  if (!client_id) client_id = await getClientIDv2()

  if (typeof identifier !== "object") identifier = await track(identifier, client_id)

  const { transcodings } = identifier.media
  const progressive = transcodings.find(t => t.format.protocol === "progressive")

  /* istanbul ignore next */
  if (!progressive) throw new Error("no progressive format found")

  const searchParams = { client_id }
  const { url } = await got(progressive.url, { searchParams }).json<{ url: string }>()

  return url
}

export default track
