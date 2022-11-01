import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

instance.defaults.timeout = 60000
instance.defaults.withCredentials = true
//instance.defaults.xsrfHeaderName = 'X-CSRFToken'
//instance.defaults.xsrfCookieName = 'csrftoken'

instance.interceptors.response.use(
  (response) => response,
  ({ response: { status, data } }) => {
    if (status === 401) {
      console.log(401)
    }
    throw data
  }
)

export default instance
