import { model, Schema, Document, Model } from 'mongoose'

interface TodoInterface {
  title: string
  description: string
}

type TodoModel = TodoInterface & Document

const TodoSchema = new Schema({
  title: String,
  description: String
}, {
  timestamps: true
})

export const Todo: Model<TodoModel> = model<TodoModel>('Todo', TodoSchema)
