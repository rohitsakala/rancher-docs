"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68892],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||l[m]||c;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61033:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=t(87462),a=t(63366),c=(t(67294),t(3905)),o=["components"],i={title:"Examples",weight:5},s=void 0,u={unversionedId:"reference-guides/backup-restore-configuration/examples",id:"reference-guides/backup-restore-configuration/examples",title:"Examples",description:"This section contains examples of Backup and Restore custom resources.",source:"@site/docs/reference-guides/backup-restore-configuration/examples.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/examples",permalink:"/reference-guides/backup-restore-configuration/examples",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/backup-restore-configuration/examples.md",tags:[],version:"current",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Examples",weight:5},sidebar:"tutorialSidebar",previous:{title:"Backup Storage Location Configuration",permalink:"/reference-guides/backup-restore-configuration/storage-configuration"},next:{title:"Configuring OpenLDAP",permalink:"/pages-for-subheaders/configure-openldap"}},p={},l=[{value:"Backup",id:"backup",level:2},{value:"Backup in the Default Location with Encryption",id:"backup-in-the-default-location-with-encryption",level:3},{value:"Recurring Backup in the Default Location",id:"recurring-backup-in-the-default-location",level:3},{value:"Encrypted Recurring Backup in the Default Location",id:"encrypted-recurring-backup-in-the-default-location",level:3},{value:"Encrypted Backup in Minio",id:"encrypted-backup-in-minio",level:3},{value:"Backup in S3 Using AWS Credential Secret",id:"backup-in-s3-using-aws-credential-secret",level:3},{value:"Recurring Backup in S3 Using AWS Credential Secret",id:"recurring-backup-in-s3-using-aws-credential-secret",level:3},{value:"Backup from EC2 Nodes with IAM Permission to Access S3",id:"backup-from-ec2-nodes-with-iam-permission-to-access-s3",level:3},{value:"Restore",id:"restore",level:2},{value:"Restore Using the Default Backup File Location",id:"restore-using-the-default-backup-file-location",level:3},{value:"Restore for Rancher Migration",id:"restore-for-rancher-migration",level:3},{value:"Restore from Encrypted Backup",id:"restore-from-encrypted-backup",level:3},{value:"Restore an Encrypted Backup from Minio",id:"restore-an-encrypted-backup-from-minio",level:3},{value:"Restore from Backup Using an AWS Credential Secret to Access S3",id:"restore-from-backup-using-an-aws-credential-secret-to-access-s3",level:3},{value:"Restore from EC2 Nodes with IAM Permissions to Access S3",id:"restore-from-ec2-nodes-with-iam-permissions-to-access-s3",level:3}],d={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This section contains examples of Backup and Restore custom resources."),(0,c.kt)("p",null,"The default backup storage location is configured when the ",(0,c.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator is installed or upgraded."),(0,c.kt)("p",null,"Encrypted backups can only be restored if the Restore custom resource uses the same encryption configuration secret that was used to create the backup."),(0,c.kt)("h2",{id:"backup"},"Backup"),(0,c.kt)("p",null,"This section contains example Backup custom resources."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note:")," Refer to the ",(0,c.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/backup-configuration"},"backup config reference page")," for more information on configuring the options below.")),(0,c.kt)("h3",{id:"backup-in-the-default-location-with-encryption"},"Backup in the Default Location with Encryption"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: default-location-encrypted-backup\nspec:\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n")),(0,c.kt)("h3",{id:"recurring-backup-in-the-default-location"},"Recurring Backup in the Default Location"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: default-location-recurring-backup\nspec:\n  resourceSetName: rancher-resource-set\n  schedule: "@every 1h"\n  retentionCount: 10\n')),(0,c.kt)("h3",{id:"encrypted-recurring-backup-in-the-default-location"},"Encrypted Recurring Backup in the Default Location"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: default-enc-recurring-backup\nspec:\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n  schedule: "@every 1h"\n  retentionCount: 3\n')),(0,c.kt)("h3",{id:"encrypted-backup-in-minio"},"Encrypted Backup in Minio"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: minio-backup\nspec:\n  storageLocation:\n    s3:\n      credentialSecretName: minio-creds\n      credentialSecretNamespace: default\n      bucketName: rancherbackups\n      endpoint: minio.xip.io\n      endpointCA: <base64-encoded-cert>\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n")),(0,c.kt)("h3",{id:"backup-in-s3-using-aws-credential-secret"},"Backup in S3 Using AWS Credential Secret"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: s3-backup\nspec:\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n")),(0,c.kt)("h3",{id:"recurring-backup-in-s3-using-aws-credential-secret"},"Recurring Backup in S3 Using AWS Credential Secret"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: s3-recurring-backup\nspec:\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n  schedule: "@every 1h"\n  retentionCount: 10\n')),(0,c.kt)("h3",{id:"backup-from-ec2-nodes-with-iam-permission-to-access-s3"},"Backup from EC2 Nodes with IAM Permission to Access S3"),(0,c.kt)("p",null,"This example shows that the AWS credential secret does not have to be provided to create a backup if the nodes running ",(0,c.kt)("inlineCode",{parentName:"p"},"rancher-backup")," have ",(0,c.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/backup-configuration#iam-permissions-for-ec2-nodes-to-access-s3"},"these permissions for access to S3.")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: s3-iam-backup\nspec:\n  storageLocation:\n    s3:\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n")),(0,c.kt)("h2",{id:"restore"},"Restore"),(0,c.kt)("p",null,"This section contains example Restore custom resources."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note:")," Refer to the ",(0,c.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/restore-configuration"},"restore config reference page")," for more information on configuring the options below.")),(0,c.kt)("h3",{id:"restore-using-the-default-backup-file-location"},"Restore Using the Default Backup File Location"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-default\nspec:\n  backupFilename: default-location-recurring-backup-752ecd87-d958-4d20-8350-072f8d090045-2020-09-26T12-29-54-07-00.tar.gz\n#  encryptionConfigSecretName: test-encryptionconfig\n")),(0,c.kt)("h3",{id:"restore-for-rancher-migration"},"Restore for Rancher Migration"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  prune: false\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,c.kt)("h3",{id:"restore-from-encrypted-backup"},"Restore from Encrypted Backup"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-encrypted\nspec:\n  backupFilename: default-test-s3-def-backup-c583d8f2-6daf-4648-8ead-ed826c591471-2020-08-24T20-47-05Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n")),(0,c.kt)("h3",{id:"restore-an-encrypted-backup-from-minio"},"Restore an Encrypted Backup from Minio"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-minio\nspec:\n  backupFilename: default-minio-backup-demo-aa5c04b7-4dba-4c48-9ac4-ab7916812eaa-2020-08-30T13-18-17-07-00.tar.gz\n  storageLocation:\n    s3:\n      credentialSecretName: minio-creds\n      credentialSecretNamespace: default\n      bucketName: rancherbackups\n      endpoint: minio.xip.io\n      endpointCA: <base64-encoded-cert>\n  encryptionConfigSecretName: test-encryptionconfig\n")),(0,c.kt)("h3",{id:"restore-from-backup-using-an-aws-credential-secret-to-access-s3"},"Restore from Backup Using an AWS Credential Secret to Access S3"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-s3-demo\nspec:\n  backupFilename: test-s3-recurring-backup-752ecd87-d958-4d20-8350-072f8d090045-2020-09-26T12-49-34-07-00.tar.gz.enc\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  encryptionConfigSecretName: test-encryptionconfig\n")),(0,c.kt)("h3",{id:"restore-from-ec2-nodes-with-iam-permissions-to-access-s3"},"Restore from EC2 Nodes with IAM Permissions to Access S3"),(0,c.kt)("p",null,"This example shows that the AWS credential secret does not have to be provided to restore from backup if the nodes running ",(0,c.kt)("inlineCode",{parentName:"p"},"rancher-backup")," have ",(0,c.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/backup-configuration#iam-permissions-for-ec2-nodes-to-access-s3"},"these permissions for access to S3.")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-s3-demo\nspec:\n  backupFilename: default-test-s3-recurring-backup-84bf8dd8-0ef3-4240-8ad1-fc7ec308e216-2020-08-24T10#52#44-07#00.tar.gz\n  storageLocation:\n    s3:\n      bucketName: rajashree-backup-test\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  encryptionConfigSecretName: test-encryptionconfig\n")),(0,c.kt)("h1",{id:"example-credential-secret-for-storing-backups-in-s3"},"Example Credential Secret for Storing Backups in S3"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: creds\ntype: Opaque\ndata:\n  accessKey: <Enter your base64-encoded access key>\n  secretKey: <Enter your base64-encoded secret key>\n")),(0,c.kt)("h1",{id:"example-encryptionconfiguration"},"Example EncryptionConfiguration"),(0,c.kt)("p",null,"The snippet below demonstrates two different types of secrets and their relevance with respect to Backup and Restore of custom resources."),(0,c.kt)("p",null,"The first example is that of a secret that is used to encrypt the backup files. The backup operator, in this case, will not be able to read the secrets encryption file. It only uses the contents of the secret. "),(0,c.kt)("p",null,"The second example is that of a Kubernetes secrets encryption config file that is used to encrypt secrets when stored in etcd. ",(0,c.kt)("strong",{parentName:"p"},"When backing up the etcd datastore, be sure to also back up the EncryptionConfiguration.")," Failure to do so will result in an inability to use the restored data if secrets encryption was in use at the time the data was backed up."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apiserver.config.k8s.io/v1\nkind: EncryptionConfiguration\nresources:\n  - resources:\n      - secrets\n    providers:\n      - aesgcm:\n          keys:\n            - name: key1\n              secret: c2VjcmV0IGlzIHNlY3VyZQ==\n            - name: key2\n              secret: dGhpcyBpcyBwYXNzd29yZA==\n      - aescbc:\n          keys:\n            - name: key1\n              secret: c2VjcmV0IGlzIHNlY3VyZQ==\n            - name: key2\n              secret: dGhpcyBpcyBwYXNzd29yZA==\n      - secretbox:\n          keys:\n            - name: key1\n              secret: YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY=\n")))}m.isMDXComponent=!0}}]);