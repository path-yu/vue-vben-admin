var Xe=Object.defineProperty,Ye=Object.defineProperties;var Qe=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var $e=(e,n,a)=>n in e?Xe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,R=(e,n)=>{for(var a in n||(n={}))Je.call(n,a)&&$e(e,a,n[a]);if(Fe)for(var a of Fe(n))xe.call(n,a)&&$e(e,a,n[a]);return e},x=(e,n)=>Ye(e,Qe(n));var B=(e,n,a)=>new Promise((s,r)=>{var m=l=>{try{o(a.next(l))}catch(t){r(t)}},c=l=>{try{o(a.throw(l))}catch(t){r(t)}},o=l=>l.done?s(l.value):Promise.resolve(l.value).then(m,c);o((a=a.apply(e,n)).next())});import{p as w,v as we,k as X,m as W,_ as H,N as ne,X as et,O as ke,Y as tt,I as Pe,Z as nt,$ as at,f as ot,a0 as lt,n as st,S as rt,b as it,a1 as ut,w as dt}from"./index.js";import{u as oe}from"./useFormItem-dc719137.js";import{ac as de,o as le,a7 as Y,N as Ie,ad as Ce,ae as ct,af as Ue,ag as Se,ah as pt,ai as ft,aj as ce,M as mt,ak as Re,f as he,$ as De,al as gt,T as Oe,am as ht,an as yt,H as ye,X as vt,Q as bt,w as se,ao as St,ap as wt,aq as Ct,Z as Be,ar as _t,as as At,at as pe,au as Ne}from"./antd-4273b3e7.js";import{d as G,f as A,c as P,h as _e,w as U,u as k,a7 as S,Z as C,a8 as T,a9 as F,_ as M,aa as re,F as ee,E as K,a0 as E,ac as Z,ad as fe,N as me,ai as te,aj as ge,l as y,$ as ae,o as Me,r as Ee,ab as z,p as Ft,e as $t,H as Te,a1 as ve,x as kt,G as Rt}from"./vue-ea98dac5.js";import{R as Tt}from"./RadioButtonGroup-f37554dc.js";import{b as Lt,a as Pt}from"./uuid-a2a47690.js";import{u as It,B as Ge,a as je,b as Le}from"./index-6a34923f.js";import{d as Ut}from"./download-2647fd8d.js";import{S as Dt}from"./index-07d56da0.js";import{_ as Ot}from"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import{C as Bt}from"./index-5b24d4ba.js";const Nt=G({name:"ApiRadioGroup",components:{RadioGroup:de.Group,RadioButton:de.Button,Radio:de},props:{api:{type:Function,default:null},params:{type:[Object,String],default:()=>({})},value:{type:[String,Number,Boolean]},isBtn:{type:[Boolean],default:!1},numberToString:w.bool,resultField:w.string.def(""),labelField:w.string.def("label"),valueField:w.string.def("value"),immediate:w.bool.def(!0)},emits:["options-change","change"],setup(e,{emit:n}){const a=A([]),s=A(!1),r=A(!0),m=A([]),c=we(),{t:o}=X(),[l]=oe(e,"value","change",m),t=P(()=>{const{labelField:g,valueField:d,numberToString:f}=e;return k(a).reduce((h,v)=>{if(v){const $=v[d];h.push(R({label:v[g],value:f?`${$}`:$},le(v,[g,d])))}return h},[])});_e(()=>{e.immediate&&u()}),U(()=>e.params,()=>{!k(r)&&u()},{deep:!0});function u(){return B(this,null,function*(){const g=e.api;if(!(!g||!W(g))){a.value=[];try{s.value=!0;const d=yield g(e.params);if(Array.isArray(d)){a.value=d,i();return}e.resultField&&(a.value=Y(d,e.resultField)||[]),i()}catch(d){}finally{s.value=!1}}})}function i(){n("options-change",k(t))}function p(...g){m.value=g}return{state:l,getOptions:t,attrs:c,loading:s,t:o,handleClick:p,props:e}}});function Mt(e,n,a,s,r,m){const c=S("RadioButton"),o=S("Radio"),l=S("RadioGroup");return C(),T(l,Z(e.attrs,{value:e.state,"onUpdate:value":n[0]||(n[0]=t=>e.state=t),"button-style":"solid"}),{default:F(()=>[(C(!0),M(ee,null,re(e.getOptions,t=>(C(),M(ee,{key:`${t.value}`},[e.props.isBtn?(C(),T(c,{key:0,value:t.value,disabled:t.disabled,onClick:u=>e.handleClick(t)},{default:F(()=>[K(E(t.label),1)]),_:2},1032,["value","disabled","onClick"])):(C(),T(o,{key:1,value:t.value,disabled:t.disabled,onClick:u=>e.handleClick(t)},{default:F(()=>[K(E(t.label),1)]),_:2},1032,["value","disabled","onClick"]))],64))),128))]),_:1},16,["value"])}const Et=H(Nt,[["render",Mt]]),Gt=G({name:"ApiSelect",components:{Select:Ie,LoadingOutlined:Ce},inheritAttrs:!1,props:{value:{type:[Array,Object,String,Number]},numberToString:w.bool,api:{type:Function,default:null},params:w.any.def({}),resultField:w.string.def(""),labelField:w.string.def("label"),valueField:w.string.def("value"),immediate:w.bool.def(!0),alwaysLoad:w.bool.def(!1),options:{type:Array,default:[]}},emits:["options-change","change","update:value"],setup(e,{emit:n}){const a=A([]),s=A(!1),r=A(!1),m=A([]),c=we(),{t:o}=X(),[l]=oe(e,"value","change",m),t=P(()=>{const{labelField:d,valueField:f,numberToString:h}=e;let v=k(a).reduce(($,I)=>{if(I){const j=Y(I,f);$.push(x(R({},le(I,[d,f])),{label:Y(I,d),value:h?`${j}`:j}))}return $},[]);return v.length>0?v:e.options});U(()=>l.value,d=>{n("update:value",d)}),U(()=>e.params,()=>{!k(r)&&u()},{deep:!0,immediate:e.immediate});function u(){return B(this,null,function*(){const d=e.api;if(!(!d||!W(d)||s.value)){a.value=[];try{s.value=!0;const f=yield d(e.params);if(r.value=!0,Array.isArray(f)){a.value=f,p();return}e.resultField&&(a.value=Y(f,e.resultField)||[]),p()}catch(f){}finally{s.value=!1}}})}function i(d){return B(this,null,function*(){d&&(e.alwaysLoad?yield u():!e.immediate&&!k(r)&&(yield u()))})}function p(){n("options-change",k(t))}function g(d,...f){m.value=f}return{state:l,attrs:c,getOptions:t,loading:s,t:o,handleFetch:i,handleChange:g}}});function jt(e,n,a,s,r,m){const c=S("LoadingOutlined"),o=S("Select");return C(),T(o,Z({onDropdownVisibleChange:e.handleFetch},e.$attrs,{onChange:e.handleChange,options:e.getOptions,value:e.state,"onUpdate:value":n[0]||(n[0]=l=>e.state=l)}),fe({_:2},[re(Object.keys(e.$slots),l=>({name:l,fn:F(t=>[me(e.$slots,l,te(ge(t||{})))])})),e.loading?{name:"suffixIcon",fn:F(()=>[y(c,{spin:""})]),key:"0"}:void 0,e.loading?{name:"notFoundContent",fn:F(()=>[ae("span",null,[y(c,{spin:"",class:"mr-1"}),K(" "+E(e.t("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1040,["onDropdownVisibleChange","onChange","options","value"])}const zt=H(Gt,[["render",jt]]),Kt=G({name:"ApiTree",components:{ATree:ct},props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},resultField:w.string.def(""),afterFetch:{type:Function},value:{type:Array}},emits:["options-change","change","update:value"],setup(e,{attrs:n,emit:a}){const s=A([]),r=A(!1),m=A(!1),c=A([]),[o]=oe(e,"value","change",c),l=P(()=>R(R({},e.api?{treeData:k(s)}:{}),n));U(()=>o.value,u=>{a("update:value",u)}),U(()=>e.params,()=>{!k(r)&&t()},{deep:!0}),U(()=>e.immediate,u=>{u&&!r.value&&t()}),Me(()=>{e.immediate&&t()});function t(){return B(this,null,function*(){const{api:u,afterFetch:i}=e;if(!u||!W(u))return;m.value=!0,s.value=[];let p;try{p=yield u(e.params)}catch(g){}i&&W(i)&&(p=i(p)),m.value=!1,p&&(ne(p)||(p=Y(p,e.resultField)),s.value=p||[],r.value=!0,a("options-change",s.value))})}return{getAttrs:l,loading:m,state:o}}});function Ht(e,n,a,s,r,m){const c=S("a-tree");return C(),T(c,Z(e.getAttrs,{selectedKeys:e.state,"onUpdate:selectedKeys":n[0]||(n[0]=o=>e.state=o)}),fe({_:2},[re(Object.keys(e.$slots),o=>({name:o,fn:F(l=>[me(e.$slots,o,te(ge(l||{})))])}))]),1040,["selectedKeys"])}const Vt=H(Kt,[["render",Ht]]),Wt=G({name:"ApiTreeSelect",components:{ATreeSelect:Ue,LoadingOutlined:Ce},props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},async:{type:Boolean,default:!1},resultField:w.string.def(""),labelField:w.string.def("title"),valueField:w.string.def("value"),childrenField:w.string.def("children")},emits:["options-change","change","load-data"],setup(e,{attrs:n,emit:a}){const s=A([]),r=A(!1),m=A(!1),c=P(()=>R(R({},e.api?{treeData:k(s)}:{}),n)),o={children:e.childrenField,value:e.valueField,label:e.labelField};function l(...i){a("change",...i)}U(()=>e.params,()=>{!k(r)&&u()},{deep:!0}),U(()=>e.immediate,i=>{i&&!r.value&&u()}),Me(()=>{e.immediate&&u()});function t(i){return new Promise(p=>{if(ne(i.children)&&i.children.length>0){p();return}a("load-data",{treeData:s,treeNode:i,resolve:p})})}function u(){return B(this,null,function*(){const{api:i}=e;if(!i||!W(i)||m.value)return;m.value=!0,s.value=[];let p;try{p=yield i(e.params)}catch(g){}m.value=!1,p&&(ne(p)||(p=Y(p,e.resultField)),s.value=p||[],r.value=!0,a("options-change",s.value))})}return{getAttrs:c,loading:m,handleChange:l,fieldNames:o,onLoadData:t}}});function qt(e,n,a,s,r,m){const c=S("LoadingOutlined"),o=S("a-tree-select");return C(),T(o,Z(e.getAttrs,{onChange:e.handleChange,"field-names":e.fieldNames,"load-data":e.async?e.onLoadData:void 0}),fe({_:2},[re(Object.keys(e.$slots),l=>({name:l,fn:F(t=>[me(e.$slots,l,te(ge(t||{})))])})),e.loading?{name:"suffixIcon",fn:F(()=>[y(c,{spin:""})]),key:"0"}:void 0]),1040,["onChange","field-names","load-data"])}const Zt=H(Wt,[["render",qt]]),Xt=G({name:"ApiCascader",components:{LoadingOutlined:Ce,[Se.name]:Se},props:{value:{type:Array},api:{type:Function,default:null},numberToString:w.bool,resultField:w.string.def(""),labelField:w.string.def("label"),valueField:w.string.def("value"),childrenField:w.string.def("children"),apiParamKey:w.string.def("parentCode"),immediate:w.bool.def(!0),initFetchParams:{type:Object,default:()=>({})},isLeaf:{type:Function,default:null},displayRenderArray:{type:Array}},emits:["change","defaultChange"],setup(e,{emit:n}){const a=A([]),s=A([]),r=A(!1),m=A([]),c=A(!0),{t:o}=X(),[l]=oe(e,"value","change",m);U(a,d=>{const f=t(d);s.value=f},{deep:!0});function t(d){const{labelField:f,valueField:h,numberToString:v,childrenField:$,isLeaf:I}=e;return d.reduce((j,Q)=>{if(Q){const ie=Q[h],ue=x(R({},le(Q,[f,h])),{label:Q[f],value:v?`${ie}`:ie,isLeaf:I&&typeof I=="function"?I(Q):!1}),_=Reflect.get(Q,$);_&&Reflect.set(ue,$,t(_)),j.push(ue)}return j},[])}function u(){return B(this,null,function*(){const d=e.api;if(!(!d||!W(d))){a.value=[],r.value=!0;try{const f=yield d(e.initFetchParams);if(Array.isArray(f)){a.value=f;return}e.resultField&&(a.value=Y(f,e.resultField)||[])}catch(f){}finally{r.value=!1}}})}function i(d){return B(this,null,function*(){const f=d[d.length-1];f.loading=!0;const h=e.api;if(!(!h||!W(h)))try{const v=yield h({[e.apiParamKey]:Reflect.get(f,"value")});if(Array.isArray(v)){const $=t(v);f.children=$;return}if(e.resultField){const $=t(Y(v,e.resultField)||[]);f.children=$}}catch(v){}finally{f.loading=!1}})}_e(()=>{e.immediate&&u()}),U(()=>e.initFetchParams,()=>{!k(c)&&u()},{deep:!0});function p(d,f){m.value=f,n("defaultChange",d,f)}function g({labels:d,selectedOptions:f}){return k(m).length===f.length?d.join(" / "):e.displayRenderArray?e.displayRenderArray.join(" / "):""}return{state:l,options:s,loading:r,t:o,handleChange:p,loadData:i,handleRenderDisplay:g}}});function Yt(e,n,a,s,r,m){const c=S("LoadingOutlined"),o=S("a-cascader");return C(),T(o,{value:e.state,"onUpdate:value":n[0]||(n[0]=l=>e.state=l),options:e.options,"load-data":e.loadData,"change-on-select":"",onChange:e.handleChange,displayRender:e.handleRenderDisplay},fe({_:2},[e.loading?{name:"suffixIcon",fn:F(()=>[y(c,{spin:""})]),key:"0"}:void 0,e.loading?{name:"notFoundContent",fn:F(()=>[ae("span",null,[y(c,{spin:"",class:"mr-1"}),K(" "+E(e.t("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1032,["value","options","load-data","onChange","displayRender"])}const Qt=H(Xt,[["render",Yt]]),Jt=G({name:"ApiTransfer",components:{Transfer:pt},props:{value:{type:Array},api:{type:Function,default:null},params:{type:Object},dataSource:{type:Array},immediate:w.bool.def(!0),alwaysLoad:w.bool.def(!1),afterFetch:{type:Function},resultField:w.string.def(""),labelField:w.string.def("title"),valueField:w.string.def("key"),showSearch:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterOption:{type:Function},selectedKeys:{type:Array},showSelectAll:{type:Boolean,default:!1},targetKeys:{type:Array}},emits:["options-change","change"],setup(e,{attrs:n,emit:a}){const s=A([]),r=A([]),{t:m}=X(),c=P(()=>R(R({},e.api?{}:{dataSource:k(s)}),n)),o=P(()=>{const{labelField:p,valueField:g}=e;return k(s).reduce((d,f)=>(f&&d.push(x(R({},le(f,[p,g])),{title:f[p],key:f[g]})),d),[])}),l=P(()=>Array.isArray(e.value)?e.value:Array.isArray(e.targetKeys)?e.targetKeys:[]);function t(p,g,d){r.value=p,a("change",p)}_e(()=>{e.immediate&&!e.alwaysLoad&&u()}),U(()=>e.params,()=>{u()},{deep:!0});function u(){return B(this,null,function*(){const p=e.api;if(!p||!W(p)){Array.isArray(e.dataSource)&&(s.value=e.dataSource);return}s.value=[];try{const g=yield p(e.params);if(Array.isArray(g)){s.value=g,i();return}e.resultField&&(s.value=Y(g,e.resultField)||[]),i()}catch(g){}})}function i(){a("options-change",k(o))}return{getTargetKeys:l,getdataSource:o,t:m,getAttrs:c,handleChange:t}}});function xt(e,n,a,s,r,m){const c=S("Transfer");return C(),T(c,{"data-source":e.getdataSource,"filter-option":e.filterOption,render:o=>o.title,showSelectAll:e.showSelectAll,selectedKeys:e.selectedKeys,targetKeys:e.getTargetKeys,showSearch:e.showSearch,disabled:e.disabled,onChange:e.handleChange},null,8,["data-source","filter-option","render","showSelectAll","selectedKeys","targetKeys","showSearch","disabled","onChange"])}const en=H(Jt,[["render",xt]]),tn=G({name:"ImageUpload",components:{PlusOutlined:ft,AUpload:ce,AModal:mt},inheritAttrs:!1,props:{value:[Array,String],api:{type:Function,default:null},listType:{type:String,default:()=>"picture-card"},fileType:{type:Array,default:()=>["image/png","image/jpeg"]},multiple:{type:Boolean,default:()=>!1},maxCount:{type:Number,default:()=>1},minCount:{type:Number,default:()=>0},maxSize:{type:Number,default:()=>2}},emits:["change","update:value"],setup(e,{emit:n}){const a=we(),{t:s}=X(),r=A(!1),m=A(""),c=A(),o=A([]),[l]=oe(e,"value","change",c),t=Ee({newList:[],newStr:"",oldStr:""});U(()=>o.value,h=>{t.newList=h.filter(v=>(v==null?void 0:v.url)&&v.status==="done"&&et(v==null?void 0:v.url)).map(v=>v==null?void 0:v.url),t.newStr=Re(t.newList),t.newStr!==t.oldStr&&(t.oldStr=t.newStr,c.value=e.multiple?t.newList:t.newStr,l.value=e.multiple?t.newList:t.newStr)},{deep:!0}),U(()=>l.value,h=>{u(h),n("update:value",h)});function u(h){const v=e.multiple?Re(h||[]):h||"";if(v!==t.oldStr){t.oldStr=v;let $=[];e.multiple?ke(h)&&(ne(h)?$=h:$.push(h)):ke(h)&&$.push(h),o.value=$.map(I=>{const j=Lt();return{uid:j,name:j,status:"done",url:I}})}}const i=()=>{r.value=!1},p=h=>B(this,null,function*(){!h.url&&!h.preview&&(h.preview=yield f(h.originFileObj)),m.value=h.url||h.preview,r.value=!0}),g=h=>{if(o.value.length>e.maxCount)return o.value.splice(e.maxCount,o.value.length-e.maxCount),he.error(s("component.upload.maxNumber",[e.maxCount])),ce.LIST_IGNORE;const v=e.fileType.includes(h.type);v||he.error(s("component.upload.acceptUpload",[e.fileType.toString()]));const $=h.size/1024/1024<e.maxSize;return $||he.error(s("component.upload.maxSizeMultiple",[e.maxSize])),v&&$||o.value.pop(),v&&$||ce.LIST_IGNORE},d=h=>B(this,null,function*(){const{file:v}=h;yield e.api(h).then($=>{v.url=$,v.status="done",o.value.pop(),o.value.push(v)}).catch(()=>{o.value.pop()})});function f(h){return new Promise((v,$)=>{const I=new FileReader;I.readAsDataURL(h),I.onload=()=>v(I.result),I.onerror=j=>$(j)})}return{previewOpen:r,fileList:o,state:l,attrs:a,t:s,handlePreview:p,handleBeforeUpload:g,handleCustomRequest:d,handleCancel:i,previewImage:m}}});const nn={class:"clearfix"},an={key:0},on={style:{"margin-top":"8px"}},ln=["src"];function sn(e,n,a,s,r,m){const c=S("plus-outlined"),o=S("a-upload"),l=S("a-modal");return C(),M("div",nn,[y(o,Z({"file-list":e.fileList,"onUpdate:fileList":n[0]||(n[0]=t=>e.fileList=t),"list-type":e.listType,multiple:e.multiple,"max-count":e.maxCount,customRequest:e.handleCustomRequest,"before-upload":e.handleBeforeUpload},e.$attrs,{onPreview:e.handlePreview,value:e.state,"onUpdate:value":n[1]||(n[1]=t=>e.state=t)}),{default:F(()=>[e.fileList.length<e.maxCount?(C(),M("div",an,[y(c),ae("div",on,E(e.t("component.upload.upload")),1)])):z("",!0)]),_:1},16,["file-list","list-type","multiple","max-count","customRequest","before-upload","onPreview","value"]),y(l,{open:e.previewOpen,footer:null,onCancel:e.handleCancel},{default:F(()=>[ae("img",{alt:"example",style:{width:"100%"},src:e.previewImage},null,8,ln)]),_:1},8,["open","onCancel"])])}const rn=H(tn,[["render",sn],["__scopeId","data-v-4085a933"]]),ze={helpText:{type:String,default:""},maxSize:{type:Number,default:2},maxNumber:{type:Number,default:1/0},accept:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},uploadParams:{type:Object,default:()=>({})},api:{type:Function,default:null,required:!0},name:{type:String,default:"file"},filename:{type:String,default:null}},un=x(R({value:{type:Array,default:()=>[]}},ze),{showPreviewNumber:{type:Boolean,default:!0},emptyHidePreview:{type:Boolean,default:!1}}),dn={value:{type:Array,default:()=>[]}},cn={columns:{type:Array,default:null},actionColumn:{type:Object,default:null},dataSource:{type:Array,default:null}},{t:be}=X();function pn({acceptRef:e,helpTextRef:n,maxNumberRef:a,maxSizeRef:s}){const r=P(()=>{const o=k(e);return o&&o.length>0?o:[]}),m=P(()=>k(r).map(o=>o.indexOf("/")>0||o.startsWith(".")?o:`.${o}`).join(",")),c=P(()=>{const o=k(n);if(o)return o;const l=[],t=k(e);t.length>0&&l.push(be("component.upload.accept",[t.join(",")]));const u=k(s);u&&l.push(be("component.upload.maxSize",[u]));const i=k(a);return i&&i!==1/0&&l.push(be("component.upload.maxNumber",[i])),l.join("，")});return{getAccept:r,getStringAccept:m,getHelpText:c}}var D=(e=>(e.SUCCESS="success",e.ERROR="error",e.UPLOADING="uploading",e))(D||{});function fn(e){return Ke(e.name)}function Ke(e){return/\.(jpg|jpeg|png|gif|webp)$/i.test(e)}function mn(e){return new Promise((n,a)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>n({result:s.result,file:e}),s.onerror=r=>a(r)})}const He=Symbol("basic-table");function na(e){Ft(He,e)}function gn(){return $t(He)}const{table:hn}=tt,{pageSizeOptions:yn,defaultPageSize:vn,fetchSetting:bn,defaultSize:Sn,defaultSortFn:wn,defaultFilterFn:Cn}=hn,aa="key",oa=yn,la=vn,sa=bn,ra=Sn,ia=wn,ua=Cn,da="center",ca="INDEX",_n="ACTION",An=G({name:"TableAction",components:{Icon:Pe,PopConfirmButton:nt,Divider:De,Dropdown:at,MoreOutlined:gt,Tooltip:Oe},props:{actions:{type:Array,default:null},dropDownActions:{type:Array,default:null},divider:w.bool.def(!0),outside:w.bool,stopButtonPropagation:w.bool.def(!1)},setup(e){const{prefixCls:n}=ot("basic-table-action");let a={};e.outside||(a=gn());const{hasPermission:s}=lt();function r(u){const i=u.ifShow;let p=!0;return rt(i)&&(p=i),W(i)&&(p=i(u)),p}const m=P(()=>(Te(e.actions)||[]).filter(u=>s(u.auth)&&r(u)).map(u=>{const{popConfirm:i}=u;return x(R(R({getPopupContainer:()=>{var p;return(p=k(a==null?void 0:a.wrapRef))!=null?p:document.body},type:"link",size:"small"},u),i||{}),{onConfirm:i==null?void 0:i.confirm,onCancel:i==null?void 0:i.cancel,enable:!!i})})),c=P(()=>{const u=(Te(e.dropDownActions)||[]).filter(i=>s(i.auth)&&r(i));return u.map((i,p)=>{const{label:g,popConfirm:d}=i;return x(R(R({},i),d),{onConfirm:d==null?void 0:d.confirm,onCancel:d==null?void 0:d.cancel,text:g,divider:p<u.length-1?e.divider:!1})})}),o=P(()=>{var p,g;const i=(((p=a==null?void 0:a.getColumns)==null?void 0:p.call(a))||[]).find(d=>d.flag===_n);return(g=i==null?void 0:i.align)!=null?g:"left"});function l(u){return R({getPopupContainer:()=>{var i;return(i=k(a==null?void 0:a.wrapRef))!=null?i:document.body},placement:"bottom"},st(u)?{title:u}:u)}function t(u){if(!e.stopButtonPropagation)return;u.composedPath().find(g=>{var d;return((d=g.tagName)==null?void 0:d.toUpperCase())==="BUTTON"})&&u.stopPropagation()}return{prefixCls:n,getActions:m,getDropdownList:c,getAlign:o,onCellClick:t,getTooltip:l}}});function Fn(e,n,a,s,r,m){const c=S("Icon"),o=S("PopConfirmButton"),l=S("Tooltip"),t=S("Divider"),u=S("MoreOutlined"),i=S("a-button"),p=S("Dropdown");return C(),M("div",{class:ve([e.prefixCls,e.getAlign]),onClick:n[0]||(n[0]=(...g)=>e.onCellClick&&e.onCellClick(...g))},[(C(!0),M(ee,null,re(e.getActions,(g,d)=>(C(),M(ee,{key:`${d}-${g.label}`},[g.tooltip?(C(),T(l,te(Z({key:0},e.getTooltip(g.tooltip))),{default:F(()=>[y(o,te(ge(g)),{default:F(()=>[g.icon?(C(),T(c,{key:0,icon:g.icon,class:ve({"mr-1":!!g.label})},null,8,["icon","class"])):z("",!0),g.label?(C(),M(ee,{key:1},[K(E(g.label),1)],64)):z("",!0)]),_:2},1040)]),_:2},1040)):(C(),T(o,te(Z({key:1},g)),{default:F(()=>[g.icon?(C(),T(c,{key:0,icon:g.icon,class:ve({"mr-1":!!g.label})},null,8,["icon","class"])):z("",!0),g.label?(C(),M(ee,{key:1},[K(E(g.label),1)],64)):z("",!0)]),_:2},1040)),e.divider&&d<e.getActions.length-1?(C(),T(t,{key:2,type:"vertical",class:"action-divider"})):z("",!0)],64))),128)),e.dropDownActions&&e.getDropdownList.length>0?(C(),T(p,{key:0,trigger:["hover"],dropMenuList:e.getDropdownList,popconfirm:""},{default:F(()=>[me(e.$slots,"more"),e.$slots.more?z("",!0):(C(),T(i,{key:0,type:"link",size:"small"},{default:F(()=>[y(u,{class:"icon-more"})]),_:1}))]),_:3},8,["dropMenuList"])):z("",!0)],2)}const Ve=H(An,[["render",Fn]]),$n=G({components:{Image:ht},props:{fileUrl:w.string.def(""),fileName:w.string.def("")}});const kn={class:"thumb"};function Rn(e,n,a,s,r,m){const c=S("Image");return C(),M("span",kn,[e.fileUrl?(C(),T(c,{key:0,src:e.fileUrl,width:104},null,8,["src"])):z("",!0)])}const We=H($n,[["render",Rn]]),{t:O}=X();function Tn(){return[{dataIndex:"thumbUrl",title:O("component.upload.legend"),width:100,customRender:({record:e})=>{const{thumbUrl:n}=e||{};return n&&y(We,{fileUrl:n},null)}},{dataIndex:"name",title:O("component.upload.fileName"),align:"left",customRender:({text:e,record:n})=>{const{percent:a,status:s}=n||{};let r="normal";return s===D.ERROR?r="exception":s===D.UPLOADING?r="active":s===D.SUCCESS&&(r="success"),y("div",null,[y("p",{class:"truncate mb-1 max-w-[280px]",title:e},[e]),y(yt,{percent:a,size:"small",status:r},null)])}},{dataIndex:"size",title:O("component.upload.fileSize"),width:100,customRender:({text:e=0})=>e&&(e/1024).toFixed(2)+"KB"},{dataIndex:"status",title:O("component.upload.fileStatue"),width:100,customRender:({text:e})=>e===D.SUCCESS?y(ye,{color:"green"},{default:()=>O("component.upload.uploadSuccess")}):e===D.ERROR?y(ye,{color:"red"},{default:()=>O("component.upload.uploadError")}):e===D.UPLOADING?y(ye,{color:"blue"},{default:()=>O("component.upload.uploading")}):e||O("component.upload.pending")}]}function Ln(e){return{width:120,title:O("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:n})=>{const a=[{label:O("component.upload.del"),color:"error",onClick:e.bind(null,n)}];return y(Ve,{actions:a,outside:!0},null)}}}function Pn(){return[{dataIndex:"url",title:O("component.upload.legend"),width:100,customRender:({record:e})=>{const{url:n}=e||{};return Ke(n)&&y(We,{fileUrl:n},null)}},{dataIndex:"name",title:O("component.upload.fileName"),align:"left"}]}function In({handleRemove:e,handleDownload:n}){return{width:160,title:O("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:a})=>{const s=[{label:O("component.upload.del"),color:"error",onClick:e.bind(null,a)},{label:O("component.upload.download"),onClick:n.bind(null,a)}];return y(Ve,{actions:s,outside:!0},null)}}}const qe=G({name:"FileList",props:cn,setup(e){const n=It();return U(()=>e.dataSource,()=>{kt(()=>{var a;(a=n==null?void 0:n.redoModalHeight)==null||a.call(n)})}),()=>{const{columns:a,actionColumn:s,dataSource:r}=e,m=[...a,s];return y("div",{class:"overflow-x-auto"},[y("table",{class:"file-table"},[y("colgroup",null,[m.map(c=>{const{width:o=0,dataIndex:l}=c,t={width:`${o}px`,minWidth:`${o}px`};return y("col",{style:o?t:{},key:l},null)})]),y("thead",null,[y("tr",{class:"file-table-tr"},[m.map(c=>{const{title:o="",align:l="center",dataIndex:t}=c;return y("th",{class:["file-table-th",l],key:t},[o])})])]),y("tbody",null,[r.map((c={},o)=>y("tr",{class:"file-table-tr",key:`${o+c.name||""}`},[m.map(l=>{const{dataIndex:t="",customRender:u,align:i="center"}=l,p=u&&W(u);return y("td",{class:["file-table-td break-all",i],key:t},[p?u==null?void 0:u({text:c[t],record:c}):c[t]])})]))])])])}}});const Un=G({components:{BasicModal:Ge,Upload:ce,Alert:vt,FileList:qe},props:x(R({},ze),{previewFileList:{type:Array,default:()=>[]}}),emits:["change","register","delete"],setup(e,{emit:n}){const a=Ee({fileList:[]}),s=A(!1),r=A([]),{accept:m,helpText:c,maxNumber:o,maxSize:l}=Rt(e),{t}=X(),[u,{closeModal:i}]=je(),{getStringAccept:p,getHelpText:g}=pn({acceptRef:m,helpTextRef:c,maxNumberRef:o,maxSizeRef:l}),{createMessage:d}=it(),f=P(()=>r.value.length>0&&!r.value.every(_=>_.status===D.SUCCESS)),h=P(()=>{const _=r.value.some(L=>L.status===D.SUCCESS);return{disabled:s.value||r.value.length===0||!_}}),v=P(()=>{const _=r.value.some(L=>L.status===D.ERROR);return s.value?t("component.upload.uploading"):t(_?"component.upload.reUploadFailed":"component.upload.startUpload")});function $(_){const{size:L,name:N}=_,{maxSize:V}=e;if(V&&_.size/1024/1024>=V)return d.error(t("component.upload.maxSizeMultiple",[V])),!1;const q={uuid:Pt(),file:_,size:L,name:N,percent:0,type:N.split(".").pop()};return fn(_)?mn(_).then(({result:J})=>{r.value=[...k(r),R({thumbUrl:J},q)]}):r.value=[...k(r),q],!1}function I(_){const L=r.value.findIndex(N=>N.uuid===_.uuid);L!==-1&&r.value.splice(L,1),n("delete",_)}function j(_){return B(this,null,function*(){var N;const{api:L}=e;if(!L||!W(L))return ut();try{_.status=D.UPLOADING;const V=yield(N=e.api)==null?void 0:N.call(e,{data:R({},e.uploadParams||{}),file:_.file,name:e.name,filename:e.filename},function(Ae){const Ze=Ae.loaded/Ae.total*100|0;_.percent=Ze}),{data:q}=V;return _.status=D.SUCCESS,_.responseData=q,{success:!0,error:null}}catch(V){return _.status=D.ERROR,{success:!1,error:V}}})}function Q(){return B(this,null,function*(){var L;const{maxNumber:_}=e;if(r.value.length+((L=e.previewFileList)==null?void 0:L.length)>_)return d.warning(t("component.upload.maxNumber",[_]));try{s.value=!0;const N=r.value.filter(J=>J.status!==D.SUCCESS)||[],V=yield Promise.all(N.map(J=>j(J)));s.value=!1;const q=V.filter(J=>!J.success);if(q.length>0)throw q}catch(N){throw s.value=!1,N}})}function ie(){const{maxNumber:_}=e;if(r.value.length>_)return d.warning(t("component.upload.maxNumber",[_]));if(s.value)return d.warning(t("component.upload.saveWarn"));const L=[];for(const N of r.value){const{status:V,responseData:q}=N;V===D.SUCCESS&&q&&L.push(q.url)}if(L.length<=0)return d.warning(t("component.upload.saveError"));r.value=[],i(),n("change",L)}function ue(){return B(this,null,function*(){return s.value?(d.warning(t("component.upload.uploadWait")),!1):(r.value=[],!0)})}return{columns:Tn(),actionColumn:Ln(I),register:u,closeModal:i,getHelpText:g,getStringAccept:p,getOkButtonProps:h,beforeUpload:$,fileListRef:r,state:a,isUploadingRef:s,handleStartUpload:Q,handleOk:ie,handleCloseFunc:ue,getIsSelectFile:f,getUploadBtnText:v,t}}});const Dn={class:"upload-modal-toolbar"};function On(e,n,a,s,r,m){const c=S("a-button"),o=S("Alert"),l=S("Upload"),t=S("FileList"),u=S("BasicModal");return C(),T(u,Z({width:"800px",title:e.t("component.upload.upload"),okText:e.t("component.upload.save")},e.$attrs,{onRegister:e.register,onOk:e.handleOk,closeFunc:e.handleCloseFunc,maskClosable:!1,keyboard:!1,class:"upload-modal",okButtonProps:e.getOkButtonProps,cancelButtonProps:{disabled:e.isUploadingRef}}),{centerFooter:F(()=>[y(c,{onClick:e.handleStartUpload,color:"success",disabled:!e.getIsSelectFile,loading:e.isUploadingRef},{default:F(()=>[K(E(e.getUploadBtnText),1)]),_:1},8,["onClick","disabled","loading"])]),default:F(()=>[ae("div",Dn,[y(o,{message:e.getHelpText,type:"info",banner:"",class:"upload-modal-toolbar__text"},null,8,["message"]),y(l,{accept:e.getStringAccept,multiple:e.multiple,"before-upload":e.beforeUpload,"show-upload-list":!1,class:"upload-modal-toolbar__btn"},{default:F(()=>[y(c,{type:"primary"},{default:F(()=>[K(E(e.t("component.upload.choose")),1)]),_:1})]),_:1},8,["accept","multiple","before-upload"])]),y(t,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])]),_:1},16,["title","okText","onRegister","onOk","closeFunc","okButtonProps","cancelButtonProps"])}const Bn=H(Un,[["render",On]]),Nn=G({components:{BasicModal:Ge,FileList:qe},props:dn,emits:["list-change","register","delete"],setup(e,{emit:n}){const[a,{closeModal:s}]=je(),{t:r}=X(),m=A([]);U(()=>e.value,l=>{ne(l)||(l=[]),m.value=l.filter(t=>!!t).map(t=>({url:t,type:t.split(".").pop()||"",name:t.split("/").pop()||""}))},{immediate:!0});function c(l){const t=m.value.findIndex(u=>u.url===l.url);if(t!==-1){const u=m.value.splice(t,1);n("delete",u[0].url),n("list-change",m.value.map(i=>i.url))}}function o(l){const{url:t=""}=l;Ut({url:t})}return{t:r,register:a,closeModal:s,fileListRef:m,columns:Pn(),actionColumn:In({handleRemove:c,handleDownload:o})}}});function Mn(e,n,a,s,r,m){const c=S("FileList"),o=S("BasicModal");return C(),T(o,Z({width:"800px",title:e.t("component.upload.preview"),class:"upload-preview-modal"},e.$attrs,{onRegister:e.register,showOkBtn:!1}),{default:F(()=>[y(c,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])]),_:1},16,["title","onRegister"])}const En=H(Nn,[["render",Mn]]),Gn=G({name:"BasicUpload",components:{UploadModal:Bn,Space:bt,UploadPreviewModal:En,Icon:Pe,Tooltip:Oe},props:un,emits:["change","delete","preview-delete","update:value"],setup(e,{emit:n,attrs:a}){const{t:s}=X(),[r,{openModal:m}]=Le(),[c,{openModal:o}]=Le(),l=A([]),t=P(()=>{const{emptyHidePreview:f}=e;return f&&f?l.value.length>0:!0}),u=P(()=>{const f=R(R({},a),e);return le(f,"onChange")});U(()=>e.value,(f=[])=>{l.value=ne(f)?f:[]},{immediate:!0});function i(f){l.value=[...k(l),...f||[]],n("update:value",l.value),n("change",l.value)}function p(f){l.value=[...f||[]],n("update:value",l.value),n("change",l.value)}function g(f){n("delete",f)}function d(f){n("preview-delete",f)}return{registerUploadModal:r,openUploadModal:m,handleChange:i,handlePreviewChange:p,registerPreviewModal:c,openPreviewModal:o,fileList:l,showPreview:t,bindValue:u,handleDelete:g,handlePreviewDelete:d,t:s}}});function jn(e,n,a,s,r,m){const c=S("a-button"),o=S("Icon"),l=S("Tooltip"),t=S("Space"),u=S("UploadModal"),i=S("UploadPreviewModal");return C(),M("div",null,[y(t,null,{default:F(()=>[y(c,{type:"primary",onClick:e.openUploadModal,preIcon:"carbon:cloud-upload"},{default:F(()=>[K(E(e.t("component.upload.upload")),1)]),_:1},8,["onClick"]),e.showPreview?(C(),T(l,{key:0,placement:"bottom"},{title:F(()=>[K(E(e.t("component.upload.uploaded"))+" ",1),e.fileList.length?(C(),M(ee,{key:0},[K(E(e.fileList.length),1)],64)):z("",!0)]),default:F(()=>[y(c,{onClick:e.openPreviewModal},{default:F(()=>[y(o,{icon:"bi:eye"}),e.fileList.length&&e.showPreviewNumber?(C(),M(ee,{key:0},[K(E(e.fileList.length),1)],64)):z("",!0)]),_:1},8,["onClick"])]),_:1})):z("",!0)]),_:1}),y(u,Z(e.bindValue,{previewFileList:e.fileList,onRegister:e.registerUploadModal,onChange:e.handleChange,onDelete:e.handleDelete}),null,16,["previewFileList","onRegister","onChange","onDelete"]),y(i,{value:e.fileList,onRegister:e.registerPreviewModal,onListChange:e.handlePreviewChange,onDelete:e.handlePreviewDelete},null,8,["value","onRegister","onListChange","onDelete"])])}const zn=H(Gn,[["render",jn]]),Kn=dt(zn),b=new Map;b.set("Input",se);b.set("InputGroup",se.Group);b.set("InputPassword",se.Password);b.set("InputSearch",se.Search);b.set("InputTextArea",se.TextArea);b.set("InputNumber",St);b.set("AutoComplete",wt);b.set("ImageUpload",rn);b.set("Select",Ie);b.set("ApiSelect",zt);b.set("ApiTree",Vt);b.set("TreeSelect",Ue);b.set("ApiTreeSelect",Zt);b.set("ApiRadioGroup",Et);b.set("Switch",Ct);b.set("RadioButtonGroup",Tt);b.set("RadioGroup",de.Group);b.set("Checkbox",Be);b.set("CheckboxGroup",Be.Group);b.set("ApiCascader",Qt);b.set("Cascader",Se);b.set("Slider",_t);b.set("Rate",At);b.set("ApiTransfer",en);b.set("DatePicker",pe);b.set("MonthPicker",pe.MonthPicker);b.set("RangePicker",pe.RangePicker);b.set("WeekPicker",pe.WeekPicker);b.set("TimePicker",Ne);b.set("TimeRangePicker",Ne.TimeRangePicker);b.set("StrengthMeter",Dt);b.set("IconPicker",Ot);b.set("InputCountDown",Bt);b.set("Upload",Kn);b.set("Divider",De);function pa(e,n){b.set(e,n)}export{zt as A,Kn as B,da as D,sa as F,ca as I,la as P,aa as R,Ve as T,oa as a,Zt as b,b as c,Et as d,_n as e,ia as f,ua as g,ra as h,na as i,pa as j,gn as u};
