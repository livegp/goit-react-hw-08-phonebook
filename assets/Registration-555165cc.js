import{s,L as m,k as p,j as e,a as h,Q as o}from"./index-80c8d1ed.js";const b=s.form`
  color: #3b5998;
`,a=s.li`
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
`,x=s.button`
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
`,g=s(m)`
  color: #3b5998;

  &:hover {
    color: #8b9dc3;
  }
`;function f(){const[n]=p(),l=async r=>{r.preventDefault();const i=r.currentTarget.elements.userName.value,c=r.currentTarget.elements.userEmail.value,d=r.currentTarget.elements.userPassword.value,u={name:i,email:c,password:d};try{const t=await n(u).unwrap();o.success("User registered successfully:",t)}catch(t){o.error("Registration failed:",t)}};return e.jsxs(b,{onSubmit:l,children:[e.jsxs("ul",{children:[e.jsx(a,{children:e.jsxs("label",{children:["Name",e.jsx("input",{type:"text",name:"userName",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter your name...",required:!0})]})}),e.jsx(a,{children:e.jsxs("label",{children:["Email",e.jsx("input",{type:"email",name:"userEmail",title:"The e-mail address must contain the following characters: letters, numbers, period, symbols before the @ symbol",placeholder:"Enter your email...",required:!0})]})}),e.jsx(a,{children:e.jsxs("label",{children:["Password",e.jsx("input",{type:"password",name:"userPassword",title:"Password must be at least 8 characters long and include a combination of letters, numbers, and special characters",placeholder:"Enter your password...",minLength:8,required:!0})]})})]}),e.jsx(x,{type:"submit",children:"Registration"}),e.jsx(g,{to:h,children:"Already have an account"})]})}function j(){return e.jsx(f,{})}export{j as default};
