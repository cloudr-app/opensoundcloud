import test from "ava"

import { playlist, util } from "../src"

const examplePlaylistURL = process.env.EXAMPLE_PLAYLIST_URL || ""
const examplePlaylistID = Number(process.env.EXAMPLE_PLAYLIST_ID) || 0

let client_id2: string

test.before(async () => {
  client_id2 = await util.getClientIDv2()
})

test("get playlist using URL", async t => {
  const data = await playlist(examplePlaylistURL)
  t.is(data.kind, "playlist")
  t.truthy(data.id)
})

test("get playlist using ID", async t => {
  const data = await playlist(examplePlaylistID)
  t.is(data.kind, "playlist")
  t.truthy(data.id)
})

test("get playlist using ID and client_id", async t => {
  const data = await playlist(examplePlaylistID, client_id2)
  t.is(data.kind, "playlist")
  t.truthy(data.id)
})

test("get playlist throws using wrong input", async t => {
  // @ts-expect-error intentionally wrong input
  await t.throwsAsync(playlist([]))
})

test("get playlist by URL throws when not found", async t => {
  await t.throwsAsync(playlist(""))
})

test("get playlist by ID throws when not found", async t => {
  await t.throwsAsync(playlist(0, client_id2))
})
