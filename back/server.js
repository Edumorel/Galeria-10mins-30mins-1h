const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, 'uploads')))

app.get('/', (req, res) => {
	res.send([
		{ name: '', image: '/1.png' },
		{ name: '', image: '/2.png' },
		{ name: '', image: '/3.png' },
	])
})

app.listen(3001, () => {
	console.log('hola')
})
