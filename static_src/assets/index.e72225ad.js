import{p as e,a,r as t,b as l,o as n,c as r,d as i,e as s,f as o,F as d,g as p,h as c,t as u,i as m,w as f,j as v,k as h,_ as g}from"./vendor.939ad442.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const l=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,r)=>{const i=new URL(e,l);if(self[a].moduleMap[i])return t(self[a].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${a}.moduleMap['${i}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){r(new Error(`Failed to import: ${e}`)),n(o)},onload(){t(self[a].moduleMap[i]),n(o)}});document.head.appendChild(o)})),self[a].moduleMap={}}}("assets/");const x={setup(){const e=t(1),a=t(""),r=t(null),i=l([{name:"宽度",value:60,max:200,type:"slider-picker"},{name:"高度",value:60,max:200,type:"slider-picker"},{name:"旋转角度",value:0,max:360,type:"slider-picker"},{name:"颜色块",value:"rgba(0,0,0,1)",type:"color-picker"}]);function s(){let t,l,n=i[0].value,s=i[1].value,o=i[2].value,d=i[3].value;switch(e.value){case 1:t=`transparent transparent ${d}`,l=`0 ${n/2}px ${s}px ${n/2}px`;break;case 2:t=`${d} transparent transparent`,l=`${s}px ${n/2}px 0 ${n/2}px`;break;case 3:t=`transparent ${d} transparent transparent`,l=`${s/2}px ${n}px  ${s/2}px 0`;break;case 4:t=`transparent transparent transparent ${d}`,l=`${s/2}px 0  ${s/2}px ${n}px`}let p=`transform:rotate(${o}deg);border-width:${l};border-color:${t}`;r.value.style=p,function(e,t,l){let n={display:"inline-block",width:"0",height:"0","border-style":"solid",transform:`rotate(${e}deg)`,"border-width":`${t}`,"border-color":`${l}`};a.value=JSON.stringify(n,null,4).replaceAll(/"/g,"").replaceAll(/,\n/g,";\n")}(o,l,t)}return n((()=>{s()})),{radio:e,panlist:[{id:1,text:"上"},{id:2,text:"下"},{id:3,text:"左"},{id:4,text:"右"}],predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"],cList:i,D3Ref:r,handleChange:function(e,a){s()},showStr:a}}},b=f("data-v-8c7b022e");e("data-v-8c7b022e");const $={class:"angle-container"},y={class:"angle-left"},w={class:"angle-form"},C=o("div",{class:"sub-title"},"方向:",-1),k={class:"sub-title"},L={class:"angle-slider"},V={class:"angle-right"},F=o("div",{class:"angle-three"},null,-1),R={class:"angle-warp"},S={class:"angle-shape",ref:"D3Ref"},U={class:"angle-context"},E=o("h2",null,"CSS 代码",-1),_={class:"angle-code",contenteditable:"true"};a();const A=b(((e,a,t,l,n,f)=>{const v=r("el-radio"),h=r("el-radio-group"),g=r("el-slider"),x=r("el-color-picker");return i(),s(d,null,[o("div",$,[o("div",y,[o("div",w,[C,o(h,{modelValue:l.radio,"onUpdate:modelValue":a[1]||(a[1]=e=>l.radio=e),onChange:l.handleChange},{default:b((()=>[(i(!0),s(d,null,p(l.panlist,((e,a)=>(i(),s(v,{label:e.id,key:e.id},{default:b((()=>[c(u(e.text),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])]),(i(!0),s(d,null,p(l.cList,((e,a)=>(i(),s("div",{class:"angle-form",key:a},[o("div",k,u(e.name)+"：",1),o("div",L,["slider-picker"===e.type?(i(),s(g,{key:0,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,max:e.max,onChange:a=>{l.handleChange(a,e)}},null,8,["modelValue","onUpdate:modelValue","max","onChange"])):m("",!0),"color-picker"===e.type?(i(),s(x,{key:1,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,"show-alpha":"",predefine:l.predefineColors,onChange:a=>{l.handleChange(a,e)}},null,8,["modelValue","onUpdate:modelValue","predefine","onChange"])):m("",!0)])])))),128))]),o("div",V,[F,o("div",R,[o("div",S,null,512)])])]),o("div",U,[E,o("div",_,u(l.showStr),1)])],64)}));x.render=A,x.__scopeId="data-v-8c7b022e";const M={expose:[],setup:e=>(e,a)=>(i(),s(x))};!function(e,a){var t,l=e.document,n=l.documentElement,r=l.querySelector('meta[name="viewport"]'),i=l.querySelector('meta[name="flexible"]'),s=0,o=0,d=a.flexible||(a.flexible={});if(r){var p=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(o=parseFloat(p[1]),s=parseInt(1/o))}else if(i){var c=i.getAttribute("content");if(c){var u=c.match(/initial\-dpr=([\d\.]+)/),m=c.match(/maximum\-dpr=([\d\.]+)/);u&&(s=parseFloat(u[1]),o=parseFloat((1/s).toFixed(2))),m&&(s=parseFloat(m[1]),o=parseFloat((1/s).toFixed(2)))}}if(!s&&!o){e.navigator.appVersion.match(/android/gi);var f=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;o=1/(s=f?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1)}if(n.setAttribute("data-dpr",s),!r)if((r=l.createElement("meta")).setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+o+", maximum-scale="+o+", minimum-scale="+o+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(r);else{var h=l.createElement("div");h.appendChild(r),l.write(h.innerHTML)}function g(){var a=n.getBoundingClientRect().width;a/s>540&&(a=540*s);var t=a/10;n.style.fontSize=t+"px",d.rem=e.rem=t}e.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout(g,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(t),t=setTimeout(g,300))}),!1),"complete"===l.readyState?l.body.style.fontSize=14*s+"px":l.addEventListener("DOMContentLoaded",(function(e){l.body.style.fontSize=14*s+"px"}),!1),g(),d.dpr=e.dpr=s,d.refreshRem=g,d.rem2px=function(e){var a=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(a+="px"),a},d.px2rem=function(e){var a=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(a+="rem"),a}}(window,window.lib||(window.lib={})),v(M).use(h,{size:"small",locale:g}).mount("#app");
