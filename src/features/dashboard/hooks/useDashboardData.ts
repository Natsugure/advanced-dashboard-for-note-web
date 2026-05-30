import { useEffect, useState } from "react"
import dayjs from "dayjs"
import type { ArticleWithStats, TrendDataPoint, ArticleDataPoint, Stat } from "../types"
import { useStats } from "@/infrastructures/api/hooks/useStats"

function toTrendDataPoints(articles: ArticleWithStats[]): TrendDataPoint[] {
  interface StatsGroupByDate {
    date: string,
    stats: Omit<Stat, 'fetchedAt'>[]
  }

  const stats = articles.flatMap(article => article.stats)
  const statsGroupByDate: StatsGroupByDate[] = []

  stats.map(stat => {
    const date = stat.fetchedAt.split('T')[0]

    const targetDate = statsGroupByDate.find(group => group.date === date)
    if (targetDate) {
      // この日付の統計がすでに存在しているなら、その日付グループにstatsを追加する
      targetDate.stats.push(stat)
    } else {
      // まだ日付グループがない場合は、その日付グループを作成する
      statsGroupByDate.push({
        date,
        stats: [stat]
      })
    }
  })

  // その日付内でエンゲージメント数の合計を算出して返す
  return statsGroupByDate.map((dateGroup) => {
    const read = dateGroup.stats.reduce((acc, stat) => acc + stat.readCount, 0)
    const like = dateGroup.stats.reduce((acc, stat) => acc + stat.likeCount, 0)
    const comment = dateGroup.stats.reduce((acc, stat) => acc + stat.commentCount, 0)

    return {
      date: dateGroup.date,
      read,
      like,
      comment,
    }
  })
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

export function useDashboardData() {
  const [articles, setArticles] = useState<ArticleWithStats[]>([])
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
      }
    }
    fetch()
  }, [])

  return {
    trendData: toTrendDataPoints(articles),
    articleData: toArticleDataPoints(articles),
  }
}
