var v=(t,_,e)=>new Promise((m,n)=>{var E=u=>{try{p(e.next(u))}catch(c){n(c)}},l=u=>{try{p(e.throw(u))}catch(c){n(c)}},p=u=>u.done?m(u.value):Promise.resolve(u.value).then(E,l);p((e=e.apply(t,_)).next())});import{B as b}from"./BasicForm-f0436ce2.js";import"./componentMap-f7c1deec.js";import{u as x}from"./useForm-e6560703.js";import"./RadioButtonGroup-f37554dc.js";import{_ as g}from"./index.js";import"./uuid-a2a47690.js";import{step1Schemas as A}from"./data-6b084658.js";import{N as B,w as F,$ as h}from"./antd-4273b3e7.js";import{d as $,a7 as a,Z as w,_ as I,$ as s,l as o,a9 as i,E as D,a2 as N,a3 as O}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-27b3606e.js";import"./index-6a34923f.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-dc719137.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";const U=$({components:{BasicForm:b,[B.name]:B,ASelectOption:B.Option,[F.name]:F,[F.Group.name]:F.Group,[h.name]:h},emits:["next"],setup(t,{emit:_}){const[e,{validate:m}]=x({labelWidth:100,schemas:A,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:n});function n(){return v(this,null,function*(){try{const E=yield m();_("next",E)}catch(E){}})}return{register:e}}});const r=t=>(N("data-v-fba0dca7"),t=t(),O(),t),R={class:"step1"},V={class:"step1-form"},k=r(()=>s("h3",null,"说明",-1)),G=r(()=>s("h4",null,"转账到支付宝账户",-1)),z=r(()=>s("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1)),T=r(()=>s("h4",null,"转账到银行卡",-1)),W=r(()=>s("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1));function Z(t,_,e,m,n,E){const l=a("a-select-option"),p=a("a-select"),u=a("a-input"),c=a("a-input-group"),y=a("BasicForm"),S=a("a-divider");return w(),I("div",R,[s("div",V,[o(y,{onRegister:t.register},{fac:i(({model:C,field:f})=>[o(c,{compact:""},{default:i(()=>[o(p,{value:C.pay,"onUpdate:value":d=>C.pay=d,class:"pay-select"},{default:i(()=>[o(l,{value:"zfb"},{default:i(()=>[D(" 支付宝 ")]),_:1}),o(l,{value:"yl"},{default:i(()=>[D(" 银联 ")]),_:1})]),_:2},1032,["value","onUpdate:value"]),o(u,{class:"pay-input",value:C[f],"onUpdate:value":d=>C[f]=d},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:1},8,["onRegister"])]),o(S),k,G,z,T,W])}const cu=g(U,[["render",Z],["__scopeId","data-v-fba0dca7"]]);export{cu as default};
