import { resolve } from "./src"
import { writeFileSync } from "fs"

const byteLength = (input: any) => Buffer.byteLength(JSON.stringify(input), "utf8")
const formatSize = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

const client_id = process.env.SOUNDCLOUD_CLIENT_ID_V1 || "client_id"
const examplePlaylist = "https://soundcloud.com/vaaski/sets/rrrrrrrrr"
const exampleUser = "https://soundcloud.com/vaaski"
const exampleTrack = "https://soundcloud.com/vaaski/slow-night"

!(async () => {
  const startTime = Date.now()

  const out = await resolve(exampleUser)
  // const out = await resolve(exampleTrack)
  // const out = await resolve(examplePlaylist)
  // const out = await resolve.browser(exampleUser, client_id)
  // const out = await resolve.browser(exampleTrack, client_id)
  // const out = await resolve.browser(examplePlaylist, client_id)

  console.log(`fetched ${formatSize(byteLength(out))} in ${Date.now() - startTime}ms`)

  writeFileSync("demo_out.json", JSON.stringify(out, null, 2))
})()
