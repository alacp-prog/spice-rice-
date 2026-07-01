import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {

  return (
    <div className="flex flex-col min-h-screen ">
        <Outlet />
    </div>
  );
};

export default PublicLayout;
