import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface Question {
  id: number;
  word: string;
  question: string;
}

interface Data {
  id: number;
  name: string;
  questions: Question[];
}

const keyboard: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

function GameField() {
  const { id } = useParams();
  const { data, loading } = useFetch<Data>(`questions/${id}`);
  const [activeCuestion, setActiveCuestion] = useState(0);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container py-10">
      <h2 className="text-2xl font-bold text-center mb-10">
        {data?.questions?.[0]?.question}
      </h2>

      <div className="flex flex-wrap gap-x-5 gap-y-10 items-center justify-center mb-20">
        {data?.questions?.[0]?.word
          ?.toUpperCase()
          ?.split(" ")
          ?.map((word, i) => (
            <div className="flex" key={i}>
              {word.split("").map((letter, j) => (
                <span className="w-10 h-10 border border-gray-400" key={j}>
                  {false && letter}
                </span>
              ))}
            </div>
          ))}
      </div>

      <div className="flex flex-col gap-6 items-center">
        {keyboard.map((str) => (
          <div key={str} className="flex items-center gap-4">
            {str
              .toUpperCase()
              .split("")
              .map((key) => (
                <Button key={key} className="text-xl font-bold">
                  {key}
                </Button>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameField;
