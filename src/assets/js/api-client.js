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
  get(apiPath, filter) {
    let url = apiCloud.baseURL + apiPath

    if (filter) {
      url += "?filter=" + encodeURIComponent(JSON.stringify(filter))
    }

    return axios.get(url, {
      headers: _getHeaders()
    })
  }
}

export default apiClient
