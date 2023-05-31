import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Suspense, lazy } from "react";
import { Loading } from "../generalComponents/loading";

//importing the site routes
const UserRouter = lazy(() => import('../modules/Users/routers'));


export const RootRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route
        path="/user/*"
        element={
          <Suspense  fallback={<Loading />}>
            <UserRouter />
          </Suspense>
        }
      />
    </Routes>
  );
};
