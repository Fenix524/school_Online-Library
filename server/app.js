import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import booksRouter from './routes/booksRouter.js'
import usersRouter from './routes/usersRouter.js'
import bookCopiesRouter from './routes/bookCopyRouter.js'
import authRouter from './routes/authRouter.js'
import authorRouter from './routes/authorRouter.js'
import genreRouter from './routes/genreRouter.js'
import multer from 'multer'
import { DB_PATH, PORT } from './config.js'

const app = express()

mongoose
	.connect(DB_PATH)
	.then(() => {
		app.listen(PORT, () => {
			console.log('Server is running. Use our API on port: ' + PORT)
		})
		console.log('Database connection successful')
	})
	.catch(err => {
		console.error('Database connection error:', err.message)
		process.exit(1)
	})

const multerStorage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads')
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname.replace(/\s+/g, ''))
	},
})

const upload = multer({ storage: multerStorage })

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

const PREFIX = '/api/v1'

app.use(PREFIX + '/books', booksRouter)
app.use(PREFIX + '/users', usersRouter)
app.use(PREFIX + '/bookCopies', bookCopiesRouter)
app.use(PREFIX + '/auth', authRouter)
app.use(PREFIX + '/author', authorRouter)
app.use(PREFIX + '/genre', genreRouter)

app.use(PREFIX + '/uploads', express.static('uploads'))
app.post(PREFIX + '/uploads', upload.single('image'), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname.replace(/\s+/g, '')}`,
	})
})

app.use((_, res) => {
	res.status(404).json({ message: 'Route not found' })
})

app.use((err, req, res, next) => {
	const { status = 500, message = 'Server error' } = err
	res.status(status).json({ message })
})
