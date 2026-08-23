"use client";
import { FormEvent } from "react";

export default function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); };
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 py-8">
      <main className="flex flex-col items-center justify-center gap-4 w-full max-w-sm">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 dark:text-purple-300">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <div>
            <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-300">Bienvenido</h1>
            <p className="text-purple-500 dark:text-purple-400">Inicia sesión para continuar</p>
          </div>
        </div>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo electrónico" required className="border border-purple-200 dark:border-purple-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm text-purple-800 dark:text-purple-200 placeholder-purple-300 dark:placeholder-purple-500" />
          <input type="password" placeholder="Contraseña" required className="border border-purple-200 dark:border-purple-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm text-purple-800 dark:text-purple-200 placeholder-purple-300 dark:placeholder-purple-500" />
          <button type="submit" className="bg-purple-400 hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-md px-4 py-2 transition-colors shadow-sm shadow-purple-200/50 dark:shadow-purple-900/30">Iniciar sesión</button>
        </form>
      </main>
    </div>
  );
}