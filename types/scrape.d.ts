export interface ScrapedDataPart {
  id: number
  chunks: number[]
  data: Array<Record<string, any>>
}

export type ScrapedData = Array<ScrapedDataPart>
