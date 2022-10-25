import Loading from '../components/loading/Loading'
import Header from '../containers/header/Header'
import ListOfImage from '../containers/listOfImages/ListOfImage'
import useImages from '../hooks/useImages'
import '../styles/App.css'

const Home = () => {
	const [images, loading, error] = useImages()

	return (
		<div>
			<Header />

			{loading ? <Loading /> : <ListOfImage images={images} />}
		</div>
	)
}

export default Home
