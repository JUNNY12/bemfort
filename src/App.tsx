import { RouterProvider } from "react-router-dom"
import routes from "./routes/route"

export function App(): JSX.Element {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
