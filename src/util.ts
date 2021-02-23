import type { ScrapedData } from "../types/scrape"

import got from "got"

export const issueURL = "https://github.com/cloudr-app/opensoundcloud/issues/new"

export const scrapeURL = "https://soundcloud.com"
export const APIv2 = "https://api-v2.soundcloud.com"
export const defaultLimit = 20
export const urlify = (url: string, base = scrapeURL): string => {
  return new URL(url, base).toString()
}

export const at = <T>(arr: Array<T>, pos: number): T => {
  if (pos >= 0) return arr[pos]
  return arr[arr.length + pos]
}

const htmlDataReg = /(\[{"id")(.*?)(?=\);)/i
export const scrapeData = async (url: string): Promise<ScrapedData> => {
  const html = await got(url).text()
  const [match] = html.match(htmlDataReg) || []

  return JSON.parse(match) as ScrapedData
}

export const ScrapeIDs = {
  user: 30,
  playlist: 45,
  trackWithTranscodings: 18,
}

const scriptReg = /<script(?: crossorigin)? src="(https:\/\/a-v2\.sndcdn\.com\/assets\/.+\.js)"/gm
const clientIDReg = /client_id=(\w{32})/
export const getClientIDv2 = async (): Promise<string> => {
  const html = await got(scrapeURL).text()
  const scriptURLs = Array.from(html.matchAll(scriptReg), (m: string[]) => m[1])

  for (const url of scriptURLs) {
    const script = await got(url).text()
    const match = script.match(clientIDReg)
    if (match?.[1]) return match[1]
  }

  /* istanbul ignore next */
  throw new Error(`Can't find client_id, please report this to ${issueURL}`)
}

export type PaginatedResponse<K> = {
  collection: K
  next?: () => Promise<PaginatedResponse<K>>
}
export const paginateNext = <K>(url: string, params: Record<string, string | number> = {}) => {
  return async (): Promise<PaginatedResponse<K>> => {
    const _url = new URL(url)
    const _params = Object.fromEntries(_url.searchParams.entries())
    const searchParams = { ..._params, ...params }

    const data = await got.get(url, { searchParams }).json<Record<string, any>>()

    const ret: PaginatedResponse<K> = {
      collection: data.collection,
    }
    /* istanbul ignore next */
    if (data.next_href) ret.next = paginateNext(data.next_href, params)

    return ret
  }
}

/**
 * Automatically uses paginateNext to fetch the minimum amount of items requested.
 * This is for users like "space-laces" for which the API returns no tracks for
 * about the first 5 requests. Might return more than the specified minimum.
 * @param paginated a `PaginatedResponse` as returned by `paginateNext`
 * @param min the minimum amount of items you want to receive in the collection
 * @example
 * await util.ensureMin(await user.tracks("space-laces", { limit: 20 }), 10)
 * // returns an object with a collection property that has a minimum of 10 items
 */
export const ensureMin = async <K extends any[]>(
  paginated: PaginatedResponse<K>,
  min: number
): Promise<PaginatedResponse<K>> => {
  if (paginated.collection.length < min && paginated.next) {
    const next = await paginated.next()
    const collection = [...paginated.collection, ...next.collection] as K
    return ensureMin({ ...next, collection }, min)
  }

  return paginated
}
