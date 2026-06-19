import { useEffect, useState } from "react"
import type { TrendDataPoint } from "../types"
import { useStats } from "@/infrastructures/api/hooks/useStats"

export function useTrendData() {
  const [data, setData] = useState<TrendDataPoint[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const { fetchDailyStats } = useStats()

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const res = await fetchDailyStats()
        setData(
          res.data.map(item => ({
            date: item.date,
            read: item.totalReads,
            like: item.totalLikes,
            comment: item.totalComments
          }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        )
      } catch (e) {
        console.error(e)
        setError("統計の取得に失敗しました")
      }
    }
    fetch().finally(() => setIsLoading(false))
  }, [])

  return { data, isLoading, error }
}


// function toTrendDataPoints(articles: ArticleWithStats[]): TrendDataPoint[] {
//   interface StatsGroupByDate {
//     date: string,
//     stats: Omit<Stat, 'fetchedAt'>[]
//   }

//   const stats = articles.flatMap(article => article.stats)
//   const statsGroupByDate: StatsGroupByDate[] = []

//   stats.map(stat => {
//     const date = stat.fetchedAt.split('T')[0]

//     const targetDate = statsGroupByDate.find(group => group.date === date)
//     if (targetDate) {
//       // この日付の統計がすでに存在しているなら、その日付グループにstatsを追加する
//       targetDate.stats.push(stat)
//     } else {
//       // まだ日付グループがない場合は、その日付グループを作成する
//       statsGroupByDate.push({
//         date,
//         stats: [stat]
//       })
//     }
//   })

//   // その日付内でエンゲージメント数の合計を算出して返す
//   return statsGroupByDate.map((dateGroup) => {
//     const read = dateGroup.stats.reduce((acc, stat) => acc + stat.readCount, 0)
//     const like = dateGroup.stats.reduce((acc, stat) => acc + stat.likeCount, 0)
//     const comment = dateGroup.stats.reduce((acc, stat) => acc + stat.commentCount, 0)

//     return {
//       date: dateGroup.date,
//       read,
//       like,
//       comment,
//     }
//   })
// }