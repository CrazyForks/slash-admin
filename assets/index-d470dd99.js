import{b as e,j as s,f as t,a6 as i,c$ as r,a3 as n,cW as a,cd as l,I as o}from"./index-e10d90b5.js";import{T as c}from"./Table-e04a1681.js";import{P as d}from"./index-28b4cdd2.js";import"./styleChecker-c966bf27.js";import"./addEventListener-310656fe.js";import"./List-f2ae8f1c.js";import"./useIcons-c2ed788f.js";import"./CheckOutlined-2df8380c.js";import"./Pagination-3a3120c1.js";import"./index-17c6120b.js";import"./index-100dd9d8.js";import"./index-2bbc48a8.js";import"./index-3dac4e72.js";import"./index-f123773b.js";import"./index-5116b112.js";import"./iconUtil-0d35ad4e.js";import"./extendsObject-8d078517.js";import"./index-05e42875.js";const x=r;function m(){const{colorTextSecondary:r}=e(),m=[{title:"Name",dataIndex:"name",width:300,render:(e,t)=>s.jsxs("div",{className:"flex",children:[s.jsx("img",{alt:"",src:t.avatar,className:"h-10 w-10 rounded-full"}),s.jsxs("div",{className:"ml-2 flex flex-col",children:[s.jsx("span",{className:"text-sm",children:t.username}),s.jsx("span",{style:{color:r},className:"text-xs",children:t.email})]})]})},{title:"Role",dataIndex:"role",align:"center",width:120,render:e=>s.jsx(n,{color:"cyan",children:e.name})},{title:"Status",dataIndex:"status",align:"center",width:120,render:e=>s.jsx(n,{color:e===a.DISABLE?"error":"success",children:e===a.DISABLE?"Disable":"Enable"})},{title:"Action",key:"operation",align:"center",width:100,render:()=>s.jsxs("div",{className:"flex w-full justify-center text-gray",children:[s.jsx(l,{onClick:()=>{},children:s.jsx(o,{icon:"solar:pen-bold-duotone",size:18})}),s.jsx(d,{title:"Delete the User",okText:"Yes",cancelText:"No",placement:"left",children:s.jsx(l,{children:s.jsx(o,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}];return s.jsx(t,{title:"User List",extra:s.jsx(i,{type:"primary",onClick:()=>{},children:"New"}),children:s.jsx(c,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:m,dataSource:x})})}export{m as default};