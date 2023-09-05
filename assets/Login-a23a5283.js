import{s as o,L as b,r as l,h as g,j as e,i as x,Q as c}from"./index-9ff7e803.js";const f=o.form`
  color: #3b5998;
`,d=o.li`
  text-align: left;
  margin: 0 0 10px;

  label {
    display: grid;
    gap: 5px;
  }

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`,j=o.button`
  background-color: #dfe3ee;
  color: #3b5998;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`,w=o(b)`
  color: #3b5998;

  &:hover {
    color: #8b9dc3;
  }
`;function y(){const[a,u]=l.useState(""),[n,m]=l.useState(""),[p]=g(),h=async r=>{r.preventDefault();const s={email:a,password:n};try{const t=await p(s).unwrap();c.success("Login successful:",t)}catch(t){c.error("Login failed:",t)}},i=({target:{name:r,value:s}})=>{r==="userEmail"?u(s):r==="userPassword"&&m(s)};return e.jsxs(f,{onSubmit:h,children:[e.jsxs("ul",{children:[e.jsx(d,{children:e.jsxs("label",{children:["Email",e.jsx("input",{type:"email",name:"userEmail",value:a,onChange:i,title:"The e-mail address must contain the following characters: letters, numbers, period, symbols before the @ symbol",placeholder:"Enter your email...",required:!0})]})}),e.jsx(d,{children:e.jsxs("label",{children:["Password",e.jsx("input",{type:"password",name:"userPassword",value:n,onChange:i,title:"Password must be at least 8 characters long and include a combination of letters, numbers, and special characters",placeholder:"Enter your password...",minLength:8,required:!0})]})})]}),e.jsx(j,{type:"submit",children:"Login"}),e.jsx(w,{to:x,children:"Already have an account"})]})}function L(){return e.jsx(y,{})}export{L as default};
