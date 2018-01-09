import React from 'react';

const Header = ({ message = 'Header' }) => {
    return(
        <h2 className='header text-center'>
            {message}
        </h2>
    );
};

export default Header;