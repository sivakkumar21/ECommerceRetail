import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductsBySlugQuery = (slug) =>
  useQuery({
    queryKey: ["products", slug],
    queryFn: async () => (await axios.get(`/products/${slug}`)).data,

    //await axios.get("/api/products/slug/:slug"),
  });
