import test from "ava"

import resolve from "../src/resolve"

const client_id = process.env.SOUNDCLOUD_CLIENT_ID_V1 || "client_id"

// const examplePlaylist = "https://soundcloud.com/vaaski/sets/rrrrrrrrr"
const exampleUser = "https://soundcloud.com/vaaski"
// const exampleTrack = "https://soundcloud.com/vaaski/slow-night"

test("resolve user with scraping", async t => {
  const data = await resolve(exampleUser)
  t.truthy(data.username)
  t.is(data.id, 51999125)
})

test("resolve user using invalid URL with scraping", async t => {
  await t.throwsAsync(resolve("https://vaaski.dev"))
})

test("resolve user with APIv1", async t => {
  const data = await resolve.browser(exampleUser, client_id)
  t.truthy(data.username)
  t.is(data.id, 51999125)
})
