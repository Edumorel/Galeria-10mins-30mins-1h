import { useEffect } from 'react'
import { API_URL } from '../../utils/globals'
import axios from 'axios'

const SeeImage = (props) => {
	const { id } = props.params

	useEffect(() => {
		axios.get(`${API_URL}/images/${id}`).then((res) => {
			console.log(res.data)
		})
	}, [id])

	return <div>Hola</div>
}

export default SeeImage
