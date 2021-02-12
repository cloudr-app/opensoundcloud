import test from "ava"

import { user } from "../src"
import { getClientIDv2 } from "../src/util"

const exampleUserURL = process.env.EXAMPLE_USER_URL || ""
const exampleUserID = Number(process.env.EXAMPLE_USER_ID) || 0

let client_id2: string

test.before(async () => {
  client_id2 = await getClientIDv2()
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
  const data = await user(exampleUserID, client_id2)
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
  await t.throwsAsync(user(0, client_id2))
})
