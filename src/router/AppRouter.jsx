import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../components/users/Users';
import UsersForTest from '../components/usersForTest/UsersForTest';
import { AboutPage } from '../pages/aboutPage/AboutPage';
import { ErrorPage } from '../pages/errorPage/ErrorPage';
import HelloPage from '../pages/helloPage/HelloPage';
import { MainPage } from '../pages/mainPage/MainPage';
import { UserDetailsPage } from '../pages/userDetailsPage/UserDetailsPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users' element={<Users />} />
            <Route path='/hello' element={<HelloPage />} />
            <Route path='/users-test' element={<UsersForTest />} />
            <Route path='/users/:id' element={<UserDetailsPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;