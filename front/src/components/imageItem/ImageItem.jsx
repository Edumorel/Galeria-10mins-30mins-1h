import styles from './ImageItem.module.css'
import { Link } from 'wouter'
import { API_URL } from '../../utils/globals'

const ImageItem = ({ image }) => {
	const moreStyles = {
		backgroundImage: `url(${API_URL}${image.url})`,
	}

	return (
		<Link
			to={`/${image.id}`}
			style={moreStyles}
			className={styles.image}
		></Link>
	)
}

export default ImageItem
