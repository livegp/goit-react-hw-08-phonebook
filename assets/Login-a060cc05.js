import{s as r,L as u,h as m,j as e,i as p,Q as t}from"./index-80c8d1ed.js";const b=r.form`
  color: #3b5998;
`,n=r.li`
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
`,h=r.button`
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
`,g=r(u)`
  color: #3b5998;

  &:hover {
    color: #8b9dc3;
  }
`;function x(){const[a]=m(),i=async s=>{s.preventDefault();const l=s.currentTarget.elements.userEmail.value,c=s.currentTarget.elements.userPassword.value,d={email:l,password:c};try{const o=await a(d).unwrap();t.success("Login successful:",o)}catch(o){t.error("Login failed:",o)}};return e.jsxs(b,{onSubmit:i,children:[e.jsxs("ul",{children:[e.jsx(n,{children:e.jsxs("label",{children:["Email",e.jsx("input",{type:"email",name:"userEmail",title:"The e-mail address must contain the following characters: letters, numbers, period, symbols before the @ symbol",placeholder:"Enter your email...",required:!0})]})}),e.jsx(n,{children:e.jsxs("label",{children:["Password",e.jsx("input",{type:"password",name:"userPassword",title:"Password must be at least 8 characters long and include a combination of letters, numbers, and special characters",placeholder:"Enter your password...",minLength:8,required:!0})]})})]}),e.jsx(h,{type:"submit",children:"Login"}),e.jsx(g,{to:p,children:"Already have an account"})]})}function j(){return e.jsx(x,{})}export{j as default};
