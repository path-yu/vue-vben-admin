import{D as _,G as C,S as F}from"./siteSetting-efd6ab5b.js";import{F as y,f as g,o as L,k as S,_ as h}from"./index.js";import{d as v,S as w,f as R,c as $,u as n,a7 as c,Z as I,a8 as k,a9 as U,$ as a,a0 as m,l as b,a1 as u,ab as D,a2 as G,a3 as B}from"./vue-ea98dac5.js";import{u as H}from"./useContentViewHeight-b8e9ee08.js";import{L as T,a0 as V}from"./antd-4273b3e7.js";import"./useWindowSizeFn-997fa1d0.js";const W=v({name:"LayoutFooter",components:{Footer:T.Footer,GithubFilled:V},setup(){const{t:o}=S(),{getShowFooter:e}=y(),{currentRoute:p}=w(),{prefixCls:d}=g("layout-footer"),r=R(null),{setFooterHeight:i}=H();return{getShowLayoutFooter:$(()=>{var s,t;if(n(e)){const l=(s=n(r))==null?void 0:s.$el;i((l==null?void 0:l.offsetHeight)||0)}else i(0);return n(e)&&!((t=n(p).meta)!=null&&t.hiddenFooter)}),prefixCls:d,t:o,DOC_URL:_,GITHUB_URL:C,SITE_URL:F,openWindow:L,footerRef:r}}});const N=o=>(G("data-v-0f5faecd"),o=o(),B(),o),A=N(()=>a("div",null,"Copyright ©2020 Vben Admin",-1));function O(o,e,p,d,r,i){const f=c("GithubFilled"),s=c("Footer");return o.getShowLayoutFooter?(I(),k(s,{key:0,class:u(o.prefixCls),ref:"footerRef"},{default:U(()=>[a("div",{class:u(`${o.prefixCls}__links`)},[a("a",{onClick:e[0]||(e[0]=t=>o.openWindow(o.SITE_URL))},m(o.t("layout.footer.onlinePreview")),1),b(f,{onClick:e[1]||(e[1]=t=>o.openWindow(o.GITHUB_URL)),class:u(`${o.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:e[2]||(e[2]=t=>o.openWindow(o.DOC_URL))},m(o.t("layout.footer.onlineDocument")),1)],2),A]),_:1},8,["class"])):D("",!0)}const x=h(W,[["render",O],["__scopeId","data-v-0f5faecd"]]);export{x as default};
