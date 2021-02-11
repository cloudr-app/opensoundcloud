import { APIv1Resolve, ScrapeResolve } from "../types/resolve"

import { APIv1, at, urlify } from "./util"
import ky from "ky-universal"

const htmlDataReg = /(\[{"id")(.*?)(?=\);)/i

/**
 * Resolve a track, user or playlist using web scraping.
 * This doesn't work in browsers, as CORS is disabled.
 * In browsers you have to use `resolve.browser` instead.
 * @param url
 */
export const resolve = async (url: string): Promise<ScrapeResolve> => {
  const html = await ky(urlify(url)).text()
  const [match] = html.match(htmlDataReg) || []
  const parsed = JSON.parse(match)
  const { data } = at(parsed, -1) || at(parsed, -2)

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

  const searchParams = { url, client_id }
  const data = await ky(`${APIv1}/resolve`, { searchParams }).json()

  return data as APIv1Resolve
}
