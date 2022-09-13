"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89244],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(m,c(c({ref:t},h),{},{components:n})):a.createElement(m,c({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),c=["components"],s={title:"Updating the Rancher Certificate",weight:10},o="Updating a Private CA Certificate",l={unversionedId:"getting-started/installation-and-upgrade/resources/update-rancher-certificate",id:"getting-started/installation-and-upgrade/resources/update-rancher-certificate",title:"Updating the Rancher Certificate",description:"Follow these steps to update the SSL certificate of the ingress in a Rancher high availability Kubernetes installation or to switch from the default self-signed certificate to a custom certificate.",source:"@site/docs/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate",permalink:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",tags:[],version:"current",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Updating the Rancher Certificate",weight:10},sidebar:"tutorialSidebar",previous:{title:"Upgrading Cert-Manager",permalink:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},next:{title:"Bootstrap Password",permalink:"/getting-started/installation-and-upgrade/resources/bootstrap-password"}},h={},p=[{value:"1. Create/update the certificate secret resource",id:"1-createupdate-the-certificate-secret-resource",level:2},{value:"2. Create/update the CA certificate secret resource",id:"2-createupdate-the-ca-certificate-secret-resource",level:2},{value:"3. Reconfigure the Rancher deployment",id:"3-reconfigure-the-rancher-deployment",level:2},{value:"4. Reconfigure Rancher agents to trust the private CA",id:"4-reconfigure-rancher-agents-to-trust-the-private-ca",level:2},{value:"Why is this step required?",id:"why-is-this-step-required",level:3},{value:"Which method should I choose?",id:"which-method-should-i-choose",level:3},{value:"Method 1: Kubectl command",id:"method-1-kubectl-command",level:3},{value:"Method 2: Manually update checksum",id:"method-2-manually-update-checksum",level:3},{value:"Method 3: Recreate Rancher agents",id:"method-3-recreate-rancher-agents",level:3},{value:"5. Select Force Update of Fleet clusters to connect fleet-agent to Rancher",id:"5-select-force-update-of-fleet-clusters-to-connect-fleet-agent-to-rancher",level:2},{value:"Why is this step required?",id:"why-is-this-step-required-1",level:3},{value:"1. Create/update the certificate secret resource",id:"1-createupdate-the-certificate-secret-resource-1",level:2},{value:"2. Delete the CA certificate secret resource",id:"2-delete-the-ca-certificate-secret-resource",level:2},{value:"3. Reconfigure the Rancher deployment",id:"3-reconfigure-the-rancher-deployment-1",level:2},{value:"4. Reconfigure Rancher agents for the non-private/common certificate",id:"4-reconfigure-rancher-agents-for-the-non-privatecommon-certificate",level:2},{value:"5. Select Force Update of Fleet clusters to connect fleet-agent to Rancher",id:"5-select-force-update-of-fleet-clusters-to-connect-fleet-agent-to-rancher-1",level:2},{value:"Why is this step required?",id:"why-is-this-step-required-2",level:3}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-a-private-ca-certificate"},"Updating a Private CA Certificate"),(0,i.kt)("p",null,"Follow these steps to update the SSL certificate of the ingress in a Rancher ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"high availability Kubernetes installation")," or to switch from the default self-signed certificate to a custom certificate."),(0,i.kt)("p",null,"A summary of the steps is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create or update the ",(0,i.kt)("inlineCode",{parentName:"li"},"tls-rancher-ingress")," Kubernetes secret resource with the new certificate and private key."),(0,i.kt)("li",{parentName:"ol"},"Create or update the ",(0,i.kt)("inlineCode",{parentName:"li"},"tls-ca")," Kubernetes secret resource with the root CA certificate (only required when using a private CA)."),(0,i.kt)("li",{parentName:"ol"},"Update the Rancher installation using the Helm CLI."),(0,i.kt)("li",{parentName:"ol"},"Reconfigure the Rancher agents to trust the new CA certificate."),(0,i.kt)("li",{parentName:"ol"},"Select Force Update of Fleet clusters to connect fleet-agent to Rancher.")),(0,i.kt)("p",null,"The details of these instructions are below."),(0,i.kt)("h2",{id:"1-createupdate-the-certificate-secret-resource"},"1. Create/update the certificate secret resource"),(0,i.kt)("p",null,"First, concatenate the server certificate followed by any intermediate certificate(s) to a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt")," and provide the corresponding certificate key in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"If you are switching the install from using the Rancher self-signed certificate or Let\u2019s Encrypt issued certificates, use the following command to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret resource in your Rancher HA cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,i.kt)("p",null,"Alternatively, to update an existing certificate secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,i.kt)("h2",{id:"2-createupdate-the-ca-certificate-secret-resource"},"2. Create/update the CA certificate secret resource"),(0,i.kt)("p",null,"If the new certificate was signed by a private CA, you will need to copy the corresponding root CA certificate into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," and create or update the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace. If the certificate was signed by an intermediate CA, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," must contain both the intermediate and root CA certificates (in this order)."),(0,i.kt)("p",null,"To create the initial secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem\n")),(0,i.kt)("p",null,"To update an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,i.kt)("h2",{id:"3-reconfigure-the-rancher-deployment"},"3. Reconfigure the Rancher deployment"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before proceeding, generate an API token in the Rancher UI (",(0,i.kt)("b",null,"User > API & Keys"),") and save the Bearer Token which you might need in step 4."))),(0,i.kt)("p",null,"This step is required if Rancher was initially installed with self-signed certificates (",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),")."),(0,i.kt)("p",null,"It ensures that the Rancher pods and ingress resources are reconfigured to use the new server and optional CA certificate."),(0,i.kt)("p",null,"To update the Helm deployment you will need to use the same (",(0,i.kt)("inlineCode",{parentName:"p"},"--set"),") options that were used during initial installation. Check with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm get values rancher -n cattle-system\n")),(0,i.kt)("p",null,"Also get the version string of the currently deployed Rancher chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm ls -A\n")),(0,i.kt)("p",null,"Upgrade the Helm application instance using the original configuration values and making sure to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=secret")," as well as the current chart version to prevent an application upgrade.    "),(0,i.kt)("p",null,"If the certificate was signed by a private CA, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"set privateCA=true")," argument as well. Also make sure to read the documentation describing the initial installation using custom certificates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --version <DEPLOYED_CHART_VERSION> \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret \\\n  --set ...\n")),(0,i.kt)("p",null,"When the upgrade is completed, navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher_SERVER>/v3/settings/cacerts")," to verify that the value matches the CA certificate written in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret earlier."),(0,i.kt)("h2",{id:"4-reconfigure-rancher-agents-to-trust-the-private-ca"},"4. Reconfigure Rancher agents to trust the private CA"),(0,i.kt)("p",null,"This section covers three methods to reconfigure Rancher agents to trust the private CA. This step is required if either of the following is true:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rancher was initially configured to use the Rancher self-signed certificate (",(0,i.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,i.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=letsEncrypt"),")"),(0,i.kt)("li",{parentName:"ul"},"The root CA certificate for the new custom certificate has changed")),(0,i.kt)("h3",{id:"why-is-this-step-required"},"Why is this step required?"),(0,i.kt)("p",null,"When Rancher is configured with a certificate signed by a private CA, the CA certificate chain is downloaded into Rancher agent containers. Agents compare the checksum of the downloaded certificate against the ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," environment variable. This means that, when the private CA certificate is changed on Rancher server side, the environvment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," must be updated accordingly."),(0,i.kt)("h3",{id:"which-method-should-i-choose"},"Which method should I choose?"),(0,i.kt)("p",null,"Method 1 is the easiest one but requires all clusters to be connected to Rancher after the certificates have been rotated. This is usually the case if the process is performed right after updating the Rancher deployment (Step 3)."),(0,i.kt)("p",null,"If the clusters have lost connection to Rancher but you have ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cluster-access/ace/"},"Authorized Cluster Endpoints")," enabled, then go with method 2."),(0,i.kt)("p",null,"Method 3 can be used as a fallback if method 1 and 2 are unfeasible."),(0,i.kt)("h3",{id:"method-1-kubectl-command"},"Method 1: Kubectl command"),(0,i.kt)("p",null,"For each cluster under Rancher management (except the ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," Rancher management cluster) run the following command using the Kubeconfig file of the Rancher management cluster (RKE or K3S)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl patch clusters.management.cattle.io <REPLACE_WITH_CLUSTERID> -p \'{"status":{"agentImage":"dummy"}}\' --type merge\n')),(0,i.kt)("p",null,"This command will cause all Agent Kubernetes resources to be reconfigured with the checksum of the new certificate."),(0,i.kt)("h3",{id:"method-2-manually-update-checksum"},"Method 2: Manually update checksum"),(0,i.kt)("p",null,"Manually patch the agent Kubernetes resources by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," environment variable to the value matching the checksum of the new CA certificate. Generate the new checksum value like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl -k -s -fL <RANCHER_SERVER>/v3/settings/cacerts | jq -r .value > cacert.tmp\n$ sha256sum cacert.tmp | awk '{print $1}'\n")),(0,i.kt)("p",null,"Using a Kubeconfig for each downstream cluster update the environment variable for the two agent deployments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl edit -n cattle-system ds/cattle-node-agent\n$ kubectl edit -n cattle-system deployment/cattle-cluster-agent\n")),(0,i.kt)("h3",{id:"method-3-recreate-rancher-agents"},"Method 3: Recreate Rancher agents"),(0,i.kt)("p",null,"With this method you are recreating the Rancher agents by running a set of commands on a controlplane node of each downstream cluster."),(0,i.kt)("p",null,"First, generate the agent definitions as described here: ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/superseb/076f20146e012f1d4e289f5bd1bd4971"},"https://gist.github.com/superseb/076f20146e012f1d4e289f5bd1bd4971")),(0,i.kt)("p",null,"Then, connect to a controlplane node of the downstream cluster via SSH, create a Kubeconfig and apply the definitions:\n",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/superseb/b14ed3b5535f621ad3d2aa6a4cd6443b"},"https://gist.github.com/superseb/b14ed3b5535f621ad3d2aa6a4cd6443b")),(0,i.kt)("h2",{id:"5-select-force-update-of-fleet-clusters-to-connect-fleet-agent-to-rancher"},"5. Select Force Update of Fleet clusters to connect fleet-agent to Rancher"),(0,i.kt)("p",null,"Select 'Force Update' for the clusters within the ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#accessing-fleet-in-the-rancher-ui"},"Continuous Delivery")," view of the Rancher UI to allow the fleet-agent in downstream clusters to successfully connect to Rancher."),(0,i.kt)("h3",{id:"why-is-this-step-required-1"},"Why is this step required?"),(0,i.kt)("p",null,"Fleet agents in Rancher managed clusters store kubeconfig that is used to connect to the Rancher proxied kube-api in the fleet-agent secret of the fleet-system namespace. The kubeconfig contains a certificate-authority-data block containing the Rancher CA. When changing the Rancher CA, this block needs to be updated for a successful connection of the fleet-agent to Rancher."),(0,i.kt)("h1",{id:"updating-from-a-private-ca-certificate-to-a-common-certificate"},"Updating from a Private CA Certificate to a Common Certificate"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is possible to perform the opposite procedure as shown above: you may change from a private certificate to a common, or non-private, certificate. The steps involved are outlined below."))),(0,i.kt)("h2",{id:"1-createupdate-the-certificate-secret-resource-1"},"1. Create/update the certificate secret resource"),(0,i.kt)("p",null,"First, concatenate the server certificate followed by any intermediate certificate(s) to a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt")," and provide the corresponding certificate key in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"If you are switching the install from using the Rancher self-signed certificate or Let\u2019s Encrypt issued certificates, use the following command to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret resource in your Rancher HA cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,i.kt)("p",null,"Alternatively, to update an existing certificate secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,i.kt)("h2",{id:"2-delete-the-ca-certificate-secret-resource"},"2. Delete the CA certificate secret resource"),(0,i.kt)("p",null,"You will delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace as it is no longer needed. You may also optionally save a copy of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," if desired."),(0,i.kt)("p",null,"To save the existing secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get secret tls-ca -o yaml > tls-ca.yaml\n")),(0,i.kt)("p",null,"To delete the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system delete secret tls-ca\n")),(0,i.kt)("h2",{id:"3-reconfigure-the-rancher-deployment-1"},"3. Reconfigure the Rancher deployment"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before proceeding, ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/api-keys#creating-an-api-key"},"generate an API token in the Rancher UI")," (",(0,i.kt)("b",null,"User > API & Keys"),")."))),(0,i.kt)("p",null,"This step is required if Rancher was initially installed with self-signed certificates (",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),")."),(0,i.kt)("p",null,"It ensures that the Rancher pods and ingress resources are reconfigured to use the new server and optional CA certificate."),(0,i.kt)("p",null,"To update the Helm deployment you will need to use the same (",(0,i.kt)("inlineCode",{parentName:"p"},"--set"),") options that were used during initial installation. Check with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm get values rancher -n cattle-system\n")),(0,i.kt)("p",null,"Also get the version string of the currently deployed Rancher chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm ls -A\n")),(0,i.kt)("p",null,"Upgrade the Helm application instance using the original configuration values and making sure to specify the current chart version to prevent an application upgrade.    "),(0,i.kt)("p",null,"Also make sure to read the documentation describing the initial installation using custom certificates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --version <DEPLOYED_CHART_VERSION> \\\n  --set hostname=rancher.my.org \\\n  --set ...\n")),(0,i.kt)("p",null,"On upgrade, you can either "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"remove ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret \\")," from the Helm upgrade command, as shown above, or ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"privateCA")," parameter or set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," because the CA is valid:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set privateCA=false\n")),(0,i.kt)("h2",{id:"4-reconfigure-rancher-agents-for-the-non-privatecommon-certificate"},"4. Reconfigure Rancher agents for the non-private/common certificate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM"),' environment variable on the downstream cluster agents should be removed or set to "" (an empty string).'),(0,i.kt)("h2",{id:"5-select-force-update-of-fleet-clusters-to-connect-fleet-agent-to-rancher-1"},"5. Select Force Update of Fleet clusters to connect fleet-agent to Rancher"),(0,i.kt)("p",null,"Select 'Force Update' for the clusters within the ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#accessing-fleet-in-the-rancher-ui"},"Continuous Delivery")," view of the Rancher UI to allow the fleet-agent in downstream clusters to successfully connect to Rancher."),(0,i.kt)("h3",{id:"why-is-this-step-required-2"},"Why is this step required?"),(0,i.kt)("p",null,"Fleet agents in Rancher managed clusters store kubeconfig that is used to connect to the Rancher proxied kube-api in the fleet-agent secret of the fleet-system namespace. The kubeconfig contains a certificate-authority-data block containing the Rancher CA. When changing the Rancher CA, this block needs to be updated for a successful connection of the fleet-agent to Rancher."))}d.isMDXComponent=!0}}]);