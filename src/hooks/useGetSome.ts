import { useQuery } from "@tanstack/react-query";
import { getSome } from "@/services";


const useGetSome = () =>{
    const query = useQuery({
        queryKey: ["getSome"],
        queryFn: () => getSome(),
      });
      return query;
}


export default useGetSome;