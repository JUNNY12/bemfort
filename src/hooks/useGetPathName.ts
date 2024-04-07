import { useLocation } from "react-router-dom"

export const useGetPathName = (): string => {
    const location = useLocation()
    const pathName = location.pathname

    return pathName.slice(1)
}
