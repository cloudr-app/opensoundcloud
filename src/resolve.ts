import type { APIv1Resolve, ScrapeResolve } from "../types/resolve"

import ky from "ky-universal"
import { APIv1, at, scrapeData, urlify } from "./util"

/**
 * Resolve a track, user or playlist using web scraping.
 * This doesn't work in browsers, as CORS is disabled.
 * In browsers you have to use `resolve.browser` instead.
 * @param url
 */
const resolve = async (url: string): Promise<ScrapeResolve> => {
  const scraped = await scrapeData(urlify(url))
  const { data } = at(scraped, -1) // || at(parsed, -2)

  return data[0] as ScrapeResolve
}

/**
 * Resolve a track, user or playlist using the public APIv1.
 * This works in browsers, as CORS is enabled.
 * @param url the url to resolve
 * @param client_id a APIv1 client_id
 */
resolve.browser = async (url: string, client_id: string): Promise<APIv1Resolve> => {
  url = urlify(url)

  if (!client_id) throw new Error("APIv1 client_id has to be provided")

  const searchParams = { url, client_id }
  const data = await ky(`${APIv1}/resolve`, { searchParams }).json()

  return data as APIv1Resolve
}

export default resolve
