"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[98149],{60692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});a(67294);var n=a(3905);const r={sidebar_position:1,sidebar_label:"Create a Virtual Machine",title:"Create a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Create a VM"],description:"Create one or more virtual machines from the Virtual Machines page."},o=void 0,i={unversionedId:"vm/create-vm",id:"version-v0.3/vm/create-vm",title:"Create a Virtual Machine",description:"Create one or more virtual machines from the Virtual Machines page.",source:"@site/versioned_docs/version-v0.3/vm/create-vm.md",sourceDirName:"vm",slug:"/vm/create-vm",permalink:"/v0.3/vm/create-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/vm/create-vm.md",tags:[],version:"v0.3",lastUpdatedAt:1723775732,formattedLastUpdatedAt:"Aug 16, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Create a Virtual Machine",title:"Create a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Create a VM"],description:"Create one or more virtual machines from the Virtual Machines page."},sidebar:"api",previous:{title:"Host Management",permalink:"/v0.3/host/"},next:{title:"Access to the Virtual Machine",permalink:"/v0.3/vm/access-to-the-vm"}},s={},l=[{value:"How to Create a VM",id:"how-to-create-a-vm",level:2},{value:"Cloud Configuration Examples",id:"cloud-configuration-examples",level:2},{value:"Networks",id:"networks",level:2},{value:"Management Network",id:"management-network",level:3},{value:"Secondary Network",id:"secondary-network",level:3}],c={toc:l},d="wrapper";function m({components:e,...t}){return(0,n.kt)(d,{...c,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/create-vm"})),(0,n.kt)("h2",{id:"how-to-create-a-vm"},"How to Create a VM"),(0,n.kt)("p",null,"Create one or more virtual machines from the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," page."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose the option to create either one or multiple VM instances."),(0,n.kt)("li",{parentName:"ol"},"The VM Name is a required field."),(0,n.kt)("li",{parentName:"ol"},"The VM Template is optional. You can select ISO, raw, and Windows image templates as default options."),(0,n.kt)("li",{parentName:"ol"},"Configure the CPU and Memory of the VM."),(0,n.kt)("li",{parentName:"ol"},"Select SSH keys or upload new keys."),(0,n.kt)("li",{parentName:"ol"},"Select a custom VM image on the ",(0,n.kt)("strong",{parentName:"li"},"Volumes")," tab. The default disk will be the root disk. You can add more disks to the VM."),(0,n.kt)("li",{parentName:"ol"},"To configure networks, go to the ",(0,n.kt)("strong",{parentName:"li"},"Networks")," tab. The ",(0,n.kt)("strong",{parentName:"li"},"Management Network")," is added by default. It is also possible to add secondary networks to the VMs using VLAN networks. You may configure these on ",(0,n.kt)("strong",{parentName:"li"},"Advanced > Networks"),"."),(0,n.kt)("li",{parentName:"ol"},"Advanced options such as hostname and cloud-init data are optional. You may configure these in the ",(0,n.kt)("strong",{parentName:"li"},"Advanced Options")," section.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-vm",src:a(57369).Z,width:"3354",height:"1448"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-vm",src:a(68362).Z,width:"3338",height:"1686"})),(0,n.kt)("h2",{id:"cloud-configuration-examples"},"Cloud Configuration Examples"),(0,n.kt)("p",null,"Password configuration for the default user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-YAML"},"#cloud-config\npassword: password\nchpasswd: { expire: False }\nssh_pwauth: True\n")),(0,n.kt)("p",null,"Network-data configuration using DHCP:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-YAML"},"version: 1\nconfig:\n  - type: physical\n    name: eth0\n    subnets:\n      - type: dhcp\n  - type: physical\n    name: eth1\n    subnets:\n      - type: dhcp\n")),(0,n.kt)("p",null,"You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cloud Config Template")," feature to include a pre-defined cloud-init configuration for the VM."),(0,n.kt)("h2",{id:"networks"},"Networks"),(0,n.kt)("h3",{id:"management-network"},"Management Network"),(0,n.kt)("p",null,"A management network represents the default VM eth0 interface configured by the cluster network solution that is present in each VM."),(0,n.kt)("p",null,"By default, a VM can be accessed via the management network."),(0,n.kt)("h3",{id:"secondary-network"},"Secondary Network"),(0,n.kt)("p",null,"It is also possible to connect VMs using additional networks with Harvester's built-in ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/networking/harvester-network"},"VLAN networks"),"."))}m.isMDXComponent=!0},68362:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/choose-vm-image-1560c4e512fa172b7fbaefcd95e5b374.png"},57369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-0ca8943777f01beee7fa8462995631ee.png"}}]);