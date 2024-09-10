"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[58434],{30327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});a(67294);var r=a(3905);const n={sidebar_position:1,sidebar_label:"Deploy a High-Availability Cluster",title:"Deploy a High-Availability Cluster",keywords:["deployment","getting started","Harvester","Harvester cluster","high availability","virtual machine"]},o=void 0,s={unversionedId:"getting-started/deploy-ha-cluster",id:"version-v1.3/getting-started/deploy-ha-cluster",title:"Deploy a High-Availability Cluster",description:"A Harvester cluster with three or more nodes is required to fully realize multi-node features such as high availability. Certain versions of Harvester allow you to create clusters with two management nodes and one witness node (and optionally, one or more worker nodes). You can also create single-node clusters that support most Harvester features (excluding high availability, multi-replica support, and live migration).",source:"@site/versioned_docs/version-v1.3/getting-started/deploy-ha-cluster.md",sourceDirName:"getting-started",slug:"/getting-started/deploy-ha-cluster",permalink:"/v1.3/getting-started/deploy-ha-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/getting-started/deploy-ha-cluster.md",tags:[],version:"v1.3",lastUpdatedAt:1725591313,formattedLastUpdatedAt:"Sep 6, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Deploy a High-Availability Cluster",title:"Deploy a High-Availability Cluster",keywords:["deployment","getting started","Harvester","Harvester cluster","high availability","virtual machine"]},sidebar:"api",previous:{title:"Harvester Overview",permalink:"/v1.3/"},next:{title:"Deploy a Single-Node Cluster",permalink:"/v1.3/getting-started/deploy-singlenode-cluster"}},i={},l=[{value:"1. Verify that the minimum hardware and network requirements are met.",id:"1-verify-that-the-minimum-hardware-and-network-requirements-are-met",level:2},{value:"2. Prepare the installation files based on the installation method that you want to use.",id:"2-prepare-the-installation-files-based-on-the-installation-method-that-you-want-to-use",level:2},{value:"3. Prepare the cluster configuration requirements.",id:"3-prepare-the-cluster-configuration-requirements",level:2},{value:"4. Deploy the first cluster node.",id:"4-deploy-the-first-cluster-node",level:2},{value:"5. Configure a strong password for the default <code>admin</code> user on the Harvester UI.",id:"5-configure-a-strong-password-for-the-default-admin-user-on-the-harvester-ui",level:2},{value:"6. Deploy the other nodes and join them to the cluster.",id:"6-deploy-the-other-nodes-and-join-them-to-the-cluster",level:2},{value:"7. Create a custom cluster network (optional) and a VM network (required).",id:"7-create-a-custom-cluster-network-optional-and-a-vm-network-required",level:2},{value:"8. Import VM images.",id:"8-import-vm-images",level:2},{value:"9. Import SSH keys. (Recommended)",id:"9-import-ssh-keys-recommended",level:2},{value:"10. Create VMs.",id:"10-create-vms",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],u={toc:l},d="wrapper";function h({components:e,...t}){return(0,r.kt)(d,{...u,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/getting-started/glossary#harvester-cluster"},"Harvester cluster")," with three or more nodes is required to fully realize multi-node features such as high availability. Certain versions of Harvester allow you to create clusters with two management nodes and one ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/advanced/witness"},"witness node")," (and optionally, one or more worker nodes). You can also create ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/advanced/singlenodeclusters"},"single-node clusters")," that support most Harvester features (excluding high availability, multi-replica support, and live migration). "),(0,r.kt)("p",null,"This guide walks you through the steps required to deploy a ",(0,r.kt)("strong",{parentName:"p"},"high-availability cluster")," and virtual machines (VMs) that can host ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/getting-started/glossary#guest-cluster--guest-kubernetes-cluster"},"guest clusters")," and run custom workloads. "),(0,r.kt)("h2",{id:"1-verify-that-the-minimum-hardware-and-network-requirements-are-met"},"1. Verify that the minimum hardware and network requirements are met."),(0,r.kt)("p",null,"Harvester is built for bare metal servers using enterprise-grade open-source software components. The installer automatically checks the hardware and displays warning messages if the minimum ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/install/requirements"},"requirements")," are not met. "),(0,r.kt)("h2",{id:"2-prepare-the-installation-files-based-on-the-installation-method-that-you-want-to-use"},"2. Prepare the installation files based on the installation method that you want to use."),(0,r.kt)("p",null,"You can download the installation files from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Harvester Releases")," page. The ",(0,r.kt)("strong",{parentName:"p"},"Downloads")," section of the release notes contains links to the ISO files and related artifacts. The following types of ISO files are available: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full ISO"),": Contains the core operating system components and all required container images, which are preloaded during installation. You must use a full ISO when installing Harvester behind a firewall or proxy, and in environments without internet connectivity. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.3/install/net-install"},(0,r.kt)("strong",{parentName:"a"},"Net install ISO")),": Contains only the core operating system components. After installation is completed, the operating system pulls all required container images from the internet (mostly from Docker Hub). ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Required Installation Files"),(0,r.kt)("th",{parentName:"tr",align:null},"Other Requirements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.3/install/index"},"ISO")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.3/install/usb-install"},"USB")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO"),(0,r.kt)("td",{parentName:"tr",align:null},"USB flash drive; utility such as ",(0,r.kt)("a",{parentName:"td",href:"https://etcher.balena.io/"},"balenaEtcher")," or the Linux ",(0,r.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd command"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.3/install/pxe-boot-install"},"PXE")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO, Linux kernel image (vmlinuz), initrd, SquashFS image"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory on the HTTP server (for serving boot files); iPXE boot scripts (for automatic installation); DHCP server configuration")))),(0,r.kt)("h2",{id:"3-prepare-the-cluster-configuration-requirements"},"3. Prepare the cluster configuration requirements."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cluster token: ASCII string that nodes use when joining the cluster "),(0,r.kt)("li",{parentName:"ul"},"Fixed IP address for each node: May be assigned statically or using DHCP (host reservation) "),(0,r.kt)("li",{parentName:"ul"},"Fixed virtual IP address (VIP) to be used as the cluster management address: VIP that nodes point to when joining the cluster and that you connect to when performing administration tasks after the cluster is deployed "),(0,r.kt)("li",{parentName:"ul"},"Addresses of DNS servers, NTP servers, and the proxy server (if necessary) ")),(0,r.kt)("h2",{id:"4-deploy-the-first-cluster-node"},"4. Deploy the first cluster node."),(0,r.kt)("p",null,"Deployment involves installing the operating system and other components on the host, and then rebooting once installation is completed. Deploying the first node creates the cluster, and the first node is assigned the management node by default. "),(0,r.kt)("p",null,"During installation, you must configure node settings, define the cluster management address (VIP) and the cluster token, and specify other information. If necessary, you can configure more settings using a ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/install/harvester-configuration"},"Harvester configuration")," file. "),(0,r.kt)("p",null,"Once installation is completed, the node restarts and then the Harvester console appears. The console displays information about the cluster (management URL and status) and the node (hostname, IP address, and status). After the cluster is initialized and all services start running, the cluster status changes to ",(0,r.kt)("strong",{parentName:"p"},"Ready"),". "),(0,r.kt)("h2",{id:"5-configure-a-strong-password-for-the-default-admin-user-on-the-harvester-ui"},"5. Configure a strong password for the default ",(0,r.kt)("inlineCode",{parentName:"h2"},"admin")," user on the Harvester UI."),(0,r.kt)("p",null,"Once the cluster status changes to ",(0,r.kt)("strong",{parentName:"p"},"Ready"),", you can access the ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/authentication"},"Harvester UI")," using the management URL displayed on the console. "),(0,r.kt)("h2",{id:"6-deploy-the-other-nodes-and-join-them-to-the-cluster"},"6. Deploy the other nodes and join them to the cluster."),(0,r.kt)("p",null,"Deployment involves installing the operating system and other components on the host, and then rebooting once installation is completed. All other nodes join the cluster that was created when the first node was deployed. "),(0,r.kt)("p",null,"During installation, you must configure node settings, and specify the cluster management address (virtual IP) and the cluster token that you defined previously. If necessary, you can configure more settings using a ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/install/harvester-configuration"},"Harvester configuration")," file. "),(0,r.kt)("p",null,"When the cluster has three or more nodes, the two nodes added after the first node are automatically promoted to management nodes to form a high-availability (HA) cluster. "),(0,r.kt)("h2",{id:"7-create-a-custom-cluster-network-optional-and-a-vm-network-required"},"7. Create a custom cluster network (optional) and a VM network (required)."),(0,r.kt)("p",null,"Networking in Harvester involves three major concepts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/index#cluster-network"},(0,r.kt)("strong",{parentName:"a"},"Cluster network")),": Traffic-isolated forwarding path for transmission of network traffic in the Harvester cluster. "),(0,r.kt)("p",{parentName:"li"},"  During deployment, a cluster network called ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/index#built-in-cluster-network"},(0,r.kt)("inlineCode",{parentName:"a"},"mgmt"))," is created for intra-cluster communications. ",(0,r.kt)("inlineCode",{parentName:"p"},"mgmt")," allows VMs to be accessed from the infrastructure network (external to the Harvester cluster) to which each Harvester node attaches with management NICs for cluster management purposes. Harvester also allows you to create ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/index#custom-cluster-network"},"custom cluster networks")," that can be dedicated to VM traffic. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/index#network-configuration"},(0,r.kt)("strong",{parentName:"a"},"Network configuration")),": Definition of how cluster nodes connect to a specific cluster network. "),(0,r.kt)("p",{parentName:"li"},"  Each network configuration corresponds to a set of nodes with uniform network specifications. Only nodes that are covered by the network configuration can access the associated cluster network. This arrangement offers you flexibility when configuring a heterogeneous cluster, particularly when the network interface names are different for each node.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/index#vm-network"},(0,r.kt)("strong",{parentName:"a"},"VM network")),": Virtual network that VMs use to communicate with other VMs and external networks."),(0,r.kt)("p",{parentName:"li"},"  Each VM network is linked to a specific cluster network, which is used for transmission of VM traffic. You can create either a ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/harvester-network#vlan-network"},"VLAN network")," or an ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/harvester-network#untagged-network"},"untagged network")," based on your requirements, such as traffic isolation, network segmentation, ease of management, or alignment with the external network environment. "))),(0,r.kt)("p",null,"Before you create VMs, create the necessary networks. If more than one network interface is attached to each cluster node, consider ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/index#how-to-create-a-new-cluster-network"},"creating custom cluster networks")," and network configurations for better traffic isolation. Otherwise, you can only use the management network for transmission of VM traffic. Next, ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/harvester-network#create-a-vm-network"},"create a VM network")," that is linked to either ",(0,r.kt)("inlineCode",{parentName:"p"},"mgmt")," or any of the custom cluster networks that you created. "),(0,r.kt)("h2",{id:"8-import-vm-images"},"8. Import VM images."),(0,r.kt)("p",null,"On the Harvester UI, you can import ISO, qcow2, and raw ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/upload-image"},"images")," by uploading an image from the local file system, or by specifying the URL of an image that can be accessed from the cluster. "),(0,r.kt)("h2",{id:"9-import-ssh-keys-recommended"},"9. Import SSH keys. (Recommended)"),(0,r.kt)("p",null,"You can store SSH public keys in Harvester. When a VM is launched, a stored key can be ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/vm/access-to-the-vm#ssh-access"},"injected")," into the VM to allow secure access via SSH. Validated keys are displayed on the ",(0,r.kt)("strong",{parentName:"p"},"SSH Keys")," screen on the Harvester UI. "),(0,r.kt)("h2",{id:"10-create-vms"},"10. Create VMs."),(0,r.kt)("p",null,"You can create ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/vm/index"},"Linux VMs")," using one of the following methods: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Harvester UI: On the ",(0,r.kt)("strong",{parentName:"li"},"Virtual Machines")," screen, click ",(0,r.kt)("strong",{parentName:"li"},"Create")," and configure the settings on each tab. "),(0,r.kt)("li",{parentName:"ul"},"Kubernetes API: Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"VirtualMachine")," object. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.3/terraform/terraform-provider"},"Harvester Terraform Provider"),": Define a ",(0,r.kt)("inlineCode",{parentName:"li"},"harvester_virtualmachine")," resource block. ")),(0,r.kt)("p",null,"Creating ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/vm/create-windows-vm"},"Windows VMs")," on the Harvester UI involves slightly different steps. Harvester provides a VM template named ",(0,r.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template")," that adds a volume with the Virtio drivers for Windows, which streamlines the VM configuration process. If you require Virtio devices but choose to not use the template, you must add your own Virtio drivers for Windows to enable correct hardware detection. "),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"The following sections provide guides that walk you through how to back up and restore VMs, manage hosts, and use Rancher with Harvester."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.3/vm/backup-restore"},"VM Backup, Snapshot & Restore")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.3/host/"},"Host Management")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.3/rancher/rancher-integration"},"Rancher Integration"))))}h.isMDXComponent=!0}}]);