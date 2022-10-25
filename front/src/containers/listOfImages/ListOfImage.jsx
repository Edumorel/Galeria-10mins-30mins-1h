import ImageItem from '../../components/imageItem/ImageItem'
import styles from './ListOfimages.module.css'

const ListOfImage = ({ images = [] }) => {
	return (
		<div className={styles.image_list}>
			{images.map((item) => (
				<ImageItem image={item} key={item.id} />
			))}
		</div>
	)
}

export default ListOfImage
