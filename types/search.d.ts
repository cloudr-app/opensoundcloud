// generated with https://app.quicktype.io (share link took too long to load)

export interface Search {
  collection: SearchResult[]
  total_results: number
  next_href?: string
  query_urn: string
}

export interface SearchResult {
  avatar_url?: string
  city?: null | string
  comments_count?: number
  country_code?: null | string
  created_at: Date
  creator_subscriptions?: CreatorSubscription[]
  creator_subscription?: CreatorSubscription
  description: null | string
  followers_count?: number
  followings_count?: number
  first_name?: string
  full_name?: string
  groups_count?: number
  id: number
  kind: Kind
  last_modified: Date
  last_name?: string
  likes_count: number
  playlist_likes_count?: number
  permalink: string
  permalink_url: string
  playlist_count?: number
  reposts_count: number | null
  track_count?: number
  uri: string
  urn?: string
  username?: string
  verified?: boolean
  visuals?: Visuals | null
  badges?: Badges
  artwork_url?: null | string
  caption?: null
  commentable?: boolean
  comment_count?: number
  downloadable?: boolean
  download_count?: number
  duration?: number
  full_duration?: number
  embeddable_by?: CollectionEmbeddableBy
  genre?: string
  has_downloads_left?: boolean
  label_name?: null | string
  license?: License
  playback_count?: number
  public?: boolean
  publisher_metadata?: PublisherMetadata | null
  purchase_title?: null | string
  purchase_url?: null | string
  release_date?: Date | null
  secret_token?: null
  sharing?: Sharing
  state?: State
  streamable?: boolean
  tag_list?: string
  title?: string
  track_format?: TrackFormat
  user_id?: number
  waveform_url?: string
  display_date?: Date
  media?: Media
  monetization_model?: MonetizationModel
  policy?: Policy
  user?: CollectionUser
  managed_by_feeds?: boolean
  set_type?: SetType
  is_album?: boolean
  published_at?: Date | null
  tracks?: Track[]
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
  id: ID
}

export enum ID {
  CreatorProUnlimited = "creator-pro-unlimited",
  Free = "free",
}

export enum CollectionEmbeddableBy {
  All = "all",
  None = "none",
}

export enum Kind {
  Playlist = "playlist",
  Track = "track",
  User = "user",
}

export enum License {
  AllRightsReserved = "all-rights-reserved",
  CcByNc = "cc-by-nc",
  CcByNcNd = "cc-by-nc-nd",
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
  SubHighTier = "SUB_HIGH_TIER",
}

export enum Policy {
  Allow = "ALLOW",
  Block = "BLOCK",
  Monetize = "MONETIZE",
  Snip = "SNIP",
}

export interface PublisherMetadata {
  id: number
  urn: string
  artist?: string
  album_title?: string
  explicit?: boolean
  p_line?: string
  p_line_for_display?: string
  release_title?: string
  contains_music?: boolean
  upc_or_ean?: string
  isrc?: string
  c_line?: string
  c_line_for_display?: string
  publisher?: string
  writer_composer?: string
  iswc?: string
}

export enum SetType {
  Album = "album",
  Empty = "",
  Ep = "ep",
  Single = "single",
}

export enum Sharing {
  Public = "public",
}

export enum State {
  Finished = "finished",
  Processing = "processing",
}

export enum TrackFormat {
  SingleTrack = "single-track",
}

export interface Track {
  artwork_url?: null | string
  caption?: null | string
  commentable?: boolean
  comment_count?: number | null
  created_at?: Date
  description?: null | string
  downloadable?: boolean
  download_count?: number | null
  duration?: number
  full_duration?: number
  embeddable_by?: TrackEmbeddableBy
  genre?: null | string
  has_downloads_left?: boolean
  id: number
  kind: Kind
  label_name?: null | string
  last_modified?: Date
  license?: License
  likes_count?: number | null
  permalink?: string
  permalink_url?: string
  playback_count?: number | null
  public?: boolean
  publisher_metadata?: PublisherMetadata | null
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
  visuals?: Visuals | null
  waveform_url?: string
  display_date?: Date
  media?: Media
  monetization_model: MonetizationModel
  policy: Policy
  user?: TrackUser
}

export enum TrackEmbeddableBy {
  All = "all",
  Me = "me",
}

export interface TrackUser {
  avatar_url: string
  first_name: string
  full_name: string
  id: number
  kind: Kind
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
  link?: string
}

export interface CollectionUser {
  avatar_url: string
  city: null | string
  comments_count: number
  country_code: null | string
  created_at: Date
  creator_subscriptions: CreatorSubscription[]
  creator_subscription: CreatorSubscription
  description: null | string
  followers_count: number
  followings_count: number
  first_name: string
  full_name: string
  groups_count: number
  id: number
  kind: Kind
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
  visuals: Visuals | null
  badges: Badges
}
