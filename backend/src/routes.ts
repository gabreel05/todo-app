import { Router } from 'express'

import TodoController from './controllers/TodoController'

const routes = Router()

routes.get('/todos', TodoController.index)
routes.get('/todos/:id', TodoController.show)
routes.post('/todos', TodoController.store)
routes.put('/todos/:id', TodoController.update)
routes.delete('/todos/:id', TodoController.destroy)

export default routes
