/* eslint-disable @typescript-eslint/no-unused-vars */
import { playlist, resolve } from "./src"
import { writeFileSync } from "fs"
import { getClientIDv2 } from "./src/util"
import { join } from "path"

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
const exampleTrackURL = process.env.EXAMPLE_TRACK_URL || ""

!(async () => {
  const startTime = Date.now()

  const out = await playlist(examplePlaylistURL)
  // const out = await playlist(examplePlaylistID)
  // const out = await getClientIDv2()
  // const out = await resolve(exampleUserURL)
  // const out = await resolve(exampleTrackURL)
  // const out = await resolve(examplePlaylistURL)
  // const out = await resolve.browser(exampleUserURL, client_id)
  // const out = await resolve.browser(exampleTrackURL, client_id)
  // const out = await resolve.browser(examplePlaylistURL, client_id)

  console.log(
    `fetched ${formatSize(byteLength(out))} in ${Date.now() - startTime}ms\n` +
      `see ${join(__dirname, "demo_out.json")}`
  )

  writeFileSync("demo_out.json", JSON.stringify(out, null, 2) || "")
})()
