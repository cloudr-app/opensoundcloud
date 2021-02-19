import test from "ava"
import { search, util } from "../src"

let client_id: string

test.before(async () => {
  client_id = await util.getClientIDv2()
})

test("search for everything", async t => {
  const data = await search("noisia")
  t.assert(data.collection.length)
  t.assert(data.collection[0].id)
})

test("search for everything with client_id", async t => {
  const data = await search("noisia", { client_id })
  t.assert(data.collection.length)
  t.assert(data.collection[0].id)
})

test("search for users", async t => {
  const data = await search.users("noisia", { client_id })
  t.assert(data.collection.length)
  t.assert(data.collection[0].id)

  const onlyUsers = !data.collection.find(r => r.kind !== "user")
  t.assert(onlyUsers)
})

test("search for playlists", async t => {
  const data = await search.playlists("noisia", { client_id })
  t.assert(data.collection.length)
  t.assert(data.collection[0].id)

  const onlyPlaylists = !data.collection.find(r => r.kind !== "playlist")
  t.assert(onlyPlaylists)
})

test("search for tracks", async t => {
  const data = await search.tracks("noisia", { client_id })
  t.assert(data.collection.length)
  t.assert(data.collection[0].id)

  const onlyTracks = !data.collection.find(r => r.kind !== "track")
  t.assert(onlyTracks)
})

test("search for albums", async t => {
  const data = await search.albums("noisia", { client_id })
  t.assert(data.collection.length)
  t.assert(data.collection[0].id)

  const onlyPlaylists = !data.collection.find(r => r.kind !== "playlist")
  t.assert(onlyPlaylists)
})
