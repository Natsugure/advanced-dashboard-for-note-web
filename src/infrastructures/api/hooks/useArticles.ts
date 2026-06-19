import { useApiClient } from "./useApiClient"

export function useArticles() {
    const api = useApiClient()
  
    const fetchArticles = async () => {
      const { data, error } = await api.GET("/api/me/articles")
  
      if (error) {
        throw new Error(error)
      }
      return data
    }
    return { fetchArticles }
}