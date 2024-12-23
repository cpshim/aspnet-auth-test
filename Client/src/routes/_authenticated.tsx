import { authQueryOptions } from "@/api/auth.api";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context, location }) => {
    let shouldRedirect = false;

    const queryClient = context.queryClient;

    if (context.auth.status === "PENDING") {
      try {
        await queryClient.ensureQueryData(authQueryOptions());
      } catch (_) {
        shouldRedirect = true;
      }
    }

    if (context.auth.status === "UNAUTHENTICATED") {
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
