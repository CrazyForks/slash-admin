import{r as p,j as t,f as x,a6 as u,cY as f,cW as a,a3 as h,cd as i,I as s}from"./index-00bc0960.js";import{T as E}from"./Table-ca9a792f.js";import{RoleModal as j}from"./role-modal-a774c67c.js";import{P as w}from"./index-0037fedd.js";import"./styleChecker-cd6b40ad.js";import"./addEventListener-db3041bc.js";import"./List-066cd3b0.js";import"./useIcons-7028c4e8.js";import"./CheckOutlined-ce1b14da.js";import"./Pagination-45944b73.js";import"./index-3b0fbccb.js";import"./index-c3bb9433.js";import"./index-e28b0098.js";import"./index-057f0045.js";import"./index-0570ba04.js";import"./index-150fd04b.js";import"./iconUtil-5f60fcab.js";import"./extendsObject-1e0cd48d.js";import"./index-3d9030f5.js";import"./row-d64c6549.js";import"./index-a10964a0.js";import"./index-e6e2d9b7.js";const I=f,l={id:"",name:"",label:"",status:a.ENABLE,permission:[]};function K(){const[n,o]=p.useState({formValue:{...l},title:"New",show:!1,onOk:()=>{o(e=>({...e,show:!1}))},onCancel:()=>{o(e=>({...e,show:!1}))}}),c=[{title:"Name",dataIndex:"name",width:300},{title:"Label",dataIndex:"label"},{title:"Order",dataIndex:"order",width:60},{title:"Status",dataIndex:"status",align:"center",width:120,render:e=>t.jsx(h,{color:e===a.DISABLE?"error":"success",children:e===a.DISABLE?"Disable":"Enable"})},{title:"Desc",dataIndex:"desc"},{title:"Action",key:"operation",align:"center",width:100,render:(e,r)=>t.jsxs("div",{className:"flex w-full justify-center text-gray",children:[t.jsx(i,{onClick:()=>d(r),children:t.jsx(s,{icon:"solar:pen-bold-duotone",size:18})}),t.jsx(w,{title:"Delete the Role",okText:"Yes",cancelText:"No",placement:"left",children:t.jsx(i,{children:t.jsx(s,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}],m=()=>{o(e=>({...e,show:!0,title:"Create New",formValue:{...e.formValue,...l}}))},d=e=>{o(r=>({...r,show:!0,title:"Edit",formValue:e}))};return t.jsxs(x,{title:"Role List",extra:t.jsx(u,{type:"primary",onClick:m,children:"New"}),children:[t.jsx(E,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:c,dataSource:I}),t.jsx(j,{...n})]})}export{K as default};