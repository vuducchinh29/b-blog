import HttpClient from 'utils/http-client'

const blogAPI = {
  getBlogs: (limit = 100) => {
    const url = `/items/blogs?limit=${limit}`
    return HttpClient.get(url)
  },
  getBlogById: (id) => {
    const url = `/items/blogs?slug=${id}`
    return HttpClient.get(url)
  },
}

export default blogAPI
