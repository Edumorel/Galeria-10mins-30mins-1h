import { useEffect, useState } from 'react'
import { getImages } from '../utils/images'

const useImages = () => {
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState({})

	useEffect(() => {
		getImages()
			.then((res) => {
				setImages(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	return [images, loading, error]
}

export default useImages
