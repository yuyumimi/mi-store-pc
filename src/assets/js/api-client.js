import axios from "axios"
import { leanCloud } from "../../app.config"

function _getHeaders() {
  const now = Date.now()

  return {
    "X-LC-Id": leanCloud.appId,
    "X-LC-Key": leanCloud.appKey,
    "Content-Type": "application/json"
  }
}

const apiClient = {
  get(apiPath, condition) {
    let url = leanCloud.baseURL + apiPath

    return axios
      .get(url, {
        headers: _getHeaders(),
        params: condition
      })
      .then(res => {
        if (res.data.results) {
          return res.data.results
        } else {
          return res
        }
      })
  }
}

export class Pointer {
  constructor(className, objectId) {
    this.className = className
    this.objectId = objectId
    this.__type = "Pointer"
  }
}

export default apiClient
