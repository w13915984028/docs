"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:5,sidebar_label:"\u8eab\u4efd\u9a8c\u8bc1",title:"\u8eab\u4efd\u9a8c\u8bc1",keywords:["Harvester","harvester","Rancher","rancher","\u8eab\u4efd\u9a8c\u8bc1"],Description:"\u5728 ISO \u5b89\u88c5\u6a21\u5f0f\u4e0b\uff0c\u9996\u6b21\u767b\u5f55\u65f6\u4f1a\u63d0\u793a\u7528\u6237\u4e3a\u9ed8\u8ba4 `admin` \u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\u3002"},o=void 0,c={unversionedId:"authentication",id:"version-v1.1/authentication",title:"\u8eab\u4efd\u9a8c\u8bc1",description:"\u5728\u5b8c\u6210\u5b89\u88c5\u540e\u7684\u9996\u6b21\u767b\u5f55\u65f6\uff0c\u4f60\u4f1a\u6536\u5230\u4e3a\u9ed8\u8ba4 admin \u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\u7684\u63d0\u793a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/zh/v1.1/authentication",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/authentication.md",tags:[],version:"v1.1",lastUpdatedAt:1672296666,formattedLastUpdatedAt:"2022\u5e7412\u670829\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u8eab\u4efd\u9a8c\u8bc1",title:"\u8eab\u4efd\u9a8c\u8bc1",keywords:["Harvester","harvester","Rancher","rancher","\u8eab\u4efd\u9a8c\u8bc1"],Description:"\u5728 ISO \u5b89\u88c5\u6a21\u5f0f\u4e0b\uff0c\u9996\u6b21\u767b\u5f55\u65f6\u4f1a\u63d0\u793a\u7528\u6237\u4e3a\u9ed8\u8ba4 `admin` \u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u4ece v1.0.0 \u5347\u7ea7\u5230 v1.0.1",permalink:"/zh/v1.1/upgrade/previous-releases/v1-0-0-to-v1-0-1"},next:{title:"\u4e0a\u4f20\u955c\u50cf",permalink:"/zh/v1.1/upload-image"}},s={},p=[],l={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5b8c\u6210\u5b89\u88c5\u540e\u7684\u9996\u6b21\u767b\u5f55\u65f6\uff0c\u4f60\u4f1a\u6536\u5230\u4e3a\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," \u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\u7684\u63d0\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"auth",src:r(15200).Z,width:"2555",height:"1295"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5355\u96c6\u7fa4\u6a21\u5f0f\u4e0b\uff0c\u53ea\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," \u7528\u6237\u3002\u4f60\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.1/rancher/rancher-integration"},"Rancher \u591a\u96c6\u7fa4"),"\u6765\u8fdb\u884c\u591a\u79df\u6237\u7ba1\u7406\u3002")))}u.isMDXComponent=!0},15200:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"}}]);