/* eslint-disable @typescript-eslint/no-unused-vars */
import { playlist, resolve, user, util, search, track } from "./src"
import { writeFileSync } from "fs"
import { getClientIDv2 } from "./src/util"
import { join } from "path"
import { TrackElement } from "./types/user"

const byteLength = (input: any) => Buffer.byteLength(JSON.stringify(input) || "", "utf8")
const formatSize = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

const client_id = process.env.SOUNDCLOUD_CLIENT_ID_V1 || "client_id"
const client_id2 = process.env.SOUNDCLOUD_CLIENT_ID_V2 || "client_id"
const examplePlaylistURL = process.env.EXAMPLE_PLAYLIST_URL || ""
const examplePlaylistID = Number(process.env.EXAMPLE_PLAYLIST_ID) || 0
const exampleUserURL = process.env.EXAMPLE_USER_URL || ""
const exampleUserID = Number(process.env.EXAMPLE_USER_ID) || 0
const exampleTrackURL = process.env.EXAMPLE_TRACK_URL || ""
const exampleTrackID = Number(process.env.EXAMPLE_TRACK_ID) || 0
const exampleSearchTerm = "noisia"

!(async () => {
  try {
    console.log("start")
    const startTime = Date.now()

    // const out1 = await search(exampleSearchTerm, { limit: 2 })
    // const out2 = await out1.next?.()
    // const out = [...out1.collection, ...(out2?.collection || [])]

    // const out = await util.ensureMin(await search(exampleSearchTerm, { limit: 1 }), 10)

    // const out1 = await user.tracks(exampleUserID, { limit: 5 })
    // const out2 = await out1.next?.()
    // const out = [...out1.collection, ...(out2?.collection || [])]

    // const out1 = await user.likes(exampleUserURL, { limit: 5 })
    // const out2 = await out1.next?.()
    // const out = [...out1.collection, ...(out2?.collection || [])]

    // const out = await util.ensureMin(await user.tracks("space-laces", { limit: 10 }), 10)

    const out = await track(exampleTrackID)
    // const out = await track(exampleTrackURL)
    // const out = await search(exampleSearchTerm, { limit: 2 })
    // const out = await search.users(exampleSearchTerm)
    // const out = await search.albums(exampleSearchTerm)
    // const out = await search.playlists(exampleSearchTerm)
    // const out = await user.tracks(exampleUserID, { limit: 2 })
    // const out = await user.likes(exampleUserID, { limit: 2 })
    // const out = await user(exampleUserID)
    // const out = await user(exampleUserURL)
    // const out = await playlist(examplePlaylistURL)
    // const out = await playlist(examplePlaylistID)
    // const out = await getClientIDv2()
    // const out = await resolve(exampleUserURL)
    // const out = await resolve(exampleTrackURL)
    // const out = await resolve(examplePlaylistURL)
    // const out = await resolve.browser(exampleUserURL, client_id)
    // const out = await resolve.browser(exampleTrackURL, client_id)
    // const out = await resolve.browser(examplePlaylistURL, client_id)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if ("collection" in out) console.log(`got ${out.collection.length} items in collection`)

    console.log(
      `fetched ${formatSize(byteLength(out))} of data in ${Date.now() - startTime}ms\n` +
        `see ${join(__dirname, "demo_out.json")}`
    )

    writeFileSync("demo_out.json", JSON.stringify(out, null, 2) || "")
  } catch (error) {
    console.log("demo error", error)
  }
})()
