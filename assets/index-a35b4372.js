import{D as f}from"./index-505401e2.js";import{B as _}from"./BasicTable-10e06813.js";import"./componentMap-f7c1deec.js";import"./TableImg.vue_vue_type_style_index_0_lang-324f805d.js";import{u}from"./useTable-64dd7831.js";import{P as T}from"./index-5019f067.js";import{refundSchema as h,refundData as g,personSchema as b,personData as D,refundTableData as B,refundTableSchema as S,refundTimeTableSchema as v,refundTimeTableData as y}from"./data-508fb6ad.js";import{d as C,a7 as o,Z as R,a8 as F,a9 as $,l as t}from"./vue-ea98dac5.js";import{$ as c}from"./antd-4273b3e7.js";import{_ as w}from"./index.js";import"./useFormItem-dc719137.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import"./index-6a34923f.js";import"./useWindowSizeFn-997fa1d0.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./BasicForm-f0436ce2.js";import"./FormItem.vue_vue_type_script_lang-27b3606e.js";import"./useForm-e6560703.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-b8e9ee08.js";const E=C({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=u({title:"退货商品",dataSource:B,columns:S,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:m}),[s]=u({title:"退货进度",columns:v,pagination:!1,dataSource:y,showIndexColumn:!1,scroll:{y:300}});function m(p){let r=0,n=0;return p.forEach(a=>{r+=a.t5,n+=a.t6}),[{t1:"总计",t5:r,t6:n}]}return{registerRefundTable:e,registerTimeTable:s,refundSchema:h,refundData:g,personSchema:b,personData:D}}});function P(e,s,m,p,r,n){const a=o("Description"),i=o("a-divider"),l=o("BasicTable"),d=o("PageWrapper");return R(),F(d,{title:"基础详情页",contentBackground:""},{default:$(()=>[t(a,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(i),t(a,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(i),t(l,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(i),t(l,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}const ne=w(E,[["render",P],["__scopeId","data-v-75f0a99f"]]);export{ne as default};
