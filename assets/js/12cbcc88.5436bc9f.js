"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[34906],{48472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});n(67294);var a=n(3905);const i={sidebar_position:6,sidebar_label:"Update Harvester Configuration",title:"Update Harvester Configuration After Installation",keywords:["Harvester configuration","Configuration"],description:"How to update Harvester configuration after installation"},o=void 0,r={unversionedId:"install/update-harvester-configuration",id:"version-v1.3/install/update-harvester-configuration",title:"Update Harvester Configuration After Installation",description:"How to update Harvester configuration after installation",source:"@site/versioned_docs/version-v1.3/install/update-harvester-configuration.md",sourceDirName:"install",slug:"/install/update-harvester-configuration",permalink:"/v1.3/install/update-harvester-configuration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/install/update-harvester-configuration.md",tags:[],version:"v1.3",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Update Harvester Configuration",title:"Update Harvester Configuration After Installation",keywords:["Harvester configuration","Configuration"],description:"How to update Harvester configuration after installation"},sidebar:"api",previous:{title:"Harvester Configuration",permalink:"/v1.3/install/harvester-configuration"},next:{title:"Management Address",permalink:"/v1.3/install/management-address"}},s={},l=[{value:"DNS servers",id:"dns-servers",level:2},{value:"Runtime change",id:"runtime-change",level:3},{value:"Configuration persistence",id:"configuration-persistence",level:3},{value:"NTP servers",id:"ntp-servers",level:2},{value:"Password of user <code>rancher</code>",id:"password-of-user-rancher",level:2},{value:"Runtime change",id:"runtime-change-1",level:3},{value:"Configuration persistence",id:"configuration-persistence-1",level:3},{value:"Bonding slaves",id:"bonding-slaves",level:2},{value:"Runtime change",id:"runtime-change-2",level:3},{value:"Configuration persistence",id:"configuration-persistence-2",level:3}],p={toc:l},m="wrapper";function d({components:e,...t}){return(0,a.kt)(m,{...p,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/update-harvester-configuration"})),(0,a.kt)("p",null,"Harvester's OS has an immutable design, which means most files in the  OS revert to their pre-configured state after a reboot. The Harvester OS loads the pre-configured values of system components from configuration files during the boot time. "),(0,a.kt)("p",null,"This page describes how to edit some of the most-requested Harvester configurations. To update a configuration, you must first update the runtime value in the system and then update configuration files to make the changes persistent between reboots. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you upgrade from a version before ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.1.2"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-init")," file in examples will be ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml"),". Please substitute the value if needed.")),(0,a.kt)("h2",{id:"dns-servers"},"DNS servers"),(0,a.kt)("h3",{id:"runtime-change"},"Runtime change"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to a Harvester node and become root. See ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/troubleshooting/os#how-to-log-in-to-a-harvester-node"},"how to log into a Harvester node")," for more details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/config")," and update the following line. Use a space to separate DNS server addresses if there are multiple servers."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'NETCONFIG_DNS_STATIC_SERVERS="8.8.8.8 1.1.1.1"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update and reload the configuration with the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"netconfig update\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," contains the correct DNS servers with the ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cat /etc/resolv.conf\n")))),(0,a.kt)("h3",{id:"configuration-persistence"},"Configuration persistence"),(0,a.kt)("p",null,"Beginning with v1.1.2, the persistent name of the cloud-init file is ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml"),". Harvester now uses a newer version of Elemental, which creates the file during installation."),(0,a.kt)("p",null,"When upgrading from an earlier version to ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.1.2")," or later, Harvester retains the old file name (",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml"),") to avoid confusion. You can manually rename the file to ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," if necessary."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Backup the elemental ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-init")," file ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cp /oem/90_custom.yaml /oem/install/90_custom.yaml.$(date --iso-8601=minutes)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the value under the yaml path ",(0,a.kt)("inlineCode",{parentName:"p"},"stages.initramfs[0].commands"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"commands")," array must contain a line to manipulate the ",(0,a.kt)("inlineCode",{parentName:"p"},"NETCONFIG_DNS_STATIC_SERVERS")," config. Add the line if the line doesn't exist. "),(0,a.kt)("p",{parentName:"li"},"The following example adds a line to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"NETCONFIG_DNS_STATIC_SERVERS")," config:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"stages:\n  initramfs:\n    - commands:\n        - sed -i 's/^NETCONFIG_DNS_STATIC_SERVERS.*/NETCONFIG_DNS_STATIC_SERVERS=\"8.8.8.8 1.1.1.1\"/' /etc/sysconfig/network/config\n")),(0,a.kt)("p",{parentName:"li"},"Replace the DNS server addresses and save the file. Harvester sets up new servers after rebooting."))),(0,a.kt)("h2",{id:"ntp-servers"},"NTP servers"),(0,a.kt)("p",null,"We introduce the new mechanism for the NTP configuration in Harvester v1.2.0."),(0,a.kt)("p",null,"For more information about NTP settings in Harvester v1.2.0 and later versions, see the ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/host/#ntp-configuration"},"NTP servers"),"."),(0,a.kt)("h2",{id:"password-of-user-rancher"},"Password of user ",(0,a.kt)("inlineCode",{parentName:"h2"},"rancher")),(0,a.kt)("h3",{id:"runtime-change-1"},"Runtime change"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to a Harvester node as user ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher"),". See ",(0,a.kt)("a",{parentName:"li",href:"/v1.3/troubleshooting/os#how-to-log-in-to-a-harvester-node"},"how to log into a Harvester node")," for more details."),(0,a.kt)("li",{parentName:"ol"},"To reset the password for the user ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher"),", run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"passwd"),". ")),(0,a.kt)("h3",{id:"configuration-persistence-1"},"Configuration persistence"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Backup the elemental ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-init")," file ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cp /oem/90_custom.yaml /oem/install/90_custom.yaml.$(date --iso-8601=minutes)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the yaml path ",(0,a.kt)("inlineCode",{parentName:"p"},"stages.initramfs[0].users.rancher.passwd"),". Refer to the configuration ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/install/harvester-configuration#ospassword"},(0,a.kt)("inlineCode",{parentName:"a"},"os.password"))," for details on how to specify the password in an encrypted form."))),(0,a.kt)("h2",{id:"bonding-slaves"},"Bonding slaves"),(0,a.kt)("p",null,"You can update the slave interfaces of Harvester's management bonding interface ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-bo"),"."),(0,a.kt)("h3",{id:"runtime-change-2"},"Runtime change"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to a Harvester node and become root. See ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/troubleshooting/os#how-to-log-in-to-a-harvester-node"},"how to log into a Harvester node")," for more details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Identify the interface names with the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"ip a\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/ifcfg-mgmt-bo")," and update the lines associated with bonding slaves and bonding mode:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"BONDING_SLAVE_0='ens5'\nBONDING_SLAVE_1='ens6'\nBONDING_MODULE_OPTS='miimon=100 mode=balance-tlb '\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart the network with the ",(0,a.kt)("inlineCode",{parentName:"p"},"wicked ifreload")," command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"wicked ifreload mgmt-bo\n")),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"A mistake in the configuration may disrupt the SSH session.")))),(0,a.kt)("h3",{id:"configuration-persistence-2"},"Configuration persistence"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Backup the elemental cloud-init file ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cp /oem/90_custom.yaml /oem/install/90_custom.yaml.$(date --iso-8601=minutes)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the yaml path ",(0,a.kt)("inlineCode",{parentName:"p"},"stages.initramfs[0].files"),". More specifically, update the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/ifcfg-mgmt-bo")," file and edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"BONDING_SLAVE_X")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BONDING_MODULE_OPTS")," entries accordingly:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"stages:\n  initramfs:\n  - ...\n    files:\n    - path: /etc/sysconfig/network/ifcfg-mgmt-bo\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |+\n          STARTMODE='onboot'\n          BONDING_MASTER='yes'\n          BOOTPROTO='none'\n          POST_UP_SCRIPT=\"wicked:setup_bond.sh\"\n\n\n          BONDING_SLAVE_0='ens5'\n          BONDING_SLAVE_1='ens6'\n\n          BONDING_MODULE_OPTS='miimon=100 mode=balance-tlb '\n\n          DHCLIENT_SET_DEFAULT_ROUTE='no'\n\n      encoding: \"\"\n      ownerstring: \"\"\n    - path: /etc/sysconfig/network/ifcfg-ens6\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n        STARTMODE='hotplug'\n        BOOTPROTO='none'\n      encoding: \"\"\n      ownerstring: \"\"\n")),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you didn't select an interface during installation, you must add an entry to initialize the interface. Please check the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/ifcfg-ens6")," file creation in the above example. The file name should be ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/ifcfg-<interface-name>"),".")))))}d.isMDXComponent=!0}}]);