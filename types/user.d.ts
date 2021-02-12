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
  kind: string
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
