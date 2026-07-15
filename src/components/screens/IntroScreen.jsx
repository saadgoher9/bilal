"use client"

import GradientButton from "../GradientButton"
import { Gift } from "lucide-react"

export default function IntroScreen({ onNext }) {
    return (
        <div className="py-10 md:py-14 text-center">
            <div className="flex flex-col items-center gap-6">
                <img
                    src="/gifs/intro.gif"
                    alt="Cute birthday animation topper"
                    className="w-[140px] md:w-[180px]  object-cover"
                />

                <div>
                    <h1 className="text-pretty text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 drop-shadow leading-tight"
                        style={{
                            filter: "drop-shadow(0 0 20px rgba(96,165,250,0.4))",
                        }}>
                        My Ride or Die Since Day One
                    </h1>

                    <h1 className="text-pretty text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 drop-shadow leading-tight"
                        style={{
                            filter: "drop-shadow(0 0 20px rgba(96,165,250,0.4))",
                        }}>
                        Happy Birthday, Bilal! 🎉🔥
                    </h1>
                    <p className="mt-4 text-xl text-blue-100">Yes, it&apos;s YOU, <strong>Bilal bhai!</strong> Ek chota sa surprise hai tere liye...</p>
                </div>

                <div className="mt-8">
                    <GradientButton
                        onClick={() => { onNext?.() }}
                    >
                        <Gift size={20} />
                        Start the surprise
                    </GradientButton>
                </div>
            </div>
        </div>
    )
}
