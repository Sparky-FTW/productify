import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../lib/api.js"

export const useProducts = () => {
    const result = useQuery({queryKey: ["products"], queryFn: getAllProducts})
    return result
}