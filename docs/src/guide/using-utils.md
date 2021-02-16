# Using utils

## `paginateNext`

Opensoundcloud includes automatic pagination support.
This is done with the [paginateNext](https://git.io/Jt1GN) function,
which automatically adds a `.next()` function to the returned object
when a next_href is provided by SoundCloud.

This isn't exported since you shouldn't need to call this yourself.
It is used for every SoundCloud response that returns a collection of items.

## `ensureMin`

SoundClouds API sometimes behaves unexpected and doesn't return as many items as you'd expect.
For some users, SoundClouds own webclient will make multiple track requests that don't
return any items. It'll follow the next_href a couple of times before it finally
returns tracks. I am not sure why this is, but my guess is that there are deleted- or private
tracks that wont get included in the response.

To deal with this, you can use the `ensureMin` utility function to ensure that you get a specified
minimum of items returned. It uses paginateNext and recursion to call the API until you have enough tracks.

```ts
// the amount of tracks you need
const limit = 10

// this example user has no tracks in the first request.
const firstRequest = await user.tracks("space-laces", { limit })

// there will be 10 or more tracks in `out.collection`
const out = await util.ensureMin(firstRequest, limit)
```
