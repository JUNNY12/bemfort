import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "@/pages/home/Home"
import Services from '@/pages/service/Service'
import RootLayout from "@/layouts/root_layout.tsx";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/services" element={<Service/>} />

        </Route>
    )
)

export default routes