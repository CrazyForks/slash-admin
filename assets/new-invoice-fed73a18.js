import{j as e,y as s,a3 as t,p as i,cd as r,I as a}from"./index-e10d90b5.js";import{T as d}from"./Table-e04a1681.js";import{C as o}from"./index-8ede3429.js";import{T as n}from"./index-e32cba8b.js";import"./styleChecker-c966bf27.js";import"./addEventListener-310656fe.js";import"./List-f2ae8f1c.js";import"./useIcons-c2ed788f.js";import"./CheckOutlined-2df8380c.js";import"./Pagination-3a3120c1.js";import"./index-17c6120b.js";import"./index-100dd9d8.js";import"./index-2bbc48a8.js";import"./index-3dac4e72.js";import"./index-f123773b.js";import"./index-5116b112.js";import"./iconUtil-0d35ad4e.js";import"./extendsObject-8d078517.js";function c(){const c=[{title:"InvoiceId",dataIndex:"id",key:"id",render:s=>e.jsx("span",{children:s})},{title:"Category",dataIndex:"category",key:"category"},{title:"Price",dataIndex:"price",key:"price",render:s=>e.jsx("span",{children:s})},{title:"Status",key:"status",dataIndex:"status",render:s=>{const i=s;let r="success";return"Progress"===i&&(r="gold"),"Out of Date"===i&&(r="red"),e.jsx(t,{color:r,children:i})}},{title:"Action",key:"action",render:()=>e.jsx(i,{size:"middle",children:e.jsx(r,{children:e.jsx(a,{icon:"fontisto:more-v-a"})})})}];return e.jsxs(o,{className:"flex-col",children:[e.jsx("header",{className:"self-start",children:e.jsx(n.Title,{level:5,children:"New Invoice"})}),e.jsx("main",{className:"w-full",children:e.jsx(s,{children:e.jsx(d,{columns:c,dataSource:[{key:"1",id:"INV-1990",category:"Android",price:"$83.74",status:"Paid"},{key:"2",id:"INV-1991",category:"Mac",price:"$97.14",status:"Out of Date"},{key:"3",id:"INV-1992",category:"Windows",price:"$68.71",status:"Progress"},{key:"4",id:"INV-1993",category:"Android",price:"$85.21",status:"Paid"},{key:"5",id:"INV-1994",category:"Mac",price:"$53.17",status:"Paid"}]})})})]})}export{c as default};