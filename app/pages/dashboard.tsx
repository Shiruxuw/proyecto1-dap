"use client";

export default function DashboardPage() {
  const tasks = [
    { id: 1, title: "Revisar diseño de la página principal", status: "En progreso", dueDate: "2026-08-25" },
    { id: 2, title: "Implementar autenticación con NextAuth", status: "Pendiente", dueDate: "2026-08-30" },
    { id: 3, title: "Optimizar rendimiento del dashboard", status: "Completado", dueDate: "2026-08-20" },
    { id: 4, title: "Crear componente de gráficos", status: "En progreso", dueDate: "2026-09-01" },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-start gap-6 py-6">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-300">Panel de Tareas</h1>
        <p className="text-purple-500 dark:text-purple-400 mb-4">Lista de tareas actuales</p>
        <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-md border border-purple-200 dark:border-purple-800 overflow-hidden">
          <ul className="divide-y divide-purple-100 dark:divide-purple-800">
            {tasks.map((task) => (
              <li key={task.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-purple-800 dark:text-purple-200 font-medium truncate">{task.title}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-purple-500 dark:text-purple-400">
                    <span>Vencimiento: {task.dueDate}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${task.status === "Completado" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : task.status === "En progreso" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"}`}>
                      {task.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 sm:mt-0">
                  <span className="p-2 text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-full transition-colors cursor-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                  </span>
                  <span className="p-2 text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-colors cursor-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}