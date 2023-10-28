var w=Object.defineProperty,E=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,B=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&y(e,a,t[a]);if(D)for(var a of D(t))I.call(t,a)&&y(e,a,t[a]);return e},F=(e,t)=>E(e,A(t));import{P as V}from"./index-5019f067.js";import{aR as L,aE as O,_ as S}from"./index.js";import{w as _,H as x}from"./antd-4273b3e7.js";import{d as N,r as P,h as W,c as f,G as $,a7 as r,Z as g,a8 as R,a9 as i,$ as s,l as u,E as h,a0 as d,_ as k,F as M,aa as U}from"./vue-ea98dac5.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const G=N({components:{PageWrapper:V,[_.name]:_,InputTextArea:_.TextArea,Tag:x},setup(){const e=P({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:a,send:v,close:T,open:b}=L(e.server,{autoReconnect:!1,heartbeat:!0});W(()=>{if(a.value)try{const o=JSON.parse(a.value);e.recordList.push(o)}catch(o){e.recordList.push({res:a.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=f(()=>t.value==="OPEN"),c=f(()=>n.value?"success":"red"),l=f(()=>[...e.recordList].reverse());function p(){v(e.sendValue),e.sendValue=""}function m(){n.value?T():b()}return F(B({status:t,formatToDateTime:O},$(e)),{handlerSend:p,getList:l,toggle:m,getIsOpen:n,getTagColor:c})}}),H={class:"flex"},J={class:"w-1/3 bg-white p-4"},Z={class:"flex items-center"},j=s("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),q=s("hr",{class:"my-4"},null,-1),z={class:"flex"},K=s("p",{class:"text-lg font-medium mt-4"},"设置",-1),Q=s("hr",{class:"my-4"},null,-1),X={class:"w-2/3 bg-white ml-4 p-4"},Y=s("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),ee=s("hr",{class:"my-4"},null,-1),te={class:"max-h-80 overflow-auto"},se={class:"flex items-center"},ae=s("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1);function oe(e,t,a,v,T,b){const n=r("Tag"),c=r("a-input"),l=r("a-button"),p=r("InputTextArea"),m=r("PageWrapper");return g(),R(m,{title:"WebSocket 示例"},{default:i(()=>[s("div",H,[s("div",J,[s("div",Z,[j,u(n,{color:e.getTagColor},{default:i(()=>[h(d(e.status),1)]),_:1},8,["color"])]),q,s("div",z,[u(c,{value:e.server,"onUpdate:value":t[0]||(t[0]=o=>e.server=o),"addon-before":"服务地址",disabled:""},null,8,["value"]),u(l,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:i(()=>[h(d(e.getIsOpen?"关闭连接":"开启连接"),1)]),_:1},8,["type","onClick"])]),K,Q,u(p,{placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=o=>e.sendValue=o),allowClear:""},null,8,["disabled","value"]),u(l,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:i(()=>[h(" 发送 ")]),_:1},8,["disabled","onClick"])]),s("div",X,[Y,ee,s("div",te,[s("ul",null,[(g(!0),k(M,null,U(e.getList,o=>(g(),k("li",{class:"mt-2",key:o.time},[s("div",se,[ae,s("span",null,d(e.formatToDateTime(o.time)),1)]),s("div",null,d(o.res),1)]))),128))])])])])]),_:1})}const me=S(G,[["render",oe]]);export{me as default};
