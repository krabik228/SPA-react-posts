import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from './../pages/PostIdPage';
import { routes } from './../router/index';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.id}
                    element={route.component}
                    path={route.path}
                    exact={route.path}
                />
            )}
            <Route
                path="*"
                element={<Navigate to="/error" />}
            />
        </Routes>
    )
}

export default AppRouter