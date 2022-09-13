"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5839],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16849:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Creating Apps",weight:400},s=void 0,p={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",id:"how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",title:"Creating Apps",description:"Rancher's App Marketplace is based on Helm Repositories and Helm Charts. You can add HTTP based standard Helm Repositories as well as any Git Repository which contains charts.",source:"@site/docs/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",permalink:"/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps.md",tags:[],version:"current",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Creating Apps",weight:400},sidebar:"tutorialSidebar",previous:{title:"Helm Charts in Rancher",permalink:"/pages-for-subheaders/helm-charts-in-rancher"},next:{title:"Deploying Applications across Clusters",permalink:"/pages-for-subheaders/deploy-apps-across-clusters"}},d={},m=[{value:"Helm Charts",id:"helm-charts",level:3},{value:"Rancher Charts",id:"rancher-charts",level:3},{value:"Chart.yaml annotations",id:"chartyaml-annotations",level:3},{value:"questions.yml",id:"questionsyml",level:3},{value:"Min/Max Rancher versions",id:"minmax-rancher-versions",level:3},{value:"Question Variable Reference",id:"question-variable-reference",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher's App Marketplace is based on Helm Repositories and Helm Charts. You can add HTTP based standard Helm Repositories as well as any Git Repository which contains charts."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For a complete walkthrough of developing charts, see the ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/"},"Chart Template Developer's Guide")," in the official Helm documentation."))),(0,i.kt)("h1",{id:"chart-types"},"Chart Types"),(0,i.kt)("p",null,"Rancher supports two different types of charts: Helm charts and Rancher charts."),(0,i.kt)("h3",{id:"helm-charts"},"Helm Charts"),(0,i.kt)("p",null,"Native Helm charts include an application along with other software required to run it. When deploying native Helm charts, you' can provide the chart's parameter values in a YAML editor."),(0,i.kt)("h3",{id:"rancher-charts"},"Rancher Charts"),(0,i.kt)("p",null,"Rancher charts are native helm charts with two files that enhance user experience: ",(0,i.kt)("inlineCode",{parentName:"p"},"app-readme.md")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yaml"),". Read more about them in ",(0,i.kt)("a",{parentName:"p",href:"#additional-files-for-rancher-charts"},"Additional Files for Rancher Charts.")),(0,i.kt)("p",null,"Rancher charts add simplified chart descriptions and configuration forms to make the application deployment easy. Rancher users do not need to read through the entire list of Helm variables to understand how to launch an application."),(0,i.kt)("h1",{id:"chart-directory-structure"},"Chart Directory Structure"),(0,i.kt)("p",null,"You can provide Helm Charts in a standard, HTTP based Helm Repository. For more information see the ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/chart_repository"},"Chart Repository Guide")," in the official Helm documentation."),(0,i.kt)("p",null,"Alternatively you can organize your charts in a Git Repository and directly add this to the App Marketplace."),(0,i.kt)("p",null,"The following table demonstrates the directory structure for a Git repository. The ",(0,i.kt)("inlineCode",{parentName:"p"},"charts")," directory is the top level directory under the repository base. Adding the repository to Rancher will expose all charts contained within it. The ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yaml"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.yml")," files are specific to Rancher charts, but are optional for chart customization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<Repository-Base>/\n \u2502\n \u251c\u2500\u2500 charts/\n \u2502   \u251c\u2500\u2500 <Application Name>/      # This directory name will be surfaced in the Rancher UI as the chart name\n \u2502   \u2502   \u251c\u2500\u2500 <App Version>/   # Each directory at this level provides different app versions that will be selectable within the chart in the Rancher UI\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 Chart.yaml   # Required Helm chart information file.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 questions.yaml   # Form questions displayed within the Rancher UI. Questions display in Configuration Options.*\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md         # Optional: Helm Readme file displayed within Rancher UI. This text displays in Detailed Descriptions.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 requirements.yml  # Optional: YAML file listing dependencies for the chart.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 values.yml        # Default configuration values for the chart.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 templates/        # Directory containing templates that, when combined with values.yml, generates Kubernetes YAML.\n")),(0,i.kt)("h1",{id:"additional-files-for-rancher-charts"},"Additional Files for Rancher Charts"),(0,i.kt)("p",null,"Before you create your own custom catalog, you should have a basic understanding about how a Rancher chart differs from a native Helm chart. Rancher charts differ slightly from Helm charts in their directory structures. Rancher charts include two files that Helm charts do not."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"app-readme.md")),(0,i.kt)("p",{parentName:"li"},"  A file that provides descriptive text in the chart's UI header.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml")),(0,i.kt)("p",{parentName:"li"},"  A file that contains questions for a form. These form questions simplify deployment of a chart. Without it, you must configure the deployment using a values YAML config, which is more difficult. The following image displays the difference between a Rancher chart (which includes ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml"),") and a native Helm chart (which does not)."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<figcaption>Rancher Chart with <code>questions.yml</code> (top) vs. Helm Chart without (bottom)</figcaption>\n\n![questions.yml](/img/rancher-app-2.6.png)\n![values.yaml](/img/helm-app-2.6.png)\n")),(0,i.kt)("h3",{id:"chartyaml-annotations"},"Chart.yaml annotations"),(0,i.kt)("p",null,"Rancher supports additional annotations that you can add to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," file. These annotations allow you to define application dependencies or configure additional UI defaults:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/auto-install"),(0,i.kt)("td",{parentName:"tr",align:null},"If set, will install the specified chart in the specified version before installing this chart"),(0,i.kt)("td",{parentName:"tr",align:null},"other-chart-name=1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/display-name"),(0,i.kt)("td",{parentName:"tr",align:null},"A display name that should be displayed in the App Marketplace instead of the chart name"),(0,i.kt)("td",{parentName:"tr",align:null},"Display Name of Chart")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/namespace"),(0,i.kt)("td",{parentName:"tr",align:null},"A fixed namespace where the chart should be deployed in. If set, this can't be changed by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"fixed-namespace")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/release-name"),(0,i.kt)("td",{parentName:"tr",align:null},"A fixed release name for the Helm installation. If set, this can't be changed by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"fixed-release-name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/requests-cpu"),(0,i.kt)("td",{parentName:"tr",align:null},"Total amount of CPU that should be unreserverd in the cluster. If less CPU is available, a warning will be shown"),(0,i.kt)("td",{parentName:"tr",align:null},"2000m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/requests-memory"),(0,i.kt)("td",{parentName:"tr",align:null},"Total amount of memory that should be unreserverd in the cluster. If less memory is available, a warning will be shown"),(0,i.kt)("td",{parentName:"tr",align:null},"2Gi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/os"),(0,i.kt)("td",{parentName:"tr",align:null},"Restricts the OS where this chart can be installed. Possible values: ",(0,i.kt)("inlineCode",{parentName:"td"},"linux"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"windows"),". Default: no restriction"),(0,i.kt)("td",{parentName:"tr",align:null},"linux")))),(0,i.kt)("h3",{id:"questionsyml"},"questions.yml"),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml"),", most of the content will be around the questions to ask the end user, but there are some additional fields that can be set in this file."),(0,i.kt)("h3",{id:"minmax-rancher-versions"},"Min/Max Rancher versions"),(0,i.kt)("p",null,"For each chart, you can add the minimum and/or maximum Rancher version, which determines whether or not this chart is available to be deployed from Rancher."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Even though Rancher release versions are prefixed with a ",(0,i.kt)("inlineCode",{parentName:"p"},"v"),", there is ",(0,i.kt)("em",{parentName:"p"},"no")," prefix for the release version when using this option."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rancher_min_version: 2.3.0\nrancher_max_version: 2.3.99\n")),(0,i.kt)("h3",{id:"question-variable-reference"},"Question Variable Reference"),(0,i.kt)("p",null,"This reference contains variables that you can use in ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml")," nested under ",(0,i.kt)("inlineCode",{parentName:"p"},"questions:"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"variable"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Define the variable name specified in the ",(0,i.kt)("inlineCode",{parentName:"td"},"values.yml")," file, using ",(0,i.kt)("inlineCode",{parentName:"td"},"foo.bar")," for nested objects.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"label"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Define the UI label.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"description"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the description of the variable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Default to ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," if not specified (current supported types are string, multiline, boolean, int, enum, password, storageclass, hostname, pvc, and secret).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Define if the variable is required or not (true ","|"," false)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"default"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the default value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"group"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Group questions by input value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min_length"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Min character length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_length"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Max character length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Min integer length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Max integer length.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the options when the variable type is ",(0,i.kt)("inlineCode",{parentName:"td"},"enum"),", for example: options:",(0,i.kt)("br",null),' - "ClusterIP" ',(0,i.kt)("br",null),' - "NodePort" ',(0,i.kt)("br",null),' - "LoadBalancer"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"valid_chars"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Regular expression for input chars validation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalid_chars"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Regular expression for invalid input chars validation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subquestions"),(0,i.kt)("td",{parentName:"tr",align:null},"[]subquestion"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Add an array of subquestions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show_if"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Show current variable if conditional variable is true. For example ",(0,i.kt)("inlineCode",{parentName:"td"},'show_if: "serviceType=Nodeport"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show","_","subquestion_if"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Show subquestions if is true or equal to one of the options. for example ",(0,i.kt)("inlineCode",{parentName:"td"},'show_subquestion_if: "true"'))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"subquestions[]")," cannot contain ",(0,i.kt)("inlineCode",{parentName:"p"},"subquestions")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"show_subquestions_if")," keys, but all other keys in the above table are supported."))))}u.isMDXComponent=!0}}]);