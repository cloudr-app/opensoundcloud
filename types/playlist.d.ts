// generated with https://app.quicktype.io?share=UbYYuHKgg7Y1IQHehR6A

export interface Playlistv2 {
  artwork_url: null
  created_at: Date
  description: null
  duration: number
  embeddable_by: EmbeddableBy
  genre: string
  id: number
  kind: string
  label_name: null
  last_modified: Date
  license: License
  likes_count: number
  managed_by_feeds: boolean
  permalink: string
  permalink_url: string
  public: boolean
  purchase_title: null
  purchase_url: null
  release_date: null
  reposts_count: number
  secret_token: null
  sharing: Sharing
  tag_list: string
  title: string
  uri: string
  user_id: number
  set_type: string
  is_album: boolean
  published_at: Date
  display_date: Date
  user: Playlistv2User
  tracks: Track[]
  track_count: number
  url?: string
}

export enum EmbeddableBy {
  All = "all",
}

export enum License {
  AllRightsReserved = "all-rights-reserved",
  CcByNcSa = "cc-by-nc-sa",
}

export enum Sharing {
  Public = "public",
}

export interface Track {
  artwork_url?: string
  caption?: null
  commentable?: boolean
  comment_count?: number
  created_at?: Date
  description?: string
  downloadable?: boolean
  download_count?: number
  duration?: number
  full_duration?: number
  embeddable_by?: EmbeddableBy
  genre?: string
  has_downloads_left?: boolean
  id: number
  kind: TrackKind
  label_name?: null | string
  last_modified?: Date
  license?: License
  likes_count?: number
  permalink?: string
  permalink_url?: string
  playback_count?: number
  public?: boolean
  publisher_metadata?: PublisherMetadata
  purchase_title?: null | string
  purchase_url?: null | string
  release_date?: Date | null
  reposts_count?: number
  secret_token?: null
  sharing?: Sharing
  state?: State
  streamable?: boolean
  tag_list?: string
  title?: string
  track_format?: TrackFormat
  uri?: string
  urn?: string
  user_id?: number
  visuals?: null
  waveform_url?: string
  display_date?: Date
  media?: Media
  monetization_model: MonetizationModel
  policy: Policy
  user?: TrackUser
}

export enum TrackKind {
  Track = "track",
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
  Mp30_0 = "mp3_0_0",
  Mp30_1 = "mp3_0_1",
  Mp3Standard = "mp3_standard",
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
  contains_music?: boolean
  publisher?: string
  isrc?: string
  explicit?: boolean
  writer_composer?: string
  release_title?: string
  p_line?: string
  p_line_for_display?: string
  iswc?: string
  upc_or_ean?: string
}

export enum State {
  Finished = "finished",
}

export enum TrackFormat {
  SingleTrack = "single-track",
}

export interface TrackUser {
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
  city: string
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

export interface Playlistv2User {
  avatar_url: string
  city: null | string
  comments_count?: number
  country_code: null
  created_at?: Date
  creator_subscriptions?: CreatorSubscription[]
  creator_subscription?: CreatorSubscription
  description?: null | string
  followers_count?: number
  followings_count?: number
  first_name: string
  full_name: string
  groups_count?: number
  id: number
  kind: UserKind
  last_modified: Date
  last_name: string
  likes_count?: number
  playlist_likes_count?: number
  permalink: string
  permalink_url: string
  playlist_count?: number
  reposts_count?: null
  track_count?: number
  uri: string
  urn: string
  username: string
  verified: boolean
  visuals?: Visuals | null
  badges: Badges
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
