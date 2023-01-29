import React from 'react';
import { Route, Routes } from "react-router-dom";
import Users from "../components/users/Users";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Users />} />
        </Routes>
    );
};

export default AppRouter;