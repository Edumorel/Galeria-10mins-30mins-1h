import { Switch, Route } from 'wouter'
import Home from './pages/Home'
import SeeImage from './pages/SeeImage/SeeImage'

function App() {
	return (
		<Switch>
			<Route path='/' component={Home} />
			<Route path='/:id' component={SeeImage} />
		</Switch>
	)
}

export default App
