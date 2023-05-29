import { Routes, Route, Navigate } from "react-router-dom";
import { UserList } from "../pages/UserList";




const UserRouter = () => {

  return (

    <Routes>
      <Route index element={<UserList />} />
      <Route path={"*"} element={<Navigate to={"/user"} replace />} />
    </Routes>



  );
};

export default UserRouter;




