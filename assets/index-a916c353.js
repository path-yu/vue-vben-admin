import{_ as g,w as A,C as W}from"./index.js";import{P as T}from"./index-5019f067.js";import{d as x,f as r,Z as w,_ as F,$ as f,af as k,N as h,E as c,a0 as C,a1 as D,a2 as V,a3 as z,c as M,h as B,a8 as $,a9 as s,ac as E,x as I,a7 as _,l as m}from"./vue-ea98dac5.js";import"./antd-4273b3e7.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";function P(o,p=0,t=!1){const d=typeof window!="undefined"?window.requestAnimationFrame:()=>{};let u=null;function a(i){u||(u=i),i-u>=p?(o(),t&&(u=null,l.id=d(a))):l.id=d(a)}const l={id:d(a)};return l}function R(o){const p=typeof window!="undefined"?window.cancelAnimationFrame:()=>{};o&&o.id&&p(o.id)}const N=o=>(V("data-v-17079461"),o=o(),z(),o),H=N(()=>f("div",{class:"m-tooltip-arrow"},[f("span",{class:"u-tooltip-arrow"})],-1)),q=x({__name:"Tooltip",props:{maxWidth:{default:120},content:{default:"暂无内容"},tooltip:{default:"暂无提示"},fontSize:{default:14},color:{default:"#FFF"},backgroundColor:{default:"rgba(0, 0, 0, .85)"},overlayStyle:{default:()=>({})}},emits:["openChange"],setup(o,{emit:p}){const t=r(!1),d=r(),u=r(0),a=r(0),l=r(),i=r();function e(){const n=l.value&&l.value.offsetWidth,b=i.value&&i.value.offsetWidth,S=i.value&&i.value.offsetHeight;u.value=S+4,a.value=(b-n)/2}function v(){e(),R(d.value),t.value=!0,p("openChange",t.value)}function y(){d.value=P(()=>{t.value=!1,p("openChange",t.value)},100)}return(n,b)=>(w(),F("div",{class:"m-tooltip",onMouseenter:v,onMouseleave:y},[f("div",{ref_key:"tooltipRef",ref:i,class:D(["m-tooltip-content",{"show-tip":t.value}]),style:k(`--tooltip-font-size: ${n.fontSize}px; --tooltip-color: ${n.color}; --tooltip-background-color: ${n.backgroundColor}; max-width: ${n.maxWidth}px; top: ${-u.value}px; left: ${-a.value}px;`),onMouseenter:v,onMouseleave:y},[f("div",{class:"u-tooltip",style:k(n.overlayStyle)},[h(n.$slots,"tooltip",{},()=>[c(C(n.tooltip),1)],!0)],4),H],38),f("div",{ref_key:"contentRef",ref:l},[h(n.$slots,"default",{},()=>[c(C(n.content),1)],!0)],512)],32))}});const O=g(q,[["__scopeId","data-v-17079461"]]),j=x({__name:"EllipsisText",props:{maxWidth:{default:"100%"},line:{default:void 0},expand:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!0},tooltipMaxWidth:{default:void 0},tooltipFontSize:{default:14},tooltipColor:{default:"#FFF"},tooltipBackgroundColor:{default:"rgba(0, 0, 0, .85)"},tooltipOverlayStyle:{default:()=>({padding:"8px 12px",textAlign:"justify"})}},emits:["expandChange"],setup(o,{emit:p}){const t=o,d=M(()=>typeof t.maxWidth=="number"?t.maxWidth+"px":t.maxWidth),u=r(),a=r(),l=r();B(()=>{u.value=t.tooltip}),B(()=>{t.tooltip&&(t.tooltipMaxWidth?l.value=t.tooltipMaxWidth:l.value=a.value.offsetWidth+24)},{flush:"post"});function i(){a.value.style["-webkit-line-clamp"]?(t.tooltip?(u.value=!1,I(()=>{a.value.style["-webkit-line-clamp"]=""})):a.value.style["-webkit-line-clamp"]="",p("expandChange",!0)):(t.tooltip&&(u.value=!0),a.value.style["-webkit-line-clamp"]=t.line,p("expandChange",!1))}return(e,v)=>u.value?(w(),$(O,{key:0,"max-width":l.value,fontSize:e.tooltipFontSize,color:e.tooltipColor,backgroundColor:e.tooltipBackgroundColor,overlayStyle:e.tooltipOverlayStyle},{tooltip:s(()=>[h(e.$slots,"tooltip",{},()=>[h(e.$slots,"default",{},void 0,!0)],!0)]),default:s(()=>[f("div",E({ref_key:"ellipsis",ref:a,class:["m-ellipsis",[e.line?"ellipsis-line":"not-ellipsis-line",{"cursor-pointer":e.expand}]],style:`-webkit-line-clamp: ${e.line}; max-width: ${d.value};`,onClick:v[0]||(v[0]=y=>e.expand?i():()=>!1)},e.$attrs),[h(e.$slots,"default",{},void 0,!0)],16)]),_:3},8,["max-width","fontSize","color","backgroundColor","overlayStyle"])):(w(),F("div",E({key:1,ref_key:"ellipsis",ref:a,class:["m-ellipsis",[e.line?"ellipsis-line":"not-ellipsis-line",{"cursor-pointer":e.expand}]],style:`-webkit-line-clamp: ${e.line}; max-width: ${d.value};`,onClick:v[1]||(v[1]=y=>e.expand?i():()=>!1)},e.$attrs),[h(e.$slots,"default",{},void 0,!0)],16))}});const Z=g(j,[["__scopeId","data-v-28036376"]]),G=A(Z),J=x({name:"Ellipsis",components:{CollapseContainer:W,PageWrapper:T,EllipsisText:G},setup(){return{text:r(`Vue-Vben-Admin 是一个基于 Vue3.0、Vite、 Ant-Design-Vue、TypeScript 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。
      包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目会使用前端较新的技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台产品原型。
      也可以作为一个示例，用于学习 vue3、vite、ts 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中。Vue-Vben-Admin 是一个基于 Vue3.0、Vite、 Ant-Design-Vue、TypeScript 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。
      包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目会使用前端较新的技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台产品原型。
      也可以作为一个示例，用于学习 vue3、vite、ts 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中。Vue-Vben-Admin 是一个基于 Vue3.0、Vite、 Ant-Design-Vue、TypeScript 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。
      包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目会使用前端较新的技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台产品原型。
      也可以作为一个示例，用于学习 vue3、vite、ts 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中。`)}}}),K=f("div",{style:{"text-align":"center"}},[c(" 《秦皇岛》"),f("br"),c("住在我心里孤独的"),f("br"),c("孤独的海怪 痛苦之王"),f("br"),c("开始厌倦 深海的光 停滞的海浪 ")],-1);function L(o,p,t,d,u,a){const l=_("EllipsisText"),i=_("CollapseContainer"),e=_("PageWrapper");return w(),$(e,{title:"文本省略示例"},{default:s(()=>[m(i,{class:"w-full bg-white rounded-md mb-4",title:"Ellipsis 基本使用"},{default:s(()=>[m(l,{maxWidth:240},{default:s(()=>[c(C(o.text),1)]),_:1})]),_:1}),m(i,{class:"w-full bg-white rounded-md mb-4",title:"Ellipsis 多行省略"},{default:s(()=>[m(l,{line:2},{default:s(()=>[c(C(o.text),1)]),_:1})]),_:1}),m(i,{class:"w-full bg-white rounded-md mb-4",title:"Ellipsis 点击展开"},{default:s(()=>[m(l,{expand:"",line:3},{default:s(()=>[c(C(o.text),1)]),_:1})]),_:1}),m(i,{class:"w-full bg-white rounded-md mb-4",title:"Ellipsis 定制 Tooltip 内容"},{default:s(()=>[m(l,{"max-width":240},{tooltip:s(()=>[K]),default:s(()=>[c(" 住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪 ")]),_:1})]),_:1})]),_:1})}const le=g(J,[["render",L]]);export{le as default};
