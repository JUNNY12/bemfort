import Header from '@/layouts/parts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '@/layouts/parts/Footer'
import { useGetPathName } from '@/hooks/useGetPathName'
import { ROUTE_LINKS } from '@/constants/constants'

export default function RootLayout() {
    const { location } = useGetPathName()

    const isHidden = ROUTE_LINKS.includes(location)

    return (
        <div className="rootLayout">
            {isHidden && <Header />}
            <Outlet />
            {isHidden && <Footer />}
        </div>
    )
}
