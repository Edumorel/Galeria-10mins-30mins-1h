const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const multer = require('multer')

let images = require('./api')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, './public/images'))
	},
	filename: (req, file, cb) => {
		const ext = file.originalname.split('.').pop()
		cb(null, `${Date.now()}.${ext}`)
	},
})

const upload = multer({
	dest: path.join(__dirname, ' ./public/images'),
	storage: storage,
})

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/images', (req, res) => {
	res.send({
		data: images,
	})
})

app.get('/images/:id', (req, res) => {
	const image = images.find((item) => item.id == req.params.id)

	res.send(image)
})

app.post('/images', upload.single('image'), (req, res) => {
	console.log(req.file)

	images = [
		...images,
		{
			id: Date.now(),
			url: `/images/${req.file.filename}`,
		},
	]
	res.send('Imagen añadida')
})

app.listen(3001, () => {
	console.log('Server on http://localhost:3001')
})
