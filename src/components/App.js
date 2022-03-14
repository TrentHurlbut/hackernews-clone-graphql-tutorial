import React from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className="ccenter w85">
            <Header />
            <div className="">
                <Routes>
                    <Route
                        path="/"
                        element={<LinkList />}
                    />
                    <Route
                        path="/create"
                        element={<CreateLink />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
