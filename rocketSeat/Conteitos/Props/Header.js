import React from 'react';

function Header(props){
  return(
    <header>
      <h1>{props.title}</h1>
      <h2>{props.children}</h2>
    </header>
  );
}

export default Header;