import { useLocation } from "react-router-dom"

export const useGetPathName = (): { pathName: string, userPage: string, location:string } => {
    const location = useLocation()
    const pathName = location.pathname
    const userPage = pathName.split('/')[1]
    const formattedPathName = pathName.replace(/\//g, ' / ')

    return {
        pathName: formattedPathName,
        userPage: userPage,
        location:pathName
    }
}