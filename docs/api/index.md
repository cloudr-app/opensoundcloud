# Entities

## user

- **Arguments**:

  - identifier: `{string | number} URL, URL path or ID`
  - client_id?: `{string} [client_id for APIv2]`

- **Returns**: `Promise<Userv2>`
  ::: details example user Object

  <<< @/docs/snippets/user.get.json

  :::

- **Usage**:
  Request info about a user by either a username, full SoundCloud URL or user ID.
  If you use a string as identifier it resolves the data via scraping.

  If you use a number (user ID) it calls the APIv2 directly. In that case it's recommended
  to supply a `client_id` for APIv2 to save on one request which would resolve one for you.

  Use [`util.getClientIDv2`](/api/util.html#getclientidv2) to get a `client_id` for APIv2.

- **Example**:

  ```ts
  import { user } from "opensoundcloud"

  const userData = await user("noisia")

  console.log(userData.id) //> 116681
  ```

---

### tracks

- **Arguments**:

  - `{string | number} URL, URL path or ID`
  - `{Object} [options]`
    - `{number} [limit] Limit the amount of tracks returned. Defaults to 50.`
    - `{string} [client_id] client_id for APIv2`

- **Returns**: `Promise<PaginatedResponse<TrackElement[]>>`
  ::: details example tracks Object

  <<< @/docs/snippets/user.tracks.json

  :::

- **Usage**:
  Request a specific users tracks by either a username, full SoundCloud URL or user ID.
  If you use a string as identifier it resolves the user ID via scraping first, so use the ID when possible.

  It's recommended to supply a `client_id` (for APIv2) to save on one request which would resolve one for you.

  Use [`util.getClientIDv2`](/api/util.html#getclientidv2) to get a `client_id` for APIv2.

- **Example**:

  ```ts
  import { user } from "opensoundcloud"

  const userTracks = await user.tracks("noisia")

  console.log(userTracks.collection) //> PaginatedResponse<TrackElement[]>
  ```

---

### likes

- **Arguments**:

  - `{string | number} URL, URL path or ID`
  - `{Object} [options]`
    - `{number} [limit] Limit the amount of likes returned. Defaults to 50.`
    - `{string} [client_id] client_id for APIv2`

- **Returns**: `Promise<PaginatedResponse<UserLikesv2Element[]>>`
  ::: details example likes Object

  <<< @/docs/snippets/user.likes.json

  :::

- **Usage**:
  Request a specific users likes by either a username, full SoundCloud URL or user ID.
  If you use a string as identifier it resolves the user ID via scraping first, so use the ID when possible.

  It's recommended to supply a `client_id` (for APIv2) to save on one request which would resolve one for you.

  Use [`util.getClientIDv2`](/api/util.html#getclientidv2) to get a `client_id` for APIv2.

- **Example**:

  ```ts
  import { user } from "opensoundcloud"

  const userLikes = await user.likes("noisia")

  console.log(userLikes.collection) //> PaginatedResponse<UserLikesv2Element[]>
  ```

## playlist

- **Arguments**:

  - identifier: `{string | number} URL, URL path or ID`
  - client_id?: `{string} [client_id] client_id for APIv2`

- **Returns**: `Promise<Playlistv2>`
  ::: details example playlist Object

  <<< @/docs/snippets/playlist.get.json

  :::

- **Usage**:
  Request info about a playlist by either SoundCloud URL or ID.
  If you use a string as identifier it resolves the data via scraping.

  If you use a number (user ID) it calls the APIv2 directly. In that case it's recommended
  to supply a `client_id` for APIv2 to save on one request which would resolve one for you.

  Use [`util.getClientIDv2`](/api/util.html#getclientidv2) to get a `client_id` for APIv2.

- **Example**:

  ```ts
  import { user } from "opensoundcloud"

  const playlist = await playlist(620756469)

  console.log(playlist.id) //> 620756469
  console.log(playlist.tracks) //> Array<Track>
  ```
