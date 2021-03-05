import test from "ava"

import { track, util } from "../src"

const exampleTrackURL = process.env.EXAMPLE_TRACK_URL || ""
const exampleTrackID = Number(process.env.EXAMPLE_TRACK_ID) || 0

let client_id2: string

test.before(async () => {
  client_id2 = await util.getClientIDv2()
})

test("get track using URL", async t => {
  const data = await track(exampleTrackURL)
  t.is(data.kind, "track")
  t.truthy(data.id)
})

test("get track using ID", async t => {
  const data = await track(exampleTrackID)
  t.is(data.kind, "track")
  t.truthy(data.id)
})

test("get track using ID and client_id", async t => {
  const data = await track(exampleTrackID, client_id2)
  t.is(data.kind, "track")
  t.truthy(data.id)
})

test("get track throws using wrong input", async t => {
  // @ts-expect-error intentionally wrong input
  await t.throwsAsync(track([]))
})

test("get track by URL throws when not found", async t => {
  await t.throwsAsync(track(""))
})

test("get track by ID throws when not found", async t => {
  await t.throwsAsync(track(0, client_id2))
})

test("get track stream using ID", async t => {
  const data = await track.stream(exampleTrackID)
  t.truthy(data)
})

test("get track stream using Trackv2 object", async t => {
  const trackData = await track(exampleTrackURL)
  const data = await track.stream(trackData)
  t.truthy(data)
})

test("get track stream using ID and client_id", async t => {
  const data = await track.stream(exampleTrackID, client_id2)
  t.truthy(data)
})
