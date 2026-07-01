import type { paths } from "@/types/api"
import type { Dayjs } from "dayjs"

type ArticleStatsResponse =
  paths["/me/articles/{noteArticleId}/stats"]["get"]["responses"][200]["content"]["application/json"]

export type Article = ArticleStatsResponse["article"]

export type Stat = ArticleStatsResponse["stats"][number]

export type ArticleWithStats = Article & { stats: Stat[] }

export interface TrendDataPoint {
  date: string
  read: number
  like: number
  comment: number
}

export interface ArticleDataPoint {
  title: string
  publishedAt: Dayjs
  read: number
  like: number
  comment: number
}
