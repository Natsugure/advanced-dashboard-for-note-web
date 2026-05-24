import type { paths } from "@/types/api"

type ArticleStatsResponse =
  paths["/api/articles/:noteArticleId/stats"]["get"]["responses"][200]["content"]["application/json"]

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
  read: number
  like: number
  comment: number
}
