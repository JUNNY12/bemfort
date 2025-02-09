import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "@/pages/home/Home"
import Services from '@/pages/services/Services'
import RootLayout from "@/layouts/root_layout.tsx"
import About from "@/pages/about/About"
import Career from "@/pages/career/Career"
import Apply from "@/pages/apply/Apply"
import Contact from "@/pages/contact/Contact"
import Products from "@/pages/products/Products"
import SingleProuct from "@/pages/singleProduct/SingleProduct"
import { NoMatch } from "@/pages/noMatch/NoMatch"

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products">
                <Route index element={<Products />} />
                <Route path=":name" element={<SingleProuct />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Route>
    )
)


export default routes