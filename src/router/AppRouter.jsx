import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../components/users/Users';
import { AboutPage } from '../pages/aboutPage/AboutPage';
import { ErrorPage } from '../pages/errorPage/ErrorPage';
import { MainPage } from '../pages/mainPage/MainPage';
import { UserDetailsPage } from '../pages/userDetailsPage/UserDetailsPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<UserDetailsPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;