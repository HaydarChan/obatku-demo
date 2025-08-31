'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import CatFlower from "@/assets/peach-peach-and-goma.gif"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn } from 'lucide-react';

export default function Home() {
  const router = useRouter()

  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true)
  
  const password = "martabak telor manis";

  function onSubmit() {
    if (inputValue === password.toString()) {
      router.push("/asking-out")
    } else {
      setIsValid(false)
    }
  }

  return (
    <div className="w-full h-full md:max-w-[400px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] bg-white rounded-[48px] flex flex-col items-center justify-start p-8 pt-40 gap-y-8">
      <Image 
          src={CatFlower}
          alt="Cat"
          width={200}
          height={200}
      />
      <div>
          <h1 className="text-4xl font-beanie text-center">Hi, Mangir</h1>
      </div>
      <div className="flex items-center gap-x-2">
        <Input 
          className="focus-visible:ring-transparent border-slate-400 placeholder:font-beanie placeholder:text-xl w-[200px] placeholder:text-sm"
          placeholder="apa coba passwordnya"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={onSubmit} className="space-x-2">
          Masuk <LogIn />
        </Button>
      </div>
      {!isValid && (
        <p className="text-center text-xl font-beanie text-red-400">Haha salah, boleh coba lagi</p>
      )}
    </div>
  )
}