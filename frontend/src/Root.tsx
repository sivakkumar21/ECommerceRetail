import { Outlet } from "react-router-dom";

import React from "react";

function Root() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Root;
