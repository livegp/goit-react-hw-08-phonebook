import{s as a,L,r as d,u as A,b as F,j as e,a as N,Q as v}from"./index-8e437d07.js";import{n as l}from"./index.browser-7e542916.js";const I=a.form`
  color: #3b5998;
`,P=a.ul`
  display: flex;
  flex-direction: column;
`,c=a.li`
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
`,S=a.button`
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
`,k=a(L)`
  color: #3b5998;

  &:hover {
    color: #8b9dc3;
  }
`;function z(){const[m,g]=d.useState(""),[r,u]=d.useState(""),[o,p]=d.useState(""),[w,{isLoading:y}]=A(),{data:x}=F(),h=l(),b=l(),f=l(),i=({target:{name:t,value:n}})=>{t==="name"?g(n):t==="email"?u(n):t==="password"&&p(n)},j=async t=>{if(t.preventDefault(),x.some(s=>s.email.toLowerCase()===r.toLowerCase())){alert(`${r} is already in contacts`);return}if(x.some(s=>s.password===o)){alert(`The number ${o} is already in contacts`);return}const C={userName:m,email:r,password:o};try{await w(C),E()}catch(s){v.error("Error adding contact:",s)}},E=()=>{u(""),p("")};return e.jsxs(I,{onSubmit:j,children:[e.jsxs(P,{children:[e.jsxs(c,{children:[e.jsx("label",{htmlFor:h,children:"Name"}),e.jsx("input",{type:"text",id:h,name:"name",value:m,onChange:i,pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),e.jsxs(c,{children:[e.jsx("label",{htmlFor:b,children:"Email"}),e.jsx("input",{type:"email",id:b,name:"email",value:r,onChange:i,title:"The e-mail address must contain the following characters: letters, numbers, period, symbols before the @ symbol",required:!0})]}),e.jsxs(c,{children:[e.jsx("label",{htmlFor:f,children:"Password"}),e.jsx("input",{type:"password",id:f,name:"password",value:o,onChange:i,title:"Password must be at least 8 characters long and include a combination of letters, numbers, and special characters",required:!0})]})]}),e.jsx(S,{type:"submit",disabled:y,children:"Registration"}),e.jsx(k,{to:N,children:"Already have an account"})]})}function Z(){return e.jsx(z,{})}export{Z as default};
