import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TAROT_DATA = [
    { id: 1, name: "The Fool", image: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg", desc: "New beginnings, innocence, spontaneity." },
    { id: 2, name: "The Magician", image: "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg", desc: "Manifestation, resourcefulness, power." },
    { id: 3, name: "The High Priestess", image: "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg", desc: "Intuition, unconscious, inner voice." },
    { id: 4, name: "The Empress", image: "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg", desc: "Fertility, femininity, beauty, nature." },
    { id: 5, name: "The Emperor", image: "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg", desc: "Authority, establishment, structure." },
    { id: 6, name: "The Hierophant", image: "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg", desc: "Spiritual wisdom, religious beliefs." },
    { id: 7, name: "The Lovers", image: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg", desc: "Love, harmony, relationships." },
    { id: 8, name: "The Chariot", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg", desc: "Control, willpower, success, action." },
    { id: 9, name: "Strength", image: "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg", desc: "Strength, courage, persuasion." },
    { id: 10, name: "The Hermit", image: "https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg", desc: "Soul-searching, introspection, being alone." },
    { id: 11, name: "Wheel of Fortune", image: "https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", desc: "Good luck, karma, life cycles." },
    { id: 12, name: "Justice", image: "https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg", desc: "Justice, fairness, truth, cause and effect." },
    { id: 13, name: "The Hanged Man", image: "https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg", desc: "Pause, surrender, letting go, new perspectives." },
    { id: 14, name: "Death", image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg", desc: "Endings, change, transformation, transition." },
    { id: 15, name: "Temperance", image: "https://upload.wikimedia.org/wikipedia/en/f/f8/RWS_Tarot_14_Temperance.jpg", desc: "Balance, moderation, patience, purpose." },
    { id: 16, name: "The Devil", image: "https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg", desc: "Shadow self, attachment, addiction, restriction." },
    { id: 17, name: "The Tower", image: "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg", desc: "Sudden change, upheaval, chaos, revelation." },
    { id: 18, name: "The Star", image: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg", desc: "Hope, faith, purpose, renewal, spirituality." },
    { id: 19, name: "The Moon", image: "https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg", desc: "Illusion, fear, anxiety, subconscious, intuition." },
    { id: 20, name: "The Sun", image: "https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg", desc: "Positivity, fun, warmth, success, vitality." },
    { id: 21, name: "Judgement", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg", desc: "Judgement, rebirth, inner calling, absolution." },
    { id: 22, name: "The World", image: "https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg", desc: "Completion, integration, accomplishment, travel." },
];

const SPREAD_POSITIONS = [
    { label: "Persona", description: "Your current self" },
    { label: "Obstacle", description: "What holds you back" },
    { label: "Solution", description: "How to overcome" },
];

export default function TarotSpread() {
    const [deck, setDeck] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState({});

    useEffect(() => {
        let initialDeck = [];
        for (let i = 0; i < 3; i++) {
            initialDeck = [...initialDeck, ...TAROT_DATA.map(c => ({ ...c, uniqueId: `${c.id}-${i}-${Math.random()}` }))];
        }

        initialDeck = initialDeck.sort(() => Math.random() - 0.5);

        initialDeck = initialDeck.slice(0, 78);

        setDeck(initialDeck);
    }, []);

    const handleDrawCard = (card) => {
        if (selectedCards.length >= 3) return;

        const newSelected = [...selectedCards, card];
        setSelectedCards(newSelected);
        setDeck(deck.filter((c) => c.uniqueId !== card.uniqueId));

        setTimeout(() => {
            setIsFlipped((prev) => ({ ...prev, [card.uniqueId]: true }));
        }, 600);
    };

    const handleReset = () => {
        setSelectedCards([]);
        setIsFlipped({});
        let initialDeck = [];
        for (let i = 0; i < 3; i++) {
            initialDeck = [...initialDeck, ...TAROT_DATA.map(c => ({ ...c, uniqueId: `${c.id}-${i}-${Math.random()}` }))];
        }
        initialDeck = initialDeck.sort(() => Math.random() - 0.5).slice(0, 78);
        setDeck(initialDeck);
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-start pt-20 font-serif">

            <div
                className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 w-full max-w-6xl px-4 mt-10 h-[700px]"
                style={{
                    perspective: "1500px",
                    transform: "rotateX(20deg) scale(0.9)",
                    transformStyle: "preserve-3d"
                }}
            >
                {SPREAD_POSITIONS.map((pos, index) => {
                    const card = selectedCards[index];
                    return (
                        <div key={pos.label} className="flex flex-col items-center justify-start relative group">

                            <div className="relative w-56 h-80 md:w-64 md:h-96">
                                {!card && (
                                    <div className="absolute inset-0 border-2 border-dashed border-teal-500/20 rounded-2xl flex items-center justify-center">
                                        <div className="text-center">
                                            <span className="text-teal-500/30 text-6xl block mb-2 opacity-50">✦</span>
                                            <span className="text-teal-500/30 font-serif italic text-sm">Draw a card</span>
                                        </div>
                                    </div>
                                )}

                                <AnimatePresence>
                                    {card && (
                                        <motion.div
                                            layoutId={`card-${card.uniqueId}`}
                                            className="w-full h-full absolute top-0 left-0 cursor-pointer"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1, rotateY: isFlipped[card.uniqueId] ? 180 : 0 }}
                                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                                        >
                                            <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl border-[6px] border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden bg-white z-20">
                                                <div className="w-full h-full p-1">
                                                    <div className="w-full h-full border border-white flex items-center justify-center bg-white">
                                                        <div className="text-white text-5xl opacity-80 animate-pulse">✦</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="absolute inset-0 w-full h-full backface-hidden rounded-2xl border-[6px] border-white shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden bg-white flex flex-col z-10"
                                                style={{ transform: "rotateY(180deg)" }}
                                            >
                                                <div className="relative h-[75%] w-full overflow-hidden bg-slate-200">
                                                    <img src={card.image} alt={card.name} className="object-cover w-full h-full transition-transform duration-[10s] hover:scale-110" />

                                                    <div className="absolute top-2 left-2 text-[10px] uppercase tracking-widest text-white/80 drop-shadow-md -rotate-90 origin-top-left translate-y-full">moonlight.world</div>

                                                    <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-black/20 bg-white grid grid-cols-2 grid-rows-2 p-1 gap-px">
                                                        <div className="bg-black/80 rounded-full"></div><div className="bg-transparent"></div>
                                                        <div className="bg-transparent"></div><div className="bg-black/80 rounded-full"></div>
                                                    </div>
                                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-r border-t border-black/20 bg-white grid grid-cols-2 grid-rows-2 p-1 gap-px">
                                                        <div className="bg-black/80 rounded-full"></div><div className="bg-transparent"></div>
                                                        <div className="bg-transparent"></div><div className="bg-black/80 rounded-full"></div>
                                                    </div>
                                                </div>

                                                <div className="h-[25%] w-full bg-white flex flex-col items-center justify-center p-3 text-center border-t-2 border-double border-slate-200">
                                                    <h3 className="font-serif font-bold text-slate-900 text-sm md:text-base uppercase tracking-wider">{card.name}</h3>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="mt-8 text-center transition-opacity duration-500 delay-300">
                                <h3 className="text-2xl md:text-3xl font-serif text-white tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{pos.label}</h3>
                                {card && isFlipped[card.uniqueId] && (
                                    <p className="text-teal-200/80 italic text-sm mt-2 max-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-700">{card.desc}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="absolute bottom-[-10px] w-full h-[150px] z-20 flex justify-center items-end overflow-visible pointer-events-none">
                <div className="relative w-full h-full flex justify-center items-end pointer-events-auto pb-4">
                    <AnimatePresence>
                        {deck.map((card, index) => {
                            const total = deck.length;
                            const mid = (total - 1) / 2;
                            const offset = index - mid;

                            const rotateVal = offset * 0.5;
                            const xVal = offset * 20;
                            const yVal = Math.pow(Math.abs(offset), 2) * 0.05;

                            return (
                                <motion.div
                                    layoutId={`card-${card.uniqueId}`}
                                    key={card.uniqueId}
                                    className="absolute w-20 h-32 bg-white rounded-md border border-slate-800 shadow-sm cursor-pointer origin-bottom"
                                    style={{
                                        zIndex: 100 - Math.abs(Math.round(offset)),
                                        left: "50%",
                                        bottom: 0,
                                        marginLeft: -40,
                                    }}
                                    initial={false}
                                    animate={{
                                        x: xVal,
                                        y: pixelDown(yVal),
                                        rotate: rotateVal,
                                    }}
                                    exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
                                    onClick={() => handleDrawCard(card)}
                                    whileHover={{
                                        y: pixelDown(yVal) - 20,
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <div className="w-full h-full bg-white rounded-md">
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Modal/Overlay if Reading Complete? (Optional, kept simple for now) */}
            {selectedCards.length === 3 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-10 z-0 text-white/50 text-sm font-sans tracking-widest uppercase"
                >
                    Reading Complete
                </motion.div>
            )}
        </div>
    );
}

function pixelDown(val) {
    return val + 20;
}