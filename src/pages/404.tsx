import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-blue-500">
        Página não encontrada
      </h1>
      <p className="text-blue-500">
        <Link to="/">Voltar para o início.</Link>
      </p>
    </div>
  );
}
