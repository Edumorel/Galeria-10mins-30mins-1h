import axios from 'axios'
import { API_URL } from './globals'

export const getImages = () => {
	return axios.get(`${API_URL}/images`).then((res) => res.data)
}

export const addImage = (image) => {
	const data = new FormData()

	data.append('image', image)

	return axios.post(`${API_URL}/images`, data).then((res) => res.data)
}
