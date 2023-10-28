var J=Object.defineProperty;var P=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(o,n,t)=>n in o?J(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,$=(o,n)=>{for(var t in n||(n={}))E.call(n,t)&&j(o,t,n[t]);if(P)for(var t of P(n))L.call(n,t)&&j(o,t,n[t]);return o};var A=(o,n)=>{var t={};for(var r in o)E.call(o,r)&&n.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&P)for(var r of P(o))n.indexOf(r)<0&&L.call(o,r)&&(t[r]=o[r]);return t};var w=(o,n,t)=>new Promise((r,g)=>{var d=a=>{try{c(t.next(a))}catch(i){g(i)}},F=a=>{try{c(t.throw(a))}catch(i){g(i)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(d,F);c((t=t.apply(o,n)).next())});import Q from"./FormRender-da7be134.js";import{Y,bh as B,e as D,bf as O,R as H,K as T,o as U}from"./antd-4273b3e7.js";import{g as X,H as x,d as I,f as oo,c as y,p as q,u as eo,a7 as R,Z as k,_ as z,l as K,a9 as V,F as to,aa as no,a8 as so,ad as ro,N as ao,ai as io,aj as mo,ac as lo}from"./vue-ea98dac5.js";import{b as fo,f as W}from"./index-a57e3581.js";import{b6 as co,_ as uo}from"./index.js";import"./index-fa6d5a3d.js";import"./formItemConfig-a5cc44cc.js";import"./componentMap-f7c1deec.js";import"./useFormItem-dc719137.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import"./index-6a34923f.js";import"./useWindowSizeFn-997fa1d0.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./useFormDesignState-2b7717e9.js";function po(o,n,t,r){(()=>{const u=X(),h=u==null?void 0:u.parent;h&&o.formConfig.schemas.forEach(m=>{B(m.componentProps,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(h))}),B(m.on,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(h))})})})();const{emit:d}=t,F=Y.useForm,{resetFields:c,validate:a,clearValidate:i,validateField:C}=F(n,[]);return{validate:a,validateField:C,resetFields:c,clearValidate:i,submit:()=>w(this,null,function*(){var h,m;const u=D(x(n.value));return d==null||d("submit",u),(m=(h=o.formConfig).submit)==null||m.call(h,u),u})}}function go(o,n,t,r){const g=e=>fo(o.formConfig.schemas,s=>s.field===e),d=(e,s,l)=>{const f=g(e);f&&(f[s]=l)},F=(e,s,l)=>{const f=g(e);f!=null&&f.componentProps&&(["options","treeData"].includes(s)&&c(e,void 0),f.componentProps[s]=l)},c=(e,s)=>{var l;typeof e=="string"?(o.formModel[e]=s,(l=t.value)==null||l.validateField(e,s,[])):Object.keys(e).forEach(p=>{var b;o.formModel[p]=e[p],(b=t.value)==null||b.validateField(p,e[p],[])})},a=(e,s)=>{o.formConfig[e]=s},i=e=>D(o.formModel)[e],C=()=>w(this,null,function*(){return D(o.formModel)}),v=e=>{d(e,"hidden",!0)},u=e=>{typeof e=="string"?F(e,"disabled",!0):a("disabled",e!==!1)},h=e=>{d(e,"hidden",!1)},m={};return(e=>{W(e,s=>{W(e,l=>{var f;m[l.field]||(m[l.field]=new Set),(f=s.link)!=null&&f.includes(l.field)&&O(s.update)&&m[l.field].add(s)}),m[s.field].add(s)})})(o.formConfig.schemas),$({linkOn:m,setValue:c,getValue:i,hidden:v,show:h,set:d,get:g,setProps:F,getData:C,disable:u},r)}const Fo=I({name:"VFormCreate",components:{FormRender:Q,Form:Y,Row:H},props:{fApi:{type:Object},formModel:{type:Object,default:()=>({})},formConfig:{type:Object,required:!0}},emits:["submit","change","update:fApi","update:formModel"],setup(o,n){const t=o.formConfig.layout=="vertical"?T:H,{emit:r}=n,g=oo(null),d=y({get:()=>o.formModel,set:p=>r("update:formModel",p)}),F=y(()=>o.formConfig.schemas&&o.formConfig.schemas.filter(p=>p.hidden!==!0)),c=co(o,"fApi",r),{submit:a,validate:i,clearValidate:C,resetFields:v,validateField:u}=po(o,d,n),f=go({formConfig:o.formConfig,formData:o.formModel},n,g,{submit:a,validate:i,validateField:u,resetFields:v,clearValidate:C}),{linkOn:h}=f,m=A(f,["linkOn"]);c.value=m;const M=p=>{var S;const{schema:b,value:Z}=p,{field:G}=eo(b);(S=h[G])==null||S.forEach(_=>{var N;(N=_.update)==null||N.call(_,Z,_,c.value)})},e=y(()=>U(o.formConfig,["disabled","labelWidth","schemas"])),s=()=>{a()};q("formModel",d);const l=(p,b)=>{d.value[p]=b};return q("setFormModelMethod",l),{eFormModel:g,submit:a,validate:i,validateField:u,resetFields:v,clearValidate:C,handleChange:M,formModelProps:e,handleSubmit:s,setFormModel:l,formModelNew:d,wrapperComp:t,noHiddenList:F}}});const ho={class:"v-form-container"};function Co(o,n,t,r,g,d){const F=R("FormRender"),c=R("Row"),a=R("Form");return k(),z("div",ho,[K(a,lo({class:"v-form-model",ref:"eFormModel",model:o.formModel},o.formModelProps),{default:V(()=>[K(c,null,{default:V(()=>[(k(!0),z(to,null,no(o.noHiddenList,(i,C)=>(k(),so(F,{key:C,schema:i,formConfig:o.formConfig,formData:o.formModelNew,onChange:o.handleChange,setFormModel:o.setFormModel,onSubmit:o.handleSubmit,onReset:o.resetFields},ro({_:2},[i&&i.componentProps?{name:"schema.componentProps!.slotName",fn:V(()=>[ao(o.$slots,i.componentProps.slotName,io(mo({formModel:o.formModel,field:i.field,schema:i})),void 0,!0)]),key:"0"}:void 0]),1032,["schema","formConfig","formData","onChange","setFormModel","onSubmit","onReset"]))),128))]),_:3})]),_:3},16,["model"])])}const qo=uo(Fo,[["render",Co],["__scopeId","data-v-06441f85"]]);export{qo as default};
