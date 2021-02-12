// generated with https://app.quicktype.io?share=hs82nzuA9jUPyaliNYv9

export interface UserLikesv2 {
  collection: Collection[]
  next_href: string
  query_urn: null
}

export interface Collection {
  created_at: Date
  kind: CollectionKind
  track: Track
}

export enum CollectionKind {
  Like = "like",
}

export interface Track {
  artwork_url: null | string
  caption: null | string
  commentable: boolean
  comment_count: number
  created_at: Date
  description: string
  downloadable: boolean
  download_count: number
  duration: number
  full_duration: number
  embeddable_by: EmbeddableBy
  genre: string
  has_downloads_left: boolean
  id: number
  kind: TrackKind
  label_name: null | string
  last_modified: Date
  license: License
  likes_count: number
  permalink: string
  permalink_url: string
  playback_count: number
  public: boolean
  publisher_metadata: PublisherMetadata | null
  purchase_title: null | string
  purchase_url: null | string
  release_date: Date | null
  reposts_count: number
  secret_token: null
  sharing: Sharing
  state: State
  streamable: boolean
  tag_list: string
  title: string
  track_format: TrackFormat
  uri: string
  urn: string
  user_id: number
  visuals: null
  waveform_url: string
  display_date: Date
  media: Media
  monetization_model: MonetizationModel
  policy: Policy
  user: User
}

export enum EmbeddableBy {
  All = "all",
}

export enum TrackKind {
  Track = "track",
}

export enum License {
  AllRightsReserved = "all-rights-reserved",
  CcByNcSa = "cc-by-nc-sa",
}

export interface Media {
  transcodings: Transcoding[]
}

export interface Transcoding {
  url: string
  preset: Preset
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

export enum Preset {
  Mp30_1 = "mp3_0_1",
  Opus0_0 = "opus_0_0",
}

export enum Quality {
  Sq = "sq",
}

export enum MonetizationModel {
  AdSupported = "AD_SUPPORTED",
  Blackbox = "BLACKBOX",
  NotApplicable = "NOT_APPLICABLE",
}

export enum Policy {
  Allow = "ALLOW",
  Monetize = "MONETIZE",
}

export interface PublisherMetadata {
  id: number
  urn: string
  artist?: string
  album_title?: string
  contains_music: boolean
  isrc?: string
  publisher?: string
  writer_composer?: string
  release_title?: string
  explicit?: boolean
  upc_or_ean?: string
  p_line?: string
  p_line_for_display?: string
}

export enum Sharing {
  Public = "public",
}

export enum State {
  Finished = "finished",
}

export enum TrackFormat {
  SingleTrack = "single-track",
}

export interface User {
  avatar_url: string
  first_name: string
  full_name: string
  id: number
  kind: UserKind
  last_modified: Date
  last_name: string
  permalink: string
  permalink_url: string
  uri: string
  urn: string
  username: string
  verified: boolean
  city: null | string
  country_code: null | string
  badges: Badges
}

export interface Badges {
  pro: boolean
  pro_unlimited: boolean
  verified: boolean
}

export enum UserKind {
  User = "user",
}

export interface Userv2 {
  avatar_url: string
  city: string
  comments_count: number
  country_code: null | string
  created_at: Date
  creator_subscriptions: CreatorSubscription[]
  creator_subscription: CreatorSubscription
  description: string
  followers_count: number
  followings_count: number
  first_name: string
  full_name: string
  groups_count: number
  id: number
  kind: UserKind
  last_modified: Date
  last_name: string
  likes_count: number
  playlist_likes_count: number
  permalink: string
  permalink_url: string
  playlist_count: number
  reposts_count: null
  track_count: number
  uri: string
  urn: string
  username: string
  verified: boolean
  visuals: Visuals
  badges: Badges
  url?: string
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
