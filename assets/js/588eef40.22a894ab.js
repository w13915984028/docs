"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[74401],{36814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>r,frontMatter:()=>n,metadata:()=>i,toc:()=>u});a(67294);var o=a(3905);const n={sidebar_position:2,sidebar_label:"Edit a Volume",title:"Edit a Volume",keywords:["Volume"],description:"Edit volume from the Volume page."},l=void 0,i={unversionedId:"volume/edit-volume",id:"version-v1.3/volume/edit-volume",title:"Edit a Volume",description:"Edit volume from the Volume page.",source:"@site/versioned_docs/version-v1.3/volume/edit-volume.md",sourceDirName:"volume",slug:"/volume/edit-volume",permalink:"/v1.3/volume/edit-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/volume/edit-volume.md",tags:[],version:"v1.3",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Edit a Volume",title:"Edit a Volume",keywords:["Volume"],description:"Edit volume from the Volume page."},sidebar:"api",previous:{title:"Create a Volume",permalink:"/v1.3/volume/index"},next:{title:"Clone a Volume",permalink:"/v1.3/volume/clone-volume"}},s={},u=[{value:"Expand a Volume",id:"expand-a-volume",level:2},{value:"Cancel a Failed Volume Expansion",id:"cancel-a-failed-volume-expansion",level:2},{value:"Change the StorageClass of an Existing Volume",id:"change-the-storageclass-of-an-existing-volume",level:2}],m={toc:u},d="wrapper";function r({components:e,...t}){return(0,o.kt)(d,{...m,...t,components:e,mdxType:"MDXLayout"},(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/edit-volume"})),(0,o.kt)("p",null,"After creating a volume, you can edit your volume by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit Config")," option."),(0,o.kt)("h2",{id:"expand-a-volume"},"Expand a Volume"),(0,o.kt)("p",null,"You can expand a volume by increasing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Size")," parameter directly.\nTo prevent the expansion from interference by unexpected data R/W, Harvester supports ",(0,o.kt)("inlineCode",{parentName:"p"},"offline")," expansion only. You must shut down the VM or detach the volume first if it is attached to a VM, and the detached volume will automatically attach to a random node with ",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/concepts/#22-reverting-volumes-in-maintenance-mode"},"maintenance mode")," to expand automatically."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"expand-volume",src:a(87192).Z,width:"2560",height:"726"})),(0,o.kt)("h2",{id:"cancel-a-failed-volume-expansion"},"Cancel a Failed Volume Expansion"),(0,o.kt)("p",null,"If you specify a size larger than Longhorn's capacity during the expansion, the status of the volume expansion will be stuck in ",(0,o.kt)("inlineCode",{parentName:"p"},"Resizing"),". You can cancel the failed volume expansion by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel Expand")," option."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cancel-failed-volume-expansion",src:a(36965).Z,width:"2560",height:"726"})),(0,o.kt)("h2",{id:"change-the-storageclass-of-an-existing-volume"},"Change the StorageClass of an Existing Volume"),(0,o.kt)("p",null,"The StorageClass of an existing volume cannot be changed. However, you can change the StorageClass while restoring a new volume from the snapshot by following the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/v1.3/volume/volume-snapshots#create-volume-snapshots"},"Take a volume snapshot"),"."),(0,o.kt)("li",{parentName:"ol"},"Select StorageClass when ",(0,o.kt)("a",{parentName:"li",href:"/v1.3/volume/volume-snapshots#restore-a-new-volume-from-a-volume-snapshot"},"restoring the volume using snapshot"),".")))}r.isMDXComponent=!0},36965:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cancel-failed-volume-expansion-39ce92d8d4d2799a0090bf55d881ce42.png"},87192:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/expand-volume-b38ef393e5cea149fd57193a6192bc53.png"}}]);