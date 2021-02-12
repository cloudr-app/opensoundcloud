import type { ClientIDv2, URLorID } from "../types"
import type { Userv2 } from "../types/user"

import ky from "ky-universal"
import { APIv2, getClientIDv2, scrapeData, ScrapeIDs, urlify } from "./util"

const byID = async (id: number, client_id: ClientIDv2) => {
  const url = urlify(`users/${id}`, APIv2)
  const searchParams = { client_id }

  const data = await ky(url, { searchParams }).json()
  return data as Userv2
}

const byURL = async (url: string) => {
  const scraped = await scrapeData(urlify(url))
  const userData = scraped.find(({ id }) => id === ScrapeIDs.user)
  if (!userData) throw new Error("No user data found.")

  const [data] = userData.data
  return data as Userv2
}

const user = async (identifier: URLorID, client_id?: ClientIDv2): Promise<any> => {
  if (typeof identifier === "string") return await byURL(identifier)

  if (typeof identifier === "number") {
    if (!client_id) client_id = await getClientIDv2()
    return await byID(identifier, client_id)
  }

  throw new Error("Source must be a string (URL) or a number (ID)")
}

user.id = byID
user.url = byURL

export default user
