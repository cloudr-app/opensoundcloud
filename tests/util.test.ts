import test from "ava"

import { at } from "../src/util"

const testArray = ["one", "two", "three"]

test("util function at works as expected", t => {
  t.is(at(testArray, 0), "one")
  t.is(at(testArray, 1), "two")
  t.is(at(testArray, 2), "three")

  t.is(at(testArray, -1), "three")
  t.is(at(testArray, -2), "two")
  t.is(at(testArray, -3), "one")
})
