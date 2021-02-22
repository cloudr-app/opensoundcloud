// generated with https://app.quicktype.io?share=9Fd3zZTCel75c1MlXFjU

export interface Track {
  artwork_url: null | string
  caption: null
  commentable: boolean
  comment_count: number
  created_at: Date
  description: null | string
  downloadable: boolean
  download_count: number
  duration: number
  full_duration: number
  embeddable_by: string
  genre: string
  has_downloads_left: boolean
  id: number
  kind: string
  label_name: null | string
  last_modified: Date
  license: string
  likes_count: number
  permalink: string
  permalink_url: string
  playback_count: number
  public: boolean
  publisher_metadata: PublisherMetadata | null
  purchase_title: null
  purchase_url: null | string
  release_date: Date | null
  reposts_count: number
  secret_token: null
  sharing: string
  state: string
  streamable: boolean
  tag_list: string
  title: string
  track_format: string
  uri: string
  urn: string
  user_id: number
  visuals: null
  waveform_url: string
  display_date: Date
  media: Media
  monetization_model: string
  policy: string
  user: User
}

export interface Media {
  transcodings: Transcoding[]
}

export interface Transcoding {
  url: string
  preset: string
  duration: number
  snipped: boolean
  format: Format
  quality: Quality
}

export interface Format {
  protocol: Protocol
  mime_type: MIMEType
}

export enum MIMEType {
  AudioMPEG = "audio/mpeg",
  AudioOggCodecsOpus = 'audio/ogg; codecs="opus"',
}

export enum Protocol {
  HLS = "hls",
  Progressive = "progressive",
}

export enum Quality {
  Sq = "sq",
}

export interface PublisherMetadata {
  id: number
  urn: string
  contains_music: boolean
  artist?: string
  publisher?: string
  upc_or_ean?: string
  isrc?: string
  writer_composer?: string
  album_title?: string
  explicit?: boolean
  p_line?: string
  p_line_for_display?: string
  c_line?: string
  c_line_for_display?: string
  release_title?: string
}

export interface User {
  avatar_url: string
  first_name: string
  followers_count: number
  full_name: string
  id: number
  kind: string
  last_modified: Date
  last_name: string
  permalink: string
  permalink_url: string
  uri: string
  urn: string
  username: string
  verified: boolean
  city: string
  country_code: null
  badges: Badges
  comments_count?: number
  created_at?: Date
  creator_subscriptions?: CreatorSubscription[]
  creator_subscription?: CreatorSubscription
  description?: string
  followings_count?: number
  groups_count?: number
  likes_count?: number
  playlist_likes_count?: number
  playlist_count?: number
  reposts_count?: null
  track_count?: number
  visuals?: Visuals
}

export interface Badges {
  pro: boolean
  pro_unlimited: boolean
  verified: boolean
}

export interface CreatorSubscription {
  product: Product
}

export interface Product {
  id: string
}

export interface Visuals {
  urn: string
  enabled: boolean
  visuals: Visual[]
  tracking: null
}

export interface Visual {
  urn: string
  entry_time: number
  visual_url: string
}
