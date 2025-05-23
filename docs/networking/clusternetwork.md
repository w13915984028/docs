---
id: index
sidebar_position: 1
sidebar_label: Cluster Network
title: "Cluster Network"
keywords:
- Harvester
- Networking
- ClusterNetwork
- NetworkConfig
- Network
---

<head>
  <link rel="canonical" href="https://docs.harvesterhci.io/v1.5/networking/index"/>
</head>

## Concepts

### Cluster Network
_Available as of v1.1.0_

In Harvester v1.1.0, we introduced a new concept called cluster network for traffic isolation.

The following diagram describes a typical network architecture that separates data-center (DC) traffic from out-of-band (OOB) traffic.

![](/img/v1.2/networking/traffic-isolation.png)

We abstract the sum of devices, links, and configurations on a traffic-isolated forwarding path on Harvester as a cluster network.

In the above case, there will be two cluster networks corresponding to two traffic-isolated forwarding paths.

### Network Configuration

Specifications including network devices of the Harvester hosts can be different. To be compatible with such a heterogeneous cluster, we designed the network configuration.

Network configuration only works under a certain cluster network. Each network configuration corresponds to a set of hosts with uniform network specifications. Therefore, multiple network configurations are required for a cluster network on non-uniform hosts.

### VM Network

A VM network is an interface in a virtual machine that connects to the host network. As with a network configuration, every network except the built-in [management network](./harvester-network.md#management-network) must be under a cluster network.

Harvester supports adding multiple networks to one VM. If a network's cluster network is not enabled on some hosts, the VM that owns this network will not be scheduled to those hosts.

Please refer to [network part](./harvester-network.md) for more details about networks.

### Relationship Between Cluster Network, Network Config, VM Network
The following diagram shows the relationship between a cluster network, a network config, and a VM network.

![](/img/v1.2/networking/relation.png)

All `Network Configs` and `VM Networks` are grouped under a cluster network. 

- A label can be assigned to each host to categorize hosts based on their network specifications.
- A network config can be added for each group of hosts using a node selector. 

For example, in the diagram above, the hosts in `ClusterNetwork-A` are divided into three groups as follows:
- The first group includes host0, which corresponds to `network-config-A`.
- The second group includes host1 and host2, which correspond to `network-config-B`.
- The third group includes the remaining hosts (host3, host4, and host5), which do not have any related network config and therefore do not belong to `ClusterNetwork-A`.

The cluster network is only effective on hosts that are covered by the network configuration. A VM using a `VM network` under a specific cluster network can only be scheduled on a host where the cluster network is active.

 In the diagram above, we can see that:
- `ClusterNetwork-A` is active on host0, host1, and host2. `VM0` uses `VM-network-A`, so it can be scheduled on any of these hosts.
- `VM1` uses both `VM-network-B` and `VM-network-C`, so it can only be scheduled on host2 where both `ClusterNetwork-A` and `ClusterNetwork-B` are active.
- `VM0`, `VM1`, and `VM2` cannot run on host3 where the two cluster networks are inactive.

Overall, this diagram provides a clear visualization of the relationship between cluster networks, network configurations, and VM networks, as well as how they impact VM scheduling on hosts.

## Cluster Network Details

### Built-in Cluster Network

Harvester provides a built-in cluster network called `mgmt`. It's different from the custom cluster network. The `mgmt` cluster network:

- Cannot be deleted.
- Does not need any network configuration.
- Is enabled on all hosts and cannot be disabled.
- Shares the same traffic egress with the management network.

If there is no need for traffic separation, you can put all your network under the mgmt cluster network.

### Custom Cluster Network

You are allowed to add the custom cluster network, which will not be available until it's enabled on some hosts by adding a network configuration.

:::note

Before creating a new cluster network, ensure that the [hardware requirements](../install/requirements.md#hardware-requirements) are met.

The [witness node](../advanced/witness.md) is generally not involved in the custom cluster network.

:::

## Configuration

### Create a New Cluster Network

1. Go to **Networks > ClusterNetworks/Configs**, and then click **Create**.

1. Specify a name for the network.

   ![](/img/v1.2/networking/create-clusternetwork.png)

1. Click the **Create Network Config** button on the right of the cluster network to create a new network configuration.

   ![](/img/v1.2/networking/create-network-config-button.png)

1. In the **Node Selector** tab, specify the name and choose one of the three methods to select nodes where the network configuration will apply. If you want to cover the unselected nodes, you can create another network configuration.

   ![](/img/v1.2/networking/select-nodes.png)

:::note

The method **Select all nodes** works only when all nodes use the exact same dedicated NICs for this specific custom cluster network. In other situations (for example, when the cluster has a [witness node](../advanced/witness.md)), you must select either of the remaining methods.

:::

1. Click the **Uplink** tab to add the NICs, and configure the bond options and link attributes. The bond mode defaults to `active-backup`.

   ![](/img/v1.2/networking/config-uplink.png)

:::note

- The NICs drop-down list shows all the common NICs on all the selected nodes. The drop-down list will change as you select different nodes.
- The text `enp7s3 (1/3 Down)` in the NICs drop-down list indicates that the enp7s3 NIC is down in one of the three selected nodes. In this case, you need to find the NIC, set it up, and refresh this page. After this, it should be selectable.

:::

:::note

Starting with Harvester v1.1.2, Harvester supports updating network configs. Make sure to stop all affected VMs before updating network configs.

To simplify cluster maintenance, create one network configuration for each node or group of nodes. Without dedicated network configurations, certain maintenance tasks (for example, replacing old NICs with NICs in different slots) will require you to stop and/or migrate the affected VMs before updating the network configuration.

:::

### Change a Network Configuration

Changes to existing network configurations may affect Harvester virtual machines and workloads, and external devices such as switches and routers. For more information, see [Network Topology](./deep-dive.md#network-topology).

The following sections outline the steps you must perform to change the MTU of a network configuration. The sample cluster network used in these sections has `cn-data` that was built with a MTU value `1500` and is intended to be changed with value `9000`.

![](/img/v1.4/networking/set-a-new-mtu-value.png)

#### Change the MTU of a Network Configuration with No Attached Storage Network

In this scenario, the [storage network](../advanced/storagenetwork.md#harvester-storage-network-setting) is neither enabled nor attached to the target cluster network.

:::caution

- The MTU affects Harvester nodes and networking devices such as switches and routers. Careful planning and testing are required to ensure that changing the MTU does not adversely affect the system. For more information, see [Network Topology](./deep-dive.md#network-topology).
- You must use the same MTU across all network configurations of a custom cluster network. You must also manually update the MTU on existing virtual machine networks.
- Cluster operations are interrupted during the configuration change.
- The information in this section does not apply to the built-in `mgmt` cluster network.

:::

If you must change the MTU, perform the following steps:

1. Stop all virtual machines that are attached to the target cluster network.

    You can check this using the [VM network](./harvester-network.md#create-a-vm-network) and any [secondary networks](../vm/create-vm.md#secondary-network) you may have used. Harvester does not allow you to change the MTU when any of the connected virtual machines are still running.

1. Check the network configurations of the target cluster network.

    If multiple network configurations exist, record the node selector for each and remove configurations until only one remains.

1. Verify that the MTU was changed using the Linux `ip link` command. If the network configuration selects multiple Harvester nodes, run the command on each node.

    The output must show the new MTU of the related `*-br` device and the state `UP`. In the following example, the device is `cn-data-br` and the new MTU is `9000`.

    ```
    Harvester node $ ip link show dev cn-data-br

                                                  |new MTU|              |state UP|
    3: cn-data-br: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 9000 qdisc noqueue state UP mode DEFAULT group default qlen 1000
        link/ether 52:54:00:6e:5c:2a brd ff:ff:ff:ff:ff:ff
    ```

    :::note

    When the state is `UNKNOWN`, it is likely that the MTU values on Harvester and the external switch or router do not match.

    :::

1. Test the new MTU on Harvester nodes using commands such as `ping`. You must send the messages to a Harvester node with the new MTU or a node with an external IP.

    Example:

    Suppose a CIDR `192.168.100.0/24` and gateway `192.168.100.1` is prepared for the cn-data network.

    1. Set an IP 192.168.100.100 on bridge device

        $ ip addr add dev cn-data-br 192.168.100.100/24

    1. Add a route for destination IP like `8.8.8.8` via the gateway

        $ ip route add 8.8.8.8 via 192.168.100.1 dev cn-data-br

    1. ping 8.8.8.8 from the new IP 192.168.100.100

        $ ping 8.8.8.8 -I 192.168.100.100
        PING 8.8.8.8 (8.8.8.8) from 192.168.100.100 : 56(84) bytes of data.
        64 bytes from 8.8.8.8: icmp_seq=1 ttl=59 time=8.52 ms
        64 bytes from 8.8.8.8: icmp_seq=2 ttl=59 time=8.90 ms
        ...

    1. ping with different size to validate new MTU

        $ ping 8.8.8.8 -s 8800 -I 192.168.100.100

        PING 8.8.8.8 (8.8.8.8) from 192.168.100.100 : 8800(8828) bytes of data

        The param `-s` specify the ping packet size, which can test if the new MTU really works

    1. Remove the added test route

        $ ip route delete 8.8.8.8 via 192.168.100.1 dev cn-data-br

    1. Remove the added test ip

        $ ip addr delete 192.168.100.100/24 dev cn-data-br

1. Add back the network configurations that you removed, change the MTU in each one, and verify that the new MTU was applied.

1. Edit the YAML of all virtual machine networks that are attached to the target cluster network.

    On the Harvester UI **Virtual Machine Networks** screen, perform the following steps for each attached network:

    1. Select **⋮ > Edit YAML**.

        ![](/img/v1.4/networking/edit-vm-networks.png)

    1. Change the MTU.

        ![](/img/v1.4/networking/edit-vm-network-mtu.png)

    1. Click **Save**.

    You can also use `kubectl` to change the MTU. In the following example, the network name is `vm100`. To edit the YAML of this network, run the command `kubectl edit NetworkAttachmentDefinition.k8s.cni.cncf.io vm100`.

    ```
    apiVersion: k8s.cni.cncf.io/v1
    kind: NetworkAttachmentDefinition
    metadata:
      annotations:
        network.harvesterhci.io/route: '{"mode":"auto","serverIPAddr":"","cidr":"","gateway":""}'
      creationTimestamp: '2025-04-25T10:21:01Z'
      finalizers:
        - wrangler.cattle.io/harvester-network-nad-controller
        - wrangler.cattle.io/harvester-network-manager-nad-controller
      generation: 1
      labels:
        network.harvesterhci.io/clusternetwork: cn-data
        network.harvesterhci.io/ready: 'true'
        network.harvesterhci.io/type: L2VlanNetwork
        network.harvesterhci.io/vlan-id: '100'
      name: vm100
      namespace: default
      resourceVersion: '1525839'
      uid: 8dacf415-ce90-414a-a11b-48f041d46b42
    spec:
      config: >-
        {"cniVersion":"0.3.1","name":"vm100","type":"bridge","bridge":"cn-data-br","promiscMode":true,"vlan":100,"ipam":{},"mtu":1500}
    ```

1. Start all virtual machines that are attached to the target cluster network.

    The virtual machines should have inherited the new MTU. You can verify this in the guest operating system using the Linux `ip link` command and `ping 8.8.8.8 -s 8800` command.

1. Verify that the virtual machine workloads are running normally.

:::info important

Harvester cannot be held responsible for any damage or loss of data that may occur when the MTU value is changed.

:::

#### Change the MTU of a Network Configuration with an Attached Storage Network

In this scenario, the [storage network](../advanced/storagenetwork.md#harvester-storage-network-setting) is enabled and attached to the target cluster network.

The storage network is used by `driver.longhorn.io`, which is Harvester's default CSI driver. Longhorn is responsible for provisioning [root volumes](../vm/create-vm.md#volumes), so changing the MTU affects all virtual machines.

:::caution

- The MTU affects Harvester nodes and networking devices such as switches and routers. Careful planning and testing are required to ensure that changing the MTU does not adversely affect the system. For more information, see [Network Topology](./deep-dive.md#network-topology).
- You must use the same MTU across all network configurations of a custom cluster network. You must also manually update the MTU on existing virtual machine networks.
- All cluster operations are interrupted during the configuration change.
- The information in this section does not apply to the built-in `mgmt` cluster network.

:::

If you must change the MTU, perform the following steps:

1. Stop all the VMs.

1. Disable the Harvester [Storage Network](../advanced/storagenetwork.md#harvester-storage-network-setting).

    Allow some time for the setting to be disabled, and then [verify that the change was applied](../advanced/storagenetwork.md#verify-configuration-is-completed).

1. Check the network configurations of the target cluster network.

    If multiple network configurations exist, record the node selector for each and remove configurations until only one remains.

1. Change the MTU of the remaining network configuration.

    :::info important

    You must also change the MTU on the peer external switch or router.

    :::

1. Verify that the MTU was changed using the Linux `ip link` command. If the network configuration selects multiple Harvester nodes, run the command on each node.

    The output must show the new MTU of the related `*-br` device and the state `UP`. In the following example, the device is `cn-data-br` and the new MTU is `9000`.

    ```
    Harvester node $ ip link show dev cn-data-br

                                                  |new MTU|              |state UP|
    3: cn-data-br: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 9000 qdisc noqueue state UP mode DEFAULT group default qlen 1000
        link/ether 52:54:00:6e:5c:2a brd ff:ff:ff:ff:ff:ff
    ```

    :::note

    When the state is `UNKNOWN`, it is likely that the MTU values on Harvester and the external switch or router do not match.

    :::

1. Test the new MTU on Harvester nodes using commands such as `ping`. You must send the messages to a Harvester node with the new MTU or to a node with an external IP.

    Example:

    Suppose a CIDR `192.168.100.0/24` and gateway `192.168.100.1` is prepared for the cn-data network.

    1. Set an IP 192.168.100.100 on bridge device

        $ ip addr add dev cn-data-br 192.168.100.100/24

    1. Add a route for destination IP like `8.8.8.8` via the gateway

        $ ip route add 8.8.8.8 via 192.168.100.1 dev cn-data-br

    1. ping 8.8.8.8 from the new IP 192.168.100.100

        $ ping 8.8.8.8 -I 192.168.100.100
        PING 8.8.8.8 (8.8.8.8) from 192.168.100.100 : 56(84) bytes of data.
        64 bytes from 8.8.8.8: icmp_seq=1 ttl=59 time=8.52 ms
        64 bytes from 8.8.8.8: icmp_seq=2 ttl=59 time=8.90 ms
        ...

    1. ping with different size to validate new MTU

        $ ping 8.8.8.8 -s 8800 -I 192.168.100.100

        PING 8.8.8.8 (8.8.8.8) from 192.168.100.100 : 8800(8828) bytes of data

        The param `-s` specify the ping packet size, which can test if the new MTU really works

    1. Remove the added test route

        $ ip route delete 8.8.8.8 via 192.168.100.1 dev cn-data-br

    1. Remove the added test ip

        $ ip addr delete 192.168.100.100/24 dev cn-data-br

1. Add back the network configurations that you removed, change the MTU in each one, and verify that the new MTU was applied.

1. Enable and configure the Harvester [storage network setting](../advanced/storagenetwork.md#harvester-storage-network-setting), ensuring that the [prerequisites](../advanced/storagenetwork.md#prerequisites) are met.

    Allow some time for the setting to be disabled, and then [verify that the change was applied](../advanced/storagenetwork.md#verify-configuration-is-completed).

1. Edit the YAML of all virtual machine networks that are attached to the target cluster network.

    On the Harvester UI **Virtual Machine Networks** screen, perform the following steps for each attached network:

    1. Select **⋮ > Edit YAML**.

        ![](/img/v1.4/networking/edit-vm-networks.png)

    1. Change the MTU.

        ![](/img/v1.4/networking/edit-vm-network-mtu.png)

    1. Click **Save**.

    You can also use `kubectl` to change the MTU. In the following example, the network name is `vm100`. To edit the YAML of this network, run the command `kubectl edit NetworkAttachmentDefinition.k8s.cni.cncf.io vm100`.

    ```
    apiVersion: k8s.cni.cncf.io/v1
    kind: NetworkAttachmentDefinition
    metadata:
      annotations:
        network.harvesterhci.io/route: '{"mode":"auto","serverIPAddr":"","cidr":"","gateway":""}'
      creationTimestamp: '2025-04-25T10:21:01Z'
      finalizers:
        - wrangler.cattle.io/harvester-network-nad-controller
        - wrangler.cattle.io/harvester-network-manager-nad-controller
      generation: 1
      labels:
        network.harvesterhci.io/clusternetwork: cn-data
        network.harvesterhci.io/ready: 'true'
        network.harvesterhci.io/type: L2VlanNetwork
        network.harvesterhci.io/vlan-id: '100'
      name: vm100
      namespace: default
      resourceVersion: '1525839'
      uid: 8dacf415-ce90-414a-a11b-48f041d46b42
    spec:
      config: >-
        {"cniVersion":"0.3.1","name":"vm100","type":"bridge","bridge":"cn-data-br","promiscMode":true,"vlan":100,"ipam":{},"mtu":1500}
    ```

1. Start all virtual machines that are attached to the target cluster network.

    The virtual machines should have inherited the new MTU. You can verify this from the guest operating system using the Linux `ip link` command and `ping 8.8.8.8 -s 8800` command.

1. Verify that the virtual machine workloads are running normally.

:::info important

Harvester cannot be held responsible for any damage or loss of data that may occur when the MTU value is changed.

:::
