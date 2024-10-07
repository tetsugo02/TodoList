import { ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const AddNew = lazy(() => import("./pages/AddNew.tsx"));

const AppRouter = (): ReactElement => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback={<div>Loading...</div>}>
						<Home />
					</Suspense>
				}
			/>
			<Route
				path="/add"
				element={
					<Suspense fallback={<div>Loading...</div>}>
						<AddNew />
					</Suspense>
				}
			/>
		</Routes>
	);
};

export default AppRouter;