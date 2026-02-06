import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navigation = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Ricky Saarloos | ${
      location.pathname === "/"
        ? "Home"
        : location.pathname.slice(1).charAt(0).toUpperCase() +
          location.pathname.slice(2)
    }`;
  }, [location]);

  return (
    <div>
      <nav
        className="
          inline-flex
          justify-center
          bg-transparent
          py-6
          w-full
        "
      >
        <ul
          className="
            flex
            gap-8
            list-none
            m-0
            p-0
          "
        >
          <li>
            <Link
              to="/"
              className="
                no-underline
                text-[#111]
                text-base
                transition-opacity
                duration-300
                hover:opacity-70
              "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="
                no-underline
                text-[#111]
                text-base
                transition-opacity
                duration-300
                hover:opacity-70
              "
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="
                no-underline
                text-[#111]
                text-base
                transition-opacity
                duration-300
                hover:opacity-70
              "
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/discover"
              className="
                no-underline
                text-[#111]
                text-base
                transition-opacity
                duration-300
                hover:opacity-70
              "
            >
              Discover
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navigation;
