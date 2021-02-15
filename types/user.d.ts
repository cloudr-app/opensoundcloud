// generated with https://app.quicktype.io?share=IAHWnozVhjhjEkl8jObh

export interface UserTracksv2 {
  collection: TrackElement[]
  next_href: string
  query_urn: null
}

export interface TrackElement {
  artwork_url: null | string
  caption: null | string
  commentable: boolean
  comment_count: number
  created_at: Date
  description: null | string
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
  contains_music?: boolean
  artist?: string
  album_title?: string
  publisher?: string
  explicit?: boolean
  p_line?: string
  p_line_for_display?: string
  writer_composer?: string
  release_title?: string
  isrc?: string
  upc_or_ean?: string
  c_line?: CLine
  c_line_for_display?: CLineForDisplay
}

export enum CLine {
  The2017DivisionRecordings = "2017 Division Recordings",
  The2017VisionRecordings = "2017 Vision Recordings",
}

export enum CLineForDisplay {
  The2017DivisionRecordings = "© 2017 Division Recordings",
  The2017VisionRecordings = "© 2017 Vision Recordings",
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
  first_name: FirstName
  full_name: FullName
  id: number
  kind: UserKind
  last_modified: Date
  last_name: LastName
  permalink: string
  permalink_url: string
  uri: string
  urn: string
  username: string
  verified: boolean
  city: null | string
  country_code: CountryCode | null
  badges: Badges
}

export interface Badges {
  pro: boolean
  pro_unlimited: boolean
  verified: boolean
}

export enum CountryCode {
  Be = "BE",
  CA = "CA",
  GB = "GB",
  Hn = "HN",
  Jp = "JP",
  Us = "US",
}

export enum FirstName {
  Boneidol = "BONEIDOL",
  Callister = "Callister",
  Christian = "Christian",
  Empty = "",
  Fkof = "FKOF",
  Jack = "Jack",
  Richard = "Richard",
  SouthFlorida = "South Florida",
}

export enum FullName {
  Boneidol = "BONEIDOL",
  CallisterJames = "Callister James",
  ChristianFial = "Christian Fial",
  Empty = "",
  FKOFRecords = "FKOF Records",
  JackHaigh = "Jack Haigh",
  RichardLibor = "Richard Libor",
  SouthFloridaBrowardCounty = "South Florida Broward County",
}

export enum UserKind {
  User = "user",
}

export enum LastName {
  BrowardCounty = "Broward County",
  Empty = "",
  Fial = "Fial",
  Haigh = "Haigh",
  James = "James",
  Libor = "Libor",
  Records = "Records",
}

export interface UserLikesv2 {
  collection: UserLikesv2Collection[]
  next_href: string
  query_urn: null
}

export interface UserLikesv2Collection {
  created_at: Date
  kind: PurpleKind
  track: TrackElement
}

export enum PurpleKind {
  Like = "like",
}

export interface Userv2 {
  avatar_url: string
  city: string
  comments_count: number
  country_code: CountryCode | null
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
  last_name: LastName
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
