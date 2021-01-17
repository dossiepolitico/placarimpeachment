import * as React from 'react';
import Nav from './nav';

const MainLayout: React.FC = ({ children }) => (
    <div>
        <Nav />
        {children}
    </div>
);

export default MainLayout;
