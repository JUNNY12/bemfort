import Header from '@/components/common/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/common/footer/Footer'
import { useGetPathName } from '@/hooks/useGetPathName'
import { ROUTE_LINKS } from '@/constants/constants'

export default function RootLayout() {
    const { location } = useGetPathName()

    const isHidden = ROUTE_LINKS.includes(location) || location.includes('products')

    return (
        <div className="relative rootLayout overflow-hidden">
            {isHidden && <Header />}
            <Outlet />
            {isHidden && <Footer />}
        </div>
    )
}
