import HttpClient from 'utils/http-client'

const blogAPI = {
  getBlogs: (limit = 100) => {
    const url = `/items/Blog?limit=${limit}`
    return HttpClient.get(url)
  },
  getBlogById: (id) => {
    const url = `/items/Blog/${id}`
    return HttpClient.get(url)
  },
}

export default blogAPI
