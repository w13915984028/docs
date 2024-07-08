"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[52818],{21981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>o});a(67294);var r=a(3905);const n={sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},s=void 0,i={unversionedId:"rancher/csi-driver",id:"version-v1.2/rancher/csi-driver",title:"Harvester CSI Driver",description:"The Harvester Container Storage Interface (CSI) Driver provides a standard CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance.",source:"@site/versioned_docs/version-v1.2/rancher/csi-driver.md",sourceDirName:"rancher",slug:"/rancher/csi-driver",permalink:"/v1.2/rancher/csi-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/rancher/csi-driver.md",tags:[],version:"v1.2",lastUpdatedAt:1720145056,formattedLastUpdatedAt:"Jul 5, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},sidebar:"api",previous:{title:"Harvester Cloud Provider",permalink:"/v1.2/rancher/cloud-provider"},next:{title:"Resource Quotas",permalink:"/v1.2/rancher/resource-quota"}},l={},o=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying with Harvester RKE1 node driver",id:"deploying-with-harvester-rke1-node-driver",level:3},{value:"Deploying with Harvester RKE2 node driver",id:"deploying-with-harvester-rke2-node-driver",level:3},{value:"Install CSI driver manually in the RKE2 cluster",id:"install-csi-driver-manually-in-the-rke2-cluster",level:3},{value:"Prerequisites of manual install",id:"prerequisites-of-manual-install",level:4},{value:"Deploy Harvester CSI driver",id:"deploy-harvester-csi-driver",level:4},{value:"Deploying with Harvester K3s node driver",id:"deploying-with-harvester-k3s-node-driver",level:3},{value:"Customize the Default StorageClass",id:"customize-the-default-storageclass",level:2},{value:"Passthrough Custom StorageClass",id:"passthrough-custom-storageclass",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Deploying",id:"deploying-1",level:3}],p={toc:o},d="wrapper";function c({components:e,...t}){return(0,r.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/csi-driver"})),(0,r.kt)("p",null,"The Harvester Container Storage Interface (CSI) Driver provides a standard CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance."),(0,r.kt)("h2",{id:"deploying"},"Deploying"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,r.kt)("li",{parentName:"ul"},"The Harvester virtual machines that run as guest Kubernetes nodes are in the same namespace."),(0,r.kt)("li",{parentName:"ul"},"The Harvester virtual machine guests' hostnames match their corresponding Harvester\nvirtual machine names. Guest cluster Harvester VMs can't have different hostnames\nthan their Harvester VM names when using the Harvester CSI driver. We hope\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4396"},"to remove this limitation")," in\na future release of Harvester.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, the Harvester CSI driver only supports single-node read-write(RWO) volumes. Please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1992"},"issue #1992")," for future multi-node ",(0,r.kt)("inlineCode",{parentName:"p"},"read-only"),"(ROX) and ",(0,r.kt)("inlineCode",{parentName:"p"},"read-write"),"(RWX) support.")),(0,r.kt)("h3",{id:"deploying-with-harvester-rke1-node-driver"},"Deploying with Harvester RKE1 node driver"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," option."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:a(19357).Z,width:"2180",height:"223"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," from the Rancher marketplace."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:a(31621).Z,width:"2542",height:"405"})))),(0,r.kt)("h3",{id:"deploying-with-harvester-rke2-node-driver"},"Deploying with Harvester RKE2 node driver"),(0,r.kt)("p",null,"When spinning up a Kubernetes cluster using Rancher RKE2 node driver, the Harvester CSI driver will be deployed automatically when Harvester cloud provider is selected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"select-harvester-cloud-provider",src:a(46902).Z,width:"2238",height:"646"})),(0,r.kt)("h3",{id:"install-csi-driver-manually-in-the-rke2-cluster"},"Install CSI driver manually in the RKE2 cluster"),(0,r.kt)("p",null,"If you prefer to install the Harvester CSI driver without enabling the Harvester cloud provider, you can refer to the following steps:"),(0,r.kt)("h4",{id:"prerequisites-of-manual-install"},"Prerequisites of manual install"),(0,r.kt)("p",null,"Ensure that you have the following prerequisites in place:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"jq")," installed on your system."),(0,r.kt)("li",{parentName:"ul"},"You have the ",(0,r.kt)("inlineCode",{parentName:"li"},"kubeconfig")," file for your bare-metal Harvester cluster. You can find the ",(0,r.kt)("inlineCode",{parentName:"li"},"kubeconfig")," file from one of the Harvester management nodes in the ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rancher/rke2/rke2.yaml")," path.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=/path/to/your/harvester-kubeconfig\n")))),(0,r.kt)("p",null,"Perform the following steps to deploy the Harvester CSI driver manually:"),(0,r.kt)("h4",{id:"deploy-harvester-csi-driver"},"Deploy Harvester CSI driver"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-config"),". You can generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-config")," file using the ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/harvester/harvester-csi-driver/master/deploy/generate_addon_csi.sh"},"generate_addon_csi.sh")," script. It is available on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver"},"harvester/harvester-csi-driver")," repo."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<serviceaccount name>")," usually corresponds to your guest cluster name, and ",(0,r.kt)("inlineCode",{parentName:"p"},"<namespace>")," should match the machine pool's namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./generate_addon_csi.sh <serviceaccount name> <namespace> RKE2\n")),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{src:a(58524).Z,width:"1603",height:"731"})),(0,r.kt)("p",{parentName:"li"}," The generated output will be similar to the following one:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"########## cloud-config ############\napiVersion: v1\nclusters:\n- cluster: <token>\n    server: https://<YOUR HOST HARVESTER VIP>:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    namespace: default\n    user: rke2-guest-01-default-default\n  name: rke2-guest-01-default-default\ncurrent-context: rke2-guest-01-default-default\nkind: Config\npreferences: {}\nusers:\n- name: rke2-guest-01-default-default\n  user:\n    token: <token>\n\n########## cloud-init user data ############\nwrite_files:\n  - encoding: b64\n    content: YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKbFZFTkRRVklyWjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVd0TlUwbDNTVUZaUkZaUlVVUkVRbXg1WVRKVmVVeFlUbXdLWTI1YWJHTnBNV3BaVlVGNFRtcG5NVTE2VlhoT1JGRjNUVUkwV0VSVVNYcE5SRlY1VDFSQk5VMVVRVEJOUm05WVJGUk5lazFFVlhsT2FrRTFUVlJCTUFwTlJtOTNTa1JGYVUxRFFVZEJNVlZGUVhkM1dtTnRkR3hOYVRGNldsaEtNbHBZU1hSWk1rWkJUVlJaTkU1VVRURk5WRkV3VFVSQ1drMUNUVWRDZVhGSENsTk5ORGxCWjBWSFEwTnhSMU5OTkRsQmQwVklRVEJKUVVKSmQzRmFZMDVTVjBWU2FsQlVkalJsTUhFMk0ySmxTSEZEZDFWelducGtRa3BsU0VWbFpHTUtOVEJaUTNKTFNISklhbWdyTDJab2VXUklNME5ZVURNeFZXMWxTM1ZaVDBsVGRIVnZVbGx4YVdJMGFFZE5aekpxVVdwQ1FVMUJORWRCTVZWa1JIZEZRZ292ZDFGRlFYZEpRM0JFUVZCQ1owNVdTRkpOUWtGbU9FVkNWRUZFUVZGSUwwMUNNRWRCTVZWa1JHZFJWMEpDVWpaRGEzbEJOSEZqYldKSlVESlFWVW81Q2xacWJWVTNVV2R2WjJwQlMwSm5aM0ZvYTJwUFVGRlJSRUZuVGtsQlJFSkdRV2xCZUZKNU4xUTNRMVpEYVZWTVdFMDRZazVaVWtWek1HSnBZbWxVSzJzS1kwRnhlVmt5Tm5CaGMwcHpMM2RKYUVGTVNsQnFVVzVxZEcwMVptNTZWR3AxUVVsblRuTkdibFozWkZRMldXWXpieTg0ZFRsS05tMWhSR2RXQ2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBzZXJ2ZXI6IGh0dHBzOi8vMTkyLjE2OC4wLjEzMTo2NDQzCiAgbmFtZTogZGVmYXVsdApjb250ZXh0czoKLSBjb250ZXh0OgogICAgY2x1c3RlcjogZGVmYXVsdAogICAgbmFtZXNwYWNlOiBkZWZhdWx0CiAgICB1c2VyOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIG5hbWU6IHJrZTItZ3Vlc3QtMDEtZGVmYXVsdC1kZWZhdWx0CmN1cnJlbnQtY29udGV4dDogcmtlMi1ndWVzdC0wMS1kZWZhdWx0LWRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIHVzZXI6CiAgICB0b2tlbjogZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklreGhUazQxUTBsMWFsTnRORE5TVFZKS00waE9UbGszTkV0amNVeEtjM1JSV1RoYVpUbGZVazA0YW1zaWZRLmV5SnBjM01pT2lKcmRXSmxjbTVsZEdWekwzTmxjblpwWTJWaFkyTnZkVzUwSWl3aWEzVmlaWEp1WlhSbGN5NXBieTl6WlhKMmFXTmxZV05qYjNWdWRDOXVZVzFsYzNCaFkyVWlPaUprWldaaGRXeDBJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5elpXTnlaWFF1Ym1GdFpTSTZJbkpyWlRJdFozVmxjM1F0TURFdGRHOXJaVzRpTENKcmRXSmxjbTVsZEdWekxtbHZMM05sY25acFkyVmhZMk52ZFc1MEwzTmxjblpwWTJVdFlXTmpiM1Z1ZEM1dVlXMWxJam9pY210bE1pMW5kV1Z6ZEMwd01TSXNJbXQxWW1WeWJtVjBaWE11YVc4dmMyVnlkbWxqWldGalkyOTFiblF2YzJWeWRtbGpaUzFoWTJOdmRXNTBMblZwWkNJNkltTXlZak5sTldGaExUWTBNMlF0TkRkbU1pMDROemt3TFRjeU5qWXpNbVl4Wm1aaU5pSXNJbk4xWWlJNkluTjVjM1JsYlRwelpYSjJhV05sWVdOamIzVnVkRHBrWldaaGRXeDBPbkpyWlRJdFozVmxjM1F0TURFaWZRLmFRZmU1d19ERFRsSWJMYnUzWUVFY3hmR29INGY1VnhVdmpaajJDaWlhcXB6VWI0dUYwLUR0cnRsa3JUM19ZemdXbENRVVVUNzNja1BuQmdTZ2FWNDhhdmlfSjJvdUFVZC04djN5d3M0eXpjLVFsTVV0MV9ScGJkUURzXzd6SDVYeUVIREJ1dVNkaTVrRWMweHk0X0tDQ2IwRHQ0OGFoSVhnNlMwRDdJUzFfVkR3MmdEa24wcDVXUnFFd0xmSjdEbHJDOFEzRkNUdGhpUkVHZkUzcmJGYUdOMjdfamR2cUo4WXlJQVd4RHAtVHVNT1pKZUNObXRtUzVvQXpIN3hOZlhRTlZ2ZU05X29tX3FaVnhuTzFEanllbWdvNG9OSEpzekp1VWliRGxxTVZiMS1oQUxYSjZXR1Z2RURxSTlna1JlSWtkX3JqS2tyY3lYaGhaN3lTZ3o3QQo=\n    owner: root:root\n    path: /var/lib/rancher/rke2/etc/config-files/cloud-provider-config\n    permissions: '0644'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init user data")," content to ",(0,r.kt)("strong",{parentName:"p"},"Machine Pools")," > ",(0,r.kt)("strong",{parentName:"p"},"Show Advanced")," > ",(0,r.kt)("strong",{parentName:"p"},"User Data"),".\n",(0,r.kt)("img",{src:a(91366).Z,width:"2010",height:"1088"})),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-provider-config")," file will be created after you apply the cloud-init user data above. You can find it on the guest Kubernetes nodes at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/etc/config-files/cloud-provider-config"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("strong",{parentName:"p"},"Cloud Provider")," either to ",(0,r.kt)("strong",{parentName:"p"},"Default - RKE2 Embedded")," or ",(0,r.kt)("strong",{parentName:"p"},"External"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(52051).Z,width:"1608",height:"805"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Create")," to create your RKE2 cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the RKE2 cluster is ready, install the ",(0,r.kt)("strong",{parentName:"p"},"Harvester CSI Driver")," chart from the Rancher marketplace. You do not need to change the ",(0,r.kt)("strong",{parentName:"p"},"cloud-config")," path  by default."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(64879).Z,width:"3000",height:"1460"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(82414).Z,width:"3002",height:"1524"})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer not to install the Harvester CSI driver using Rancher\n(",(0,r.kt)("strong",{parentName:"p"},"Apps")," > ",(0,r.kt)("strong",{parentName:"p"},"Charts"),"), you can use ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," instead.\nThe Harvester CSI driver is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/charts/tree/master/charts/harvester-csi-driver"},"packaged as a Helm chart"),".\nFor more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://charts.harvesterhci.io"},"https://charts.harvesterhci.io"),".")),(0,r.kt)("p",null,"By following the above steps, you should be able to see those CSI driver pods are up and running on the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace, and you can verify it by provisioning a new PVC using the default StorageClass ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester")," on your RKE2 cluster."),(0,r.kt)("h3",{id:"deploying-with-harvester-k3s-node-driver"},"Deploying with Harvester K3s node driver"),(0,r.kt)("p",null,"You can follow the ",(0,r.kt)("a",{parentName:"p",href:"/v1.2/rancher/csi-driver#deploy-harvester-csi-driver"},"Deploy Harvester CSI Driver")," steps described in the RKE2 section."),(0,r.kt)("p",null,"The only difference is in generating the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init")," config where you need to specify the provider type as ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./generate_addon_csi.sh <serviceaccount name> <namespace> k3s\n")),(0,r.kt)("h2",{id:"customize-the-default-storageclass"},"Customize the Default StorageClass"),(0,r.kt)("p",null,"The Harvester CSI driver provides the interface for defining the default StorageClass. If the default StorageClass in unspecified, the Harvester CSI driver uses the default StorageClass of the host Harvester cluster."),(0,r.kt)("p",null,"You can use the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"host-storage-class")," to customize the default StorageClass."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a StorageClass for the host Harvester cluster."),(0,r.kt)("p",{parentName:"li"},"Example:\n",(0,r.kt)("img",{src:a(22399).Z,width:"2462",height:"1278"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy the CSI driver with the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"host-storage-class"),"."),(0,r.kt)("p",{parentName:"li"},"Example:\n",(0,r.kt)("img",{src:a(84259).Z,width:"1680",height:"476"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify that the Harvester CSI driver is ready."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"PersistentVolumeClaims")," screen, create a PVC. Select ",(0,r.kt)("strong",{parentName:"p"},"Use a Storage Class to provision a new Persistent Volume")," and specify the StorageClass you created."),(0,r.kt)("p",{parentName:"li"},"Example:\n",(0,r.kt)("img",{src:a(57062).Z,width:"2474",height:"1386"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the PVC is created, note the name of the provisioned volume and verify that the status is ",(0,r.kt)("strong",{parentName:"p"},"Bound"),"."),(0,r.kt)("p",{parentName:"li"},"Example:\n",(0,r.kt)("img",{src:a(60684).Z,width:"2480",height:"676"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Volumes")," screen, verify that the volume was provisioned using the StorageClass that you created."),(0,r.kt)("p",{parentName:"li"},"Example:\n",(0,r.kt)("img",{src:a(3629).Z,width:"2476",height:"616"})))))),(0,r.kt)("h2",{id:"passthrough-custom-storageclass"},"Passthrough Custom StorageClass"),(0,r.kt)("p",null,"Beginning with Harvester CSI driver v0.1.15, it's possible to create a PersistentVolumeClaim (PVC) using a different Harvester StorageClass on the guest Kubernetes Cluster."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Harvester CSI driver v0.1.15 is supported out of the box starting with the following RKE2 versions. For RKE1, manual installation of the CSI driver chart is required:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"v1.23.16+rke2r1 and later"),(0,r.kt)("li",{parentName:"ul"},"v1.24.10+rke2r1 and later"),(0,r.kt)("li",{parentName:"ul"},"v1.25.6+rke2r1 and later"),(0,r.kt)("li",{parentName:"ul"},"v1.26.1+rke2r1 and later"),(0,r.kt)("li",{parentName:"ul"},"v1.27.1+rke2r1 and later"))),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("p",null,"Add the following prerequisites to your Harvester cluster to ensure the Harvester CSI driver displays error messages correctly. Proper RBAC settings are essential for error message visibility, especially when creating a PVC with a non-existent StorageClass, as shown in the image below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(60531).Z,width:"1900",height:"874"})),(0,r.kt)("p",null,"Follow these steps to set up ",(0,r.kt)("strong",{parentName:"p"},"RBAC")," for error message visibility:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterrole")," named ",(0,r.kt)("inlineCode",{parentName:"p"},"harvesterhci.io:csi-driver")," using the following manifest."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  labels:\n    app.kubernetes.io/component: apiserver\n    app.kubernetes.io/name: harvester\n    app.kubernetes.io/part-of: harvester\n  name: harvesterhci.io:csi-driver\nrules:\n- apiGroups:\n  - storage.k8s.io\n  resources:\n  - storageclasses\n  verbs:\n  - get\n  - list\n  - watch\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterrolebinding")," associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterrole")," above with the relevant ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceaccount")," using the following manifest."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: <namespace>-<serviceaccount name>\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: harvesterhci.io:csi-driver\nsubjects:\n- kind: ServiceAccount\n  name: <serviceaccount name>\n  namespace: <namespace>\n")),(0,r.kt)("p",{parentName:"li"},"Make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceaccount name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," match your cloud provider settings. Perform the following steps to retrieve these details."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the ",(0,r.kt)("inlineCode",{parentName:"p"},"rolebinding")," associated with your cloud provider:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl get rolebinding -A |grep harvesterhci.io:cloudprovider\ndefault                                 default-rke2-guest-01                                ClusterRole/harvesterhci.io:cloudprovider             7d1h\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"subjects")," information from this ",(0,r.kt)("inlineCode",{parentName:"p"},"rolebinding"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl get rolebinding default-rke2-guest-01 -n default -o yaml |yq -e '.subjects'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Identify the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," information:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- kind: ServiceAccount\n  name: rke2-guest-01\n  namespace: default\n")))))),(0,r.kt)("h3",{id:"deploying-1"},"Deploying"),(0,r.kt)("p",null,"Now you can create a new StorageClass that you intend to use in your guest Kubernetes cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For administrators, you can create a desired ",(0,r.kt)("a",{parentName:"p",href:"/v1.2/advanced/storageclass"},"StorageClass")," (e.g., named ",(0,r.kt)("strong",{parentName:"p"},"replica-2"),") in your bare-metal Harvester cluster."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(12787).Z,width:"1908",height:"775"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then, on the guest Kubernetes cluster, create a new StorageClass associated with the StorageClass named ",(0,r.kt)("strong",{parentName:"p"},"replica-2")," from the Harvester Cluster:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(15407).Z,width:"1910",height:"875"})),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When choosing a ",(0,r.kt)("strong",{parentName:"li"},"Provisioner"),", select ",(0,r.kt)("strong",{parentName:"li"},"Harvester (CSI)"),". The ",(0,r.kt)("strong",{parentName:"li"},"Host StorageClass")," parameter should match the StorageClass name created on the Harvester Cluster."),(0,r.kt)("li",{parentName:"ul"},"For guest Kubernetes owners, you may request that the Harvester cluster administrator create a new StorageClass."),(0,r.kt)("li",{parentName:"ul"},"If you leave the ",(0,r.kt)("inlineCode",{parentName:"li"},"Host StorageClass")," field empty, the default StorageClass of the Harvester cluster will be used.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now create a PVC based on this new ",(0,r.kt)("strong",{parentName:"p"},"StorageClass"),", which utilizes the ",(0,r.kt)("strong",{parentName:"p"},"Host StorageClass")," to provision volumes on the bare-metal Harvester cluster."))))}c.isMDXComponent=!0},58524:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/creating_guest_cluster-9a704a8caf1f5d20e80a4e85b864d8e5.png"},3629:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/check-pvc-name-on-host-harvester-volume-page-8d16cb8fdf4df1ac2a703d2eb84156d4.png"},60684:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/check-volume-and-pvc-name-7587853ba9938d2d730bfce7ade9dfef.png"},91366:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-config-userdata-8578bb17090db81956d319d54b6ee7d3.png"},22399:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-new-sc-341f1bc33e991c2909d0dd2f7e5f45fa.png"},57062:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-volume-with-harvester-csi-driver-5050d02b1e8cae5f01bbe83e465e4087.png"},84259:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/deploy-csi-driver-with-host-storage-class-b464290e0b14a33de632925512e20b7f.png"},82414:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/donot_change_cloud_config_path-f1a6f8a068fb6d7f19fe33b7a3cd97bc.png"},15407:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/downstream-cluster-sc-creation-378d43228c1d54eede232eb32d86dd0e.png"},60531:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/error_event_csi_driver-39ba293ec4c085eb58a01a396ac1f65a.png"},31621:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/install-harvester-csi-driver-28489139ba34a16156cfea27c6eb005f.png"},64879:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/install_csi_rancher_marketplace-a6e0b7ac479a8ae72c4b31ad18d3ad9e.png"},52051:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/non-harvester-cloud-provider-8e3bc5542bd27800a302340c0b2ceef3.png"},19357:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},46902:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"},12787:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sc-replica-2-7f41f9357e62f4d917a590f31c04b98a.png"}}]);