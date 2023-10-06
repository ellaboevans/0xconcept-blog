import { Schema, models, model } from 'mongoose'
import { sluggerPlugin } from 'mongoose-slugger-plugin'

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: '',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    username: {
      type: String
    },
    tag: String,
    slug: String
  },
  {
    timestamps: true
  }
)

PostSchema.index({ post: 1, slug: 1 }, { name: 'post_slug', unique: true })
PostSchema.plugin(sluggerPlugin, {
  slugPath: 'slug',
  generateFrom: ['title'],
  maxLength: 30,
  index: 'post_slug'
})

const Post = models.Post || model('Post', PostSchema)
export default Post