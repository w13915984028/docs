"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[73556],{74433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});n(67294);var r=n(3905);const a={sidebar_position:2,sidebar_label:"Creating an RKE1 Kubernetes Cluster",title:"Creating an RKE1 Kubernetes Cluster"},i=void 0,o={unversionedId:"rancher/node/rke1-cluster",id:"version-v1.0/rancher/node/rke1-cluster",title:"Creating an RKE1 Kubernetes Cluster",description:"You can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.3+ with the built-in Harvester node driver.",source:"@site/versioned_docs/version-v1.0/rancher/node/rke1-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke1-cluster",permalink:"/v1.0/rancher/node/rke1-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/node/rke1-cluster.md",tags:[],version:"v1.0",lastUpdatedAt:1723775732,formattedLastUpdatedAt:"Aug 16, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Creating an RKE1 Kubernetes Cluster",title:"Creating an RKE1 Kubernetes Cluster"},sidebar:"api",previous:{title:"Harvester Node Driver",permalink:"/v1.0/rancher/node/node-driver"},next:{title:"Creating an RKE2 Kubernetes Cluster",permalink:"/v1.0/rancher/node/rke2-cluster"}},l={},s=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create Node Template",id:"create-node-template",level:3},{value:"Add Node Affinity",id:"add-node-affinity",level:4},{value:"Create RKE1 Kubernetes Cluster",id:"create-rke1-kubernetes-cluster",level:3},{value:"Using Harvester RKE1 Node Driver in Air Gapped Environment",id:"using-harvester-rke1-node-driver-in-air-gapped-environment",level:3}],d={toc:s},p="wrapper";function u({components:e,...t}){return(0,r.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/rke1-cluster"})),(0,r.kt)("p",null,"You can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.6.3+")," with the built-in Harvester node driver."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rke1-cluster",src:n(87674).Z,width:"5118",height:"1972"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"VLAN network is required for Harvester node driver."))),(0,r.kt)("p",null,"When you create a Kubernetes cluster hosted by the Harvester infrastructure, ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"node templates")," are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node."),(0,r.kt)("p",null,"Node templates can use ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud credentials")," to access the credentials information required to provision nodes in the infrastructure providers. The same ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud credentials")," can be used by multiple node templates. By using ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud credentials"),", you do not have to re-enter access keys for the same cloud provider. ",(0,r.kt)("inlineCode",{parentName:"p"},"Cloud credentials")," are stored as Kubernetes secrets."),(0,r.kt)("p",null,"You can create ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud credentials")," in two contexts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"During the creation of a node template")," for a cluster."),(0,r.kt)("li",{parentName:"ul"},"In the User Settings page")),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud credentials")," are bound to your user profile and cannot be shared with other users."),(0,r.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter your cloud credential name."),(0,r.kt)("li",{parentName:"ol"},'Select "Imported Harvester" or "External Harvester".'),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-harvester-cloud-credentials",src:n(61901).Z,width:"5118",height:"1614"})),(0,r.kt)("h3",{id:"create-node-template"},"Create Node Template"),(0,r.kt)("p",null,"You can use the Harvester node driver to create node templates and eventually node pools for your Kubernetes cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure the  ",(0,r.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure ",(0,r.kt)("strong",{parentName:"li"},"Instance Options"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Configure the CPU, memory, and disk"),(0,r.kt)("li",{parentName:"ul"},"Select an OS image that is compatible with the ",(0,r.kt)("inlineCode",{parentName:"li"},"cloud-init")," config."),(0,r.kt)("li",{parentName:"ul"},"Select a network that the node driver is able to connect to; currently, only ",(0,r.kt)("inlineCode",{parentName:"li"},"VLAN")," is supported."),(0,r.kt)("li",{parentName:"ul"},"Enter the SSH User; the username will be used to ssh to nodes. For example, a default user of the Ubuntu cloud image will be ",(0,r.kt)("inlineCode",{parentName:"li"},"ubuntu"),"."))),(0,r.kt)("li",{parentName:"ol"},"(Optional) Configure ",(0,r.kt)("strong",{parentName:"li"},"Advanced Options")," if you want to customise the cloud-init config of the VMs:"),(0,r.kt)("li",{parentName:"ol"},"Enter a ",(0,r.kt)("strong",{parentName:"li"},"RANCHER TEMPLATE")," name.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(55786).Z,width:"3120",height:"1848"})),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/"},"nodes hosted by an infrastructure provider")," for more information."),(0,r.kt)("h4",{id:"add-node-affinity"},"Add Node Affinity"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.0.3 + Rancher v2.6.7")),(0,r.kt)("p",null,"The Harvester node driver now supports scheduling a group of machines to particular nodes through the node affinity rules, which can provide high availability and better resource utilization."),(0,r.kt)("p",null,"Node affinity can be added to the node template during the cluster creation, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Node Template")," or edit your existing node template via ",(0,r.kt)("inlineCode",{parentName:"p"},"RKE1 Configuration > Node Templates"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the ",(0,r.kt)("inlineCode",{parentName:"li"},"Advanced Options")," tab and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),(0,r.kt)("img",{alt:"affinity-add-node-selector",src:n(85085).Z,width:"3366",height:"1144"})),(0,r.kt)("li",{parentName:"ol"},"Set priority to ",(0,r.kt)("inlineCode",{parentName:"li"},"Required")," if you wish the scheduler to schedule the machines only when the rules are met."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Rule")," to specify the node affinity rules, e.g., for the ",(0,r.kt)("a",{parentName:"li",href:"/v1.0/rancher/node/node-driver#topology-spread-constraints"},"topology spread constraints")," use case, you can add the ",(0,r.kt)("inlineCode",{parentName:"li"},"region")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"zone")," labels as follows:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list \nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list \nvalues: us-east-1a\n")),(0,r.kt)("img",{alt:"affinity-add-rules",src:n(56387).Z,width:"3336",height:"1382"})),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," to save the node template. After the cluster is installed, you can check whether its machine nodes are scheduled accordingly to the affinity rules.")),(0,r.kt)("h3",{id:"create-rke1-kubernetes-cluster"},"Create RKE1 Kubernetes Cluster"),(0,r.kt)("p",null,"Users can create an RKE1 Kubernetes cluster from the ",(0,r.kt)("strong",{parentName:"p"},"Cluster Management")," page via the Harvester RKE1 node driver."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create")," button."),(0,r.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,r.kt)("strong",{parentName:"li"},"RKE1"),"."),(0,r.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Name Prefix")," (required)."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Template")," (required)."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"etcd")," and ",(0,r.kt)("strong",{parentName:"li"},"Control Plane")," (required)."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Options")," configure ",(0,r.kt)("inlineCode",{parentName:"li"},"Cloud Provider")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Harvester")," if you want to use the Harvester ",(0,r.kt)("a",{parentName:"li",href:"/v1.0/rancher/cloud-provider"},"Cloud Provider")," and ",(0,r.kt)("a",{parentName:"li",href:"/v1.0/rancher/csi-driver"},"CSI Diver"),".\n",(0,r.kt)("img",{src:n(37353).Z,width:"3890",height:"676"})),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-rke-harvester-cluster",src:n(80103).Z,width:"1919",height:"970"})),(0,r.kt)("h3",{id:"using-harvester-rke1-node-driver-in-air-gapped-environment"},"Using Harvester RKE1 Node Driver in Air Gapped Environment"),(0,r.kt)("p",null,"RKE1 provisioning relies on the ",(0,r.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," to get the IP of the virtual machine, and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," to set up the RKE cluster. However, It may not be feasible to install ",(0,r.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," in an air gapped environment."),(0,r.kt)("p",null,"You can address the installation constraints with the following options:"),(0,r.kt)("p",null,"Option 1. Use a VM image with ",(0,r.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," installed."),(0,r.kt)("p",null,"Option 2. Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud init")," user data to enable the VMs to install ",(0,r.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," via an HTTP(S) proxy."),(0,r.kt)("p",null,"Example user data in Harvester node template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\nwrite_files:\n- path: /etc/environment\n  content: |\n    HTTP_PROXY="http://192.168.0.1:3128"\n    HTTPS_PROXY="http://192.168.0.1:3128"\n  append: true\n')))}u.isMDXComponent=!0},85085:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/affinity-add-node-selector-739dd8629cc51f0ccb8a087daf6555a4.png"},56387:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/affinity-add-rules-8bcdbdc4b934146124eb7b92a0d0bb27.png"},61901:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-cloud-credentials-802de79d7c98f1d103be549480f02365.png"},80103:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-rke-harvester-cluster-d8038687882cd19796516efe89c597c6.png"},37353:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enable-harvester-cloud-provider-033d0453f241f5d84af1fa0335c9a027.png"},55786:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node-template-4d4e88bf75025e0eede053c1d57c1814.png"},87674:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rke1-node-driver-f8868c55d2aa08ff3d613ef8c6ce673b.png"}}]);