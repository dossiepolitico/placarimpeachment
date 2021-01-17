import { PageProps } from 'gatsby';
import * as React from 'react';

const Error404Page: React.FC<PageProps> = () => (
    <div>
        <h1>You are here!</h1>
        <h2>But nothing found for you #404</h2>
    </div>
);

export default Error404Page;
