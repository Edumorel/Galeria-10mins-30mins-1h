import { API_URL } from '../utils/globals'

const ImageItem = ({ image }) => {
	const styles = {
		backgroundImage: `url(${API_URL}${image.image})`,
	}

	return <div style={styles} className='image'></div>
}

export default ImageItem
