import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      Login
      <Link to="/signup">
        <button>Cadrastrar</button>
      </Link>
    </div>
  );
}
