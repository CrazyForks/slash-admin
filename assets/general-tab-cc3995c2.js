import{cp as e,ce as s,x as a,j as l,p as r,h as n,a6 as i,a5 as t}from"./index-e10d90b5.js";import{C as c}from"./index-8ede3429.js";import{d}from"./upload-avatar-8ad689d4.js";import"./format-number-da3df720.js";import{R as m,C as o}from"./row-9897f27e.js";import{F as j}from"./index-ec2ba882.js";import"./index-e32cba8b.js";import"./CheckOutlined-2df8380c.js";import"./styleChecker-c966bf27.js";import"./progress-7a48b90a.js";function x(){const{notification:x}=e.useApp(),{avatar:p,username:h,email:u}=s(),f={name:h,email:u,phone:a.phone.number(),address:a.location.county(),city:a.location.city(),code:a.location.zipCode(),about:a.lorem.paragraphs()};return l.jsxs(m,{gutter:[16,16],children:[l.jsx(o,{span:24,lg:8,children:l.jsxs(c,{className:"flex-col !px-6 !pb-10 !pt-20",children:[l.jsx(d,{defaultAvatar:p}),l.jsxs(r,{className:"py-6",children:[l.jsx("div",{children:"Public Profile"}),l.jsx(n,{size:"small"})]}),l.jsx(i,{type:"primary",danger:!0,children:"Delete User"})]})}),l.jsx(o,{span:24,lg:16,children:l.jsx(c,{children:l.jsxs(j,{layout:"vertical",initialValues:f,labelCol:{span:8},className:"w-full",children:[l.jsxs(m,{gutter:16,children:[l.jsx(o,{span:12,children:l.jsx(j.Item,{label:"Username",name:"name",children:l.jsx(t,{})})}),l.jsx(o,{span:12,children:l.jsx(j.Item,{label:"Email",name:"email",children:l.jsx(t,{})})})]}),l.jsxs(m,{gutter:16,children:[l.jsx(o,{span:12,children:l.jsx(j.Item,{label:"Phone",name:"phone",children:l.jsx(t,{})})}),l.jsx(o,{span:12,children:l.jsx(j.Item,{label:"Address",name:"address",children:l.jsx(t,{})})})]}),l.jsxs(m,{gutter:16,children:[l.jsx(o,{span:12,children:l.jsx(j.Item,{label:"City",name:"city",children:l.jsx(t,{})})}),l.jsx(o,{span:12,children:l.jsx(j.Item,{label:"Code",name:"code",children:l.jsx(t,{})})})]}),l.jsx(j.Item,{label:"About",name:"about",children:l.jsx(t.TextArea,{})}),l.jsx("div",{className:"flex w-full justify-end",children:l.jsx(i,{type:"primary",onClick:()=>{x.success({message:"Update success!",duration:3})},children:"Save Changes"})})]})})})]})}export{x as default};