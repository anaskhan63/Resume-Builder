import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({Title, HrefLink, onClick}) => {
  return (
    <Link to={HrefLink}>
    <button onClick={onClick} className="inline-block rounded-full px-6 py-2  transition ease-linear duration-300 shadow-md bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-r hover:to-purple-500 hover:from-blue-500  text-white">
      {Title}
    </button>
    </Link>
  );
}

export default Button;
