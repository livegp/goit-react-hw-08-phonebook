import{s as o,r as p,u as j,a as E,j as s,Q as C}from"./index-a7874eae.js";import{n as x}from"./index.browser-7e542916.js";const L=o.form`
  color: #3b5998;
`,F=o.ul`
  display: flex;
  flex-direction: column;
`,h=o.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  text-align: left;
  margin: 0 0 10px;

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`,A=o.button`
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
`;function P(){const[e,i]=p.useState(""),[a,d]=p.useState(""),[b,{isLoading:f}]=j(),{data:c}=E(),l=x(),m=x(),u=({target:{name:r,value:n}})=>{r==="email"?i(n):r==="password"&&d(n)},g=async r=>{if(r.preventDefault(),c.some(t=>t.email.toLowerCase()===e.toLowerCase())){alert(`${e} is already in contacts`);return}if(c.some(t=>t.password===a)){alert(`The number ${a} is already in contacts`);return}const y={email:e,password:a};try{await b(y),w()}catch(t){C.error("Error adding contact:",t)}},w=()=>{i(""),d("")};return s.jsxs(L,{onSubmit:g,children:[s.jsxs(F,{children:[s.jsxs(h,{children:[s.jsx("label",{htmlFor:l,children:"Email"}),s.jsx("input",{type:"email",id:l,name:"email",value:e,onChange:u,title:"email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),s.jsxs(h,{children:[s.jsx("label",{htmlFor:m,children:"Password"}),s.jsx("input",{type:"password",id:m,name:"password",value:a,onChange:u,title:"password number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),s.jsx(A,{type:"submit",disabled:f,children:"Login"})]})}function k(){return s.jsx(P,{})}export{k as default};
