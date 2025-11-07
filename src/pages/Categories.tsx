import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { type FetchType } from "@/model/model";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Data {
    id: number;
    name: string;
}
function Categories() {
    const navigate = useNavigate()
    const { data, loading } = useFetch<FetchType<Data>>("categories");
    
    if (loading) {
        return <Loading />;
    }

    const handleClick = (id: number) => {
        navigate("/game-field/" + id);
    };

  return (
    <div className="py-10">
        <div className="container mb-10 flex items-center justify-between">
            <Button onClick={() => navigate("/")}>
               <ArrowLeft />
           </Button>
           <h2 className="text-3xl font-bold">Kategoriyani tanlang!</h2>
           <span></span>
        </div>

        <div className="container">
            <ul className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
                {data &&
                   data.data.map((category) => {
                    return (
                        <li key={category.id}>
                            <Button 
                                onClick={()=> handleClick(category.id)} className="w-full" size={"xlg"}>
                                    {category.name.toUpperCase()}
                            </Button>
                        </li>
                    )
                   })}
            </ul>
        </div>
    </div>
  )
}

export default Categories