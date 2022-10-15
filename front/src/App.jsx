import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
	const [images, setImages] = useState([])
	const [loading, setloading] = useState(true)

	useEffect(() => {
		axios.get('http://localhost:3001/').then((res) => {
			setImages(res.data)
			setloading(false)
		})
	}, [])

	if (!loading)
		return (
			<div>
				{images.map((item) => (
					<div>
						<img
							src={`http://localhost:3001/${item.image}`}
							style={{
								width: 200,
							}}
						/>
					</div>
				))}
			</div>
		)
}

export default App
