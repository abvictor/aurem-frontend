import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="flex flex-col justify-between h-full border-r border-foreground/5 bg-muted">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <span className="font-semibold">Aurem</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; Aurem - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  );
}
