import{s,r as g,u as A,a as v,j as t,Q as x,G as w,b as z,c as L,d as P,L as D,e as S,f as k}from"./index-9b7857b2.js";let b=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((r,e)=>(e&=63,e<36?r+=e.toString(36):e<62?r+=(e-26).toString(36).toUpperCase():e>62?r+="-":r+="_",r),"");const M=s.form`
  color: #3b5998;
`,N=s.ul`
  display: flex;
  flex-direction: column;
`,j=s.li`
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
`,G=s.button`
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
`;function T(){const[n,r]=g.useState(""),[e,a]=g.useState(""),[p,{isLoading:d}]=A(),{data:h}=v(),c=b(),o=b(),i=({target:{name:u,value:m}})=>{u==="name"?r(m):u==="phone"&&a(m)},f=async u=>{if(u.preventDefault(),h.some(l=>l.name.toLowerCase()===n.toLowerCase())){alert(`${n} is already in contacts`);return}if(h.some(l=>l.phone===e)){alert(`The number ${e} is already in contacts`);return}const E={name:n,phone:e};try{await p(E),F()}catch(l){x.error("Error adding contact:",l)}},F=()=>{r(""),a("")};return t.jsxs(M,{onSubmit:f,children:[t.jsxs(N,{children:[t.jsxs(j,{children:[t.jsx("label",{htmlFor:c,children:"Name"}),t.jsx("input",{type:"text",id:c,name:"name",value:n,onChange:i,pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),t.jsxs(j,{children:[t.jsx("label",{htmlFor:o,children:"Phone"}),t.jsx("input",{type:"tel",id:o,name:"phone",value:e,onChange:i,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),t.jsx(G,{type:"submit",disabled:d,children:d?"Adding...":"Add contact"})]})}function y(n){return w({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"}}]})(n)}function C(n){return w({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z"}}]})(n)}const B=s.table`
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
`,I=s.thead`
  background-color: #3b5998;
  color: #f7f7f7;
`;function $(){const n=z(L),{data:r,error:e,isLoading:a}=v(),[p,{isLoading:d}]=P(),h=async o=>{try{await p(o),x.success("Contact deleted successfully")}catch(i){x.error("Error deleting contact:",i)}};if(a)return t.jsx(D,{});if(e)return x.error("Error deleting contact:",e);const c=r.filter(o=>o.name.toLowerCase().includes(n.toLowerCase()));return c.length?t.jsxs(B,{children:[t.jsx(I,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Phone"}),t.jsx("th",{children:t.jsx(C,{size:20})}),t.jsx("th",{children:t.jsx(y,{size:20})})]})}),t.jsx("tbody",{children:c.map(({id:o,name:i,phone:f})=>t.jsxs("tr",{children:[t.jsx("td",{children:i}),t.jsx("td",{children:f}),t.jsx("td",{children:t.jsx("button",{type:"button",children:t.jsx(C,{size:20})})}),t.jsx("td",{children:t.jsx("button",{type:"button",disabled:d,onClick:()=>h(o),children:t.jsx(y,{size:20})})})]},o))})]}):t.jsx("p",{children:"No contacts"})}const Z=s.form`
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
`;function q(){const n=S(),r=z(L),e=a=>{n(k(a.currentTarget.value))};return t.jsxs(Z,{children:[t.jsx("label",{htmlFor:"filter",children:"Find contacts by name"}),t.jsx("input",{type:"text",name:"filter",value:r,onChange:e})]})}function R(){return t.jsxs(t.Fragment,{children:[t.jsx(T,{}),t.jsx(q,{}),t.jsx($,{})]})}export{R as default};
