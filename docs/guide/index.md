# Getting started

::: warning
Node.js version 12 or greater is required.
:::

Install into your project:

<code-group>
  <code-block title="NPM">
  ```
  npm i opensoundcloud
  ```
  </code-block>

  <code-block title="YARN">
  ```
  yarn add opensoundcloud
  ```
  </code-block>
</code-group>

## Usage info

Opensoundcloud only works in Node.js, because CORS is neither
enabled for the APIv2 nor for web-scraping.

Therefore, using opensoundcloud on the server
or in an environment where CORS is required.

## Basic example

```ts
import { user } from "opensoundcloud"

const userData = await user("noisia")
```

or

```ts
import osc from "opensoundcloud"

const userData = await osc.user(51999125)
```

both will return the users data, which looks something like this:

::: details userData

<<< @/docs/snippets/user.get.json

:::

Get more info in the [API section](/api)
