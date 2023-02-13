"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,w=d["".concat(l,".").concat(p)]||d[p]||k[p]||a;return r?n.createElement(w,i(i({ref:t},u),{},{components:r})):n.createElement(w,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1,sidebar_label:"Cluster Network",title:"Cluster Network",keywords:["Harvester","Networking","ClusterNetwork","NetworkConfig","Network"]},i=void 0,s={unversionedId:"networking/clusternetwork",id:"networking/clusternetwork",title:"Cluster Network",description:"Concepts",source:"@site/docs/networking/clusternetwork.md",sourceDirName:"networking",slug:"/networking/clusternetwork",permalink:"/dev/networking/clusternetwork",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/networking/clusternetwork.md",tags:[],version:"current",lastUpdatedAt:1672296666,formattedLastUpdatedAt:"Dec 29, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cluster Network",title:"Cluster Network",keywords:["Harvester","Networking","ClusterNetwork","NetworkConfig","Network"]},sidebar:"tutorialSidebar",previous:{title:"Volume Snapshots",permalink:"/dev/volume/volume-snapshots"},next:{title:"Network",permalink:"/dev/networking/harvester-network"}},l={},c=[{value:"Concepts",id:"concepts",level:2},{value:"Cluster Network",id:"cluster-network",level:3},{value:"Network Configuration",id:"network-configuration",level:3},{value:"Network",id:"network",level:3},{value:"Cluster Network Details",id:"cluster-network-details",level:2},{value:"Built-in Cluster Network",id:"built-in-cluster-network",level:3},{value:"Custom Cluster Network",id:"custom-cluster-network",level:3},{value:"How to create a new cluster network",id:"how-to-create-a-new-cluster-network",level:4}],u={toc:c};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("h3",{id:"cluster-network"},"Cluster Network"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,o.kt)("p",null,"In Harvester v1.1.0, we introduced a new concept called cluster network for traffic isolation."),(0,o.kt)("p",null,"The following diagram describes a typical network architecture that separates data-center (DC) traffic from out-of-band (OOB) traffic."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(59118).Z,width:"707",height:"561"})),(0,o.kt)("p",null,"We abstract the sum of devices, links, and configurations on a traffic-isolated forwarding path on Harvester as a cluster network."),(0,o.kt)("p",null,"In the above case, there will be two cluster networks corresponding to two traffic-isolated forwarding paths."),(0,o.kt)("h3",{id:"network-configuration"},"Network Configuration"),(0,o.kt)("p",null,"Specifications including network devices of the Harvester hosts can be different. To be compatible with such a heterogeneous cluster, we designed the network configuration."),(0,o.kt)("p",null,"Network configuration only works under a certain cluster network. Each network configuration corresponds to a set of hosts with uniform network specifications. Therefore, multiple network configurations are required for a cluster network on non-uniform hosts."),(0,o.kt)("h3",{id:"network"},"Network"),(0,o.kt)("p",null,"A network is an interface in a virtual machine that connects to the host network. As with network configuration, every network except the built-in ",(0,o.kt)("a",{parentName:"p",href:"/dev/networking/harvester-network#management-network"},"management network")," must be under a cluster network."),(0,o.kt)("p",null,"Harvester supports adding multiple networks to one VM. If a network's cluster network is not enabled on some hosts, the VM that owns this network will not be scheduled to those hosts."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/dev/networking/harvester-network"},"network part")," for more details about networks."),(0,o.kt)("h2",{id:"cluster-network-details"},"Cluster Network Details"),(0,o.kt)("h3",{id:"built-in-cluster-network"},"Built-in Cluster Network"),(0,o.kt)("p",null,"Harvester provides a built-in cluster network called ",(0,o.kt)("inlineCode",{parentName:"p"},"mgmt"),". It's different from the custom cluster network. The mgmt cluster network:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cannot be deleted."),(0,o.kt)("li",{parentName:"ul"},"Does not need any network configuration."),(0,o.kt)("li",{parentName:"ul"},"Is enabled on all hosts and cannot be disabled."),(0,o.kt)("li",{parentName:"ul"},"Shares the same traffic egress with the management network.")),(0,o.kt)("p",null,"If there is no need for traffic separation, you can put all your network under the mgmt cluster network."),(0,o.kt)("h3",{id:"custom-cluster-network"},"Custom Cluster Network"),(0,o.kt)("p",null,"You are allowed to add the custom cluster network, which will not be available until it's enabled on some hosts by adding a network configuration."),(0,o.kt)("h4",{id:"how-to-create-a-new-cluster-network"},"How to create a new cluster network"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create a cluster network, go to the ",(0,o.kt)("strong",{parentName:"p"},"Networks > ClusterNetworks/Configs")," page and click the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button. You only need to specify the name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(83584).Z,width:"3450",height:"1278"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Create Network Config")," button on the right of the cluster network to create a new network configuration."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(24668).Z,width:"3450",height:"1298"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Node Selector")," tab, specify the name and choose one of the three methods to select nodes where the network configuration will apply. If you want to cover the unselected nodes, you can create another network configuration."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(68378).Z,width:"1773",height:"462"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Uplink")," tab to add the NICs, and configure the bond options and link attributes. The bond mode defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"active-backup"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(4739).Z,width:"1781",height:"702"})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The NICs drop-down list shows all the common NICs on all the selected nodes. The drop-down list will change as you select different nodes."),(0,o.kt)("li",{parentName:"ul"},"The text ",(0,o.kt)("inlineCode",{parentName:"li"},"enp7s3 (1/3 Down)")," in the NICs drop-down list indicates that the enp7s3 NIC is down in one of the three selected nodes. In this case, you need to find the NIC, set it up, and refresh this page. After this, it should be selectable."))))}k.isMDXComponent=!0},4739:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/config-uplink-bc85c0a8b27b769e7500b095ed4ec4de.png"},83584:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-clusternetwork-021bf11039b990a9b51537a9d5be1c7f.png"},24668:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-network-config-button-276443fdbfd60c4ce34df85947087ada.png"},68378:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/select-nodes-89a81d691176c3b0ac1b567be16a0460.png"},59118:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/traffic-isolation-71a839f59696dc336d7c036f6bf975f6.png"}}]);