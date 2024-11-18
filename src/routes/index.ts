import { createFileRoute, createRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";

export const Route = createFileRoute("/")({
	component: Home,
});

// export const VeltRoute = createRoute({
// 	component: () => import("../pages/Velt"),
// });
