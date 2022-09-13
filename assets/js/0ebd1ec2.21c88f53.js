"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97795],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61500:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Helm Charts in Rancher",weight:12,description:"Rancher enables the use of catalogs to repeatedly deploy applications easily. Catalogs are GitHub or Helm Chart repositories filled with deployment-ready apps.",aliases:["/rancher/v2.0-v2.4/en/concepts/global-configuration/catalog/","/rancher/v2.0-v2.4/en/concepts/catalogs/","/rancher/v2.0-v2.4/en/tasks/global-configuration/catalog/","/rancher/v2.0-v2.4/en/catalog","/rancher/v2.0-v2.4/en/catalog/apps"]},s=void 0,c={unversionedId:"pages-for-subheaders/helm-charts-in-rancher",id:"version-2.0-2.4/pages-for-subheaders/helm-charts-in-rancher",title:"Helm Charts in Rancher",description:"Rancher enables the use of catalogs to repeatedly deploy applications easily. Catalogs are GitHub or Helm Chart repositories filled with deployment-ready apps.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm-charts-in-rancher.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm-charts-in-rancher",permalink:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm-charts-in-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Helm Charts in Rancher",weight:12,description:"Rancher enables the use of catalogs to repeatedly deploy applications easily. Catalogs are GitHub or Helm Chart repositories filled with deployment-ready apps.",aliases:["/rancher/v2.0-v2.4/en/concepts/global-configuration/catalog/","/rancher/v2.0-v2.4/en/concepts/catalogs/","/rancher/v2.0-v2.4/en/tasks/global-configuration/catalog/","/rancher/v2.0-v2.4/en/catalog","/rancher/v2.0-v2.4/en/catalog/apps"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Registry and Docker Registry",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},next:{title:"Enabling and Disabling Built-in Global Catalogs",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/built-in"}},p={},h=[{value:"Catalog Scopes",id:"catalog-scopes",level:2},{value:"Catalog Helm Deployment Versions",id:"catalog-helm-deployment-versions",level:2},{value:"When to use Helm 3",id:"when-to-use-helm-3",level:2},{value:"Helm 3 Backwards Compatibility",id:"helm-3-backwards-compatibility",level:2},{value:"Built-in Global Catalogs",id:"built-in-global-catalogs",level:2},{value:"Custom Catalogs",id:"custom-catalogs",level:2},{value:"Creating and Launching Applications",id:"creating-and-launching-applications",level:2},{value:"Chart Compatibility with Rancher",id:"chart-compatibility-with-rancher",level:2},{value:"Global DNS",id:"global-dns",level:2}],u={toc:h};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rancher provides the ability to use a catalog of Helm charts that make it easy to repeatedly deploy applications."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Catalogs")," are GitHub repositories or Helm Chart repositories filled with applications that are ready-made for deployment. Applications are bundled in objects called ",(0,l.kt)("em",{parentName:"li"},"Helm charts"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Helm charts")," are a collection of files that describe a related set of Kubernetes resources. A single chart might be used to deploy something simple, like a memcached pod, or something complex, like a full web app stack with HTTP servers, databases, caches, and so on.")),(0,l.kt)("p",null,"Rancher improves on Helm catalogs and charts. All native Helm charts can work within Rancher, but Rancher adds several enhancements to improve their user experience."),(0,l.kt)("h2",{id:"catalog-scopes"},"Catalog Scopes"),(0,l.kt)("p",null,"Within Rancher, you can manage catalogs at three different scopes. Global catalogs are shared across all clusters and project. There are some use cases where you might not want to share catalogs between different clusters or even projects in the same cluster. By leveraging cluster and project scoped catalogs, you will be able to provide applications for specific teams without needing to share them with all clusters and/or projects."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Available As of"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global"),(0,l.kt)("td",{parentName:"tr",align:null},"All clusters and all projects can access the Helm charts in this catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,l.kt)("td",{parentName:"tr",align:null},"All projects in the specific cluster can access the Helm charts in this catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Project"),(0,l.kt)("td",{parentName:"tr",align:null},"This specific cluster can access the Helm charts in this catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.2.0")))),(0,l.kt)("h2",{id:"catalog-helm-deployment-versions"},"Catalog Helm Deployment Versions"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Applicable as of v2.4.0")),(0,l.kt)("p",null,"In November 2019, Helm 3 was released, and some features were deprecated or refactored. It is not fully ",(0,l.kt)("a",{parentName:"p",href:"#helm-3-backwards-compatibility"},"backwards compatible")," with Helm 2. Therefore, catalogs in Rancher need to be separated, with each catalog only using one Helm version. This will help reduce app deployment issues as your Rancher users will not need to know which version of your chart is compatible with which Helm version - they can just select a catalog, select an app and deploy a version that has already been vetted for compatibility."),(0,l.kt)("p",null,"When you create a custom catalog, you will have to configure the catalog to use either Helm 2 or Helm 3. This version cannot be changed later. If the catalog is added with the wrong Helm version, it will need to be deleted and re-added."),(0,l.kt)("p",null,"When you launch a new app from a catalog, the app will be managed by the catalog's Helm version. A Helm 2 catalog will use Helm 2 to manage all of the apps, and a Helm 3 catalog will use Helm 3 to manage all apps."),(0,l.kt)("p",null,"By default, catalogs are assumed to be deployed using Helm 2. If you run an app in Rancher before v2.4.0, then upgrade to Rancher v2.4.0+, the app will still be managed by Helm 2. If the app was already using a Helm 3 Chart (API version 2) it will no longer work in v2.4.0+. You must either downgrade the chart's API version or recreate the catalog to use Helm 3."),(0,l.kt)("p",null,"Charts that are specific to Helm 2 should only be added to a Helm 2 catalog, and Helm 3 specific charts should only be added to a Helm 3 catalog."),(0,l.kt)("h2",{id:"when-to-use-helm-3"},"When to use Helm 3"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Applicable as of v2.4.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you want to ensure that the security permissions are being pulled from the kubeconfig file"),(0,l.kt)("li",{parentName:"ul"},"If you want to utilize apiVersion ",(0,l.kt)("inlineCode",{parentName:"li"},"v2")," features such as creating a library chart to reduce code duplication, or moving your requirements from the ",(0,l.kt)("inlineCode",{parentName:"li"},"requirements.yaml")," into the ",(0,l.kt)("inlineCode",{parentName:"li"},"Chart.yaml"))),(0,l.kt)("p",null,"Overall Helm 3 is a movement towards a more standardized Kubernetes feel. As the Kubernetes community has evolved, standards and best practices have as well. Helm 3 is an attempt to adopt those practices and streamline how charts are maintained."),(0,l.kt)("h2",{id:"helm-3-backwards-compatibility"},"Helm 3 Backwards Compatibility"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Applicable as of v2.4.0")),(0,l.kt)("p",null,"With the use of the OpenAPI schema to validate your rendered templates in Helm 3, you will find charts that worked in Helm 2 may not work in Helm 3. This will require you to update your chart templates to meet the new validation requirements. This is one of the main reasons support for Helm 2 and Helm 3 was provided starting in Rancher 2.4.x, as not all charts can be deployed immediately in Helm 3."),(0,l.kt)("p",null,"Helm 3 does not create a namespace for you, so you will have to provide an existing one. This can cause issues if you have integrated code with Helm 2, as you will need to make code changes to ensure a namespace is being created and passed in for Helm 3. Rancher will continue to manage namespaces for Helm to ensure this does not impact your app deployment."),(0,l.kt)("p",null,"apiVersion ",(0,l.kt)("inlineCode",{parentName:"p"},"v2")," is now reserved for Helm 3 charts. This apiVersion enforcement could cause issues as older versions of Helm 2 did not validate the apiVersion in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," file. In general, your Helm 2 chart\u2019s apiVersion should be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"v1")," and your Helm 3 chart\u2019s apiVersion should be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"v2"),". You can install charts with apiVersion ",(0,l.kt)("inlineCode",{parentName:"p"},"v1")," with Helm 3, but you cannot install ",(0,l.kt)("inlineCode",{parentName:"p"},"v2")," charts into Helm 2."),(0,l.kt)("h2",{id:"built-in-global-catalogs"},"Built-in Global Catalogs"),(0,l.kt)("p",null,"Within Rancher, there are default catalogs packaged as part of Rancher. These can be enabled or disabled by an administrator. For details, refer to the section on managing ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/built-in"},"built-in global catalogs.")),(0,l.kt)("h2",{id:"custom-catalogs"},"Custom Catalogs"),(0,l.kt)("p",null,"There are two types of catalogs in Rancher: ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/built-in"},"Built-in global catalogs")," and ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs"},"custom catalogs.")),(0,l.kt)("p",null,"Any user can create custom catalogs to add into Rancher.  Custom catalogs can be added into Rancher at the global level, cluster level, or project level. For details, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs"},"section on adding custom catalogs")," and the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config"},"catalog configuration reference.")),(0,l.kt)("h2",{id:"creating-and-launching-applications"},"Creating and Launching Applications"),(0,l.kt)("p",null,"In Rancher, applications are deployed from the templates in a catalog."),(0,l.kt)("h2",{id:"chart-compatibility-with-rancher"},"Chart Compatibility with Rancher"),(0,l.kt)("p",null,"Charts now support the fields ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher_min_version")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher_max_version")," in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/integration-test-charts/blob/master/charts/chartmuseum/v1.6.0/questions.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"questions.yml")," file")," to specify the versions of Rancher that the chart is compatible with. When using the UI, only app versions that are valid for the version of Rancher running will be shown. API validation is done to ensure apps that don't meet the Rancher requirements cannot be launched. An app that is already running will not be affected on a Rancher upgrade if the newer Rancher version does not meet the app's requirements."),(0,l.kt)("h2",{id:"global-dns"},"Global DNS"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as v2.2.0")),(0,l.kt)("p",null,"When creating applications that span multiple Kubernetes clusters, a Global DNS entry can be created to route traffic to the endpoints in all of the different clusters. An external DNS server will need be programmed to assign a fully qualified domain name (a.k.a FQDN) to your application. Rancher will use the FQDN you provide and the IP addresses where your application is running to program the DNS. Rancher will gather endpoints from all the Kubernetes clusters running your application and program the DNS."),(0,l.kt)("p",null,"For more information on how to use this feature, see ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns"},"Global DNS"),"."))}d.isMDXComponent=!0}}]);