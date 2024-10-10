"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[81260],{67266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});a(67294);var n=a(3905);const r={sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},s=void 0,o={unversionedId:"troubleshooting/harvester",id:"version-v1.0/troubleshooting/harvester",title:"Harvester",description:"Generate a support bundle",source:"@site/versioned_docs/version-v1.0/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/v1.0/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/troubleshooting/harvester.md",tags:[],version:"v1.0",lastUpdatedAt:1728548032,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},sidebar:"api",previous:{title:"Installation",permalink:"/v1.0/troubleshooting/installation"},next:{title:"Operating System",permalink:"/v1.0/troubleshooting/os"}},i={},l=[{value:"Generate a support bundle",id:"generate-a-support-bundle",level:2},{value:"Access Embedded Rancher",id:"access-embedded-rancher",level:2},{value:"Access Embedded Longhorn",id:"access-embedded-longhorn",level:2},{value:"I can&#39;t access Harvester after I changed SSL/TLS enabled protocols and ciphers",id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers",level:2}],d={toc:l},p="wrapper";function c({components:e,...t}){return(0,n.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/harvester"})),(0,n.kt)("h2",{id:"generate-a-support-bundle"},"Generate a support bundle"),(0,n.kt)("p",null,"Users can generate a support bundle in the Harvester GUI with the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Support")," link at the bottom-left of Harvester Web UI.\n",(0,n.kt)("img",{src:a(46914).Z,width:"955",height:"902"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," button.\n",(0,n.kt)("img",{src:a(20566).Z,width:"953",height:"286"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter a useful description for the support bundle and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Create")," to generate and download a support bundle.\n",(0,n.kt)("img",{src:a(68972).Z,width:"941",height:"436"})))),(0,n.kt)("h2",{id:"access-embedded-rancher"},"Access Embedded Rancher"),(0,n.kt)("p",null,"You can access the embedded Rancher dashboard via ",(0,n.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/explorer"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We only support to use the embedded Rancher dashboard for debugging and validation purpose.\nFor Rancher's multi-cluster and multi-tenant integration, please refer to the docs ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/rancher-integration"},"here"),".")),(0,n.kt)("h2",{id:"access-embedded-longhorn"},"Access Embedded Longhorn"),(0,n.kt)("p",null,"You can access the embedded Longhorn UI via ",(0,n.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/longhorn"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We only support to use the embedded Longhorn UI for debugging and validation purpose .")),(0,n.kt)("h2",{id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers"},"I can't access Harvester after I changed SSL/TLS enabled protocols and ciphers"),(0,n.kt)("p",null,"If you changed\n",(0,n.kt)("a",{parentName:"p",href:"/v1.0/settings/#ssl-parameters"},"SSL/TLS enabled protocols and ciphers settings"),"\nand you no longer have access to Harvester GUI and API,\nit's highly possible that NGINX Ingress Controller has stopped working due to the misconfigured SSL/TLS protocols and ciphers.\nFollow these steps to reset the setting:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Following ",(0,n.kt)("a",{parentName:"li",href:"/v1.0/faq"},"FAQ")," to SSH into Harvester node and switch to ",(0,n.kt)("inlineCode",{parentName:"li"},"root")," user.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ sudo -s\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Editing setting ",(0,n.kt)("inlineCode",{parentName:"li"},"ssl-parameters")," manually using ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# kubectl edit settings ssl-parameters\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Deleting the line ",(0,n.kt)("inlineCode",{parentName:"li"},"value: ...")," so that NGINX Ingress Controller\nwill use the default protocols and ciphers.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'apiVersion: harvesterhci.io/v1beta1\ndefault: \'{}\'\nkind: Setting\nmetadata:\n  name: ssl-parameters\n...\nvalue: \'{"protocols":"TLS99","ciphers":"WRONG_CIPHER"}\' # <- Delete this line\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Save the change and you should see the following response after exit from the editor:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"setting.harvesterhci.io/ssl-parameters edited\n")),(0,n.kt)("p",null,"You can further check the logs of Pod ",(0,n.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx-controller")," to see if NGINX Ingress Controller is working correctly."))}c.isMDXComponent=!0},20566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},46914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},68972:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"}}]);