import Image from "next/image"
import Cat from "@/assets/peach-goma.gif"
import { MapPin } from 'lucide-react';

export default function AskingOut() {
    return (
        <div className="w-full h-full md:max-w-[400px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] bg-white rounded-[48px] flex flex-col items-center justify-start pt-40 p-8 gap-y-4">
             <Image 
                src={Cat}
                alt="Cat"
                width={200}
                height={200}
                className="-translate-x-4"
            />
            <p className="text-center font-beanie text-3xl">Would you like to go out with me?</p>
            <div className="flex gap-x-2 items-center">
                <MapPin className="w-4 h-4" />
                <p className="text-xs">Paris Van Java & Theo's Wife Lois</p>
            </div>
            <p className="text-xs text-center text-gray-600 pt-8">P.S karena situasi nya lagi ga baik, max 17.30 udah pulang, tanggalnya bisa nyesuain kamu kapan kosongnya.</p>
            <p className="text-xs text-center text-gray-600 pt-4">but if you don't want to go, you can say no, I will understand.</p>
        </div>
    )
}