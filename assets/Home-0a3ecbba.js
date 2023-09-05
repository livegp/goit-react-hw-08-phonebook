import{s as i,r as m,u as L,b as y,j as t,Q as x,c as C,d as v,e as E,f as F,g as A}from"./index-80c8d1ed.js";import{G as w}from"./iconBase-751df75a.js";import P from"./Loader-7eca419b.js";const D=i.form`
  color: #3b5998;
`,f=i.li`
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
`,k=i.button`
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
`;function M(){const[e,o]=m.useState(""),[n,s]=m.useState(""),[p,{isLoading:h}]=L(),{data:u}=y(),c=({target:{name:a,value:b}})=>{a==="name"?o(b):a==="phone"&&s(b)},r=async a=>{if(a.preventDefault(),u.some(d=>d.name.toLowerCase()===e.toLowerCase())){alert(`${e} is already in contacts`);return}if(u.some(d=>d.phone===n)){alert(`The number ${n} is already in contacts`);return}const z={name:e,phone:n};try{await p(z),l()}catch(d){x.error("Error adding contact:",d)}},l=()=>{o(""),s("")};return t.jsxs(D,{onSubmit:r,children:[t.jsxs("ul",{children:[t.jsx(f,{children:t.jsxs("label",{children:["Name",t.jsx("input",{type:"text",name:"name",value:e,onChange:c,pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}),t.jsx(f,{children:t.jsxs("label",{children:["Phone",t.jsx("input",{type:"tel",name:"phone",value:n,onChange:c,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})})]}),t.jsx(k,{type:"submit",disabled:h,children:h?"Adding...":"Add contact"})]})}function g(e){return w({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"}}]})(e)}function j(e){return w({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z"}}]})(e)}const N=i.table`
  margin: 0 auto;
  table-layout: auto;
  width: 100%;
  text-align: center;
  box-shadow:
    0 1px 6px rgb(46 47 66 / 8%),
    0 1px 1px rgb(46 47 66 / 16%),
    0 2px 1px rgb(46 47 66 / 8%);
  overflow: hidden;

  th,
  td {
    padding: 10px;
  }

  th:first-child {
    width: 100%;
  }

  td:not(:first-child) {
    white-space: nowrap;
  }

  td:nth-child(-n + 2) {
    text-align: left;
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid #8b9dc3;
  }

  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }

  button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: #3b5998;
    cursor: pointer;
  }

  button:hover {
    color: #ff1919;
  }
`,G=i.thead`
  background-color: #3b5998;
  color: #f7f7f7;
`;function S(){const e=C(v),{data:o,error:n,isLoading:s}=y(),[p,{isLoading:h}]=E(),u=async r=>{try{await p(r),x.success("Contact deleted successfully")}catch(l){x.error("Error deleting contact:",l)}};if(s)return t.jsx(P,{});if(n)return x.error("Error deleting contact:",n);const c=o.filter(r=>r.name.toLowerCase().includes(e.toLowerCase()));return c.length?t.jsxs(N,{children:[t.jsx(G,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Phone"}),t.jsx("th",{children:t.jsx(j,{size:20})}),t.jsx("th",{children:t.jsx(g,{size:20})})]})}),t.jsx("tbody",{children:c.map(({id:r,name:l,phone:a})=>t.jsxs("tr",{children:[t.jsx("td",{children:l}),t.jsx("td",{children:a}),t.jsx("td",{children:t.jsx("button",{type:"button",children:t.jsx(j,{size:20})})}),t.jsx("td",{children:t.jsx("button",{type:"button",disabled:h,onClick:()=>u(r),children:t.jsx(g,{size:20})})})]},r))})]}):t.jsx("p",{children:"No contacts"})}const T=i.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;

  labael {
    text-align: left;
  }

  input {
    padding: 10px;
    border-color: #3b5998;
    border-radius: 5px;
  }
`;function B(){const e=F(),o=C(v),n=s=>{e(A(s.currentTarget.value))};return t.jsxs(T,{children:[t.jsx("label",{htmlFor:"filter",children:"Find contacts by name"}),t.jsx("input",{type:"search",name:"filter",value:o,onChange:n})]})}function Q(){return t.jsxs(t.Fragment,{children:[t.jsx(M,{}),t.jsx(B,{}),t.jsx(S,{})]})}export{Q as default};
