import axios from 'axios'

import Config from 'Config'

const ApiSW = axios.create({
  baseURL: Config.api.baseUrl,
})

export default ApiSW
