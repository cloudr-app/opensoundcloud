import test from "ava"
import { user, util } from "../src"

import { at, getClientIDv2, paginateNext } from "../src/util"

const testArray = ["one", "two", "three"]
const exampleUserID = Number(process.env.EXAMPLE_USER_ID) || 0

test("util function at works as expected", t => {
  t.is(at(testArray, 0), "one")
  t.is(at(testArray, 1), "two")
  t.is(at(testArray, 2), "three")

  t.is(at(testArray, -1), "three")
  t.is(at(testArray, -2), "two")
  t.is(at(testArray, -3), "one")
})

test("get client_id for APIv2", async t => {
  const id = await getClientIDv2()
  t.regex(id, /\w{32}/)
})

test("pagination works as expected", async t => {
  const data0 = await user.likes(exampleUserID, { limit: 2 })
  const data1 = await data0.next?.()

  t.assert(data0.collection.length === 2)
  t.truthy(data1)
  t.assert(data1?.collection.length === 2)
  t.notDeepEqual(data0.collection[0], data1?.collection[0])
  t.assert(data0.collection[0].track.id !== data1?.collection[0].track.id)
})

test("pagination without explicit params", t => {
  const paginated = paginateNext("")
  t.assert(typeof paginated === "function")
})

test("ensureMin always returns the correct amount of tracks", async t => {
  // space-laces seems to especially problematic, often requiring about 5
  // requests until something is actually returned
  const limit = 10
  const out = await util.ensureMin(await user.tracks("space-laces", { limit }), limit)
  t.assert(out.collection.length >= limit)
})
