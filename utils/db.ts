import mongoose from 'mongoose'

type Options = any
type errorProps = string

const connect = () => {
  const connectOptions: Options = { useNewUrlParser: true }
  mongoose
    .connect(process.env.MONGO_DB_URI!, connectOptions)
    .then(() => console.log('Connected to Database'))
    .catch((error) =>
      console.error('Error connecting to Database:', error.message)
    )
}

export default connect
