import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex gap-4 justify-center items-center text-green-800">
      <Link className="bg-yellow-500 px-4 py-2" to={"/"}>
        Compiler
      </Link>
      <Link className="bg-yellow-500 px-4 py-2" to="/actions">
        Actions
      </Link>
      <Link className="bg-yellow-500 px-4 py-2" to="/useServerUseClient">
        Use Server Use Cilent
      </Link>
      <Link className="bg-yellow-500 px-4 py-2" to="/">
        Compiler
      </Link>
      <Link className="bg-yellow-500 px-4 py-2" to="/">
        Compiler
      </Link>
    </div>
  );
};

export default Nav;
