import{B as h}from"./BasicTable-10e06813.js";import"./componentMap-f7c1deec.js";import"./TableImg.vue_vue_type_style_index_0_lang-324f805d.js";import{u as k}from"./useTable-64dd7831.js";import{getBasicColumns as y,getFormConfig as b}from"./tableData-251cea41.js";import{d as B}from"./table-9286518d.js";import{d as F,f as E,a7 as m,Z as p,a8 as v,a9 as t,E as c,l as f,_ as g,F as C,$ as T,a0 as w}from"./vue-ea98dac5.js";import{X as A}from"./antd-4273b3e7.js";import{_ as S}from"./index.js";import"./useFormItem-dc719137.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import"./index-6a34923f.js";import"./useWindowSizeFn-997fa1d0.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./BasicForm-f0436ce2.js";import"./FormItem.vue_vue_type_script_lang-27b3606e.js";import"./useForm-e6560703.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const D=F({components:{BasicTable:h,AAlert:A},setup(){const e=E([]),[s,{getForm:_}]=k({title:"开启搜索区域",api:B,columns:y(),useSearchForm:!0,formConfig:b(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:e,onSelect:i,onSelectAll:n}});function d(){}function i(o,a){a?e.value=[...e.value,o.id]:e.value=e.value.filter(r=>r!==o.id)}function n(o,a,r){const l=r.map(u=>u.id);o?e.value=[...e.value,...l]:e.value=e.value.filter(u=>!l.includes(u))}return{registerTable:s,getFormValues:d,checkedKeys:e,onSelect:i,onSelectAll:n}}}),K={key:1};function $(e,s,_,d,i,n){const o=m("a-button"),a=m("a-alert"),r=m("BasicTable");return p(),v(r,{onRegister:e.registerTable},{"form-custom":t(()=>[c(" custom-slot ")]),headerTop:t(()=>[f(a,{type:"info","show-icon":""},{message:t(()=>[e.checkedKeys.length>0?(p(),g(C,{key:0},[T("span",null,"已选中"+w(e.checkedKeys.length)+"条记录(可跨页)",1),f(o,{type:"link",onClick:s[0]||(s[0]=l=>e.checkedKeys=[]),size:"small"},{default:t(()=>[c("清空")]),_:1})],64)):(p(),g("span",K,"未选中任何项目"))]),_:1})]),toolbar:t(()=>[f(o,{type:"primary",onClick:e.getFormValues},{default:t(()=>[c("获取表单数据")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}const ae=S(D,[["render",$]]);export{ae as default};
