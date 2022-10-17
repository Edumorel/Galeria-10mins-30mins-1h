const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const multer = require('multer')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '/public/uploads'))
	},
	filename: (req, file, cb) => {
		const ext = file.originalname.split('.').pop()
		cb(null, `${Date.now()}.${ext}`)
	},
})

const uploads = multer({
	dest: path.join(__dirname, '/public/uploads'),
	storage: storage,
})

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const data = [
	{ id: 'kaljdklasjd', image: '/uploads/1.png' },
	{ id: 'afsdffdsd', image: '/uploads/2.png' },
]

app.get('/images', (req, res) => {
	res.send(data)
})

app.post('/images', uploads.single('image'), (req, res) => {
	console.log(req.file)
	data.push({ id: Date.now, image: '/uploads/' + req.file.filename })
	res.send(data)
})

app.listen(3001, () => {
	console.log('Server on http://localhost:3001')
})
