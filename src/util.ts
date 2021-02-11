// cspell:ignore urlify

export const scrapeURL = "https://soundcloud.com"
export const APIv1 = "https://api.soundcloud.com"
export const APIv2 = "https://api-v2.soundcloud.com"
export const urlify = (url: string, base = scrapeURL): string => {
  return new URL(url, base).toString()
}

export const at = <T>(arr: Array<T>, pos: number): T => {
  if (pos >= 0) return arr[pos]
  return arr[arr.length + pos]
}
