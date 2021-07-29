export interface Setting {
  consumerKey: string
  consumerSecret: string
  accessToken: string
  accessTokenSecret: string
  keepTags: string[]
  exceptionIds: string[]
  keepTexts: RegExp[]
}

export function settings(): Setting {
  return {
    consumerKey: process.env.CONSUMER_KEY || '',
    consumerSecret: process.env.CONSUMER_SECRET || '',
    accessToken: process.env.ACCESS_TOKEN || '',
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || '',
    keepTags: [],
    exceptionIds: [],
    keepTexts: [],
  }
}
