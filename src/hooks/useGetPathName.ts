import { useLocation } from "react-router-dom"

export const useGetPathName = (): string => {
    const location = useLocation()
    const pathName = location.pathname

    const formattedPathName = pathName.replace(/\//g, ' / ')

    return formattedPathName
}
