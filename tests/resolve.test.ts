import test from "ava"

import { resolve } from "../src"

const client_id = process.env.SOUNDCLOUD_CLIENT_ID_V1 || "client_id"

const examplePlaylistURL = process.env.EXAMPLE_PLAYLIST_URL || ""
const exampleUserURL = process.env.EXAMPLE_USER_URL || ""
const exampleTrackURL = process.env.EXAMPLE_TRACK_URL || ""

test("resolve user", async t => {
  const data = await resolve(exampleUserURL)
  t.is(data.kind, "user")
  t.truthy(data.username)
  t.truthy(data.id)
})

test("resolve playlist", async t => {
  const data = await resolve(examplePlaylistURL)
  t.is(data.kind, "playlist")
  t.truthy(data.id)
})

test("resolve track", async t => {
  const data = await resolve(exampleTrackURL)
  t.is(data.kind, "track")
  t.truthy(data.id)
})

test("resolve user using invalid URL", async t => {
  await t.throwsAsync(resolve("https://vaaski.dev"))
})

test("resolve.browser user", async t => {
  const data = await resolve.browser(exampleUserURL, client_id)
  t.is(data.kind, "user")
  t.truthy(data.username)
  t.truthy(data.id)
})

test("resolve.browser playlist", async t => {
  const data = await resolve.browser(examplePlaylistURL, client_id)
  t.is(data.kind, "playlist")
  t.truthy(data.id)
})

test("resolve.browser track", async t => {
  const data = await resolve.browser(exampleTrackURL, client_id)
  t.is(data.kind, "track")
  t.truthy(data.id)
})

test("resolve.browser user throws without client_id", async t => {
  // @ts-expect-error intentionally without client_id
  await t.throwsAsync(resolve.browser(exampleUserURL))
})
