import dayjs from "dayjs"
import type { ArticleDataPoint } from "@/features/dashboard/types"

export const mockArticleData: ArticleDataPoint[] = [
  {
    title: " 読書嫌いだった私が、年間100冊読むようになるまで",
    publishedAt: dayjs("2025-03-10"),
    read: 4824,
    like: 312,
    comment: 15,
  },
  {
    title: "考えなくても生きられる時代に、なぜ考えることを選ぶのか",
    publishedAt: dayjs("2025-04-02"),
    read: 3650,
    like: 241,
    comment: 5,
  },
  {
    title: "完璧主義をやめたら、仕事が好きになった",
    publishedAt: dayjs("2025-02-18"),
    read: 2918,
    like: 187,
    comment: 12,
  },
  {
    title: "「積読」との上手な付き合い方",
    publishedAt: dayjs("2025-04-20"),
    read: 2341,
    like: 154,
    comment: 8,
  },
  {
    title: "本を読む時間がない人に、Kindle風呂読書のススメ",
    publishedAt: dayjs("2025-01-25"),
    read: 1983,
    like: 128,
    comment: 3,
  },
  {
    title: "ひとり暮らし3年目の、気づきと後悔",
    publishedAt: dayjs("2025-03-28"),
    read: 1650,
    like: 203,
    comment: 0,
  },
  {
    title: "年間100冊読んで気づいた「いい本」の共通点",
    publishedAt: dayjs("2025-05-01"),
    read: 1429,
    like: 89,
    comment: 4,
  },
  {
    title: "私たちはなぜ習慣化に救いを求めて、そして裏切られるのか",
    publishedAt: dayjs("2025-02-05"),
    read: 1182,
    like: 76,
    comment: 2,
  },
  {
    title: "なんでもない一日を、大切に思えた話",
    publishedAt: dayjs("2025-04-15"),
    read: 871,
    like: 54,
    comment: 2,
  },
  {
    title: "個人開発のマネタイズを考える：無料プランの設計思想",
    publishedAt: dayjs("2025-05-10"),
    read: 629,
    like: 41,
    comment: 0,
  },
]
