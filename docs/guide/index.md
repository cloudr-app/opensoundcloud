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

Opensoundcloud works in both Node.js and the browser,
but since CORS is not enabled for the APIv2 nor for web-scraping,
you can only use methods that end in `.browser` in the browser.

Therefore, using opensoundcloud on the server
or in an environment where CORS is not required is recommended.

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

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars-000467483484-sxhijk-large.jpg",
  "city": "",
  "comments_count": 95,
  "country_code": null,
  "created_at": "2013-07-23T12:21:57Z",
  "creator_subscriptions": [
    {
      "product": {
        "id": "free"
      }
    }
  ],
  "creator_subscription": {
    "product": {
      "id": "free"
    }
  },
  "description": "i like wubs",
  "followers_count": 50,
  "followings_count": 167,
  "first_name": "",
  "full_name": "",
  "groups_count": 0,
  "id": 51999125,
  "kind": "user",
  "last_modified": "2019-01-29T21:22:49Z",
  "last_name": "",
  "likes_count": 581,
  "playlist_likes_count": 2,
  "permalink": "vaaski",
  "permalink_url": "https://soundcloud.com/vaaski",
  "playlist_count": 8,
  "reposts_count": null,
  "track_count": 1,
  "uri": "https://api.soundcloud.com/users/51999125",
  "urn": "soundcloud:users:51999125",
  "username": "vaaski",
  "verified": false,
  "visuals": {
    "urn": "soundcloud:users:51999125",
    "enabled": true,
    "visuals": [
      {
        "urn": "soundcloud:visuals:50729877",
        "entry_time": 0,
        "visual_url": "https://i1.sndcdn.com/visuals-000051999125-yLyaqm-original.jpg"
      }
    ],
    "tracking": null
  },
  "badges": {
    "pro": false,
    "pro_unlimited": false,
    "verified": false
  },
  "url": "/vaaski"
}
```

:::

Get more info in the [API section](/api)