import{aq as h,w as m,A as e,ar as u,V as t,a2 as i,as as r,P as x}from"./index-03a00a18.js";import{R as s}from"./index-6deb05f8.js";import{P as p}from"./Pagination-9b45d3e4.js";import"./index-6f2321b0.js";import"./index-4328edba.js";function v(){const{setLocale:n,locale:l,language:{icon:o,label:c}}=h(),{colorPrimary:a}=m();return e.jsxs(u,{direction:"vertical",size:"middle",style:{display:"flex"},children:[e.jsx(t.Link,{href:"https://www.i18next.com/",style:{color:a},children:"https://www.i18next.com"}),e.jsx(t.Link,{href:"https://ant.design/docs/react/i18n-cn",style:{color:a},children:"https://ant.design/docs/react/i18n-cn"}),e.jsxs(i,{title:"Flexible",children:[e.jsxs(s.Group,{onChange:d=>n(d.target.value),value:l,children:[e.jsx(s,{value:r.en_US,children:"English"}),e.jsx(s,{value:r.zh_CN,children:"Chinese"})]}),e.jsxs("div",{className:"flex items-center text-4xl",children:[e.jsx(x,{icon:o,className:"mr-4 rounded-md",size:"30"}),c]})]}),e.jsx(i,{title:"System",children:e.jsx(p,{defaultCurrent:1,total:50,showSizeChanger:!0,showQuickJumper:!0})})]})}export{v as default};