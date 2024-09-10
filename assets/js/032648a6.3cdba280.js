"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8078],{79546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});a(67294);var n=a(3905);const i={id:"host-management",sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},o=void 0,s={unversionedId:"host/host-management",id:"version-v1.1/host/host-management",title:"Host Management",description:"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.",source:"@site/versioned_docs/version-v1.1/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/v1.1/host/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/host/host.md",tags:[],version:"v1.1",lastUpdatedAt:1725591313,formattedLastUpdatedAt:"Sep 6, 2024",sidebarPosition:1,frontMatter:{id:"host-management",sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},sidebar:"api",previous:{title:"Upload Images",permalink:"/v1.1/upload-image"},next:{title:"Create a Virtual Machine",permalink:"/v1.1/vm/index"}},r={},l=[{value:"Node Maintenance",id:"node-maintenance",level:2},{value:"Cordoning a Node",id:"cordoning-a-node",level:2},{value:"Deleting a Node",id:"deleting-a-node",level:2},{value:"Multi-disk Management",id:"multi-disk-management",level:2},{value:"Add Additional Disks",id:"add-additional-disks",level:3},{value:"Storage Tags",id:"storage-tags",level:3},{value:"Setup",id:"setup",level:4},{value:"Remove disks",id:"remove-disks",level:3},{value:"Identify the disk to remove (Harvester dashboard)",id:"identify-the-disk-to-remove-harvester-dashboard",level:4},{value:"Evict replicas (Longhorn dashboard)",id:"evict-replicas-longhorn-dashboard",level:4},{value:"Remove the disk (Harvester dashboard)",id:"remove-the-disk-harvester-dashboard",level:4},{value:"Ksmtuned Mode",id:"ksmtuned-mode",level:2},{value:"Quick Run",id:"quick-run",level:3},{value:"Parameters",id:"parameters",level:3}],d={toc:l},m="wrapper";function p({components:e,...t}){return(0,n.kt)(m,{...d,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/host"})),(0,n.kt)("p",null,"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Because Harvester is built on top of Kubernetes and uses etcd as its database, the maximum node fault toleration is one when there are three management nodes.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"host.png",src:a(96320).Z,width:"5118",height:"2170"})),(0,n.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,n.kt)("p",null,"For admin users, you can click ",(0,n.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," to evict all VMs from a node automatically. It will leverage the ",(0,n.kt)("inlineCode",{parentName:"p"},"VM live migration")," feature to migrate all VMs to other nodes automatically. Note that at least two active nodes are required to use this feature."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"node-maintenance.png",src:a(33143).Z,width:"4394",height:"1932"})),(0,n.kt)("h2",{id:"cordoning-a-node"},"Cordoning a Node"),(0,n.kt)("p",null,"Cordoning a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions. When you\u2019re done, power back on and make the node schedulable again by uncordoning it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cordon-node.png",src:a(27374).Z,width:"4402",height:"1878"})),(0,n.kt)("h2",{id:"deleting-a-node"},"Deleting a Node"),(0,n.kt)("p",null,"Deleting a node is done in two phases:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the node from Harvester"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Hosts")," page"),(0,n.kt)("li",{parentName:"ul"},"On the node you want to modify, click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Delete")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uninstall RKE2 from the node"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Login to the node as root"),(0,n.kt)("li",{parentName:"ul"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," to delete the whole RKE2 service.")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You will lose all data of the control plane node after deleting the RKE2 service.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"There's a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1497"},"known issue")," about node hard delete.\nOnce resolved, the last step can be skipped.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"delete.png",src:a(15683).Z,width:"4398",height:"1888"})),(0,n.kt)("h2",{id:"multi-disk-management"},"Multi-disk Management"),(0,n.kt)("h3",{id:"add-additional-disks"},"Add Additional Disks"),(0,n.kt)("p",null,"Users can view and add multiple disks as additional data volumes from the edit host page."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,n.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Edit Config",src:a(91509).Z,width:"1909",height:"923"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Storage")," tab and click ",(0,n.kt)("strong",{parentName:"li"},"Add Disk"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Disks",src:a(39003).Z,width:"1909",height:"923"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"As of Harvester v1.0.2, we no longer support adding partitions as additional disks. If you want to add it as an additional disk, be sure to delete all partitions first (e.g., using ",(0,n.kt)("inlineCode",{parentName:"p"},"fdisk"),").")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Select an additional raw block device to add as an additional data volume.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is required if the block device has never been force-formatted.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Force Format",src:a(48448).Z,width:"1909",height:"923"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Last, you can click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),' again to check the newly added disk. Meanwhile, you can also add the "Host/Disk" tag (details are described in the ',(0,n.kt)("a",{parentName:"li",href:"#storage-tags"},"next section"),").")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Check Result",src:a(7926).Z,width:"1909",height:"923"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In order for Harvester to identify the disks, each disk needs to have a unique ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Wide_Name"},"WWN"),". Otherwise, Harvester will refuse to add the disk.\nIf your disk does not have a WWN, you can format it with the ",(0,n.kt)("inlineCode",{parentName:"p"},"EXT4")," filesystem to help Harvester recognize the disk.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are testing Harvester in a QEMU environment, you'll need to use QEMU v6.0 or later. Previous versions of QEMU will always generate the same WWN for NVMe disks emulation. This will cause Harvester to not add the additional disks, as explained above.")),(0,n.kt)("h3",{id:"storage-tags"},"Storage Tags"),(0,n.kt)("p",null,"The storage tag feature enables only certain nodes or disks to be used for storing Longhorn volume data. For example, performance-sensitive data can use only the high-performance disks which can be tagged as ",(0,n.kt)("inlineCode",{parentName:"p"},"fast"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ssd")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"nvme"),", or only the high-performance nodes tagged as ",(0,n.kt)("inlineCode",{parentName:"p"},"baremetal"),"."),(0,n.kt)("p",null,"This feature supports both disks and nodes."),(0,n.kt)("h4",{id:"setup"},"Setup"),(0,n.kt)("p",null,"The tags can be set up through the Harvester UI on the host page:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Hosts")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit Config")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"Storage")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Host/Disk Tags")," to start typing and hit enter to add new tags."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Save")," to update tags."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("a",{parentName:"li",href:"/v1.1/advanced/storageclass"},"StorageClasses")," page, create a new storage class and select those defined tags on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Node Selector")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Disk Selector")," fields.")),(0,n.kt)("p",null,"All the existing scheduled volumes on the node or disk won\u2019t be affected by the new tags."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When multiple tags are specified for a volume, the disk and the nodes (that the disk belongs to) must have all the specified tags to become usable.")),(0,n.kt)("h3",{id:"remove-disks"},"Remove disks"),(0,n.kt)("p",null,"Before removing a disk, you must first evict Longhorn replicas on the disk."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The replica data would be rebuilt to another disk automatically to keep the high availability.")),(0,n.kt)("h4",{id:"identify-the-disk-to-remove-harvester-dashboard"},"Identify the disk to remove (Harvester dashboard)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,n.kt)("li",{parentName:"ol"},"On the node containing the disk, select the node name and go to the ",(0,n.kt)("strong",{parentName:"li"},"Storage")," tab."),(0,n.kt)("li",{parentName:"ol"},"Find the disk you want to remove. Let's assume we want to remove ",(0,n.kt)("inlineCode",{parentName:"li"},"/dev/sdb"),", and the disk's mount point is ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/harvester/extra-disks/1b805b97eb5aa724e6be30cbdb373d04"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Find disk to remove",src:a(53060).Z,width:"3840",height:"1816"})),(0,n.kt)("h4",{id:"evict-replicas-longhorn-dashboard"},"Evict replicas (Longhorn dashboard)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Please follow ",(0,n.kt)("a",{parentName:"li",href:"/v1.1/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"this session")," to enable the embedded Longhorn dashboard."),(0,n.kt)("li",{parentName:"ol"},"Visit the Longhorn dashboard and go to the ",(0,n.kt)("strong",{parentName:"li"},"Node")," page."),(0,n.kt)("li",{parentName:"ol"},"Expand the node containing the disk. Confirm the mount point ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/harvester/extra-disks/1b805b97eb5aa724e6be30cbdb373d04")," is in the disks list. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Check the removing disk",src:a(73314).Z,width:"3838",height:"662"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Edit node and disks"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Edit node and disks",src:a(69385).Z,width:"3838",height:"644"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Scroll to the disk you want to remove.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"Scheduling")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"Disable"),"."),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"Eviction Requested")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Save"),". Do not select the delete icon.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Evict disk",src:a(72091).Z,width:"3840",height:"1058"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"The disk will be disabled. Please wait until the disk replica count becomes ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to proceed with removing the disk.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Wait replicas",src:a(90386).Z,width:"3838",height:"628"})),(0,n.kt)("h4",{id:"remove-the-disk-harvester-dashboard"},"Remove the disk (Harvester dashboard)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,n.kt)("li",{parentName:"ol"},"On the node containing the disk, select ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Storage")," tab and select ",(0,n.kt)("strong",{parentName:"li"},"x"),"  to remove the disk.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Remove disk",src:a(32810).Z,width:"3840",height:"1400"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Save")," to remove the disk.")),(0,n.kt)("h2",{id:"ksmtuned-mode"},"Ksmtuned Mode"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,n.kt)("p",null,"Ksmtuned is a KSM automation tool deployed as a DaemonSet to run Ksmtuned on each node. It will start or stop the KSM by watching the available memory percentage ratio (",(0,n.kt)("strong",{parentName:"p"},"i.e. Threshold Coefficient"),"). By default, you need to manually enable Ksmtuned on each node UI. You will be able to see the KSM statistics from the node UI after 1-2 minutes.(check ",(0,n.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/admin-guide/mm/ksm.html#ksm-daemon-sysfs-interface"},"KSM")," for more details)."),(0,n.kt)("h3",{id:"quick-run"},"Quick Run"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,n.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Ksmtuned")," tab and select ",(0,n.kt)("strong",{parentName:"li"},"Run")," in ",(0,n.kt)("strong",{parentName:"li"},"Run Strategy"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) You can modify ",(0,n.kt)("strong",{parentName:"li"},"Threshold Coefficient")," as needed.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Edit Ksmtuned",src:a(57833).Z,width:"2150",height:"984"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save")," to update."),(0,n.kt)("li",{parentName:"ol"},"Wait for about 1-2 minutes and you can check its ",(0,n.kt)("strong",{parentName:"li"},"Statistics")," by clicking ",(0,n.kt)("strong",{parentName:"li"},"Your Node > Ksmtuned tab"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"View Ksmtuned Statistics",src:a(75281).Z,width:"2002",height:"402"})),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Run Strategy:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stop:")," Stop Ksmtuned and KSM. VMs can still use shared memory pages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Run:")," Run Ksmtuned."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prune:")," Stop Ksmtuned and prune KSM memory pages.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Threshold Coefficient"),": configures the available memory percentage ratio. If the available memory is less than the threshold, KSM will be started; otherwise, KSM will be stopped."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merge Across Nodes:")," specifies if pages from different NUMA nodes can be merged."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Mode:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Standard:")," The default mode. The control node ksmd uses about 20% of a single CPU. It uses the following parameters:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 0\nDecay: 0\nMaximum Pages: 100\nMinimum Pages: 100\nSleep Time: 20\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High-performance:")," Node ksmd uses 20% to 100% of a single CPU and has higher scanning and merging efficiency. It uses the following parameters:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 200\nDecay: 50\nMaximum Pages: 10000\nMinimum Pages: 100\nSleep Time: 20\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Customized:")," You can customize the configuration to reach the performance that you want.")),(0,n.kt)("p",null,"Ksmtuned uses the following parameters to control KSM efficiency:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Boost"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of scanned pages is incremented each time if the available memory is less than the ",(0,n.kt)("strong",{parentName:"td"},"Threshold Coefficient"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Decay"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of scanned pages is decremented each time if the available memory is greater than the ",(0,n.kt)("strong",{parentName:"td"},"Threshold Coefficient"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Maximum Pages"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Maximum number of pages per scan.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Minimum Pages"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The minimum number of pages per scan, also the configuration for the first run.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sleep Time (ms)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The interval between two scans, which is calculated with the formula (",(0,n.kt)("strong",{parentName:"td"},"Sleep Time")," ","*"," 16 ","*"," 1024","*"," 1024 / Total Memory). Minimum: 10ms.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For example, assume you have a 512GiB memory node that uses the following parameters:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 300\nDecay: 100\nMaximum Pages: 5000\nMinimum Pages: 1000\nSleep Time: 50\n")),(0,n.kt)("p",null,"When Ksmtuned starts, initialize ",(0,n.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," in KSM to 1000 (",(0,n.kt)("strong",{parentName:"p"},"Minimum Pages"),") and set ",(0,n.kt)("inlineCode",{parentName:"p"},"sleep_millisecs")," to 10 (50 ","*"," 16 ","*"," 1024 ","*"," 1024 / 536870912 KiB < 10)."),(0,n.kt)("p",null,"KSM starts when the available memory falls below the ",(0,n.kt)("strong",{parentName:"p"},"Threshold Coefficient"),". If it detects that it is running, ",(0,n.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," increments by 300 (",(0,n.kt)("strong",{parentName:"p"},"Boost"),") every minute until it reaches 5000 (",(0,n.kt)("strong",{parentName:"p"},"Maximum Pages"),")."),(0,n.kt)("p",null,"KSM will stop when the available memory is above the ",(0,n.kt)("strong",{parentName:"p"},"Threshold Coefficient"),". If it detects that it is stopped, ",(0,n.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," decrements by 100 (",(0,n.kt)("strong",{parentName:"p"},"Decay"),") every minute until it reaches 1000 (",(0,n.kt)("strong",{parentName:"p"},"Minimum Pages"),")."))}p.isMDXComponent=!0},39003:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disks-e0c41f2c49e4a15f43835436f3acfe8e.png"},7926:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/check-added-disks-a95ff49af67f0af957b1d408dce34a43.png"},27374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cordon-nodes-1bd56c52995e6d73b2328bddc5f7e4fa.png"},15683:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete-node-66bb510f8160cf410a14ccafe973dbda.png"},91509:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-config-f9ec311ce5724fc3d7cf6340df88c119.png"},57833:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-ksmtuned-14bde13e55cb1f5615d01d4258e8f5ce.png"},48448:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/force-format-disks-20ef70a38d55ebadcf90cc651f693c59.png"},96320:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/host-59f511ef325881a27dfe07b04af4b5a2.png"},33143:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/node-maintenance-f7a92cb91c2123bd985fe26c2c3f283c.png"},53060:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-harvester-find-disk-3d212b60db8317652ace299966ec1fe2.png"},32810:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-harvester-remove-5819717cee1a52074e7108f567435fdb.png"},69385:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-edit-ddca80c7da4cf3761809aa01f659f915.png"},72091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-evict-disk-bdcdb13fa049bdbafa58ccb84bcb747a.png"},73314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-e5a1d54dfec780ccda44785bb6201b1a.png"},90386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-wait-replicas-adf4f30cdf0afe7157fa744c6546a628.png"},75281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view-ksmtuned-statistics-c3e0cac6dc3344b72e8726a6cca8990e.png"}}]);