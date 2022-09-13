"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91091],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=s,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},63001:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),o=["components"],i={title:"Best Practices for Rancher Managed vSphere Clusters",shortTitle:"Rancher Managed Clusters in vSphere"},c=void 0,l={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",id:"reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",title:"Best Practices for Rancher Managed vSphere Clusters",description:"This guide outlines a reference architecture for provisioning downstream Rancher clusters in a vSphere environment, in addition to standard vSphere best practices as documented by VMware.",source:"@site/docs/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",permalink:"/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere.md",tags:[],version:"current",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Best Practices for Rancher Managed vSphere Clusters",shortTitle:"Rancher Managed Clusters in vSphere"},sidebar:"tutorialSidebar",previous:{title:"Tips for Setting Up Containers",permalink:"/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers"},next:{title:"Architecture",permalink:"/pages-for-subheaders/rancher-manager-architecture"}},d={},u=[{value:"Leverage VM Templates to Construct the Environment",id:"leverage-vm-templates-to-construct-the-environment",level:3},{value:"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across ESXi Hosts",id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-esxi-hosts",level:3},{value:"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across Datastores",id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-datastores",level:3},{value:"Configure VM&#39;s as Appropriate for Kubernetes",id:"configure-vms-as-appropriate-for-kubernetes",level:3},{value:"Leverage Low Latency, High Bandwidth Connectivity Between ETCD Nodes",id:"leverage-low-latency-high-bandwidth-connectivity-between-etcd-nodes",level:3},{value:"Consistent IP Addressing for VM&#39;s",id:"consistent-ip-addressing-for-vms",level:3},{value:"Leverage SSD Drives for ETCD Nodes",id:"leverage-ssd-drives-for-etcd-nodes",level:3},{value:"Perform Regular Downstream Cluster Backups",id:"perform-regular-downstream-cluster-backups",level:3},{value:"Back up Downstream Node VMs",id:"back-up-downstream-node-vms",level:3}],p={toc:u};function h(e){var t=e.components,i=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide outlines a reference architecture for provisioning downstream Rancher clusters in a vSphere environment, in addition to standard vSphere best practices as documented by VMware."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#1-vm-considerations"},"1. VM Considerations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#2-network-considerations"},"2. Network Considerations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#3-storage-considerations"},"3. Storage Considerations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#4-backups-and-disaster-recovery"},"4. Backups and Disaster Recovery"))),(0,a.kt)("figcaption",null,"Solution Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Solution Overview",src:r(16181).Z,width:"576",height:"362"})),(0,a.kt)("h1",{id:"1-vm-considerations"},"1. VM Considerations"),(0,a.kt)("h3",{id:"leverage-vm-templates-to-construct-the-environment"},"Leverage VM Templates to Construct the Environment"),(0,a.kt)("p",null,'To facilitate consistency across the deployed Virtual Machines across the environment, consider the use of "Golden Images" in the form of VM templates. Packer can be used to accomplish this, adding greater customisation options.'),(0,a.kt)("h3",{id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-esxi-hosts"},"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across ESXi Hosts"),(0,a.kt)("p",null,"Doing so will ensure node VM's are spread across multiple ESXi hosts - preventing a single point of failure at the host level."),(0,a.kt)("h3",{id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-downstream-cluster-nodes-across-datastores"},"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Downstream Cluster Nodes Across Datastores"),(0,a.kt)("p",null,"Doing so will ensure node VM's are spread across multiple datastores - preventing a single point of failure at the datastore level."),(0,a.kt)("h3",{id:"configure-vms-as-appropriate-for-kubernetes"},"Configure VM's as Appropriate for Kubernetes"),(0,a.kt)("p",null,"It\u2019s important to follow K8s and etcd best practices when deploying your nodes, including disabling swap, double-checking you have full network connectivity between all machines in the cluster, using unique hostnames, MAC addresses, and product_uuids for every node."),(0,a.kt)("h1",{id:"2-network-considerations"},"2. Network Considerations"),(0,a.kt)("h3",{id:"leverage-low-latency-high-bandwidth-connectivity-between-etcd-nodes"},"Leverage Low Latency, High Bandwidth Connectivity Between ETCD Nodes"),(0,a.kt)("p",null,"Deploy etcd members within a single data center where possible to avoid latency overheads and reduce the likelihood of network partitioning. For most setups, 1Gb connections will suffice. For large clusters, 10Gb connections can reduce the time taken to restore from backup."),(0,a.kt)("h3",{id:"consistent-ip-addressing-for-vms"},"Consistent IP Addressing for VM's"),(0,a.kt)("p",null,"Each node used should have a static IP configured. In the case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,a.kt)("h1",{id:"3-storage-considerations"},"3. Storage Considerations"),(0,a.kt)("h3",{id:"leverage-ssd-drives-for-etcd-nodes"},"Leverage SSD Drives for ETCD Nodes"),(0,a.kt)("p",null,"ETCD is very sensitive to write latency. Therefore, leverage SSD disks where possible. "),(0,a.kt)("h1",{id:"4-backups-and-disaster-recovery"},"4. Backups and Disaster Recovery"),(0,a.kt)("h3",{id:"perform-regular-downstream-cluster-backups"},"Perform Regular Downstream Cluster Backups"),(0,a.kt)("p",null,"Kubernetes uses etcd to store all its data - from configuration, state and metadata. Backing this up is crucial in the event of disaster recovery."),(0,a.kt)("h3",{id:"back-up-downstream-node-vms"},"Back up Downstream Node VMs"),(0,a.kt)("p",null,"Incorporate the Rancher downstream node VM's within a standard VM backup policy."))}h.isMDXComponent=!0},16181:function(e,t,r){t.Z=r.p+"assets/images/solution_overview.drawio-5d3e9895c0317dc2fb485bb57ddd6cbc.svg"}}]);