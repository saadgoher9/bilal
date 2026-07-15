"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 drop-shadow mb-6 leading-tight"
            >
                Yaar, Sun...
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="h-auto max-w-xl bg-gradient-to-br from-blue-100 via-purple-50 to-violet-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <div className="text-[#0a0a2e] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2 space-y-3 text-left">
                        <p className="font-bold text-center">Happy Birthday Bilal! 🎉🔥</p>
                        <p>Allah tala se dil ki gehraion se dua karta hoon ke is saal apko woh sab mile jo ap deserve karte ho, woh success milay jo ap mehnat se kamaatay ho, woh khushi jo dil ko sukoon de, aur woh khawaab jo tune aankhon mein basaye hain, woh sab haqeeqat banen. Amen!</p>
                        <p>Khush reh, abad reh, hamesha muskurata reh. ❤️🎂✨</p>
                        <p className="text-right font-semibold">Tera Yaar, Saad 💛</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
