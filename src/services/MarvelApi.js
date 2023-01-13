import axios from "axios";
import md5 from "md5";
import API_KEYS from "../config/public-api-keys"

const time = Number(new Date())

const MarvelApi = axios.create({
  baseURL: API_KEYS.MarvelComics.URI,
  params: {
    "apikey": API_KEYS.MarvelComics.publicKey,
    "ts": time,
    "hash": md5(`${time}${API_KEYS.MarvelComics.privateKey}${API_KEYS.MarvelComics.publicKey}`)
  }
})

export default MarvelApi;