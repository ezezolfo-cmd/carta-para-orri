import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      {/* Contenedor de la carta con perspectiva 3D */}
      <div className="w-full max-w-md perspective-1000">
        <motion.div
          className="relative cursor-pointer h-72"
          onClick={() => setOpen(!open)}
          initial={false}
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Frente de la carta */}
          <div
            className="absolute inset-0 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            💌 Toca para abrir
          </div>

          {/* Interior de la carta */}
          <div
            className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-2xl"
            style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
          >
            <h1 className="text-2xl font-bold text-pink-600 mb-1">
              Para mi amor ❤️
            </h1>
            <p className="text-xs text-slate-500 mb-3">De: Valen — Para: Mia</p>

            <p className="text-slate-700 mb-4">
              Hola mi amor. Cada día que pasa te extraño más. Estoy contando los días para volver a verte. <span className="font-bold text-pink-500">¡Te amo mucho!</span>
            </p>

            <div className="grid grid-cols-2 gap-3 w-full">
              <img
                src="https://my-love-snowy.vercel.app/assets/Love3.png"
                alt="Corazón huella"
                className="rounded-xl border border-slate-200 p-2"
              />
              <img
                src="https://my-love-snowy.vercel.app/assets/love4.png"
                alt="Ramo de flores"
                className="rounded-xl border border-slate-200 p-2"
              />
            </div>

            <p className="text-xs text-slate-400 mt-3">Hecho con ❤️</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

