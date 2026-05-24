import type { ArticleWithStats, TrendDataPoint, ArticleDataPoint, Stat } from "../types"

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
      read: lastStat.readCount,
      like: lastStat.likeCount,
      comment: lastStat.commentCount,
    }
  })
}

export function useDashboardData() {
  // TODO: API fetchに切り替える
  const articles: ArticleWithStats[] = [
    {
      title: 'TypeScriptで始めるReact開発',
      publishedAt: '2025-01-10T00:00:00.000Z',
      stats: [
        { readCount: 620, likeCount: 398, commentCount: 510, fetchedAt: '2025-03-22T00:00:00.000Z' },
        { readCount: 640, likeCount: 410, commentCount: 520, fetchedAt: '2025-03-23T00:00:00.000Z' },
        { readCount: 700, likeCount: 197, commentCount: 365, fetchedAt: '2025-03-24T00:00:00.000Z' },
        { readCount: 750, likeCount: 422, commentCount: 562, fetchedAt: '2025-03-25T00:00:00.000Z' },
        { readCount: 690, likeCount: 346, commentCount: 460, fetchedAt: '2025-03-26T00:00:00.000Z' },
      ],
    },
    {
      title: 'Next.jsのApp Routerを理解する',
      publishedAt: '2025-01-20T00:00:00.000Z',
      stats: [
        { readCount: 500, likeCount: 380, commentCount: 440, fetchedAt: '2025-03-22T00:00:00.000Z' },
        { readCount: 520, likeCount: 360, commentCount: 450, fetchedAt: '2025-03-23T00:00:00.000Z' },
        { readCount: 630, likeCount: 180, commentCount: 340, fetchedAt: '2025-03-24T00:00:00.000Z' },
        { readCount: 680, likeCount: 380, commentCount: 550, fetchedAt: '2025-03-25T00:00:00.000Z' },
        { readCount: 600, likeCount: 310, commentCount: 420, fetchedAt: '2025-03-26T00:00:00.000Z' },
      ],
    },
    {
      title: 'Mantineで作るモダンなUI',
      publishedAt: '2025-02-01T00:00:00.000Z',
      stats: [
        { readCount: 480, likeCount: 350, commentCount: 420, fetchedAt: '2025-03-22T00:00:00.000Z' },
        { readCount: 490, likeCount: 330, commentCount: 400, fetchedAt: '2025-03-23T00:00:00.000Z' },
        { readCount: 570, likeCount: 160, commentCount: 320, fetchedAt: '2025-03-24T00:00:00.000Z' },
        { readCount: 650, likeCount: 350, commentCount: 520, fetchedAt: '2025-03-25T00:00:00.000Z' },
        { readCount: 580, likeCount: 290, commentCount: 400, fetchedAt: '2025-03-26T00:00:00.000Z' },
      ],
    },
    {
      title: 'OpenAPIで型安全なAPIを構築する',
      publishedAt: '2025-02-15T00:00:00.000Z',
      stats: [
        { readCount: 650, likeCount: 610, commentCount: 542, fetchedAt: '2025-03-22T00:00:00.000Z' },
        { readCount: 610, likeCount: 583, commentCount: 510, fetchedAt: '2025-03-23T00:00:00.000Z' },
        { readCount: 720, likeCount: 228, commentCount: 390, fetchedAt: '2025-03-24T00:00:00.000Z' },
        { readCount: 730, likeCount: 480, commentCount: 600, fetchedAt: '2025-03-25T00:00:00.000Z' },
        { readCount: 680, likeCount: 420, commentCount: 500, fetchedAt: '2025-03-26T00:00:00.000Z' },
      ],
    },
    {
      title: 'Prismaでデータベースを操作する',
      publishedAt: '2025-03-01T00:00:00.000Z',
      stats: [
        { readCount: 640, likeCount: 600, commentCount: 540, fetchedAt: '2025-03-22T00:00:00.000Z' },
        { readCount: 496, likeCount: 420, commentCount: 522, fetchedAt: '2025-03-23T00:00:00.000Z' },
        { readCount: 702, likeCount: 221, commentCount: 406, fetchedAt: '2025-03-24T00:00:00.000Z' },
        { readCount: 660, likeCount: 456, commentCount: 577, fetchedAt: '2025-03-25T00:00:00.000Z' },
        { readCount: 579, likeCount: 360, commentCount: 510, fetchedAt: '2025-03-26T00:00:00.000Z' },
      ],
    },
  ]

  return {
    trendData: toTrendDataPoints(articles),
    articleData: toArticleDataPoints(articles),
  }
}
