"use client";
import Image from "next/image";

export default function PrincipalPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <h1 className="text-5xl font-bold text-purple-600 dark:text-purple-400">
        ¡Bienvenido a mi Tarea :D!
      </h1>
      <p className="text-xl text-purple-700/80 dark:text-purple-300 max-w-md">
        Nose, esta de relleno asi nomas pq no se vea feo, me da toc
      </p>
      <div className="mt-4">
        <Image
          src="/Meowl.jpg"
          alt="Gato Meowl"
          width={300}
          height={300}
          className="rounded-lg shadow-md border border-purple-200 dark:border-purple-800"
        />
      </div>
      <p className="text-sm text-purple-400 dark:text-purple-500 mt-4">
        Meow meow meow
      </p>
    </div>
  );
}