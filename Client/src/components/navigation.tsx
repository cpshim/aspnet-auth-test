import { Link } from "@tanstack/react-router";

import { useLogoutMutation } from "@/api/auth.api";
import { useAuth } from "@/hooks/useAuth";
import type { FileRouteTypes } from "@/routeTree.gen";

type NavigationItem = {
  to: FileRouteTypes["to"];
  name: string;
};

const navigation: NavigationItem[] = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/secret",
    name: "Secret",
  },
];

export function Navigation() {
  const { mutateAsync: logout } = useLogoutMutation();
  const auth = useAuth();

  return (
    <header className="flex justify-between border-b p-2 text-lg">
      <nav className="flex gap-2">
        {navigation.map(({ to, name }) => (
          <Link
            key={to}
            to={to}
            activeProps={{ className: "font-bold" }}
            activeOptions={{ exact: to === "/" }}
          >
            {name}
          </Link>
        ))}
      </nav>

      {auth.status === "PENDING" && <div>Loading...</div>}

      {auth.status === "UNAUTHENTICATED" && (
        <div className="flex gap-2">
          <Link to="/login">Sign In</Link>
        </div>
      )}

      {auth.status === "AUTHENTICATED" && (
        <div className="flex gap-2">
          <button onClick={async () => await logout()}>Sign Out</button>
          <p> | </p>
          <div>Welcome back, {auth.user.firstName}</div>
        </div>
      )}
    </header>
  );
}
