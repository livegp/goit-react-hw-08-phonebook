import{s,L as j,r as p,u as y,b as L,j as t,h as C,Q as P}from"./index-8e437d07.js";import{n as x}from"./index.browser-7e542916.js";const R=s.form`
  color: #3b5998;
`,S=s.ul`
  display: flex;
  flex-direction: column;
`,b=s.li`
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
`,T=s.button`
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
`,k=s(j)`
  color: #3b5998;

  &:hover {
    color: #8b9dc3;
  }
`;function v(){const[o,i]=p.useState(""),[r,d]=p.useState(""),[h,{isLoading:f}]=y(),{data:c}=L(),l=x(),u=x(),m=({target:{name:a,value:n}})=>{a==="email"?i(n):a==="password"&&d(n)},g=async a=>{if(a.preventDefault(),c.some(e=>e.email.toLowerCase()===o.toLowerCase())){alert(`${o} is already in contacts`);return}if(c.some(e=>e.password===r)){alert(`The number ${r} is already in contacts`);return}const E={email:o,password:r};try{await h(E),w()}catch(e){P.error("Error adding contact:",e)}},w=()=>{i(""),d("")};return t.jsxs(R,{onSubmit:g,children:[t.jsxs(S,{children:[t.jsxs(b,{children:[t.jsx("label",{htmlFor:l,children:"Email"}),t.jsx("input",{type:"email",id:l,name:"email",value:o,onChange:m,title:"The e-mail address must contain the following characters: letters, numbers, period, symbols before the @ symbol",required:!0})]}),t.jsxs(b,{children:[t.jsx("label",{htmlFor:u,children:"Password"}),t.jsx("input",{type:"password",id:u,name:"password",value:r,onChange:m,title:"Password must be at least 8 characters long and include a combination of letters, numbers, and special characters",required:!0})]})]}),t.jsx(T,{type:"submit",disabled:f,children:"Login"}),t.jsx(k,{to:C,children:"Create an account"})]})}function A(){return t.jsx(v,{})}export{A as default};
