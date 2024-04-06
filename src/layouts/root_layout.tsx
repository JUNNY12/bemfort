import Header from '@/layouts/parts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '@/layouts/parts/Footer'

export default function RootLayout() {
    return (
        <div className="rootLayout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
