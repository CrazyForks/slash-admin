import{r as e,j as n,f as s}from"./index-e10d90b5.js";import t from"./control-panel-799c0125.js";import o from"./container-2791cdc9.js";import i from"./toolbar-59234c04.js";import{R as a,C as r}from"./row-9897f27e.js";import"./bounce-60412db4.js";import"./transition-8bc41415.js";import"./index-85185b56.js";import"./fade-6abf311c.js";import"./index-e32cba8b.js";import"./CheckOutlined-2df8380c.js";import"./styleChecker-c966bf27.js";import"./ReloadOutlined-d3513295.js";function l(){const l=e.useMemo((()=>({selectedVariant:"slideInUp"})),[]),[p,c]=e.useState(l.selectedVariant);return n.jsxs(s,{children:[n.jsx(a,{children:n.jsx(r,{xs:24,md:18,children:n.jsx(i,{onRefresh:()=>{c(l.selectedVariant)}})})}),n.jsxs(a,{justify:"space-between",children:[n.jsx(r,{xs:24,md:18,children:n.jsx(o,{variant:p})}),n.jsx(r,{xs:24,md:5,children:n.jsx(t,{variantKey:d,selectedVariant:p,onChangeVarient:e=>c(e)})})]})]})}const d=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}];export{l as default};