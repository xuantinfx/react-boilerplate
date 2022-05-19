import React from 'react';
import { Link } from 'react-router-dom';

const PermissionsDenied = () => (
  <div>
    <h1>PermissionDenied!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default PermissionsDenied;
