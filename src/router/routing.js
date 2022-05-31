import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import SignUp from "../pages/signUp";

export default function BasicExample() {
  return (
    <Router>
      <div>
          <Routes>
          {/* <Route path="/" element={<SignUp />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}


