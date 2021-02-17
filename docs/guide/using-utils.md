# Utilities

## Ensure a minimum of returned items

SoundClouds API sometimes behaves unexpected and doesn't return as many items as you'd think.
For some users, SoundCloud's own webclient will make multiple track requests that don't
return any items. It'll follow the next_href a couple of times before it finally
returns tracks. I am not sure why this is, but my guess is that there are deleted or private
tracks that wont get included in the response.

To deal with this, you can use the [`ensureMin`](/api/util.html#ensuremin) utility function to ensure that you get a specified
minimum of items returned. It uses paginateNext and recursion to call the API until you have enough tracks.

<<< @/docs/snippets/ensureMin.ts


## Get a client_id for APIv2

Scrapes a client_id for APIv2 by going through the included scripts on soundcloud.com until it finds a client_id.

## Pagination

Opensoundcloud includes automatic pagination support.
This is done with the [paginateNext](https://git.io/Jt1GN) function,
which automatically adds a `.next()` function to the returned object
when a next_href is provided by SoundCloud.

This isn't exported since you shouldn't need to call this yourself.
It is used for every SoundCloud response that returns a collection of items.
