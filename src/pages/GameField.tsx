import Keyboard from "@/components/Keyboard";
import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Question{
    id: number;
    answer: string;
    question: string;
}

interface Data {
    id: number;
    name: string;
    questions: Question[]
}

function GameField() {
    const {id} = useParams()
    const {data, loading} = useFetch<Data>(`questions/${id}`);
    const [activeQuestions, setActiveQuestions] = useState(0);
    const [letters, setLetters] = useState<string>("")

    useEffect(() => {
        let timeOut: number;
        if(
            data?.questions[activeQuestions].answer
            .toUpperCase()
            .split("")
            .every((l) => letters.includes(l) || l == " ")
        ) {
            timeOut = setTimeout(() => {
                setLetters("");
                setActiveQuestions((prev) => prev + 1);
            }, 2000);
            toast.success("To'g'ri topdingiz!")
        }
        return ()=> clearTimeout(timeOut);
    }, [letters]);

    if(loading){
        return <Loading/>;
    }
  return (
    <div className="container py-10">
        <h2 className="text-2xl font-bold text-center mb-10">
            {data && data.questions[activeQuestions].question}</h2>

        <div className="flex flex-wrap gap-x-5 gap-y-10 items-center justify-center mb-20">
            {data && data.questions[activeQuestions].answer
            .toUpperCase()
            .split(" ")
            .map((word,i)=>{
                return(
                    <div className="flex" key={i}>{word.split("").map((letter,i)=> {
                        return (
                            <span 
                               className="w-10 h-10 flex items-center justify-center font-bold border border-gray-400" 
                               key={i}
                            >
                                {letters.includes(letter) && letter}
                            </span>
                        )
                    })}</div>
                )
                
            })}
        </div>
        <Keyboard setLetters={setLetters} letters={letters} />
    </div>
  )
}

export default GameField
