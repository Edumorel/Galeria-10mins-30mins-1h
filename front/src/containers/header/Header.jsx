import { addImages } from '../../utils/images'
import styles from './Header.module.css'

const Header = () => {
	const handleChange = (e) => {
		addImages(e.target.files[0]).then(() => {
			window.location.reload()
		})
	}

	return (
		<header className={styles.header}>
			<div className={styles.header_content}>
				<label className={styles.file_button} htmlFor='file'>
					<span className={styles.add_icon}>+</span>Subir imagen
				</label>
				<input
					type='file'
					id='file'
					className={styles.file}
					onChange={handleChange}
				/>
			</div>
		</header>
	)
}

export default Header
