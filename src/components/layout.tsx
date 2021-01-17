import * as React from 'react';
import Header from './header';

const MainLayout: React.FC = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

export default MainLayout;
