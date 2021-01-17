import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
    return (
        <div style={{ height: '48px' }} className="flex justify-between items-center px-3 bg-green-500">
            <p className="text-yellow-300 font-bold">DOSSIÊ POLÍTICO</p>
            <div>
                <FontAwesomeIcon icon={faTwitter} color="white" className="mx-2 text-xl" />
                <FontAwesomeIcon icon={faFacebookF} color="white" className="mx-2 text-xl" />
            </div>
        </div>
    );
};

export default Header;
