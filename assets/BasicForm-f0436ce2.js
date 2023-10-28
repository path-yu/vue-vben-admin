var Me=Object.defineProperty;var Oe=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var we=(e,a,n)=>a in e?Me(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,C=(e,a)=>{for(var n in a||(a={}))Ye.call(a,n)&&we(e,n,a[n]);if(Oe)for(var n of Oe(a))He.call(a,n)&&we(e,n,a[n]);return e};var R=(e,a,n)=>new Promise((r,d)=>{var f=i=>{try{g(n.next(i))}catch(u){d(u)}},l=i=>{try{g(n.throw(i))}catch(u){d(u)}},g=i=>i.done?r(i.value):Promise.resolve(i.value).then(f,l);g((n=n.apply(e,a)).next())});import{h as ze,d as Ee,a as Ke,_ as Ue}from"./FormItem.vue_vue_type_script_lang-27b3606e.js";import{K as We,z as qe,B as Ge,L as Xe,p as F,k as Je,_ as $e,M as K,N as ee,m as ce,n as re,O as Ie,Q as z,R as be,J as Qe,s as Ze,u as Re,S as xe,U as Te,V as de,c as Le,W as et,f as tt}from"./index.js";import{Y as Pe,K as Ve,s as X,a7 as Ae,aa as je,e as J,ab as nt,R as ot}from"./antd-4273b3e7.js";import{d as ke,c as Y,a7 as U,Z as G,a8 as Q,a9 as H,$ as st,af as at,l as le,N as W,ac as te,E as pe,a0 as me,ab as ae,ai as ie,u as o,g as rt,w as x,am as it,x as ge,H as De,h as ct,r as Ce,f as Z,o as lt,ak as ut,_ as ft,aa as he,ad as Se,aj as ye,F as dt}from"./vue-ea98dac5.js";import{u as pt}from"./index-6a34923f.js";const Ne=Symbol();function mt(e){return qe(e,Ne)}function ht(){return We(Ne)}const yt=ke({name:"BasicFormAction",components:{FormItem:Pe.Item,Button:Ge,BasicArrow:Xe,[Ve.name]:Ve},props:{showActionButtonGroup:F.bool.def(!0),showResetButton:F.bool.def(!0),showSubmitButton:F.bool.def(!0),showAdvancedButton:F.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:F.number.def(6),isAdvanced:F.bool,hideAdvanceBtn:F.bool},emits:["toggle-advanced"],setup(e,{emit:a}){const{t:n}=Je(),r=Y(()=>{const{showAdvancedButton:g,actionSpan:i,actionColOptions:u}=e,b=24-i,O=g?{span:b<6?24:b}:{};return C(C({style:{textAlign:"right"},span:g?6:4},O),u)}),d=Y(()=>Object.assign({text:n("common.resetText")},e.resetButtonOptions)),f=Y(()=>Object.assign({text:n("common.queryText")},e.submitButtonOptions));function l(){a("toggle-advanced")}return C({t:n,actionColOpt:r,getResetBtnOptions:d,getSubmitBtnOptions:f,toggleAdvanced:l},ht())}});function bt(e,a,n,r,d,f){const l=U("Button"),g=U("BasicArrow"),i=U("FormItem"),u=U("a-col");return e.showActionButtonGroup?(G(),Q(u,ie(te({key:0},e.actionColOpt)),{default:H(()=>[st("div",{style:at([{width:"100%"},{textAlign:e.actionColOpt.style.textAlign}])},[le(i,null,{default:H(()=>[W(e.$slots,"resetBefore"),e.showResetButton?(G(),Q(l,te({key:0,type:"default",class:"mr-2"},e.getResetBtnOptions,{onClick:e.resetAction}),{default:H(()=>[pe(me(e.getResetBtnOptions.text),1)]),_:1},16,["onClick"])):ae("",!0),W(e.$slots,"submitBefore"),e.showSubmitButton?(G(),Q(l,te({key:1,type:"primary",class:"mr-2"},e.getSubmitBtnOptions,{onClick:e.submitAction}),{default:H(()=>[pe(me(e.getSubmitBtnOptions.text),1)]),_:1},16,["onClick"])):ae("",!0),W(e.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(G(),Q(l,{key:2,type:"link",size:"small",onClick:e.toggleAdvanced},{default:H(()=>[pe(me(e.isAdvanced?e.t("component.form.putAway"):e.t("component.form.unfold"))+" ",1),le(g,{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1},8,["onClick"])):ae("",!0),W(e.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):ae("",!0)}const At=$e(yt,[["render",bt]]);function gt(e,a,n){const r=/^\[(.+)\]$/;if(r.test(e)){const d=e.match(r);if(d&&d[1]){const f=d[1].split(",");return a=Array.isArray(a)?a:[a],f.forEach((l,g)=>{X(n,l.trim(),a[g])}),!0}}}function vt(e,a,n){const r=/^\{(.+)\}$/;if(r.test(e)){const d=e.match(r);if(d&&d[1]){const f=d[1].split(",");return a=K(a)?a:{},f.forEach(l=>{X(n,l.trim(),a[l.trim()])}),!0}}}function Bt({defaultValueRef:e,getSchema:a,formModel:n,getProps:r}){function d(i){var b,O;if(!K(i))return{};const u={};for(const p of Object.entries(i)){let[,m]=p;const[V]=p;if(!V||ee(m)&&m.length===0||ce(m))continue;const S=o(r).transformDateFunc;K(m)&&(m=S==null?void 0:S(m)),ee(m)&&((b=m[0])!=null&&b.format)&&((O=m[1])!=null&&O.format)&&(m=m.map(h=>S==null?void 0:S(h))),re(m)&&(m===""?m=void 0:m=m.trim()),!gt(V,m,u)&&!vt(V,m,u)&&X(u,V,m)}return f(u)}function f(i){const u=o(r).fieldMapToTime;if(!u||!Array.isArray(u))return i;for(const[b,[O,p],m="YYYY-MM-DD"]of u){if(!b||!O||!p)continue;if(!Ae(i,b)){je(i,b);continue}const[V,S]=Ae(i,b),[h,w]=Array.isArray(m)?m:[m,m];Ie(V)&&X(i,O,l(V,h)),Ie(S)&&X(i,p,l(S,w)),je(i,b)}return i}function l(i,u){return u==="timestamp"?z(i).unix():u==="timestampStartDay"?z(i).startOf("day").unix():z(i).format(u)}function g(){const i=o(a),u={};i.forEach(b=>{const{defaultValue:O,defaultValueObj:p}=b,m=Object.keys(p||{});m.length&&m.map(V=>{u[V]=p[V],n[V]===void 0&&(n[V]=p[V])}),be(O)||(u[b.field]=O,n[b.field]===void 0&&(n[b.field]=O))}),e.value=J(u)}return{handleFormValues:d,initDefault:g}}const q=24;function Ft({advanceState:e,emit:a,getProps:n,getSchema:r,formModel:d,defaultValueRef:f}){const l=rt(),{realWidthRef:g,screenEnum:i,screenRef:u}=Qe(),b=Y(()=>{if(!e.isAdvanced)return 0;const h=o(n).emptySpan||0;if(Ze(h))return h;if(K(h)){const{span:w=0}=h,N=o(u);return h[N.toLowerCase()]||w||0}return 0}),O=Re(V,30);x([()=>o(r),()=>e.isAdvanced,()=>o(g)],()=>{const{showAdvancedButton:h}=o(n);h&&O()},{immediate:!0});function p(h,w=0,N=!1){const k=o(g),L=parseInt(h.md)||parseInt(h.xs)||parseInt(h.sm)||h.span||q,E=parseInt(h.lg)||L,_=parseInt(h.xl)||E,M=parseInt(h.xxl)||_;return k<=i.LG?w+=L:k<i.XL?w+=E:k<i.XXL?w+=_:w+=M,N?(e.hideAdvanceBtn=!1,w<=q*2?(e.hideAdvanceBtn=!0,e.isAdvanced=!0):w>q*2&&w<=q*(o(n).autoAdvancedLine||3)?e.hideAdvanceBtn=!1:e.isLoad||(e.isLoad=!0,e.isAdvanced=!e.isAdvanced),{isAdvanced:e.isAdvanced,itemColSum:w}):w>q*(o(n).alwaysShowLines||1)?{isAdvanced:e.isAdvanced,itemColSum:w}:{isAdvanced:!0,itemColSum:w}}const m=it({});function V(){var k;let h=0,w=0;const{baseColProps:N={}}=o(n);for(const L of o(r)){const{show:E,colProps:_}=L;let M=!0;if(xe(E)&&(M=E),ce(E)&&(M=E({schema:L,model:d,field:L.field,values:C(C({},o(f)),d)})),M&&(_||N)){const{itemColSum:t,isAdvanced:s}=p(C(C({},N),_),h);h=t||0,s&&(w=h),m[L.field]=s}}(k=l==null?void 0:l.proxy)==null||k.$forceUpdate(),e.actionSpan=w%q+o(b),p(o(n).actionColOptions||{span:q},h,!0),a("advanced-change")}function S(){e.isAdvanced=!e.isAdvanced}return{handleToggleAdvanced:S,fieldsIsAdvancedMap:m}}function Ot(e,a={}){const n=/^\[(.+)\]$/;if(n.test(e)){const r=e.match(n);if(r&&r[1]){const d=r[1].split(",");if(!d.length)return;const f=[];return d.forEach((l,g)=>{X(f,g,a[l.trim()])}),f.filter(Boolean).length?f:void 0}}}function wt(e,a={}){const n=/^\{(.+)\}$/;if(n.test(e)){const r=e.match(n);if(r&&r[1]){const d=r[1].split(",");if(!d.length)return;const f={};return d.forEach(l=>{X(f,l.trim(),a[l.trim()])}),Object.values(f).filter(Boolean).length?f:void 0}}}function It({emit:e,getProps:a,formModel:n,getSchema:r,defaultValueRef:d,formElRef:f,schemaRef:l,handleFormValues:g}){function i(){return R(this,null,function*(){const{resetFunc:t,submitOnReset:s}=o(a);t&&ce(t)&&(yield t()),o(f)&&(Object.keys(n).forEach(c=>{const A=o(r).find(D=>D.field===c),B=A==null?void 0:A.defaultValueObj,j=Object.keys(B||{});j.length&&j.map(D=>{n[D]=B[D]}),n[c]=Tt(A,d,c)}),ge(()=>E()),e("reset",De(n)),s&&M())})}const u=()=>o(r).map(t=>[...t.fields||[],t.field]).flat(1).filter(Boolean);function b(t){return R(this,null,function*(){const s=u(),v=".",c=s.filter(B=>String(B).indexOf(v)>=0),A=[];s.forEach(B=>{const j=o(r).find(I=>I.field===B);let D=Ae(t,B);const ue=Reflect.has(t,B);D=ze(j==null?void 0:j.component,D);const{componentProps:ne}=j||{};let P=ne;typeof ne=="function"&&(P=P({formModel:o(n)}));const oe=Ot(B,t)||wt(B,t);if(ue||oe){const I=oe||D;if(N(B))if(Array.isArray(I)){const y=[];for(const T of I)y.push(T?z(T):null);o(n)[B]=y}else o(n)[B]=I?P!=null&&P.valueFormat?I:z(I):null;else o(n)[B]=I;P!=null&&P.onChange&&(P==null||P.onChange(I)),A.push(B)}else c.forEach(I=>{try{const y=I.split(".").reduce((T,$)=>T[$],t);Te(y)&&(o(n)[I]=o(y),A.push(I))}catch(y){Te(d.value[I])&&(o(n)[I]=J(o(d.value[I])))}})}),k(A).catch(B=>{})})}function O(t){return R(this,null,function*(){const s=J(o(r));if(!t)return;let v=re(t)?[t]:t;re(t)&&(v=[t]);for(const c of v)p(c,s);l.value=s})}function p(t,s){if(re(t)){const v=s.findIndex(c=>c.field===t);v!==-1&&(delete n[t],s.splice(v,1))}}function m(t,s,v=!1){return R(this,null,function*(){const c=J(o(r)),A=Array.isArray(t)?t.map(D=>D.field):[t.field];if(c.find(D=>A.includes(D.field))){de("There are schemas that have already been added");return}const B=c.findIndex(D=>D.field===s),j=K(t)?[t]:t;!s||B===-1||v?v?c.unshift(...j):c.push(...j):B!==-1&&c.splice(B+1,0,...j),l.value=c,h(t)})}function V(t){return R(this,null,function*(){let s=[];if(K(t)&&s.push(t),ee(t)&&(s=[...t]),!s.every(c=>c.component==="Divider"||Reflect.has(c,"field")&&c.field)){de("All children of the form Schema array that need to be updated must contain the `field` field");return}l.value=s})}function S(t){return R(this,null,function*(){let s=[];if(K(t)&&s.push(t),ee(t)&&(s=[...t]),!s.every(A=>A.component==="Divider"||Reflect.has(A,"field")&&A.field)){de("All children of the form Schema array that need to be updated must contain the `field` field");return}const c=[];o(r).forEach(A=>{let B;if(s.forEach(j=>{A.field===j.field&&(B=j)}),B!==void 0&&A.field===B.field){const j=Le(A,B);c.push(j)}else c.push(A)}),h(c),l.value=nt(c,"field")})}function h(t){let s=[];K(t)&&s.push(t),ee(t)&&(s=[...t]);const v={},c=w();s.forEach(A=>{A.component!="Divider"&&Reflect.has(A,"field")&&A.field&&!be(A.defaultValue)&&(!(A.field in c)||be(c[A.field])||et(c[A.field]))&&(v[A.field]=A.defaultValue)}),b(v)}function w(){return o(f)?g(De(o(n))):{}}function N(t){return o(r).some(s=>s.field===t&&s.component?Ee.includes(s.component):!1)}function k(t){return R(this,null,function*(){var v;const s=(v=o(f))==null?void 0:v.validateFields(t);return g(s)})}function L(t){return R(this,null,function*(){var c;let s;t===void 0?s=u():s=t===Array.isArray(t)?t:void 0;const v=yield(c=o(f))==null?void 0:c.validate(s);return g(v)})}function E(t){return R(this,null,function*(){var s;yield(s=o(f))==null?void 0:s.clearValidate(t)})}function _(t,s){return R(this,null,function*(){var v;yield(v=o(f))==null?void 0:v.scrollToField(t,s)})}function M(t){return R(this,null,function*(){t&&t.preventDefault();const{submitFunc:s}=o(a);if(s&&ce(s)){yield s();return}if(o(f))try{const c=yield L();e("submit",c)}catch(c){if((c==null?void 0:c.outOfDate)===!1&&(c!=null&&c.errorFields))return;throw new Error(c)}})}return{handleSubmit:M,clearValidate:E,validate:L,validateFields:k,getFieldsValue:w,updateSchema:S,resetSchema:V,appendSchemaByField:m,removeSchemaByField:O,resetFields:i,setFieldsValue:b,scrollToField:_}}function Tt(e,a,n){let r=J(a.value[n]);return jt(e)?r||"":(!r&&e&&Vt(e)&&(r=[0,0]),!r&&e&&e.component==="ApiTree"&&(r=[]),r)}function Vt(e){if(e.component==="Slider"&&e.componentProps&&"range"in e.componentProps)return!0}function jt(e){return(e==null?void 0:e.component)&&Ke.includes(e.component)}function Dt(d){return R(this,arguments,function*({getSchema:e,getProps:a,formElRef:n,isInitedDefault:r}){ct(()=>R(this,null,function*(){if(o(r)||!o(a).autoFocusFirstItem)return;yield ge();const f=o(e),l=o(n),g=l==null?void 0:l.$el;if(!l||!g||!f||f.length===0)return;const i=f[0];if(!i.component||!i.component.includes("Input"))return;const u=g.querySelector(".ant-row:first-child input");u&&(u==null||u.focus())}))})}const Ct={model:{type:Object,default:()=>({})},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},compact:F.bool,schemas:{type:Array,default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:F.bool.def(!0),autoSubmitOnEnter:F.bool.def(!1),submitOnReset:F.bool,submitOnChange:F.bool,size:F.oneOf(["default","small","large"]).def("default"),disabled:F.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:F.bool,transformDateFunc:{type:Function,default:e=>{var a,n;return(n=(a=e==null?void 0:e.format)==null?void 0:a.call(e,"YYYY-MM-DD HH:mm:ss"))!=null?n:e}},rulesMessageJoinLabel:F.bool.def(!0),autoAdvancedLine:F.number.def(3),alwaysShowLines:F.number.def(1),showActionButtonGroup:F.bool.def(!0),actionColOptions:Object,showResetButton:F.bool.def(!0),autoFocusFirstItem:F.bool,resetButtonOptions:Object,showSubmitButton:F.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:F.bool,labelCol:Object,layout:F.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:Object,colon:F.bool,labelAlign:F.string,rowProps:Object},St=ke({name:"BasicForm",components:{FormItem:Ue,Form:Pe,Row:ot,FormAction:At},props:Ct,emits:["advanced-change","reset","submit","register","field-value-change"],setup(e,{emit:a,attrs:n}){const r=Ce({}),d=pt(),f=Ce({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),l=Z({}),g=Z(!1),i=Z(),u=Z(null),b=Z(null),{prefixCls:O}=tt("basic-form"),p=Y(()=>C(C({},e),o(i))),m=Y(()=>[O,{[`${O}--compact`]:o(p).compact}]),V=Y(()=>{const{baseRowStyle:y={},rowProps:T}=o(p);return C({style:y},T)}),S=Y(()=>C(C(C({},n),e),o(p))),h=Y(()=>{const y=o(u)||o(p).schemas;for(const T of y){const{defaultValue:$,component:fe,componentProps:ve,isHandleDateDefaultValue:_e=!0}=T;if(_e&&$&&fe&&Ee.includes(fe)){const se=ve?ve.valueFormat:null;if(!Array.isArray($))T.defaultValue=se?z($).format(se):z($);else{const Be=[];$.forEach(Fe=>{Be.push(se?z(Fe).format(se):z(Fe))}),T.defaultValue=Be}}}return o(p).showAdvancedButton?J(y.filter(T=>T.component!=="Divider")):J(y)}),{handleToggleAdvanced:w,fieldsIsAdvancedMap:N}=Ft({advanceState:f,emit:a,getProps:p,getSchema:h,formModel:r,defaultValueRef:l}),{handleFormValues:k,initDefault:L}=Bt({getProps:p,defaultValueRef:l,getSchema:h,formModel:r});Dt({getSchema:h,getProps:p,isInitedDefault:g,formElRef:b});const{handleSubmit:E,setFieldsValue:_,clearValidate:M,validate:t,validateFields:s,getFieldsValue:v,updateSchema:c,resetSchema:A,appendSchemaByField:B,removeSchemaByField:j,resetFields:D,scrollToField:ue}=It({emit:a,getProps:p,formModel:r,getSchema:h,defaultValueRef:l,formElRef:b,schemaRef:u,handleFormValues:k});mt({resetAction:D,submitAction:E}),x(()=>o(p).model,()=>{const{model:y}=o(p);y&&_(y)},{immediate:!0}),x(()=>o(p).schemas,y=>{A(y!=null?y:[])}),x(()=>h.value,y=>{ge(()=>{var T;(T=d==null?void 0:d.redoModalHeight)==null||T.call(d)}),!o(g)&&y!=null&&y.length&&(L(),g.value=!0)}),x(()=>r,Re(()=>{o(p).submitOnChange&&E()},300),{deep:!0});function ne(y){return R(this,null,function*(){i.value=Le(o(i)||{},y)})}function P(y,T,$){r[y]=T,a("field-value-change",y,T),$&&$.itemProps&&!$.itemProps.autoLink&&s([y]).catch(fe=>{})}function oe(y){const{autoSubmitOnEnter:T}=o(p);if(T&&y.key==="Enter"&&y.target&&y.target instanceof HTMLElement){const $=y.target;$&&$.tagName&&$.tagName.toUpperCase()=="INPUT"&&E()}}const I={getFieldsValue:v,setFieldsValue:_,resetFields:D,updateSchema:c,resetSchema:A,setProps:ne,removeSchemaByField:j,appendSchemaByField:B,clearValidate:M,validateFields:s,validate:t,submit:E,scrollToField:ue};return lt(()=>{L(),a("register",I)}),C({getBindValue:S,handleToggleAdvanced:w,handleEnterPress:oe,formModel:r,defaultValueRef:l,advanceState:f,getRow:V,getProps:p,formElRef:b,getSchema:h,formActionType:I,setFormModel:P,getFormClass:m,getFormActionBindProps:Y(()=>C(C({},p.value),f)),fieldsIsAdvancedMap:N},I)}});function Et(e,a,n,r,d,f){const l=U("FormItem"),g=U("FormAction"),i=U("Row"),u=U("Form");return G(),Q(u,te(e.getBindValue,{class:e.getFormClass,ref:"formElRef",model:e.formModel,onKeypress:ut(e.handleEnterPress,["enter"])}),{default:H(()=>[le(i,ie(ye(e.getRow)),{default:H(()=>[W(e.$slots,"formHeader"),(G(!0),ft(dt,null,he(e.getSchema,b=>(G(),Q(l,{key:b.field,isAdvanced:e.fieldsIsAdvancedMap[b.field],tableAction:e.tableAction,formActionType:e.formActionType,schema:b,formProps:e.getProps,allDefaultValues:e.defaultValueRef,formModel:e.formModel,setFormModel:e.setFormModel},Se({_:2},[he(Object.keys(e.$slots),O=>({name:O,fn:H(p=>[W(e.$slots,O,ie(ye(p||{})))])}))]),1032,["isAdvanced","tableAction","formActionType","schema","formProps","allDefaultValues","formModel","setFormModel"]))),128)),le(g,te(e.getFormActionBindProps,{onToggleAdvanced:e.handleToggleAdvanced}),Se({_:2},[he(["resetBefore","submitBefore","advanceBefore","advanceAfter"],b=>({name:b,fn:H(O=>[W(e.$slots,b,ie(ye(O||{})))])}))]),1040,["onToggleAdvanced"]),W(e.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"])}const _t=$e(St,[["render",Et]]);export{_t as B};
