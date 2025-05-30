import { LineLoading } from "@/components/loading";
import DashboardLayout from "@/layouts/dashboard";
import AuthGuard from "@/routes/components/auth-guard";
import { Suspense } from "react";
import { Navigate, type RouteObject } from "react-router";
import { backendDashboardRoutes } from "./backend";
import { frontendDashboardRoutes } from "./frontend";

const { VITE_APP_HOMEPAGE: HOMEPAGE, VITE_APP_ROUTER_MODE: ROUTER_MODE } = import.meta.env;

export const dashboardRoutes: RouteObject[] = [
	{
		path: "/",
		element: (
			<AuthGuard>
				<Suspense fallback={<LineLoading />}>
					{/* outlet inside DashboardLayout */}
					<DashboardLayout />
				</Suspense>
			</AuthGuard>
		),
		children: [
			{ index: true, element: <Navigate to={HOMEPAGE} replace /> },
			...(ROUTER_MODE === "frontend" ? frontendDashboardRoutes : backendDashboardRoutes),
		],
	},
];
