// generated with https://app.quicktype.io?share=31kt7pkt3K2AZvf7WbvW

export type ResolvedKind = "playlist" | "user" | "track"

export interface ScrapeResolve {
  artwork_url?: null
  created_at: Date
  description: null | string
  duration?: number
  embeddable_by?: EmbeddableBy
  genre?: string
  id: number
  kind: ResolvedKind
  label_name?: null
  last_modified: Date
  license?: License
  likes_count: number
  managed_by_feeds?: boolean
  permalink: string
  permalink_url: string
  public?: boolean
  purchase_title?: null
  purchase_url?: null
  release_date?: null
  reposts_count: number | null
  secret_token?: null
  sharing?: Sharing
  tag_list?: string
  title?: string
  uri: string
  user_id?: number
  set_type?: string
  is_album?: boolean
  published_at?: Date
  display_date?: Date
  user?: ScrapeResolveUser
  tracks?: ScrapeResolveTrack[]
  track_count?: number
  url?: string
  avatar_url?: string
  city?: string
  comments_count?: number
  country_code?: null
  creator_subscriptions?: CreatorSubscription[]
  creator_subscription?: CreatorSubscription
  followers_count?: number
  followings_count?: number
  first_name?: string
  full_name?: string
  groups_count?: number
  last_name?: string
  playlist_likes_count?: number
  playlist_count?: number
  urn?: string
  username?: string
  verified?: boolean
  visuals?: Visuals | null
  badges?: Badges
  caption?: null
  commentable?: boolean
  comment_count?: number
  downloadable?: boolean
  download_count?: number
  full_duration?: number
  has_downloads_left?: boolean
  playback_count?: number
  publisher_metadata?: ScrapeResolvePublisherMetadata
  state?: State
  streamable?: boolean
  track_format?: string
  waveform_url?: string
  media?: Media
  monetization_model?: MonetizationModel
  policy?: Policy
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

export enum EmbeddableBy {
  All = "all",
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
  NotApplicable = "NOT_APPLICABLE",
}

export enum Policy {
  Allow = "ALLOW",
  Monetize = "MONETIZE",
}

export interface ScrapeResolvePublisherMetadata {
  id: number
  urn: string
  contains_music: boolean
}

export enum Sharing {
  Public = "public",
}

export enum State {
  Finished = "finished",
}

export interface ScrapeResolveTrack {
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
  label_name?: null
  last_modified?: Date
  license?: License
  likes_count?: number
  permalink?: string
  permalink_url?: string
  playback_count?: number
  public?: boolean
  publisher_metadata?: TrackPublisherMetadata
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
  track_format?: string
  uri?: string
  urn?: string
  user_id?: number
  visuals?: null
  waveform_url?: string
  display_date?: Date
  media?: Media
  monetization_model: MonetizationModel
  policy: Policy
  user?: PurpleUser
}

export enum TrackKind {
  Track = "track",
}

export interface TrackPublisherMetadata {
  id: number
  urn: string
  contains_music?: boolean
  artist?: string
  album_title?: string
  publisher?: string
  iswc?: string
  upc_or_ean?: string
  isrc?: string
  p_line?: string
  p_line_for_display?: string
  writer_composer?: string
  release_title?: string
}

export interface PurpleUser {
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

export enum UserKind {
  User = "user",
}

export interface ScrapeResolveUser {
  avatar_url: string
  city: string
  comments_count: number
  country_code: null
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

export interface APIv1Resolve {
  duration?: number
  release_day?: null
  permalink_url: string
  genre?: string
  permalink: string
  purchase_url?: null
  release_month?: null
  description: null | string
  tags?: string
  uri: string
  label_name?: null
  label?: null
  tag_list?: string
  release_year?: null
  track_count?: number
  user_id?: number
  last_modified: string
  license?: License
  tracks?: APIv1ResolveTrack[]
  playlist_type?: string
  id: number
  tracks_uri?: string
  downloadable?: boolean | null
  sharing?: Sharing
  created_at?: string
  release?: null
  likes_count?: number
  kind: ResolvedKind
  title?: string
  type?: string
  purchase_title?: null
  artwork_url?: null
  ean?: null
  streamable?: boolean
  user?: APIv1ResolveUser
  embeddable_by?: EmbeddableBy
  label_id?: null
  username?: string
  avatar_url?: string
  country?: null
  first_name?: string
  last_name?: string
  full_name?: string
  city?: string
  discogs_name?: null
  myspace_name?: null
  website?: null
  website_title?: null
  playlist_count?: number
  online?: boolean
  plan?: string
  public_favorites_count?: number
  followers_count?: number
  followings_count?: number
  subscriptions?: any[]
  reposts_count?: number
  commentable?: boolean
  comment_count?: number
  state?: State
  original_content_size?: number
  track_type?: null
  key_signature?: null
  isrc?: null
  video_url?: null
  bpm?: null
  original_format?: OriginalFormat
  user_uri?: string
  stream_url?: string
  download_url?: string
  waveform_url?: string
  domain_lockings?: null
  available_country_codes?: null
  secret_token?: null
  secret_uri?: null
  user_favorite?: null
  user_playback_count?: null
  playback_count?: number
  download_count?: number
  favoritings_count?: number
  downloads_remaining?: null
}

export enum OriginalFormat {
  FLAC = "flac",
  Mp3 = "mp3",
  Wav = "wav",
}

export interface APIv1ResolveTrack {
  kind: TrackKind
  id: number
  created_at: string
  user_id: number
  duration: number
  commentable: boolean
  comment_count: number
  state: State
  original_content_size: number
  last_modified: string
  sharing: Sharing
  tag_list: string
  permalink: string
  streamable: boolean
  embeddable_by: EmbeddableBy
  purchase_url: null | string
  purchase_title: null | string
  label_id: null
  genre: string
  title: string
  description: string
  label_name: null
  release: null
  track_type: null
  key_signature: null
  isrc: null
  video_url: null
  bpm: null
  release_year: number | null
  release_month: number | null
  release_day: number | null
  original_format: OriginalFormat
  license: License
  uri: string
  user: APIv1ResolveUser
  user_uri: string
  permalink_url: string
  artwork_url: string
  stream_url: string
  download_url: string
  waveform_url: string
  domain_lockings: null
  available_country_codes: null
  label: null
  secret_token: null
  secret_uri: null
  user_favorite: null
  user_playback_count: null
  playback_count: number
  download_count: number
  favoritings_count: number
  reposts_count: number
  downloadable: boolean
  downloads_remaining: null
}

export interface APIv1ResolveUser {
  id: number
  kind: UserKind
  permalink: string
  username: string
  last_modified: string
  uri: string
  permalink_url: string
  avatar_url: string
}
