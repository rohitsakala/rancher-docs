"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Rancher Helm Chart Options"},l=void 0,o={unversionedId:"getting-started/installation-and-upgrade/installation-references/helm-chart-options",id:"version-2.6/getting-started/installation-and-upgrade/installation-references/helm-chart-options",title:"Rancher Helm Chart Options",description:"This page is a configuration reference for the Rancher Helm chart.",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/installation-references/helm-chart-options.md",sourceDirName:"getting-started/installation-and-upgrade/installation-references",slug:"/getting-started/installation-and-upgrade/installation-references/helm-chart-options",permalink:"/v2.6/getting-started/installation-and-upgrade/installation-references/helm-chart-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/installation-references/helm-chart-options.md",tags:[],version:"2.6",lastUpdatedAt:1683051846,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Rancher Helm Chart Options"},sidebar:"tutorialSidebar",previous:{title:"Installation References",permalink:"/v2.6/pages-for-subheaders/installation-references"},next:{title:"TLS Settings",permalink:"/v2.6/getting-started/installation-and-upgrade/installation-references/tls-settings"}},s={},d=[{value:"Common Options",id:"common-options",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Bootstrap Password",id:"bootstrap-password",level:3},{value:"API Audit Log",id:"api-audit-log",level:3},{value:"Setting Extra Environment Variables",id:"setting-extra-environment-variables",level:3},{value:"TLS Settings",id:"tls-settings",level:3},{value:"Import <code>local</code> Cluster",id:"import-local-cluster",level:3},{value:"Customizing your Ingress",id:"customizing-your-ingress",level:3},{value:"HTTP Proxy",id:"http-proxy",level:3},{value:"Additional Trusted CAs",id:"additional-trusted-cas",level:3},{value:"Private Registry and Air Gap Installs",id:"private-registry-and-air-gap-installs",level:3},{value:"External TLS Termination",id:"external-tls-termination",level:2},{value:"Configuring Ingress for External TLS when Using NGINX v0.25",id:"configuring-ingress-for-external-tls-when-using-nginx-v025",level:3},{value:"Required Headers",id:"required-headers",level:3},{value:"Recommended Timeouts",id:"recommended-timeouts",level:3},{value:"Health Checks",id:"health-checks",level:3},{value:"Example NGINX config",id:"example-nginx-config",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page is a configuration reference for the Rancher Helm chart."),(0,r.kt)("p",null,"For help choosing a Helm chart version, refer to ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"this page.")),(0,r.kt)("p",null,"For information on enabling experimental features, refer to ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/enable-experimental-features"},"this page.")),(0,r.kt)("h2",{id:"common-options"},"Common Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bootstrapPassword")),(0,r.kt)("td",{parentName:"tr",align:null},'" "'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - Set the ",(0,r.kt)("a",{parentName:"td",href:"#bootstrap-password"},"bootstrap password")," for the first admin user. After logging in, the admin will need to reset their password. A randomly generated bootstrap password is used if this value is not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hostname")),(0,r.kt)("td",{parentName:"tr",align:null},'" "'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - the Fully Qualified Domain Name for your Rancher Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.tls.source")),(0,r.kt)("td",{parentName:"tr",align:null},'"rancher"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),' - Where to get the cert for the ingress. - "rancher, letsEncrypt, secret"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"letsEncrypt.email")),(0,r.kt)("td",{parentName:"tr",align:null},'" "'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - Your email address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"letsEncrypt.environment")),(0,r.kt)("td",{parentName:"tr",align:null},'"production"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),' - Valid options: "staging, production"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"privateCA")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")," - Set to true if your cert is signed by a private CA")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"additionalTrustedCAs")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")," - See ",(0,r.kt)("a",{parentName:"td",href:"#additional-trusted-cas"},"Additional Trusted CAs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addLocal")),(0,r.kt)("td",{parentName:"tr",align:null},'"true"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),' - Have Rancher detect and import the "local" Rancher server cluster.  ',(0,r.kt)("em",{parentName:"td"},"Note: This option is no longer available in v2.5.0. Consider using the ",(0,r.kt)("inlineCode",{parentName:"em"},"restrictedAdmin")," option to prevent users from modifying the local cluster."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"antiAffinity")),(0,r.kt)("td",{parentName:"tr",align:null},'"preferred"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),' - AntiAffinity rule for Rancher pods - "preferred, required"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.destination")),(0,r.kt)("td",{parentName:"tr",align:null},'"sidecar"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),' - Stream to sidecar container console or hostPath volume - "sidecar, hostPath"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.hostPath")),(0,r.kt)("td",{parentName:"tr",align:null},'"/var/log/rancher/audit"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - log file destination on host (only applies when ",(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.destination")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"hostPath"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.level")),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")," - set the ",(0,r.kt)("a",{parentName:"td",href:"/v2.6/how-to-guides/advanced-user-guides/enable-api-audit-log"},"API Audit Log")," level. 0 is off. ","[0-3]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.maxAge")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")," - maximum number of days to retain old audit log files (only applies when ",(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.destination")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"hostPath"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.maxBackup")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")," - maximum number of audit log files to retain (only applies when ",(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.destination")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"hostPath"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.maxSize")),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")," - maximum size in megabytes of the audit log file before it gets rotated (only applies when ",(0,r.kt)("inlineCode",{parentName:"td"},"auditLog.destination")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"hostPath"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"busyboxImage")),(0,r.kt)("td",{parentName:"tr",align:null},'"busybox"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - Image location for busybox image used to collect audit logs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"certmanager.version")),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - set cert-manager compatibility")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debug")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")," - set debug flag on rancher server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraEnv")),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list")," - set additional environment variables for Rancher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imagePullSecrets")),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list")," - list of names of Secret resource containing private registry credentials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.configurationSnippet")),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - Add additional Nginx configuration. Can be used for proxy configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.extraAnnotations")),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map")," - additional annotations to customize the ingress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to false, Helm will not install a Rancher ingress. Set the option to false to deploy your own ingress.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"letsEncrypt.ingress.class")),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - optional ingress class for the cert-manager acmesolver ingress that responds to the Let's Encrypt ACME challenges. Options: traefik, nginx.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"noProxy")),(0,r.kt)("td",{parentName:"tr",align:null},'"127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local,cattle-system.svc"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - comma separated list of hostnames or ip address not to use the proxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxy")),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - HTTP","[S]"," proxy server for Rancher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rancherImage")),(0,r.kt)("td",{parentName:"tr",align:null},'"rancher/rancher"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - rancher image source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rancherImagePullPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},'"IfNotPresent"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),' - Override imagePullPolicy for rancher server images - "Always", "Never", "IfNotPresent"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rancherImageTag")),(0,r.kt)("td",{parentName:"tr",align:null},"same as chart version"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - rancher/rancher image tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replicas")),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")," - Number of Rancher server replicas. Setting to -1 will dynamically choose 1, 2, or 3 based on the number of available nodes in the cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map")," - rancher pod resource requests & limits")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"restrictedAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")," - When this option is set to true, the initial Rancher user has restricted access to the local Kubernetes cluster to prevent privilege escalation. For more information, see the section about the ",(0,r.kt)("a",{parentName:"td",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#restricted-admin"},"restricted-admin role."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"systemDefaultRegistry")),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - private registry to be used for all system container images, e.g., ",(0,r.kt)("a",{parentName:"td",href:"http://registry.example.com/"},"http://registry.example.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tls")),(0,r.kt)("td",{parentName:"tr",align:null},'"ingress"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," - See ",(0,r.kt)("a",{parentName:"td",href:"#external-tls-termination"},"External TLS Termination"),' for details. - "ingress, external"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useBundledSystemChart")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")," - select to use the system-charts packaged with Rancher server. This option is used for air gapped installations.")))),(0,r.kt)("h3",{id:"bootstrap-password"},"Bootstrap Password"),(0,r.kt)("p",null,"When Rancher starts for the first time, a password is randomly generated for the first admin user. When the admin first logs in to Rancher, the UI shows commands that can be used to retrieve the bootstrap password. The admin needs to run those commands and log in with the bootstrap password. Then Rancher gives the admin an opportunity to reset the password."),(0,r.kt)("p",null,"If you want to use a specific bootstrap password instead of a randomly generated one, provide the password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--set bootstrapPassword="rancher"\n')),(0,r.kt)("p",null,"The password, whether provided or generated, will be stored in a Kubernetes secret. After Rancher is installed, the UI will show instructions for how to retrieve the password using kubectl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{ .data.bootstrapPassword|base64decode}}{{ \"\\n\" }}'\n")),(0,r.kt)("h3",{id:"api-audit-log"},"API Audit Log"),(0,r.kt)("p",null,"Enabling the ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/enable-api-audit-log"},"API Audit Log"),"."),(0,r.kt)("p",null,"You can collect this log as you would any container log. Enable ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/logging"},"logging")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," Project on the Rancher server cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--set auditLog.level=1\n")),(0,r.kt)("p",null,"By default enabling Audit Logging will create a sidecar container in the Rancher pod. This container (",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-audit-log"),") will stream the log to ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout"),". You can collect this log as you would any container log. When using the sidecar as the audit log destination, the ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxAge"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxBackups"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize")," options do not apply. It's advised to use your OS or Docker daemon's log rotation features to control disk space use. Enable ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/logging"},"logging")," for the Rancher server cluster or System Project."),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLog.destination")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPath")," to forward logs to volume shared with the host system instead of streaming to a sidecar container. When setting the destination to ",(0,r.kt)("inlineCode",{parentName:"p"},"hostPath")," you may want to adjust the other auditLog parameters for log rotation."),(0,r.kt)("h3",{id:"setting-extra-environment-variables"},"Setting Extra Environment Variables"),(0,r.kt)("p",null,"You can set extra environment variables for Rancher server using ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv"),". This list is passed to the Rancher deployment in its YAML format. It is embedded under ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," for the Rancher container. Refer to the Kubernetes documentation for setting container environment variables, ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," can use any of the keys referenced in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/#define-an-environment-variable-for-a-container"},"Define Environment Variables for a Container"),"."),(0,r.kt)("p",null,"Consider an example that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--set 'extraEnv[0].name=CATTLE_TLS_MIN_VERSION'\n--set 'extraEnv[0].value=1.0'\n")),(0,r.kt)("p",null,"If passing sensitive data as the value for an environment variable, such as proxy authentication credentials, it is strongly recommended that a secret reference is used. This will prevent sensitive data from being exposed in Helm or the Rancher deployment."),(0,r.kt)("p",null,"Consider an example that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"valueFrom.secretKeyRef.name"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"valueFrom.secretKeyRef.key")," keys. See example in ",(0,r.kt)("a",{parentName:"p",href:"#http-proxy"},"HTTP Proxy")),(0,r.kt)("h3",{id:"tls-settings"},"TLS Settings"),(0,r.kt)("p",null,"When you install Rancher inside of a Kubernetes cluster, TLS is offloaded at the cluster's ingress controller. The possible TLS settings depend on the used ingress controller."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/installation-references/tls-settings"},"TLS settings")," for more information and options."),(0,r.kt)("h3",{id:"import-local-cluster"},"Import ",(0,r.kt)("inlineCode",{parentName:"h3"},"local")," Cluster"),(0,r.kt)("p",null,"By default Rancher server will detect and import the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," cluster it's running on. User with access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),' cluster will essentially have "root" access to all the clusters managed by Rancher server.'),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you turn addLocal off, most Rancher v2.5 features won't work, including the EKS provisioner.")),(0,r.kt)("p",null,'If this is a concern in your environment you can set this option to "false" on your initial install.'),(0,r.kt)("p",null,"This option is only effective on the initial Rancher install. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/16522"},"Issue 16522")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--set addLocal="false"\n')),(0,r.kt)("h3",{id:"customizing-your-ingress"},"Customizing your Ingress"),(0,r.kt)("p",null,"To customize or use a different ingress with Rancher server you can set your own Ingress annotations."),(0,r.kt)("p",null,"Example on setting a custom certificate issuer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--set ingress.extraAnnotations.'cert-manager\\.io/cluster-issuer'=issuer-name\n")),(0,r.kt)("p",null,"Example on setting a static proxy header with ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.configurationSnippet"),". This value is parsed like a template so variables can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--set ingress.configurationSnippet='more_set_input_headers X-Forwarded-Host {{ .Values.hostname }};'\n")),(0,r.kt)("h3",{id:"http-proxy"},"HTTP Proxy"),(0,r.kt)("p",null,"Rancher requires internet access for some functionality (Helm charts). Use ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," to set your proxy server or use ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," environment variable to point to your proxy server."),(0,r.kt)("p",null,"Add your IP exceptions to the ",(0,r.kt)("inlineCode",{parentName:"p"},"noProxy")," chart value as a comma separated list. Make sure you add the following values: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pod cluster IP range (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.42.0.0/16"),")."),(0,r.kt)("li",{parentName:"ul"},"Service cluster IP range (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10.43.0.0/16"),")."),(0,r.kt)("li",{parentName:"ul"},"Internal cluster domains (default: ",(0,r.kt)("inlineCode",{parentName:"li"},".svc,.cluster.local"),")."),(0,r.kt)("li",{parentName:"ul"},"Any worker cluster ",(0,r.kt)("inlineCode",{parentName:"li"},"controlplane")," nodes.\nRancher supports CIDR notation ranges in this list.")),(0,r.kt)("p",null,"When not including sensitive data, the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," chart options can be used. When using ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"noProxy")," Helm option is ignored. Therefore, the ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variable must also be set with ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv"),"."),(0,r.kt)("p",null,"The following is an example of setting proxy using the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," chart option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--set proxy="http://<proxy_url:proxy_port>/"\n')),(0,r.kt)("p",null,"Example of setting proxy using the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," chart option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--set extraEnv[1].name=HTTPS_PROXY\n--set extraEnv[1].value="http://<proxy_url>:<proxy_port>/"\n--set extraEnv[2].name=NO_PROXY\n--set extraEnv[2].value="127.0.0.0/8\\,10.0.0.0/8\\,172.16.0.0/12\\,192.168.0.0/16\\,.svc\\,.cluster.local"\n')),(0,r.kt)("p",null,"When including sensitive data, such as proxy authentication credentials, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," option with ",(0,r.kt)("inlineCode",{parentName:"p"},"valueFrom.secretRef")," to prevent sensitive data from being exposed in Helm or the Rancher deployment."),(0,r.kt)("p",null,"The following is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnv")," to configure proxy. This example secret would contain the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"http://<username>:<password>@<proxy_url>:<proxy_port>/"')," in the secret's",(0,r.kt)("inlineCode",{parentName:"p"},'"https-proxy-url"')," key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'--set extraEnv[1].name=HTTPS_PROXY\n--set extraEnv[1].valueFrom.secretKeyRef.name=secret-name\n--set extraEnv[1].valueFrom.secretKeyRef.key=https-proxy-url\n--set extraEnv[2].name=NO_PROXY\n--set extraEnv[2].value="127.0.0.0/8\\,10.0.0.0/8\\,172.16.0.0/12\\,192.168.0.0/16\\,.svc\\,.cluster.local"\n')),(0,r.kt)("p",null,"To learn more about how to configure environment variables, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/#define-an-environment-variable-for-a-container"},"Define Environment Variables for a Container"),"."),(0,r.kt)("h3",{id:"additional-trusted-cas"},"Additional Trusted CAs"),(0,r.kt)("p",null,"If you have private registries, catalogs or a proxy that intercepts certificates, you may need to add additional trusted CAs to Rancher."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"--set additionalTrustedCAs=true\n")),(0,r.kt)("p",null,"Once the Rancher deployment is created, copy your CA certs in pem format into a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"ca-additional.pem")," and use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca-additional")," secret in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cattle-system create secret generic tls-ca-additional --from-file=ca-additional.pem=./ca-additional.pem\n")),(0,r.kt)("h3",{id:"private-registry-and-air-gap-installs"},"Private Registry and Air Gap Installs"),(0,r.kt)("p",null,"For details on installing Rancher with a private registry, see the ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/air-gapped-helm-cli-install"},"air gap installation docs.")),(0,r.kt)("h2",{id:"external-tls-termination"},"External TLS Termination"),(0,r.kt)("p",null,"We recommend configuring your load balancer as a Layer 4 balancer, forwarding plain 80/tcp and 443/tcp to the Rancher Management cluster nodes. The Ingress Controller on the cluster will redirect http traffic on port 80 to https on port 443."),(0,r.kt)("p",null,"You may terminate the SSL/TLS on a L7 load balancer external to the Rancher cluster (ingress). Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set tls=external")," option and point your load balancer at port http 80 on all of the Rancher cluster nodes. This will expose the Rancher interface on http port 80. Be aware that clients that are allowed to connect directly to the Rancher cluster will not be encrypted. If you choose to do this we recommend that you restrict direct access at the network level to just your load balancer."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are using a Private CA signed certificate, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," and see ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS Secrets - Using a Private CA Signed Certificate")," to add the CA cert for Rancher.")),(0,r.kt)("p",null,"Your load balancer must support long lived websocket connections and will need to insert proxy headers so Rancher can route links correctly."),(0,r.kt)("h3",{id:"configuring-ingress-for-external-tls-when-using-nginx-v025"},"Configuring Ingress for External TLS when Using NGINX v0.25"),(0,r.kt)("p",null,"In NGINX v0.25, the behavior of NGINX has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx/blob/master/Changelog.md#0220"},"changed")," regarding forwarding headers and external TLS termination. Therefore, in the scenario that you are using external TLS termination configuration with NGINX v0.25, you must edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"use-forwarded-headers")," option for ingress:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ingress:\n  provider: nginx\n  options:\n    use-forwarded-headers: 'true'\n")),(0,r.kt)("h3",{id:"required-headers"},"Required Headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Proto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Forwarded-For"))),(0,r.kt)("h3",{id:"recommended-timeouts"},"Recommended Timeouts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read Timeout: ",(0,r.kt)("inlineCode",{parentName:"li"},"1800 seconds")),(0,r.kt)("li",{parentName:"ul"},"Write Timeout: ",(0,r.kt)("inlineCode",{parentName:"li"},"1800 seconds")),(0,r.kt)("li",{parentName:"ul"},"Connect Timeout: ",(0,r.kt)("inlineCode",{parentName:"li"},"30 seconds"))),(0,r.kt)("h3",{id:"health-checks"},"Health Checks"),(0,r.kt)("p",null,"Rancher will respond ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," to health checks on the ",(0,r.kt)("inlineCode",{parentName:"p"},"/healthz")," endpoint."),(0,r.kt)("h3",{id:"example-nginx-config"},"Example NGINX config"),(0,r.kt)("p",null,"This NGINX configuration is tested on NGINX 1.14."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This NGINX configuration is only an example and may not suit your environment. For complete documentation, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/"},"NGINX Load Balancing - HTTP Load Balancing"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"IP_NODE1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"IP_NODE2")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"IP_NODE3")," with the IP addresses of the nodes in your cluster."),(0,r.kt)("li",{parentName:"ul"},"Replace both occurrences of ",(0,r.kt)("inlineCode",{parentName:"li"},"FQDN")," to the DNS name for Rancher."),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"/certs/fullchain.pem")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/certs/privkey.pem")," to the location of the server certificate and the server certificate key respectively.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"worker_processes 4;\nworker_rlimit_nofile 40000;\n\nevents {\n    worker_connections 8192;\n}\n\nhttp {\n    upstream rancher {\n        server IP_NODE_1:80;\n        server IP_NODE_2:80;\n        server IP_NODE_3:80;\n    }\n\n    map $http_upgrade $connection_upgrade {\n        default Upgrade;\n        ''      close;\n    }\n\n    server {\n        listen 443 ssl http2;\n        server_name FQDN;\n        ssl_certificate /certs/fullchain.pem;\n        ssl_certificate_key /certs/privkey.pem;\n\n        location / {\n            proxy_set_header Host $host;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_set_header X-Forwarded-Port $server_port;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass http://rancher;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection $connection_upgrade;\n            # This allows the ability for the execute shell window to remain open for up to 15 minutes. Without this parameter, the default is 1 minute and will automatically close.\n            proxy_read_timeout 900s;\n            proxy_buffering off;\n        }\n    }\n\n    server {\n        listen 80;\n        server_name FQDN;\n        return 301 https://$server_name$request_uri;\n    }\n}\n")))}m.isMDXComponent=!0}}]);