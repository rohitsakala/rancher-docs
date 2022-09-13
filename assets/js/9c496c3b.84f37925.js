"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27392],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(i,".").concat(d)]||h[d]||c[d]||s;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(67294),n=a(86010),s="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(87462),n=a(67294),s=a(86010),l=a(72389),o=a(67392),i=a(7094),p=a(12466),u="tabList__CuJ",c="tabItem_LNqP";function h(e){var t,a,l=e.lazy,h=e.block,d=e.defaultValue,m=e.values,g=e.groupId,k=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),R=y.tabGroupChoices,w=y.setTabGroupChoices,O=(0,n.useState)(N),T=O[0],C=O[1],E=[],A=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var I=R[g];null!=I&&I!==T&&v.some((function(e){return e.value===I}))&&C(I)}var U=function(e){var t=e.currentTarget,a=E.indexOf(t),r=v[a].value;r!==T&&(A(t),C(r),null!=g&&w(g,String(r)))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=E.indexOf(e.currentTarget)+1;a=null!=(r=E[n])?r:E[0];break;case"ArrowLeft":var s,l=E.indexOf(e.currentTarget)-1;a=null!=(s=E[l])?s:E[E.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":h},k)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:U,onClick:U},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return n.createElement(h,(0,r.Z)({key:String(t)},e))}},57760:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),l=a(65488),o=a(85162),i=["components"],p={title:"Upgrades",weight:2,aliases:["/rancher/v2.0-v2.4/en/upgrades/upgrades","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades","/rancher/v2.0-v2.4/en/upgrades/upgrades/ha-server-upgrade-helm-airgap","/rancher/v2.0-v2.4/en/upgrades/air-gap-upgrade/","/rancher/v2.0-v2.4/en/upgrades/upgrades/ha","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades/upgrades/ha","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/","/rancher/v2.0-v2.4/en/upgrades/upgrades/ha-server-upgrade-helm/","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/ha","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/ha","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/","/rancher/v2.0-v2.4/en/upgrades/"]},u=void 0,c={unversionedId:"pages-for-subheaders/upgrades",id:"version-2.0-2.4/pages-for-subheaders/upgrades",title:"Upgrades",description:"The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air gap installs with Helm.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/upgrades.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/upgrades",permalink:"/v2.0-v2.4/pages-for-subheaders/upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/upgrades.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Upgrades",weight:2,aliases:["/rancher/v2.0-v2.4/en/upgrades/upgrades","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades","/rancher/v2.0-v2.4/en/upgrades/upgrades/ha-server-upgrade-helm-airgap","/rancher/v2.0-v2.4/en/upgrades/air-gap-upgrade/","/rancher/v2.0-v2.4/en/upgrades/upgrades/ha","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades/upgrades/ha","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/","/rancher/v2.0-v2.4/en/upgrades/upgrades/ha-server-upgrade-helm/","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/ha","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/ha","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/","/rancher/v2.0-v2.4/en/upgrades/"]},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting the Rancher Server Kubernetes Cluster",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},next:{title:"Migrating from a Kubernetes Install with an RKE Add-on",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"}},h={},d=[{value:"Access to kubeconfig",id:"access-to-kubeconfig",level:3},{value:"Review Known Issues",id:"review-known-issues",level:3},{value:"Helm Version",id:"helm-version",level:3},{value:"For air gap installs: Populate private registry",id:"for-air-gap-installs-populate-private-registry",level:3},{value:"For upgrades from v2.0-v2.2 with external TLS termination",id:"for-upgrades-from-v20-v22-with-external-tls-termination",level:3},{value:"For upgrades with cert-manager older than 0.8.0",id:"for-upgrades-with-cert-manager-older-than-080",level:3},{value:"Option A: Upgrading Rancher",id:"option-a-upgrading-rancher",level:3},{value:"Option B: Reinstalling Rancher and cert-manager",id:"option-b-reinstalling-rancher-and-cert-manager",level:3},{value:"Option A: Default Self-signed Certificate",id:"option-a-default-self-signed-certificate",level:3},{value:"Option B: Certificates from Files using Kubernetes Secrets",id:"option-b-certificates-from-files-using-kubernetes-secrets",level:3},{value:"Apply the Rendered Templates",id:"apply-the-rendered-templates",level:3}],m={toc:d};function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air gap installs with Helm."),(0,s.kt)("p",null,"For the instructions to upgrade Rancher installed with Docker, refer to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"this page.")),(0,s.kt)("p",null,"To upgrade the components in your Kubernetes cluster, or the definition of the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/"},"Kubernetes services")," or ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"add-ons"),", refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/"},"upgrade documentation for RKE"),", the Rancher Kubernetes Engine."),(0,s.kt)("p",null,"If you installed Rancher using the RKE Add-on yaml, follow the directions to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"migrate or upgrade"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#upgrade-outline"},"Upgrade Outline")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#known-upgrade-issues"},"Known Upgrade Issues")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#rke-add-on-installs"},"RKE Add-on Installs"))),(0,s.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("h3",{id:"access-to-kubeconfig"},"Access to kubeconfig"),(0,s.kt)("p",null,"Helm should be run from the same location as your kubeconfig file, or the same location where you run your kubectl commands from."),(0,s.kt)("p",null,"If you installed Kubernetes with RKE, the config will have been created in the directory you ran ",(0,s.kt)("inlineCode",{parentName:"p"},"rke up")," in."),(0,s.kt)("p",null,"The kubeconfig can also be manually targeted for the intended cluster with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," tag (see: ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm/"},"https://helm.sh/docs/helm/helm/"),")"),(0,s.kt)("h3",{id:"review-known-issues"},"Review Known Issues"),(0,s.kt)("p",null,"Review the ",(0,s.kt)("a",{parentName:"p",href:"#known-upgrade-issues"},"known upgrade issues")," in the Rancher documentation for the most noteworthy issues to consider when upgrading Rancher."),(0,s.kt)("p",null,"A more complete list of known issues for each Rancher version can be found in the release notes on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,s.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")),(0,s.kt)("p",null,"Note that upgrades ",(0,s.kt)("em",{parentName:"p"},"to")," or ",(0,s.kt)("em",{parentName:"p"},"from")," any chart in the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#helm-chart-repositories/"},"rancher-alpha repository")," aren't supported."),(0,s.kt)("h3",{id:"helm-version"},"Helm Version"),(0,s.kt)("p",null,"The upgrade instructions assume you are using Helm 3."),(0,s.kt)("p",null,"For migration of installs started with Helm 2, refer to the official ",(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 migration docs.")," The ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2"},"Helm 2 upgrade page here"),"provides a copy of the older upgrade instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible."),(0,s.kt)("h3",{id:"for-air-gap-installs-populate-private-registry"},"For air gap installs: Populate private registry"),(0,s.kt)("p",null,"-For ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/air-gapped-helm-cli-install"},"air gap installs only,")," collect and populate images for the new Rancher server version. Follow the guide to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"populate your private registry")," with the images for the Rancher version that you want to upgrade to."),(0,s.kt)("h3",{id:"for-upgrades-from-v20-v22-with-external-tls-termination"},"For upgrades from v2.0-v2.2 with external TLS termination"),(0,s.kt)("p",null,"If you are upgrading Rancher from v2.x to v2.3+, and you are using external TLS termination, you will need to edit the cluster.yml to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#configuring-ingress-for-external-tls-when-using-nginx-v0-25"},"enable using forwarded host headers.")),(0,s.kt)("h3",{id:"for-upgrades-with-cert-manager-older-than-080"},"For upgrades with cert-manager older than 0.8.0"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.")," Upgrade cert-manager to the latest version by following ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"these instructions.")),(0,s.kt)("h1",{id:"upgrade-outline"},"Upgrade Outline"),(0,s.kt)("p",null,"Follow the steps to upgrade Rancher server:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#1-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"1. Back up your Kubernetes cluster that is running Rancher server")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#2-update-the-helm-chart-repository"},"2. Update the Helm chart repository")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#3-upgrade-rancher"},"3. Upgrade Rancher")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#4-verify-the-upgrade"},"4. Verify the Upgrade"))),(0,s.kt)("h1",{id:"1-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"1. Back up Your Kubernetes Cluster that is Running Rancher Server"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters#option-b-one-time-snapshots"},"Take a one-time snapshot"),"\nof your Kubernetes cluster running Rancher server."),(0,s.kt)("p",null,"You'll use the backup as a restoration point if something goes wrong during upgrade."),(0,s.kt)("h1",{id:"2-update-the-helm-chart-repository"},"2. Update the Helm chart repository"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Update your local helm repo cache."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"helm repo update\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Get the repository name that you used to install Rancher."),(0,s.kt)("p",{parentName:"li"},"For information about the repos and their differences, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#helm-chart-repositories"},"Helm Chart Repositories"),"."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,s.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,s.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"helm repo list\n\nNAME                   URL\nstable                 https://charts.helm.sh/stable\nrancher-<CHART_REPO>     https://releases.rancher.com/server-charts/<CHART_REPO>\n")),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," If you want to switch to a different Helm chart repository, please follow the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version#switching-to-a-different-helm-chart-repository"},"steps on how to switch repositories"),". If you switch repositories, make sure to list the repositories again before continuing onto Step 3 to ensure you have the correct one added.")))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Fetch the latest chart to install Rancher from the Helm chart repository."),(0,s.kt)("p",{parentName:"li"},"This command will pull down the latest charts and save it in the current directory as a ",(0,s.kt)("inlineCode",{parentName:"p"},".tgz")," file."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher\n")),(0,s.kt)("p",{parentName:"li"},"You can fetch the chart for the specific version you are upgrading to by adding in the ",(0,s.kt)("inlineCode",{parentName:"p"},"--version=")," tag.  For example:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher --version=v2.4.11\n")))),(0,s.kt)("h1",{id:"3-upgrade-rancher"},"3. Upgrade Rancher"),(0,s.kt)("p",null,"This section describes how to upgrade normal (Internet-connected) or air gap installations of Rancher with Helm."),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"Kubernetes Upgrade",mdxType:"TabItem"},(0,s.kt)("p",null,"Get the values, which were passed with ",(0,s.kt)("inlineCode",{parentName:"p"},"--set"),", from the current Rancher Helm chart that is installed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system\n\nhostname: rancher.my.org\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," There will be more values that are listed with this command. This is just an example of one of the values.")),(0,s.kt)("p",null,"If you are also upgrading cert-manager to the latest version from a version older than 0.11.0, follow ",(0,s.kt)("a",{parentName:"p",href:"#option-b-reinstalling-rancher-and-cert-manager"},"Option B: Reinstalling Rancher and cert-manager.")),(0,s.kt)("p",null,"Otherwise, follow ",(0,s.kt)("a",{parentName:"p",href:"#option-a-upgrading-rancher"},"Option A: Upgrading Rancher.")),(0,s.kt)("h3",{id:"option-a-upgrading-rancher"},"Option A: Upgrading Rancher"),(0,s.kt)("p",null,"Upgrade Rancher to the latest version with all your settings."),(0,s.kt)("p",null,"Take all the values from the previous step and append them to the command using ",(0,s.kt)("inlineCode",{parentName:"p"},"--set key=value"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," The above is an example, there may be more values from the previous step that need to be appended.")),(0,s.kt)("p",null,"Alternatively, it's possible to export the current values to a file and reference that file during upgrade. For example, to only change the Rancher version:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system -o yaml > values.yaml\n\nhelm upgrade rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  -f values.yaml \\\n  --version=2.4.5\n")),(0,s.kt)("h3",{id:"option-b-reinstalling-rancher-and-cert-manager"},"Option B: Reinstalling Rancher and cert-manager"),(0,s.kt)("p",null,"If you are currently running the cert-manager whose version is older than v0.11, and want to upgrade both Rancher and cert-manager to a newer version, then you need to reinstall both Rancher and cert-manager due to the API change in cert-manager v0.11."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Uninstall Rancher"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"helm delete rancher -n cattle-system\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Uninstall and reinstall ",(0,s.kt)("inlineCode",{parentName:"p"},"cert-manager")," according to the instructions on the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2"},"Upgrading Cert-Manager")," page.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Reinstall Rancher to the latest version with all your settings. Take all the values from the step 1 and append them to the command using ",(0,s.kt)("inlineCode",{parentName:"p"},"--set key=value"),". Note: There will be many more options from the step 1 that need to be appended."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n--namespace cattle-system \\\n--set hostname=rancher.my.org\n"))))),(0,s.kt)(o.Z,{value:"Kubernetes Air Gap Upgrade",mdxType:"TabItem"},(0,s.kt)("p",null,"Render the Rancher template using the same chosen options that were used when installing Rancher. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,s.kt)("p",null,"Based on the choice you made during installation, complete one of the procedures below."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,s.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,s.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,s.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,s.kt)("td",{parentName:"tr",align:null},"Cert-manager version running on k8s cluster.")))),(0,s.kt)("h3",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-signed Certificate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./rancher-<VERSION>.tgz --output-dir . \\\n--name rancher \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set certmanager.version=<CERTMANAGER_VERSION> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n")),(0,s.kt)("h3",{id:"option-b-certificates-from-files-using-kubernetes-secrets"},"Option B: Certificates from Files using Kubernetes Secrets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./rancher-<VERSION>.tgz --output-dir . \\\n--name rancher \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n")),(0,s.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,s.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,s.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./rancher-<VERSION>.tgz --output-dir . \\\n--name rancher \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set privateCA=true \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Available as of v2.2.0, set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Available as of v2.3.0, use the packaged Rancher system charts\n")),(0,s.kt)("h3",{id:"apply-the-rendered-templates"},"Apply the Rendered Templates"),(0,s.kt)("p",null,"Copy the rendered manifest directories to a system with access to the Rancher server cluster and apply the rendered templates."),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to apply the rendered manifests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cattle-system apply -R -f ./rancher\n")))),(0,s.kt)("h1",{id:"4-verify-the-upgrade"},"4. Verify the Upgrade"),(0,s.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Having network issues following upgrade?")),(0,s.kt)("p",{parentName:"blockquote"},"See ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration#restoring-cluster-networking"},"Restoring Cluster Networking"),".")),(0,s.kt)("h1",{id:"known-upgrade-issues"},"Known Upgrade Issues"),(0,s.kt)("p",null,"The following table lists some of the most noteworthy issues to be considered when upgrading Rancher. A more complete list of known issues for each Rancher version can be found in the release notes on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,s.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Upgrade Scenario"),(0,s.kt)("th",{parentName:"tr",align:null},"Issue"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Upgrading to v2.4.6 or v2.4.7"),(0,s.kt)("td",{parentName:"tr",align:null},"These Rancher versions had an issue where the ",(0,s.kt)("inlineCode",{parentName:"td"},"kms:ListKeys")," permission was required to create, edit, or clone Amazon EC2 node templates. This requirement was removed in v2.4.8.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Upgrading to v2.3.0+"),(0,s.kt)("td",{parentName:"tr",align:null},"Any user provisioned cluster will be automatically updated upon any edit as tolerations were added to the images used for Kubernetes provisioning.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Upgrading to v2.2.0-v2.2.x"),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher introduced the ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"system charts")," repository which contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. To be able to use these features in an air gap install, you will need to mirror the ",(0,s.kt)("inlineCode",{parentName:"td"},"system-charts")," repository locally and configure Rancher to use that repository. Please follow the instructions to ",(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/local-system-charts"},"configure Rancher system charts"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Upgrading from v2.0.13 or earlier"),(0,s.kt)("td",{parentName:"tr",align:null},"If your cluster's certificates have expired, you will need to perform ",(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates#rotating-expired-certificates-after-upgrading-older-rancher-versions"},"additional steps")," to rotate the certificates.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Upgrading from v2.0.7 or earlier"),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher introduced the ",(0,s.kt)("inlineCode",{parentName:"td"},"system")," project, which is a project that's automatically created to store important namespaces that Kubernetes needs to operate. During upgrade to v2.0.7+, Rancher expects these namespaces to be unassigned from all projects. Before beginning upgrade, check your system namespaces to make sure that they're unassigned to ",(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"prevent cluster networking issues."))))),(0,s.kt)("h1",{id:"rke-add-on-installs"},"RKE Add-on Installs"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,s.kt)("p",null,"Please use the Rancher helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Kubernetes Install"),"."),(0,s.kt)("p",null,"If you are currently using the RKE add-on install method, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a RKE add-on install")," for details on how to move to using the helm chart."))}g.isMDXComponent=!0}}]);