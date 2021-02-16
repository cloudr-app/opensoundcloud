# Entities

## user

### get

- **Arguments**:

  - identifier: `{string | number} URL, URL path or ID`
  - client_id: `{string} [client_id for APIv2]`

- **Returns**: `Promise<Userv2>`
  ::: details example Userv2 Object

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
    "followers_count": 3954185,
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

  :::

- **Usage**:
  Request info about a user by either a username, full SoundCloud URL or user ID.
  If you use a string as identifier it resolves the data via scraping.

  If you use a number (user ID) it calls the APIv2 directly. In that case it's recommended
  to supply a `client_id` for APIv2 to save on one request which would resolve one for you.

  Use `util.getClientIDv2` to get a `client_id` for APIv2.

- **Example**:

  ```ts
  import { user } from "opensoundcloud"

  const userData = await user("noisia")

  console.log(userData.id) //> 116681
  ```

---

### likes

- **Arguments**:

  - `{string | number} URL, URL path or ID`
  - `{Object} [options]`
    - `{number} limit`
    - `{string} client_id for APIv2`

- **Returns**: `Promise<PaginatedResponse<UserLikesv2Element[]>>`
  ::: details example UserLikesv2 Object

  ```json
  {
    "collection": [
      {
        "created_at": "2019-02-07T18:40:02Z",
        "kind": "like",
        "track": {
          "artwork_url": "https://i1.sndcdn.com/artworks-000484833429-0bon3i-large.jpg",
          "caption": null,
          "commentable": true,
          "comment_count": 31,
          "created_at": "2019-02-07T18:36:07Z",
          "description": "A preview of the music I want to make for our kickstarter project. Please support, we're almost there but we need to go the last mile!! \n\nThe idea of the kickstarter in a few words:\n\nWe (Setareh Nafisi, @NicholasRobertThayer, and I) want to write three 15 minute compositions for string quartet and electronics, make a short movie / long music video for each piece, and then take it to the stage: an audiovisual concert mixing images from the films with light and stage design and of course live string players and electronics. \n\nThe kickstarter ends on sunday February 10th, at 17:20 CET / 10:20 EST. \n\nFind out about all the rewards we've thought of, previews from the filmmakers, thoughts and research concepts behind it, interviews with NestHQ and UKF and much more on our kickstarter page: https://www.kickstarter.com/projects/threereflections/three-reflections-for-string-quartet-and-electroni\nFor iDeal payments go to: http://tinyurl.com/idealthreereflections\n\nThanks everybody for your support so far, we're not far off! Please share this with everybody that you think might like this project!",
          "downloadable": false,
          "download_count": 0,
          "duration": 164090,
          "full_duration": 164090,
          "embeddable_by": "all",
          "genre": "Klassiek",
          "has_downloads_left": true,
          "id": 571702953,
          "kind": "track",
          "label_name": null,
          "last_modified": "2020-07-26T01:11:09Z",
          "license": "all-rights-reserved",
          "likes_count": 627,
          "permalink": "reflection-for-string-quartet-and-electronics",
          "permalink_url": "https://soundcloud.com/iamthys/reflection-for-string-quartet-and-electronics",
          "playback_count": 27690,
          "public": true,
          "publisher_metadata": {
            "id": 571702953,
            "urn": "soundcloud:tracks:571702953",
            "contains_music": true
          },
          "purchase_title": null,
          "purchase_url": null,
          "release_date": null,
          "reposts_count": 69,
          "secret_token": null,
          "sharing": "public",
          "state": "finished",
          "streamable": true,
          "tag_list": "stringquartet electronics Soundtrack Preview",
          "title": "Reflection for String Quartet and Electronics (sketch)",
          "track_format": "single-track",
          "uri": "https://api.soundcloud.com/tracks/571702953",
          "urn": "soundcloud:tracks:571702953",
          "user_id": 15015,
          "visuals": null,
          "waveform_url": "https://wave.sndcdn.com/PAlBaoz3iSVW_m.json",
          "display_date": "2019-02-07T18:36:07Z",
          "media": {
            "transcodings": [
              {
                "url": "https://api-v2.soundcloud.com/media/soundcloud:tracks:571702953/0f59c311-6583-476a-b22e-794f162801a8/stream/hls",
                "preset": "mp3_0_0",
                "duration": 164090,
                "snipped": false,
                "format": {
                  "protocol": "hls",
                  "mime_type": "audio/mpeg"
                },
                "quality": "sq"
              },
              {
                "url": "https://api-v2.soundcloud.com/media/soundcloud:tracks:571702953/0f59c311-6583-476a-b22e-794f162801a8/stream/progressive",
                "preset": "mp3_0_0",
                "duration": 164090,
                "snipped": false,
                "format": {
                  "protocol": "progressive",
                  "mime_type": "audio/mpeg"
                },
                "quality": "sq"
              },
              {
                "url": "https://api-v2.soundcloud.com/media/soundcloud:tracks:571702953/58407c64-3f3a-4ef5-9e89-04200a137be4/stream/hls",
                "preset": "opus_0_0",
                "duration": 164007,
                "snipped": false,
                "format": {
                  "protocol": "hls",
                  "mime_type": "audio/ogg; codecs=\"opus\""
                },
                "quality": "sq"
              }
            ]
          },
          "monetization_model": "BLACKBOX",
          "policy": "MONETIZE",
          "user": {
            "avatar_url": "https://i1.sndcdn.com/avatars-ZbOPixzfQ2hRwkwi-NFoVqA-large.jpg",
            "first_name": "",
            "full_name": "",
            "id": 15015,
            "kind": "user",
            "last_modified": "2021-02-05T17:38:01Z",
            "last_name": "",
            "permalink": "iamthys",
            "permalink_url": "https://soundcloud.com/iamthys",
            "uri": "https://api.soundcloud.com/users/15015",
            "urn": "soundcloud:users:15015",
            "username": "Thys",
            "verified": true,
            "city": "",
            "country_code": null,
            "badges": {
              "pro": true,
              "pro_unlimited": false,
              "verified": true
            }
          }
        }
      },
      {
        "created_at": "2018-12-12T16:09:59Z",
        "kind": "like",
        "track": {
          "artwork_url": "https://i1.sndcdn.com/artworks-000457356018-mbdnra-large.jpg",
          "caption": null,
          "commentable": true,
          "comment_count": 125,
          "created_at": "2018-12-12T16:01:08Z",
          "description": "Noisia Radio this week: we premiere ‘Ground - Swindle’ taken from Outlines 3, out Dec 21st, and a track from Thys's score for ‘Sleeping Beauty Dreams’. More new music by: Kije, Signal, Insideinfo, M.Justa, Thing, Jubei, and we’re playing you two Ed Rush & Optical classics, taken from the Wormhole album. Enjoy!\n\nSubscribe to Noisia Radio: https://fanlink.to/NoisiaRadio\nListen to the Noisia Radio playlist on Spotify: http://spoti.fi/29v73JS\nGet the ‘Hello Person’ T-shirt: http://bit.ly/NoisiaRadioMerch\n\nFollow Noisia:\nInstagram https://instagram.com/noisia_official\nSoundcloud: https://soundcloud.com/noisia\nSpotify http://bit.ly/NoisiaSpotify\nYoutube https://youtube.com/user/NoisiaTV\n\nGROUND - Swindle [INVISIBLE]\nHalogenix - Vex [CRITICAL MUSIC]\nKije - Morze [DIVISION]\nInsideInfo - Lost It [INSIDEINFO MUSIC]\nMefjus - Together (Signal Remix) [VISION]\nHerzeloyde Ft. Hapa & Tsuruda - Inverted Bumps [BANDCAMP]\nExept & Sinic - Kernal Panic [METHLAB]\nBlack Barrel - Singularity [DISPATCH]\nM.Justa - Reason [PLASMA]\nEd Rush & Optical - Fixation [VIRUS]\nHadley - Feeling [THIRTYONE]\nThing - Spice It Up [THIRTYONE]\nDutta - Burger Ting [CRE8DNB]\nMonuman - Sasquatch [INSPECTED]\nSubMarine - Xertz [1985]\nTiedye Ky - Dune Diver [SATURATE]\nJubei & Tyrone - The Saboteur [METALHEADZ]\nSINNF - Contagion [FOREST BIZ]\nMateba - CTS [SOFA SOUND]\nEd Rush & Optical - Compound [VIRUS]\nThys - Overcome [SLEEPING BEAUTY DREAMS]",
          "downloadable": true,
          "download_count": 626,
          "duration": 3600480,
          "full_duration": 3600480,
          "embeddable_by": "all",
          "genre": "Noisia Radio",
          "has_downloads_left": true,
          "id": 543928965,
          "kind": "track",
          "label_name": null,
          "last_modified": "2021-01-30T09:45:42Z",
          "license": "all-rights-reserved",
          "likes_count": 1305,
          "permalink": "noisia-radio-s04e50",
          "permalink_url": "https://soundcloud.com/noisiaradio/noisia-radio-s04e50",
          "playback_count": 43569,
          "public": true,
          "publisher_metadata": {
            "id": 543928965,
            "urn": "soundcloud:tracks:543928965",
            "artist": "Noisia",
            "album_title": "Noisia Radio",
            "contains_music": true
          },
          "purchase_title": "Subscribe",
          "purchase_url": "https://fanlink.to/NoisiaRadio",
          "release_date": "2018-12-12T00:00:00Z",
          "reposts_count": 156,
          "secret_token": null,
          "sharing": "public",
          "state": "finished",
          "streamable": true,
          "tag_list": "",
          "title": "Noisia Radio S04E50",
          "track_format": "single-track",
          "uri": "https://api.soundcloud.com/tracks/543928965",
          "urn": "soundcloud:tracks:543928965",
          "user_id": 200416485,
          "visuals": null,
          "waveform_url": "https://wave.sndcdn.com/QDwisHECf0Vb_m.json",
          "display_date": "2018-12-12T16:01:08Z",
          "media": {
            "transcodings": [
              {
                "url": "https://api-v2.soundcloud.com/media/soundcloud:tracks:543928965/242b1009-c24f-4c7e-99b8-3c7540dcfa21/stream/hls",
                "preset": "mp3_0_0",
                "duration": 3600480,
                "snipped": false,
                "format": {
                  "protocol": "hls",
                  "mime_type": "audio/mpeg"
                },
                "quality": "sq"
              },
              {
                "url": "https://api-v2.soundcloud.com/media/soundcloud:tracks:543928965/242b1009-c24f-4c7e-99b8-3c7540dcfa21/stream/progressive",
                "preset": "mp3_0_0",
                "duration": 3600480,
                "snipped": false,
                "format": {
                  "protocol": "progressive",
                  "mime_type": "audio/mpeg"
                },
                "quality": "sq"
              },
              {
                "url": "https://api-v2.soundcloud.com/media/soundcloud:tracks:543928965/9702a50b-c356-4c9d-8fce-73845337d726/stream/hls",
                "preset": "opus_0_0",
                "duration": 3600480,
                "snipped": false,
                "format": {
                  "protocol": "hls",
                  "mime_type": "audio/ogg; codecs=\"opus\""
                },
                "quality": "sq"
              }
            ]
          },
          "monetization_model": "NOT_APPLICABLE",
          "policy": "ALLOW",
          "user": {
            "avatar_url": "https://i1.sndcdn.com/avatars-000753124870-unlngz-large.jpg",
            "first_name": "Noisia ",
            "full_name": "Noisia  Radio",
            "id": 200416485,
            "kind": "user",
            "last_modified": "2021-01-08T18:18:24Z",
            "last_name": "Radio",
            "permalink": "noisiaradio",
            "permalink_url": "https://soundcloud.com/noisiaradio",
            "uri": "https://api.soundcloud.com/users/200416485",
            "urn": "soundcloud:users:200416485",
            "username": "Noisia Radio",
            "verified": true,
            "city": null,
            "country_code": null,
            "badges": {
              "pro": false,
              "pro_unlimited": true,
              "verified": true
            }
          }
        }
      }
    ],
    "next_href": "https://api-v2.soundcloud.com/users/116681/likes?offset=1544630999191258&limit=2",
    "query_urn": null
  }
  ```

  :::

- **Usage**:
  Request a specific users likes by either a username, full SoundCloud URL or user ID.
  If you use a string as identifier it resolves the user ID via scraping first.

  It's recommended to supply a `client_id` (for APIv2) to save on one request which would resolve one for you.

  Use `util.getClientIDv2` to get a `client_id` for APIv2.

- **Example**:

  ```ts
  import { user } from "opensoundcloud"

  const userLikes = await user.likes("noisia")

  console.log(userLikes.collection) //> Array<UserLikesv2Element>
  ```
