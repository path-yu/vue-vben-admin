import{P as _}from"./index-5019f067.js";import{aq as S,ar as m,as as f,at as T,au as x,av as R,aw as X,ax as h,ay as y,az as C,aA as E,aB as Y,aC as w,_ as B}from"./index.js";import{d as b,f as n,a7 as s,Z as r,a8 as l,a9 as o,$ as i,l as c,E as $,ah as k,n as F,z as g}from"./vue-ea98dac5.js";import{N as A}from"./antd-4273b3e7.js";import"./useContentViewHeight-b8e9ee08.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-3eb95ecd.js";const N=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],P=N.map(e=>({label:e,value:e,key:e})),V=b({components:{Select:A,PageWrapper:_,FadeTransition:S,ScaleTransition:m,SlideYTransition:f,ScrollYTransition:T,SlideYReverseTransition:x,ScrollYReverseTransition:R,SlideXTransition:X,ScrollXTransition:h,SlideXReverseTransition:y,ScrollXReverseTransition:C,ScaleRotateTransition:E,ExpandXTransition:Y,ExpandTransition:w},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:P,value:e,start:t,show:a}}});const W={class:"flex"},z={class:"box"};function D(e,a,t,q,I,L){const p=s("Select"),u=s("a-button"),d=s("PageWrapper");return r(),l(d,{title:"动画组件示例"},{default:o(()=>[i("div",W,[c(p,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),c(u,{type:"primary",class:"ml-4",onClick:e.start},{default:o(()=>[$(" start ")]),_:1},8,["onClick"])]),(r(),l(k(`${e.value}Transition`),null,{default:o(()=>[F(i("div",z,null,512),[[g,e.show]])]),_:1}))]),_:1})}const M=B(V,[["render",D],["__scopeId","data-v-147303b5"]]);export{M as default};
