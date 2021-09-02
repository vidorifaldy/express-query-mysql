import appRouter from 'express'
import userRoutes from './userRoute'

const app = appRouter.Router()
app.use("/user", userRoutes)

export let apps = app
export default app
// module.exports = app