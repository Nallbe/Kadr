import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-[#121212] text-white">
      <div className="mx-auto flex max-w-300 items-center justify-between px-4 py-5">
        <a href="/" className="text-2xl font-bold tracking-wider">
          КАДР<span className="text-orange-primary">■</span>
        </a>

        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-orange-primary pb-2" : "pb-2"
                }
              >
                Афиша
              </NavLink>
            </li>

            <li>
              <a href="/bookings">Мои бронирования</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
