import axios from 'axios'

const key = '6ca014c078ab885f23a1f191a11bbd08'
const api = axios.get(`https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=${key}`)

export {api}

// const API_BASE = 'https://api.themoviedb.org/3'

// const basicFetch = async what => {
//   const req = await fetch(`${API_BASE}${what}`)
//   const json = await req.json()
//   return await json
// }
// let a = undefined

// const busca = basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${key}`)
// .then(data => a = data)

// export {busca, a}