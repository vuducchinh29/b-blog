import axios from 'axios'
import queryString from 'query-string'

const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 30000,
})

HttpClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

HttpClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  async (error) => {
    return Promise.reject(error.response.data)
  }
)

export default HttpClient
