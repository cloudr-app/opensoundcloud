import test from "ava"

import { user } from "../src"
import { getClientIDv2 } from "../src/util"

const exampleUserURL = process.env.EXAMPLE_USER_URL || ""
const exampleUserID = Number(process.env.EXAMPLE_USER_ID) || 0

let client_id: string

test.before(async () => {
  client_id = await getClientIDv2()
})

test("get user using URL", async t => {
  const data = await user(exampleUserURL)
  t.is(data.kind, "user")
  t.truthy(data.id)
})

test("get user using ID", async t => {
  const data = await user(exampleUserID)
  t.is(data.kind, "user")
  t.truthy(data.id)
})

test("get user using ID and client_id", async t => {
  const data = await user(exampleUserID, client_id)
  t.is(data.kind, "user")
  t.truthy(data.id)
})

test("get user throws using wrong input", async t => {
  // @ts-expect-error intentionally wrong input
  await t.throwsAsync(user([]))
})

test("get user by URL throws when not found", async t => {
  await t.throwsAsync(user(""))
})

test("get user by ID throws when not found", async t => {
  await t.throwsAsync(user(0, client_id))
})

test("get users likes using URL", async t => {
  const data = await user.likes(exampleUserURL, { limit: 2 })
  t.assert(data.collection.length === 2)
  t.truthy(data)
  t.truthy(data.collection[0].track.id)
})

test("get users likes using ID", async t => {
  const data = await user.likes(exampleUserID, { limit: 2 })
  t.assert(data.collection.length === 2)
  t.truthy(data)
  t.truthy(data.collection[0].track.id)
})

test("get users likes using ID and client_id", async t => {
  const data = await user.likes(exampleUserID, { limit: 2, client_id })
  t.assert(data.collection.length === 2)
  t.truthy(data)
  t.truthy(data.collection[0].track.id)
})
