"use client";
import { FormEvent } from "react";

export default function RegistroPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); };
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 py-8">
      <main className="flex flex-col items-center justify-center gap-4 w-full max-w-sm">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 dark:text-purple-300">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <line x1="19" y1="2" x2="19" y2="6" />
            <line x1="17" y1="4" x2="21" y2="4" />
          </svg>
          <div>
            <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-300">Registro</h1>
            <p className="text-purple-500 dark:text-purple-400">Crea una cuenta nueva</p>
          </div>
        </div>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre completo" required className="border border-purple-200 dark:border-purple-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm text-purple-800 dark:text-purple-200 placeholder-purple-300 dark:placeholder-purple-500" />
          <input type="email" placeholder="Correo electrónico" required className="border border-purple-200 dark:border-purple-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm text-purple-800 dark:text-purple-200 placeholder-purple-300 dark:placeholder-purple-500" />
          <input type="password" placeholder="Contraseña" required className="border border-purple-200 dark:border-purple-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm text-purple-800 dark:text-purple-200 placeholder-purple-300 dark:placeholder-purple-500" />
          <button type="submit" className="bg-purple-400 hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-md px-4 py-2 transition-colors shadow-sm shadow-purple-200/50 dark:shadow-purple-900/30">Registrarse</button>
        </form>
      </main>
    </div>
  );
}