"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55770],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22861:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],u={title:"Setting up the Azure Cloud Provider",weight:2},s=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",title:"Setting up the Azure Cloud Provider",description:"When using the Azure cloud provider, you can leverage the following capabilities:",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Setting up the Azure Cloud Provider",weight:2},sidebar:"tutorialSidebar",previous:{title:"Setting up the Amazon Cloud Provider",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon"},next:{title:"Setting up the Google Compute Engine Cloud Provider",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine"}},p={},c=[{value:"1. Set up the Azure Tenant ID",id:"1-set-up-the-azure-tenant-id",level:3},{value:"2. Set up the Azure Client ID and Azure Client Secret",id:"2-set-up-the-azure-client-id-and-azure-client-secret",level:3},{value:"3. Configure App Registration Permissions",id:"3-configure-app-registration-permissions",level:3},{value:"4. Set up Azure Network Security Group Name",id:"4-set-up-azure-network-security-group-name",level:3}],d={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure")," cloud provider, you can leverage the following capabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Load Balancers:")," Launches an Azure Load Balancer within a specific Network Security Group.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Persistent Volumes:")," Supports using Azure Blob disks and Azure Managed Disks with standard and premium storage accounts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Network Storage:")," Support Azure Files via CIFS mounts."))),(0,a.kt)("p",null,"The following account types are not supported for Azure Subscriptions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single tenant accounts (i.e. accounts with no subscriptions)."),(0,a.kt)("li",{parentName:"ul"},"Multi-subscription accounts.")),(0,a.kt)("p",null,"To set up the Azure cloud provider following credentials need to be configured:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-set-up-the-azure-tenant-id"},"Set up the Azure Tenant ID")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-set-up-the-azure-client-id-and-azure-client-secret"},"Set up the Azure Client ID and Azure Client Secret")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-configure-app-registration-permissions"},"Configure App Registration Permissions")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#4-set-up-azure-network-security-group-name"},"Set up Azure Network Security Group Name"))),(0,a.kt)("h3",{id:"1-set-up-the-azure-tenant-id"},"1. Set up the Azure Tenant ID"),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure portal"),", login and go to ",(0,a.kt)("strong",{parentName:"p"},"Azure Active Directory")," and select ",(0,a.kt)("strong",{parentName:"p"},"Properties"),". Your ",(0,a.kt)("strong",{parentName:"p"},"Directory ID")," is your ",(0,a.kt)("strong",{parentName:"p"},"Tenant ID")," (tenantID)."),(0,a.kt)("p",null,"If you want to use the Azure CLI, you can run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"az account show")," to get the information."),(0,a.kt)("h3",{id:"2-set-up-the-azure-client-id-and-azure-client-secret"},"2. Set up the Azure Client ID and Azure Client Secret"),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure portal"),", login and follow the steps below to create an ",(0,a.kt)("strong",{parentName:"p"},"App Registration")," and the corresponding ",(0,a.kt)("strong",{parentName:"p"},"Azure Client ID")," (aadClientId) and ",(0,a.kt)("strong",{parentName:"p"},"Azure Client Secret")," (aadClientSecret)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"App registrations"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"New application registration"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose a ",(0,a.kt)("strong",{parentName:"li"},"Name"),", select ",(0,a.kt)("inlineCode",{parentName:"li"},"Web app / API")," as ",(0,a.kt)("strong",{parentName:"li"},"Application Type")," and a ",(0,a.kt)("strong",{parentName:"li"},"Sign-on URL")," which can be anything in this case."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"App registrations")," view, you should see your created App registration. The value shown in the column ",(0,a.kt)("strong",{parentName:"p"},"APPLICATION ID")," is what you need to use as ",(0,a.kt)("strong",{parentName:"p"},"Azure Client ID"),"."),(0,a.kt)("p",null,"The next step is to generate the ",(0,a.kt)("strong",{parentName:"p"},"Azure Client Secret"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your created App registration."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Settings")," view, open ",(0,a.kt)("strong",{parentName:"li"},"Keys"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Key description"),", select an expiration time and select ",(0,a.kt)("strong",{parentName:"li"},"Save"),"."),(0,a.kt)("li",{parentName:"ol"},"The generated value shown in the column ",(0,a.kt)("strong",{parentName:"li"},"Value")," is what you need to use as ",(0,a.kt)("strong",{parentName:"li"},"Azure Client Secret"),". This value will only be shown once.")),(0,a.kt)("h3",{id:"3-configure-app-registration-permissions"},"3. Configure App Registration Permissions"),(0,a.kt)("p",null,"The last thing you will need to do, is assign the appropriate permissions to your App registration."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"More services"),", search for ",(0,a.kt)("strong",{parentName:"li"},"Subscriptions")," and open it."),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Access control (IAM)"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add"),"."),(0,a.kt)("li",{parentName:"ol"},"For ",(0,a.kt)("strong",{parentName:"li"},"Role"),", select ",(0,a.kt)("inlineCode",{parentName:"li"},"Contributor"),"."),(0,a.kt)("li",{parentName:"ol"},"For ",(0,a.kt)("strong",{parentName:"li"},"Select"),", select your created App registration name."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("h3",{id:"4-set-up-azure-network-security-group-name"},"4. Set up Azure Network Security Group Name"),(0,a.kt)("p",null,"A custom Azure Network Security Group (securityGroupName) is needed to allow Azure Load Balancers to work."),(0,a.kt)("p",null,"If you provision hosts using Rancher Machine Azure driver, you will need to edit them manually to assign them to this Network Security Group."),(0,a.kt)("p",null,"You should already assign custom hosts to this Network Security Group during provisioning."),(0,a.kt)("p",null,"Only hosts expected to be load balancer back ends need to be in this group."))}h.isMDXComponent=!0}}]);