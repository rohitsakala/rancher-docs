"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93923],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,k=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},40044:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"Backing up a Cluster",weight:2045,aliases:["/rancher/v2.x/en/cluster-admin/backing-up-etcd/"]},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",id:"version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",title:"Backing up a Cluster",description:"In the Rancher UI, etcd backup and recovery for Rancher launched Kubernetes clusters can be easily performed.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md",tags:[],version:"2.5",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Backing up a Cluster",weight:2045,aliases:["/rancher/v2.x/en/cluster-admin/backing-up-etcd/"]},sidebar:"tutorialSidebar",previous:{title:"Restoring Backups\u2014Docker Installs",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},next:{title:"Restoring a Cluster from Backup",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"}},u={},c=[{value:"Snapshot Components",id:"snapshot-components",level:3},{value:"Generating the Snapshot from etcd Nodes",id:"generating-the-snapshot-from-etcd-nodes",level:3},{value:"Snapshot Naming Conventions",id:"snapshot-naming-conventions",level:3},{value:"How Restoring from a Snapshot Works",id:"how-restoring-from-a-snapshot-works",level:3},{value:"Local Backup Target",id:"local-backup-target",level:3},{value:"S3 Backup Target",id:"s3-backup-target",level:3},{value:"Using a custom CA certificate for S3",id:"using-a-custom-ca-certificate-for-s3",level:3},{value:"IAM Support for Storing Snapshots in S3",id:"iam-support-for-storing-snapshots-in-s3",level:3}],h={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the Rancher UI, etcd backup and recovery for ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes clusters")," can be easily performed."),(0,s.kt)("p",null,"Rancher recommends configuring recurrent ",(0,s.kt)("inlineCode",{parentName:"p"},"etcd")," snapshots for all production clusters. Additionally, one-time snapshots can easily be taken as well."),(0,s.kt)("p",null,"Snapshots of the etcd database are taken and saved either ",(0,s.kt)("a",{parentName:"p",href:"#local-backup-target"},"locally onto the etcd nodes")," or to a ",(0,s.kt)("a",{parentName:"p",href:"#s3-backup-target"},"S3 compatible target"),". The advantages of configuring S3 is that if all etcd nodes are lost, your snapshot is saved remotely and can be used to restore the cluster."),(0,s.kt)("h1",{id:"how-snapshots-work"},"How Snapshots Work"),(0,s.kt)("h3",{id:"snapshot-components"},"Snapshot Components"),(0,s.kt)("p",null,"When Rancher creates a snapshot, it includes three components: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The cluster data in etcd"),(0,s.kt)("li",{parentName:"ul"},"The Kubernetes version"),(0,s.kt)("li",{parentName:"ul"},"The cluster configuration in the form of the ",(0,s.kt)("inlineCode",{parentName:"li"},"cluster.yml"))),(0,s.kt)("p",null,"Because the Kubernetes version is now included in the snapshot, it is possible to restore a cluster to a prior Kubernetes version."),(0,s.kt)("p",null,"The multiple components of the snapshot allow you to select from the following options if you need to restore a cluster from a snapshot:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Restore just the etcd contents:")," This restore is similar to restoring to snapshots in Rancher before v2.4.0."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Restore etcd and Kubernetes version:")," This option should be used if a Kubernetes upgrade is the reason that your cluster is failing, and you haven't made any cluster configuration changes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Restore etcd, Kubernetes versions and cluster configuration:")," This option should be used if you changed both the Kubernetes version and cluster configuration when upgrading.")),(0,s.kt)("p",null,"It's always recommended to take a new snapshot before any upgrades."),(0,s.kt)("h3",{id:"generating-the-snapshot-from-etcd-nodes"},"Generating the Snapshot from etcd Nodes"),(0,s.kt)("p",null,"For each etcd node in the cluster, the etcd cluster health is checked. If the node reports that the etcd cluster is healthy, a snapshot is created from it and optionally uploaded to S3."),(0,s.kt)("p",null,"The snapshot is stored in ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),". If the directory is configured on the nodes as a shared mount, it will be overwritten. On S3, the snapshot will always be from the last node that uploads it, as all etcd nodes upload it and the last will remain."),(0,s.kt)("p",null,"In the case when multiple etcd nodes exist, any created snapshot is created after the cluster has been health checked, so it can be considered a valid snapshot of the data in the etcd cluster."),(0,s.kt)("h3",{id:"snapshot-naming-conventions"},"Snapshot Naming Conventions"),(0,s.kt)("p",null,"The name of the snapshot is auto-generated. The ",(0,s.kt)("inlineCode",{parentName:"p"},"--name")," option can be used to override the name of the snapshot when creating one-time snapshots with the RKE CLI."),(0,s.kt)("p",null,"When Rancher creates a snapshot of an RKE cluster, the snapshot name is based on the type (whether the snapshot  is manual or recurring) and the target (whether the snapshot is saved locally or uploaded to S3). The naming convention is as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"m")," stands for manual"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"r")," stands for recurring"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"l")," stands for local"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," stands for S3")),(0,s.kt)("p",null,"Some example snapshot names are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"c-9dmxz-rl-8b2cx"),(0,s.kt)("li",{parentName:"ul"},"c-9dmxz-ml-kr56m"),(0,s.kt)("li",{parentName:"ul"},"c-9dmxz-ms-t6bjb"),(0,s.kt)("li",{parentName:"ul"},"c-9dmxz-rs-8gxc8")),(0,s.kt)("h3",{id:"how-restoring-from-a-snapshot-works"},"How Restoring from a Snapshot Works"),(0,s.kt)("p",null,"On restore, the following process is used:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The snapshot is retrieved from S3, if S3 is configured."),(0,s.kt)("li",{parentName:"ol"},"The snapshot is unzipped (if zipped)."),(0,s.kt)("li",{parentName:"ol"},"One of the etcd nodes in the cluster serves that snapshot file to the other nodes."),(0,s.kt)("li",{parentName:"ol"},"The other etcd nodes download the snapshot and validate the checksum so that they all use the same snapshot for the restore."),(0,s.kt)("li",{parentName:"ol"},"The cluster is restored and post-restore actions will be done in the cluster.")),(0,s.kt)("h1",{id:"configuring-recurring-snapshots"},"Configuring Recurring Snapshots"),(0,s.kt)("p",null,"Select how often you want recurring snapshots to be taken as well as how many snapshots to keep. The amount of time is measured in hours. With timestamped snapshots, the user has the ability to do a point-in-time recovery."),(0,s.kt)("p",null,"By default, ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes clusters")," are configured to take recurring snapshots (saved to local disk). To protect against local disk failure, using the ",(0,s.kt)("a",{parentName:"p",href:"#s3-backup-target"},"S3 Target")," or replicating the path on disk is advised."),(0,s.kt)("p",null,"During cluster provisioning or editing the cluster, the configuration for snapshots can be found in the advanced section for ",(0,s.kt)("strong",{parentName:"p"},"Cluster Options"),". Click on ",(0,s.kt)("strong",{parentName:"p"},"Show advanced options"),"."),(0,s.kt)("p",null,"In the ",(0,s.kt)("strong",{parentName:"p"},"Advanced Cluster Options")," section, there are several options available to configure:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Option"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"etcd Snapshot Backup Target"),(0,s.kt)("td",{parentName:"tr",align:null},"Select where you want the snapshots to be saved. Options are either local or in S3"),(0,s.kt)("td",{parentName:"tr",align:null},"local")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Recurring etcd Snapshot Enabled"),(0,s.kt)("td",{parentName:"tr",align:null},"Enable/Disable recurring snapshots"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Recurring etcd Snapshot Creation Period"),(0,s.kt)("td",{parentName:"tr",align:null},"Time in hours between recurring snapshots"),(0,s.kt)("td",{parentName:"tr",align:null},"12 hours")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Recurring etcd Snapshot Retention Count"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of snapshots to retain"),(0,s.kt)("td",{parentName:"tr",align:null},"6")))),(0,s.kt)("h1",{id:"one-time-snapshots"},"One-Time Snapshots"),(0,s.kt)("p",null,'In addition to recurring snapshots, you may want to take a "one-time" snapshot. For example, before upgrading the Kubernetes version of a cluster it\'s best to backup the state of the cluster to protect against upgrade failure.'),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to take a one-time snapshot.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click the ",(0,s.kt)("strong",{parentName:"p"},"\u22ee"," > Snapshot Now"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Based on your ",(0,s.kt)("a",{parentName:"p",href:"#snapshot-backup-targets"},"snapshot backup target"),", a one-time snapshot will be taken and saved in the selected backup target."),(0,s.kt)("h1",{id:"snapshot-backup-targets"},"Snapshot Backup Targets"),(0,s.kt)("p",null,"Rancher supports two different backup targets:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#local-backup-target"},"Local Target")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#s3-backup-target"},"S3 Target"))),(0,s.kt)("h3",{id:"local-backup-target"},"Local Backup Target"),(0,s.kt)("p",null,"By default, the ",(0,s.kt)("inlineCode",{parentName:"p"},"local")," backup target is selected. The benefits of this option is that there is no external configuration. Snapshots are automatically saved locally to the etcd nodes in the ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes clusters")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),". All recurring snapshots are taken at configured intervals. The downside of using the ",(0,s.kt)("inlineCode",{parentName:"p"},"local")," backup target is that if there is a total disaster and ",(0,s.kt)("em",{parentName:"p"},"all")," etcd nodes are lost, there is no ability to restore the cluster."),(0,s.kt)("h3",{id:"s3-backup-target"},"S3 Backup Target"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"S3")," backup target allows users to configure a S3 compatible backend to store the snapshots. The primary benefit of this option is that if the cluster loses all the etcd nodes, the cluster can still be restored as the snapshots are stored externally. Rancher recommends external targets like ",(0,s.kt)("inlineCode",{parentName:"p"},"S3")," backup, however its configuration requirements do require additional effort that should be considered."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Option"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"S3 Bucket Name"),(0,s.kt)("td",{parentName:"tr",align:null},"S3 bucket name where backups will be stored"),(0,s.kt)("td",{parentName:"tr",align:null},"*")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"S3 Region"),(0,s.kt)("td",{parentName:"tr",align:null},"S3 region for the backup bucket"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"S3 Region Endpoint"),(0,s.kt)("td",{parentName:"tr",align:null},"S3 regions endpoint for the backup bucket"),(0,s.kt)("td",{parentName:"tr",align:null},"*")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"S3 Access Key"),(0,s.kt)("td",{parentName:"tr",align:null},"S3 access key with permission to access the backup bucket"),(0,s.kt)("td",{parentName:"tr",align:null},"*")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"S3 Secret Key"),(0,s.kt)("td",{parentName:"tr",align:null},"S3 secret key with permission to access the backup bucket"),(0,s.kt)("td",{parentName:"tr",align:null},"*")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Custom CA Certificate"),(0,s.kt)("td",{parentName:"tr",align:null},"A custom certificate used to access private S3 backends"),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("h3",{id:"using-a-custom-ca-certificate-for-s3"},"Using a custom CA certificate for S3"),(0,s.kt)("p",null,"The backup snapshot can be stored on a custom ",(0,s.kt)("inlineCode",{parentName:"p"},"S3")," backup like ",(0,s.kt)("a",{parentName:"p",href:"https://min.io/"},"minio"),". If the S3 back end uses a self-signed or custom certificate, provide a custom certificate using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Custom CA Certificate")," option to connect to the S3 backend."),(0,s.kt)("h3",{id:"iam-support-for-storing-snapshots-in-s3"},"IAM Support for Storing Snapshots in S3"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"S3")," backup target supports using IAM authentication to AWS API in addition to using API credentials. An IAM role gives temporary permissions that an application can use when making API calls to S3 storage. To use IAM authentication, the following requirements must be met:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The cluster etcd nodes must have an instance role that has read/write access to the designated backup bucket.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The cluster etcd nodes must have network access to the specified S3 endpoint.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The Rancher Server worker node(s) must have an instance role that has read/write to the designated backup bucket.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The Rancher Server worker node(s) must have network access to the specified S3 endpoint."),(0,s.kt)("p",{parentName:"li"},"To give an application access to S3, refer to the AWS documentation on ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},"Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances.")))),(0,s.kt)("h1",{id:"viewing-available-snapshots"},"Viewing Available Snapshots"),(0,s.kt)("p",null,"The list of all available snapshots for the cluster is available in the Rancher UI."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to view snapshots.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Tools > Snapshots")," from the navigation bar to view the list of saved snapshots. These snapshots include a timestamp of when they were created."))),(0,s.kt)("h1",{id:"safe-timestamps"},"Safe Timestamps"),(0,s.kt)("p",null,"Snapshot files are timestamped to simplify processing the files using external tools and scripts, but in some S3 compatible backends, these timestamps were unusable. "),(0,s.kt)("p",null,"The option ",(0,s.kt)("inlineCode",{parentName:"p"},"safe_timestamp")," is added to support compatible file names. When this flag is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", all special characters in the snapshot filename timestamp are replaced."),(0,s.kt)("p",null,"This option is not available directly in the UI, and is only available through the ",(0,s.kt)("inlineCode",{parentName:"p"},"Edit as Yaml")," interface."),(0,s.kt)("h1",{id:"enabling-snapshot-features-for-clusters-created-before-rancher-v220"},"Enabling Snapshot Features for Clusters Created Before Rancher v2.2.0"),(0,s.kt)("p",null,"If you have any Rancher launched Kubernetes clusters that were created before v2.2.0, after upgrading Rancher, you must ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/cluster-configuration"},"edit the cluster")," and ",(0,s.kt)("em",{parentName:"p"},"save")," it, in order to enable the updated snapshot features. Even if you were already creating snapshots before v2.2.0, you must do this step as the older snapshots will not be available to use to ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"back up and restore etcd through the UI"),"."))}d.isMDXComponent=!0}}]);