import { useEffect, useState } from 'react'
import './App.css'
import { getImages } from './utils/images'
import { API_URL } from './utils/globals'
import ImageItem from './components/ImageItem'
import Header from './components/Header'

function App() {
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)

		getImages()
			.then((res) => {
				setImages(res)
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	if (!loading)
		return (
			<>
				<Header />

				<div className='image-list'>
					{images.map((item) => (
						<ImageItem image={item} key={item.id} />
					))}
				</div>
			</>
		)
}

export default App
