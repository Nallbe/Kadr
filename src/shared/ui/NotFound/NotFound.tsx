import { Link } from "react-router-dom";

import Container from "@/src/shared/ui/Container";

type NotFoundProps = {
  title: string;
  description?: string;
  backTo?: string;
  backLabel?: string;
};

export function NotFound({
  title,
  description,
  backTo = "/",
  backLabel = "Вернуться к афише",
}: NotFoundProps) {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <div className="rounded-2xl bg-gray-100 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-primary">
            Ошибка
          </p>
          <h1 className="mt-2 text-3xl font-bold">{title}</h1>
          {description && <p className="mt-3 text-gray-600">{description}</p>}
          <Link to={backTo} className="mt-6 inline-block text-orange-primary">
            {backLabel}
          </Link>
        </div>
      </Container>
    </main>
  );
}
