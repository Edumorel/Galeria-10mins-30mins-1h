import { addImage } from '../utils/images'

const Header = () => {
	const handleChange = (e) => {
		addImage(e.target.files[0])
	}

	return (
		<header>
			<label htmlFor='file' className='add-file-button'>
				+ Añade una imagen
			</label>
			<input type='file' id='file' className='file' onChange={handleChange} />
		</header>
	)
}

export default Header
