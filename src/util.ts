import type { ScrapedData } from "../types/scrape"

import ky from "ky-universal"

export const issueURL = "https://github.com/cloudr-app/opensoundcloud/issues/new"

export const scrapeURL = "https://soundcloud.com"
export const APIv1 = "https://api.soundcloud.com"
export const APIv2 = "https://api-v2.soundcloud.com"
export const urlify = (url: string, base = scrapeURL): string => {
  return new URL(url, base).toString()
}

export const at = <T>(arr: Array<T>, pos: number): T => {
  if (pos >= 0) return arr[pos]
  return arr[arr.length + pos]
}

const htmlDataReg = /(\[{"id")(.*?)(?=\);)/i
export const scrapeData = async (url: string): Promise<ScrapedData> => {
  const html = await ky(url).text()
  const [match] = html.match(htmlDataReg) || []

  return JSON.parse(match) as ScrapedData
}

export const ScrapeIDs = {
  user: 30,
  playlist: 45,
}

const scriptReg = /<script(?: crossorigin)? src="(https:\/\/a-v2\.sndcdn\.com\/assets\/.+\.js)"/gm
const clientIDReg = /client_id=(\w+)/
export const getClientIDv2 = async (): Promise<string> => {
  const html = await ky(scrapeURL).text()
  const scriptURLs = Array.from(html.matchAll(scriptReg), (m: string[]) => m[1])

  for (const url of scriptURLs) {
    const script = await ky(url).text()
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

    const data = (await ky.get(url, { searchParams }).json()) as Record<string, any>

    const ret: PaginatedResponse<K> = {
      collection: data.collection,
    }
    /* istanbul ignore next */
    if (data.next_href) ret.next = paginateNext(data.next_href, params)

    return ret
  }
}

// TODO build something like ensureMin() which would tale a PaginatedResponse and
// return the specified amount of items regardless of what the weird soundcloud API does
