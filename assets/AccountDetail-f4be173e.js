import{d as A,ao as C,f as m,a7 as K,Z as n,a8 as N,a9 as e,l as t,E as p,u as r,$ as c,_ as f,F as y,aa as v,a0 as _,ab as b}from"./vue-ea98dac5.js";import{P}from"./index-5019f067.js";import{aT as D,aU as w}from"./index.js";import{V as k}from"./antd-4273b3e7.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const E={class:"pt-4 m-4 desc-wrap"},Z=A({name:"AccountDetail",__name:"AccountDetail",setup(F){var i;const T=k,u=k.TabPane,g=C(),B=D(),o=m((i=g.params)==null?void 0:i.id),s=m("detail"),{setTitle:x}=w();x("详情：用户"+o.value);function V(){B("/system/account")}return(U,l)=>{const d=K("a-button");return n(),N(r(P),{title:"用户"+o.value+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:V},{extra:e(()=>[t(d,{type:"primary",danger:""},{default:e(()=>[p(" 禁用账号 ")]),_:1}),t(d,{type:"primary"},{default:e(()=>[p(" 修改密码 ")]),_:1})]),footer:e(()=>[t(r(T),{"default-active-key":"detail",activeKey:s.value,"onUpdate:activeKey":l[0]||(l[0]=a=>s.value=a)},{default:e(()=>[t(r(u),{key:"detail",tab:"用户资料"}),t(r(u),{key:"logs",tab:"操作日志"})]),_:1},8,["activeKey"])]),default:e(()=>[c("div",E,[s.value=="detail"?(n(),f(y,{key:0},v(10,a=>c("div",{key:a},"这是用户"+_(o.value)+"资料Tab",1)),64)):b("",!0),s.value=="logs"?(n(),f(y,{key:1},v(10,a=>c("div",{key:a},"这是用户"+_(o.value)+"操作日志Tab",1)),64)):b("",!0)])]),_:1},8,["title"])}}});export{Z as default};
