import{r as e,cp as s,x as a,j as t,f as r,a5 as i,ap as n,cd as c,I as l}from"./index-e10d90b5.js";import{R as o,C as p}from"./row-9897f27e.js";import{T as x}from"./index-e32cba8b.js";import"./CheckOutlined-2df8380c.js";import"./styleChecker-c966bf27.js";function d(){const{copyFn:d}=function(){const[a,t]=e.useState(null),{notification:r}=s.useApp();return{copiedText:a,copyFn:async e=>{if(!navigator?.clipboard)return!1;try{return await navigator.clipboard.writeText(e),t(e),r.success({message:"Copied!"}),!0}catch(s){return t(null),!1}}}}(),[u,j]=e.useState("https://www.npmjs.com/package/"),m=a.lorem.paragraphs({min:3,max:5}),h=t.jsx(n,{title:"Copy",children:t.jsx(c,{className:"text-gray",onClick:()=>d(u),children:t.jsx(l,{icon:"eva:copy-fill",size:20})})});return t.jsx(r,{children:t.jsxs(o,{gutter:[16,16],children:[t.jsxs(p,{span:24,md:12,children:[t.jsx(x.Title,{level:5,children:"ON CHANGE"}),t.jsx(i,{suffix:h,value:u,onChange:e=>j(e.target.value)})]}),t.jsxs(p,{span:24,md:12,children:[t.jsx(x.Title,{level:5,children:"ON DOUBLE CLICK"}),t.jsx(x,{onDoubleClick:()=>d(m),children:m})]})]})})}export{d as default};