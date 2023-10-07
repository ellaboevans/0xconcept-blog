import { Schema, models, model } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      min: 8
    }
  },
  {
    timestamps: true
  }
)

const User = models.User || model('User', userSchema)
export default User
