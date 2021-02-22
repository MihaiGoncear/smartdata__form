import React from 'react';
import { CustomLink } from "./CustomLinks";

export function NavigationBar() {
  return (
    <nav>
      <CustomLink to='/' label="Form" />
      <CustomLink to='/result' label="Result" />
    </nav>
  )
}