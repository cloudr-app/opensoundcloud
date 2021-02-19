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

  - identifier: `{string | number} URL, URL path or ID`
  - options?: `{Object}`
    - limit?: `{number} Limit the amount of tracks returned. Defaults to 50.`
    - client_id?: `{string} client_id for APIv2`

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

  - identifier: `{string | number} URL, URL path or ID`
  - options?: `{Object}`
    - limit?: `{number} Limit the amount of likes returned. Defaults to 50.`
    - client_id?: `{string} client_id for APIv2`

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

## search

- **Arguments**:

  - query: `{string}`
  - options?: `{Object}`
    - limit?: `{number} Limit the amount of items returned. Defaults to 20.`
    - client_id?: `{string} client_id for APIv2`

- **Returns**: `Promise<PaginatedResponse<SearchResult[]>>`
  ::: details example search response Object

  <<< @/docs/snippets/search.json

  :::

- **Usage**:
  Search tracks, users and playlists.

  It's recommended to supply a `client_id` (for APIv2) to save on one request which would resolve one for you.

  Use [`util.getClientIDv2`](/api/util.html#getclientidv2) to get a `client_id` for APIv2.

- **Example**:

  ```ts
  import { search } from "opensoundcloud"

  const searchResult = await search("noisia")

  console.log(searchResult.collection) //> SearchResult[]
  ```

---

### tracks

- **Arguments**: [Same as regular search](#search)
- **Returns**: [Same as regular search](#search) but only containing items with `kind: tracks`
- **Usage**: [Same as regular search](#search)

- **Example**:

  ```ts
  import { search } from "opensoundcloud"

  const searchResult = await search.tracks("noisia")

  console.log(searchResult.collection) //> SearchResult[]
  ```

---

### playlists

- **Arguments**: [Same as regular search](#search)
- **Returns**: [Same as regular search](#search) but only containing items with `kind: playlists`
- **Usage**: [Same as regular search](#search)

- **Example**:

  ```ts
  import { search } from "opensoundcloud"

  const searchResult = await search.playlists("noisia")

  console.log(searchResult.collection) //> SearchResult[]
  ```

---

### users

- **Arguments**: [Same as regular search](#search)
- **Returns**: [Same as regular search](#search) but only containing items with `kind: users`
- **Usage**: [Same as regular search](#search)

- **Example**:

  ```ts
  import { search } from "opensoundcloud"

  const searchResult = await search.users("noisia")

  console.log(searchResult.collection) //> SearchResult[]
  ```

---

### albums

- **Arguments**: [Same as regular search](#search)
- **Returns**: [Same as regular search](#search) but only containing items with `kind: albums`
- **Usage**: [Same as regular search](#search)

- **Example**:

  ```ts
  import { search } from "opensoundcloud"

  const searchResult = await search.albums("noisia")

  console.log(searchResult.collection) //> SearchResult[]
  ```
