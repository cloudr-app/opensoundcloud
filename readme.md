<div align="center">
  <p>
    <a target="_blank" href="https://github.com/cloudr-app/opensoundcloud">
      <img src="https://raw.githubusercontent.com/cloudr-app/opensoundcloud/master/assets/opensoundcloud.svg" />
    </a>
  </p>
</div>

<div align="center">
  <h3>A thin wrapper around SoundCloud's APIv1 and APIv2 for Node.js.</h3>
</div>

---

<p align="center">
  <a target="_blank" href="https://npmjs.org/package/opensoundcloud" alt="version">
    <img src="https://img.shields.io/npm/v/opensoundcloud.svg?style=for-the-badge">
  </a>
  <a target="_blank" href="https://codecov.io/gh/cloudr-app/opensoundcloud" alt="downloads">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/gh/cloudr-app/opensoundcloud?style=for-the-badge">
  </a>
  <a target="_blank" href="https://npmjs.org/package/opensoundcloud" alt="downloads">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/cloudr-app/opensoundcloud/CI?style=for-the-badge">
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://wakatime.com/badge/github/cloudr-app/opensoundcloud" alt="downloads">
    <img src="https://wakatime.com/badge/github/cloudr-app/opensoundcloud.svg">
  </a>
  <a target="_blank" href="https://app.netlify.com/sites/opensoundcloud/deploys">
    <img src="https://api.netlify.com/api/v1/badges/fe8daf45-1f1a-4d51-816a-802819bb53f5/deploy-status">
  </a>
</p>

<p align="center">
  <a href="https://opensoundcloud.cloudr.app">Documentation</a>
</p>

<br>

## Getting started

Install into your project:

```
npm i opensoundcloud
```

### Basic example

```ts
import { user } from "opensoundcloud"

const userData = await user("noisia")
```

<details>
  <summary>userData</summary>

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars-000451809714-n5njwk-large.jpg",
  "city": "",
  "comments_count": 28,
  "country_code": null,
  "created_at": "2009-05-11T16:14:44Z",
  "creator_subscriptions": [
    {
      "product": {
        "id": "creator-pro-unlimited"
      }
    }
  ],
  "creator_subscription": {
    "product": {
      "id": "creator-pro-unlimited"
    }
  },
  "description": "Noisia comprise Dutch producers Thijs, Nik and Martijn. Largely regarded as one of the most distinctive, powerful acts to emerge in bass music, their production techniques are referenced and praised across the entire electronic music scene. Their extensive body of work also includes the game Devil May Cry and the Foreign Beggars collaboration I Am Legion.",
  "followers_count": 3954180,
  "followings_count": 89,
  "first_name": "",
  "full_name": "",
  "groups_count": 0,
  "id": 116681,
  "kind": "user",
  "last_modified": "2021-01-13T12:34:24Z",
  "last_name": "",
  "likes_count": 53,
  "playlist_likes_count": 20,
  "permalink": "noisia",
  "permalink_url": "https://soundcloud.com/noisia",
  "playlist_count": 67,
  "reposts_count": null,
  "track_count": 488,
  "uri": "https://api.soundcloud.com/users/116681",
  "urn": "soundcloud:users:116681",
  "username": "NOISIA",
  "verified": true,
  "visuals": {
    "urn": "soundcloud:users:116681",
    "enabled": true,
    "visuals": [
      {
        "urn": "soundcloud:visuals:114449016",
        "entry_time": 0,
        "visual_url": "https://i1.sndcdn.com/visuals-000000116681-fL1pqB-original.jpg"
      }
    ],
    "tracking": null
  },
  "badges": {
    "pro": false,
    "pro_unlimited": true,
    "verified": true
  },
  "url": "/noisia"
}
```

</details>

### [Full API documentation and getting started guide on opensoundcloud.cloudr.app](https://opensoundcloud.cloudr.app)
