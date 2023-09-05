import{s,L as g,r as n,k as f,j as e,a as y,Q as u}from"./index-9ff7e803.js";const j=s.form`
  color: #3b5998;
`,i=s.li`
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
`,w=s.button`
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
`,E=s(g)`
  color: #3b5998;

  &:hover {
    color: #8b9dc3;
  }
`;function k(){const[l,m]=n.useState(""),[c,p]=n.useState(""),[d,h]=n.useState(""),[b]=f(),x=async t=>{t.preventDefault();const o={userName:l,email:c,password:d};try{const r=await b(o).unwrap();u.success("User registered successfully:",r)}catch(r){u.error("Registration failed:",r)}},a=t=>{const{name:o,value:r}=t.target;switch(o){case"userName":m(r);break;case"userEmail":p(r);break;case"userPassword":h(r);break}};return e.jsxs(j,{onSubmit:x,children:[e.jsxs("ul",{children:[e.jsx(i,{children:e.jsxs("label",{children:["Name",e.jsx("input",{type:"text",name:"userName",value:l,onChange:a,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter your name...",required:!0})]})}),e.jsx(i,{children:e.jsxs("label",{children:["Email",e.jsx("input",{type:"email",name:"userEmail",value:c,onChange:a,title:"The e-mail address must contain the following characters: letters, numbers, period, symbols before the @ symbol",placeholder:"Enter your email...",required:!0})]})}),e.jsx(i,{children:e.jsxs("label",{children:["Password",e.jsx("input",{type:"password",name:"userPassword",value:d,onChange:a,title:"Password must be at least 8 characters long and include a combination of letters, numbers, and special characters",placeholder:"Enter your password...",minLength:8,required:!0})]})})]}),e.jsx(w,{type:"submit",children:"Registration"}),e.jsx(E,{to:y,children:"Already have an account"})]})}function L(){return e.jsx(k,{})}export{L as default};
