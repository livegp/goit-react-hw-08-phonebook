import{s as o,r as d,u as A,a as F,j as e,Q as L}from"./index-a7874eae.js";import{n as l}from"./index.browser-7e542916.js";const z=o.form`
  color: #3b5998;
`,N=o.ul`
  display: flex;
  flex-direction: column;
`,c=o.li`
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
`,P=o.button`
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
`;function S(){const[g,f]=d.useState(""),[s,m]=d.useState(""),[r,p]=d.useState(""),[w,{isLoading:y}]=A(),{data:u}=F(),x=l(),h=l(),b=l(),i=({target:{name:t,value:n}})=>{t==="name"&&f(n),t==="email"?m(n):t==="password"&&p(n)},j=async t=>{if(t.preventDefault(),u.some(a=>a.email.toLowerCase()===s.toLowerCase())){alert(`${s} is already in contacts`);return}if(u.some(a=>a.password===r)){alert(`The number ${r} is already in contacts`);return}const E={email:s,password:r};try{await w(E),C()}catch(a){L.error("Error adding contact:",a)}},C=()=>{m(""),p("")};return e.jsxs(z,{onSubmit:j,children:[e.jsxs(N,{children:[e.jsxs(c,{children:[e.jsx("label",{htmlFor:x,children:"Name"}),e.jsx("input",{type:"text",id:x,name:"name",value:g,onChange:i,pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),e.jsxs(c,{children:[e.jsx("label",{htmlFor:h,children:"Email"}),e.jsx("input",{type:"email",id:h,name:"email",value:s,onChange:i,title:"Email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),e.jsxs(c,{children:[e.jsx("label",{htmlFor:b,children:"Password"}),e.jsx("input",{type:"password",id:b,name:"password",value:r,onChange:i,title:"Password must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),e.jsx(P,{type:"submit",disabled:y,children:"Registration"})]})}function B(){return e.jsx(S,{})}export{B as default};
