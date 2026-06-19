import { useApiClient } from "./useApiClient"

export function useStats() {
    const api = useApiClient()
  
    const fetchAllStats = async () => {
      const { data, error } = await api.GET("/api/me/stats")
  
      if (error) {
        throw new Error(error)
      }

      if (!data) {
        throw new Error('Something went wrong.')
      }
      return data
    }

    const fetchDailyStats = async () => {
      const { data, error } = await api.GET("/api/me/stats/daily")
  
      if (error) {
        throw new Error(error)
      }

      if (!data) {
        throw new Error('Something went wrong.')
      }

      return data
    }

    return { fetchAllStats, fetchDailyStats }
}