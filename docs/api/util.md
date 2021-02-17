# Util

## getClientIDv2

- **Arguments**: none

- **Returns**: `Promise<string>`

- **Usage**:
  Resolve a client_id for APIv2 using web scraping.

  Returns a Promise that fulfills into a string or throws an Error if no client_id could be found.

- **Example**:

  ```ts
  import { util } from "opensoundcloud"

  const client_id = await util.getClientIDv2()
  console.log(client_id) //> "aaabbbcccdddeeefff00011122233344"
  ```

## ensureMin

- **Arguments**:

  - paginated: `{Object} PaginatedResponse`
  - min: `{number}`

- **Returns**: `Promise<PaginatedResponse>`

- **Usage**:
  Provide a PaginatedResponse and minimum amount of items you want.

- **Example**:

  <<< @/docs/snippets/ensureMin.ts

- See also: [Ensure a minimum of returned items](/guide/using-utils.html#ensure-a-minimum-of-returned-items)
