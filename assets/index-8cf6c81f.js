import{a as t,av as $,aO as w,aS as D,c as M,aw as p,a5 as j,b4 as g}from"./index-f05d2299.js";var V=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],H=t.forwardRef(function(a,k){var c,i=a.prefixCls,n=i===void 0?"rc-checkbox":i,C=a.className,b=a.style,m=a.checked,l=a.disabled,d=a.defaultChecked,_=d===void 0?!1:d,u=a.type,o=u===void 0?"checkbox":u,y=a.title,s=a.onChange,x=$(a,V),r=t.useRef(null),N=w(_,{value:m}),f=D(N,2),v=f[0],E=f[1];t.useImperativeHandle(k,function(){return{focus:function(){var e;(e=r.current)===null||e===void 0||e.focus()},blur:function(){var e;(e=r.current)===null||e===void 0||e.blur()},input:r.current}});var P=M(n,C,(c={},p(c,"".concat(n,"-checked"),v),p(c,"".concat(n,"-disabled"),l),c)),R=function(e){l||("checked"in a||E(e.target.checked),s?.({target:g(g({},a),{},{type:o,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))};return t.createElement("span",{className:P,title:y,style:b},t.createElement("input",j({},x,{className:"".concat(n,"-input"),ref:r,onChange:R,disabled:l,checked:!!v,type:o})),t.createElement("span",{className:"".concat(n,"-inner")}))});export{H as C};