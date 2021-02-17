# Resolve

- **Arguments**:

  - url: `{string} URL`

- **Returns**: `Promise<ScrapeResolve>`

  ::: details example resolved user

  <<< @/docs/snippets/resolve.user.json

  :::

  ::: details example resolved track

  <<< @/docs/snippets/resolve.track.json

  :::

  ::: details example resolved playlist

  <<< @/docs/snippets/resolve.playlist.json

  :::

- **Usage**:
  Resolve a track, user or playlist using web scraping.

  You can determine the type of the returned Object by inspecting its `kind` property.
  It'll either be `"user"`, `"track"` or `"playlist"`

- **Example**:

  ```ts
  import { resolve } from "opensoundcloud"

  const resolvedUser = await resolve("noisia")
  console.log(resolvedUser.kind) //> "user"

  const resolvedTrack = await resolve("noisia/deep-down")
  console.log(resolvedTrack.kind) //> "track"

  const resolvedPlaylist = await resolve("noisia/sets/noisia-radio")
  console.log(resolvedPlaylist.kind) //> "playlist"
  ```

## browser

- **Arguments**:
  - url: `{string} URL`
  - client_id: `{string} client_id for APIv1`

- **Returns**: `Promise<APIv1Resolve>`

  ::: details example resolved user

  <<< @/docs/snippets/resolve.browser.user.json

  :::

  ::: details example resolved track

  <<< @/docs/snippets/resolve.browser.track.json

  :::

  ::: details example resolved playlist

  <<< @/docs/snippets/resolve.browser.playlist.json

  :::

- **Usage**:
  Resolve a track, user or playlist using the public APIv1. Works in browsers.

  You can determine the type of the returned Object by inspecting its `kind` property.
  It'll either be `"user"`, `"track"` or `"playlist"`

- **Example**:

  ```ts
  import { resolve } from "opensoundcloud"

  const client_id = "aaabbbcccdddeeefff00011122233344" // your v1 client_id

  const resolvedUser = await resolve.browser("noisia", client_id)
  console.log(resolvedUser.kind) //> "user"

  const resolvedTrack = await resolve.browser("noisia/deep-down", client_id)
  console.log(resolvedTrack.kind) //> "track"

  const resolvedPlaylist = await resolve.browser("noisia/sets/noisia-radio", client_id)
  console.log(resolvedPlaylist.kind) //> "playlist"
  ```