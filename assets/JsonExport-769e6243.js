import{B as d}from"./BasicTable-10e06813.js";import"./componentMap-f7c1deec.js";import"./TableImg.vue_vue_type_style_index_0_lang-324f805d.js";import"./index-36a8d2d9.js";import{c,d as t,j as m,a as f}from"./data-a7e9586e.js";import{P as h}from"./index-5019f067.js";import{d as F,a7 as r,Z as C,a8 as _,a9 as o,l as a,E as u}from"./vue-ea98dac5.js";import{_ as B}from"./index.js";import"./useFormItem-dc719137.js";import"./antd-4273b3e7.js";import"./RadioButtonGroup-f37554dc.js";import"./uuid-a2a47690.js";import"./index-6a34923f.js";import"./useWindowSizeFn-997fa1d0.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-07d56da0.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-cfd9fa6d.js";import"./copyTextToClipboard-a2756f90.js";import"./index-5b24d4ba.js";import"./BasicForm-f0436ce2.js";import"./FormItem.vue_vue_type_script_lang-27b3606e.js";import"./useForm-e6560703.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-b8e9ee08.js";const A=F({components:{BasicTable:d,PageWrapper:h},setup(){function e(){m({data:t,filename:"使用key作为默认头部.xlsx"})}function i(){m({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})}function s(){f({sheetList:[{data:t,sheetName:"使用key作为默认头部"},{data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},json2sheetOpts:{header:["name","id"]},sheetName:"自定义头部"}],filename:"多Sheet导出示例.xlsx"})}return{defaultHeader:e,customHeader:i,handleMultipleSheet:s,columns:c,data:t}}});function k(e,i,s,T,x,E){const n=r("a-button"),p=r("BasicTable"),l=r("PageWrapper");return C(),_(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:o(()=>[a(p,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:o(()=>[a(n,{onClick:e.defaultHeader},{default:o(()=>[u(" 导出：默认头部 ")]),_:1},8,["onClick"]),a(n,{onClick:e.customHeader},{default:o(()=>[u(" 导出：自定义头部 ")]),_:1},8,["onClick"]),a(n,{onClick:e.handleMultipleSheet,danger:""},{default:o(()=>[u(" 导出多Sheet ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}const R=B(A,[["render",k]]);export{R as default};
