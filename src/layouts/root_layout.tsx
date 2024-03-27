import Header from '@/components/parts/Header'
import { Outlet } from 'react-router-dom';
import Footer from '@/components/parts/Footer'

export default function RootLayout() {
    return (
        <div className="rootLayout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
