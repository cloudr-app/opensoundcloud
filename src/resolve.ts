import type { ScrapeResolve } from "../types/resolve"

import { at, scrapeData, urlify } from "./util"

/**
 * Resolve a track, user or playlist using web scraping.
 * @param url
 */
const resolve = async (url: string): Promise<ScrapeResolve> => {
  const scraped = await scrapeData(urlify(url))
  const { data } = at(scraped, -1) // || at(parsed, -2)

  return data[0] as ScrapeResolve
}

export default resolve
