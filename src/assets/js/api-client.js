import SHA1 from "./sha1.js"
import axios from "axios"
import { apiCloud } from "../../app.config"

function _getHeaders() {
  const now = Date.now()

  return {
    "X-APICloud-AppId": apiCloud.appId,
    "X-APICloud-AppKey":
      SHA1(apiCloud.appId + "UZ" + apiCloud.appKey + "UZ" + now) + "." + now
  }
}

const apiClient = {
  get(apiPath) {
    return axios.get(apiCloud.baseURL + apiPath, {
      headers: _getHeaders()
    })
  }
}

export default apiClient
