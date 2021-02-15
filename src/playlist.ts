import type { ClientIDv2, URLorID } from "../types"
import type { Playlistv2 } from "../types/playlist"

import ky from "ky-universal"
import { APIv2, getClientIDv2, scrapeData, ScrapeIDs, urlify } from "./util"

/**
 * Get a playlist by ID using the APIv2.
 * @param id A playlist ID
 * @param client_id client_id for APIv2
 */
const byID = async (id: number, client_id: ClientIDv2) => {
  const url = urlify(`playlists/${id}`, APIv2)
  const searchParams = { client_id }

  const data = await ky(url, { searchParams }).json()
  return data as Playlistv2
}

/**
 * Get a playlist by URL using the APIv2.
 * @param url A playlist URL
 */
const byURL = async (url: string) => {
  const scraped = await scrapeData(urlify(url))
  const playlistData = scraped.find(({ id }) => id === ScrapeIDs.playlist)
  if (!playlistData) throw new Error("No playlist data found.")

  const [data] = playlistData.data
  return data as Playlistv2
}

/**
 * Get a playlist by either URL or ID using the APIv2.
 *
 * If you use a playlist ID, You can provide a v2 client_id to save one scrape request (recommended).
 * Uses `util.getClientIDv2` to find a client_id if none is provided.
 * @param identifier A playlist URL or ID
 * @param client_id Optional client_id for APIv2.
 */
const playlist = async (identifier: URLorID, client_id?: ClientIDv2): Promise<Playlistv2> => {
  if (typeof identifier === "string") return await byURL(identifier)

  if (typeof identifier === "number") {
    if (!client_id) client_id = await getClientIDv2()
    return await byID(identifier, client_id)
  }

  throw new Error("Source must be a string (URL) or a number (ID)")
}

playlist.id = byID
playlist.url = byURL

// TODO browser equivalents with pagination

export default playlist
