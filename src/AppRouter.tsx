import { ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const DoneTodos = lazy(() => import("./pages/DoneTodos.tsx"));

const AppRouter = (): ReactElement => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback={<div></div>}>
						<Home />
					</Suspense>
				}
			/>
			<Route
				path="/DoneTodos"
				element={
					<Suspense fallback={<div></div>}>
						<DoneTodos />
					</Suspense>
				}
			/>
		</Routes>
	);
};

export default AppRouter;
