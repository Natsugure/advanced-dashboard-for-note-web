import { useApiClient } from "./useApiClient"

export function useStats() {
    const api = useApiClient()
  
    const fetchAllStats = async () => {
      const { data, error } = await api.GET("/api/me/stats")
  
      if (error) {
        throw new Error(error)
      }
      return data
    }
    return { fetchAllStats }
}