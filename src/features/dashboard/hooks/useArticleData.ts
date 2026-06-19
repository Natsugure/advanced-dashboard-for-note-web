import { useEffect, useState } from "react"
import dayjs from "dayjs"
import type { ArticleWithStats, ArticleDataPoint } from "../types"
import { useStats } from "@/infrastructures/api/hooks/useStats"

export function useArticleData() {
  const [articles, setArticles] = useState<ArticleWithStats[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | undefined>(undefined)
  const { fetchAllStats } = useStats()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchAllStats()
        const articleWithStats: ArticleWithStats[] = res.data.map((item) => ({
          ...item.article,
          stats: item.stats
        }))

        setArticles(articleWithStats)
      } catch (e) {
        console.error(e)
        setError("統計の取得に失敗しました")
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { data: toArticleDataPoints(articles), isLoading, error }
}

function toArticleDataPoints(articles: ArticleWithStats[]): ArticleDataPoint[] {
  return articles.map(article => {
    article.stats.sort((a, b) => new Date(b.fetchedAt).getTime() - new Date(a.fetchedAt).getTime())
    const lastStat = article.stats[0]

    return {
      title: article.title,
      publishedAt: dayjs(article.publishedAt),
      read: lastStat.readCount,
      like: lastStat.likeCount,
      comment: lastStat.commentCount,
    }
  })
}
