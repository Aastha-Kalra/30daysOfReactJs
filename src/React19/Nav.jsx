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
      <Link className="bg-yellow-500 px-4 py-2" to="/seo">
        SEO
      </Link>
      <Link className="bg-yellow-500 px-4 py-2" to="/suspense">
        Suspense
      </Link>
      <Link className="bg-yellow-500 px-4 py-2" to="/web">
        Web Components
      </Link>
      <Link className="bg-yellow-500 px-4 py-2" to="/ref">
        ref
      </Link>
      <Link className="bg-yellow-500 px-4 py-2" to="/ref">
        Use Hook
      </Link>
    </div>
  );
};

export default Nav;
