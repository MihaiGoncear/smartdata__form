import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


export function CustomLink({ label, to }) {
    let match = useRouteMatch({
      path: to,
      exact: true
    });
  
    return (
      <p className={match ? "active" : "inactive"}>
        <Link to={to}>{label}</Link>
      </p>
    );
  }