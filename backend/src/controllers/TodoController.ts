import { Request, Response } from 'express'

import { Todo } from '../schemas/Todo'

class TodoController {
  public async index (req: Request, res: Response): Promise<Response> {
    const todos = await Todo.find()

    return res.json(todos)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const todo = await Todo.create(req.body)

    return res.json(todo)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const todo = await Todo.findById(req.params.id)

    return res.json(todo)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(todo)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    const todo = await Todo.findByIdAndDelete(req.params.id)

    return res.json(todo)
  }
}

export default new TodoController()
