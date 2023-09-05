import{s as n,j as e,L as r,a,H as s,r as d,O as c}from"./index-bdfd1d7d.js";import{G as t}from"./iconBase-20eb0707.js";import l from"./Loader-9b79288c.js";const p=n.footer`
  color: #dfe3ee;
  background-color: #3b5998;

  a {
    color: #dfe3ee;

    &:hover {
      color: #f7f7f7;
    }
  }
`,h=n.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,i=n.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`;function u(){return e.jsx(p,{children:e.jsx(i,{children:e.jsxs("p",{children:[" ","© 2023 Contacts App. All rights reserved. Designed and Developed by"," ",e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const f=n.header`
  position: sticky;
  top: 0;
  background-color: #3b5998;
  z-index: 10;

  .header .menu-btn:checked ~ .nav {
    position: absolute;
    top: -50%;
    /* left: -50%; */
    transform: translate(-50%, 50vh);
  }

  .header .menu-btn:checked ~ .header__login-btn {
    transform: translateY(0);
  }

  .header .menu-icon {
    cursor: pointer;
    position: relative;
    user-select: none;
    display: none;
    background: #ffecb3;
    border-radius: 4px;
    padding: 16px;
    order: 5;
  }

  .header .menu-icon .nav-icon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .nav-icon:before,
  .header .menu-icon .nav-icon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .nav-icon:before {
    top: 5px;
  }

  .header .menu-icon .nav-icon:after {
    top: -5px;
  }

  .header .menu-btn {
    display: none;
    order: 6;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:before {
    transform: rotate(-45deg);
    top: 0;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:after {
    transform: rotate(45deg);
    top: 0;
  }
`,x=n.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 5px;
`;function g(o){return t({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M288 336l80-80-80-80M80 256h272"}}]})(o)}const b=n(r)`
  order: 5;
  margin-top: 0;
  background: transparent;
  border-width: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    stroke: #dfe3ee;
  }

  &:hover {
    svg {
      stroke: #f7f7f7;
    }
  }
`;function k(){return e.jsx(b,{to:a,children:e.jsx(g,{})})}function m(o){return t({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 2H19.0049C20.1068 2 21 2.89821 21 3.9908V20.0092C21 21.1087 20.1074 22 19.0049 22H3V2ZM7 4H5V20H7V4ZM9 20H19V4H9V20ZM11 16C11 14.3431 12.3431 13 14 13C15.6569 13 17 14.3431 17 16H11ZM14 12C12.8954 12 12 11.1046 12 10C12 8.89543 12.8954 8 14 8C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12ZM22 6H24V10H22V6ZM22 12H24V16H22V12Z"}}]})(o)}const v=n.div`
  order: 1;
  flex-grow: 0;

  a {
    display: flex;
  }

  p {
    background-color: transparent;
    padding: 8px;
    color: #dfe3ee;
    font-size: 20px;
    font-weight: bold;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: #dfe3ee;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    p,
    svg {
      fill: #f7f7f7;
      color: #f7f7f7;
    }
  }
`;function j(){return e.jsx(v,{children:e.jsxs(r,{to:s,children:[e.jsx(m,{}),e.jsx("p",{children:"Contacts book"})]})})}n.button`
  order: 5;
  margin-top: 0;
  background: transparent;
  border-width: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    stroke: #dfe3ee;
  }

  &:hover {
    svg {
      stroke: #f7f7f7;
    }
  }
`;function w(){return e.jsx(f,{children:e.jsxs(x,{children:[e.jsx(j,{}),e.jsx(k,{})]})})}const y=n.main`
  flex-grow: 1;
  background-color: #f7f7f7;
  color: #3b5998;
`;function H(){return e.jsx(y,{children:e.jsx(i,{children:e.jsx(d.Suspense,{fallback:e.jsx(l,{}),children:e.jsx(c,{})})})})}function V(){return e.jsxs(h,{children:[e.jsx(w,{}),e.jsx(H,{}),e.jsx(u,{})]})}export{V as default};
