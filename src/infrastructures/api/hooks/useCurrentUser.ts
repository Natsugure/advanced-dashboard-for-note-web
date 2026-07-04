import { useApiClient } from "./useApiClient"

export function useCurrentUser() {
  const api = useApiClient()

  const fetchUser = async () => {
    const { data, error, response } = await api.GET("/me/user")

    if (error) {
      if (response.status === 404) {
        return undefined
      }
      throw new Error(error)
    }
    return data
  }
  return { fetchUser }
}