import axios from 'axios'

import Config from 'Config'

const ApiCep = axios.create({
  baseURL: Config.cepApi.baseUrl,
})

export default ApiCep
