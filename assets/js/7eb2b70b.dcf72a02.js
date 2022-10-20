"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,v=m["".concat(c,".").concat(s)]||m[s]||d[s]||r;return n?o.createElement(v,i(i({ref:t},p),{},{components:n})):o.createElement(v,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:2,sidebar_label:"Edit a Volume",title:"",keywords:["Volume"],Description:"Edit volume from the Volume page."},i="Edit a Volume",l={unversionedId:"volume/edit-volume",id:"volume/edit-volume",title:"",description:"After creating a volume, you can edit your volume by clicking the \u22ee button and selecting the Edit Config option.",source:"@site/docs/volume/edit-volume.md",sourceDirName:"volume",slug:"/volume/edit-volume",permalink:"/next/volume/edit-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/volume/edit-volume.md",tags:[],version:"current",lastUpdatedAt:1666087987,formattedLastUpdatedAt:"Oct 18, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Edit a Volume",title:"",keywords:["Volume"],Description:"Edit volume from the Volume page."},sidebar:"tutorialSidebar",previous:{title:"Create a Volume",permalink:"/next/volume/create-volume"},next:{title:"Clone a Volume",permalink:"/next/volume/clone-volume"}},c={},u=[{value:"Expand a Volume",id:"expand-a-volume",level:2},{value:"Cancel a Failed Volume Expansion",id:"cancel-a-failed-volume-expansion",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"edit-a-volume"},"Edit a Volume"),(0,a.kt)("p",null,"After creating a volume, you can edit your volume by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Config")," option."),(0,a.kt)("h2",{id:"expand-a-volume"},"Expand a Volume"),(0,a.kt)("p",null,"You can expand a volume by increasing the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Size")," parameter directly.\nTo prevent the expansion from interference by unexpected data R/W, Harvester supports ",(0,a.kt)("inlineCode",{parentName:"p"},"offline")," expansion only. You must shut down the VM or detach the volume first if it is attached to a VM, and the detached volume will automatically attach to a random node with ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/concepts/#22-reverting-volumes-in-maintenance-mode"},"maintenance mode")," to expand automatically."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"expand-volume",src:n(11817).Z,width:"2560",height:"726"})),(0,a.kt)("h2",{id:"cancel-a-failed-volume-expansion"},"Cancel a Failed Volume Expansion"),(0,a.kt)("p",null,"If you specify a size larger than Longhorn's capacity during the expansion, the status of the volume expansion will be stuck in ",(0,a.kt)("inlineCode",{parentName:"p"},"Resizing"),". You can cancel the failed volume expansion by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cancel Expand")," option."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cancel-failed-volume-expansion",src:n(76473).Z,width:"2560",height:"726"})))}d.isMDXComponent=!0},76473:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cancel-failed-volume-expansion-39ce92d8d4d2799a0090bf55d881ce42.png"},11817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-volume-b38ef393e5cea149fd57193a6192bc53.png"}}]);