import { useAPI } from '../hooks/useApi'

export const useAnimePicsAPI = () => {
  const apiInstance = useAPI()

  return apiInstance.createAPIInstance({
    baseURL: 'https://api.waifu.pics',
  })
}
