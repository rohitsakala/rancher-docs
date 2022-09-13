"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45108],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466),p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,d=e.defaultValue,f=e.values,g=e.groupId,k=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,T=(0,a.useState)(b),x=T[0],D=T[1],P=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=w[g];null!=O&&O!==x&&v.some((function(e){return e.value===O}))&&D(O)}var I=function(e){var t=e.currentTarget,n=P.indexOf(t),r=v[n].value;r!==x&&(E(t),D(r),null!=g&&C(g,String(r)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var o,i=P.indexOf(e.currentTarget)-1;n=null!=(o=P[i])?o:P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return P.push(e)},onKeyDown:j,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},72660:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),s=["components"],u={title:"Configuring Persistent Data for Pipeline Components",weight:600,aliases:["/rancher/v2.5/en/k8s-in-rancher/pipelines/storage","/rancher/v2.x/en/pipelines/storage/"]},p=void 0,m={unversionedId:"reference-guides/pipelines/configure-persistent-data",id:"version-2.5/reference-guides/pipelines/configure-persistent-data",title:"Configuring Persistent Data for Pipeline Components",description:"The pipelines' internal Docker registry and the Minio workloads use ephemeral volumes by default. This default storage works out-of-the-box and makes testing easy, but you lose the build images and build logs if the node running the Docker Registry or Minio fails. In most cases this is fine. If you want build images and logs to survive node failures, you can configure the Docker Registry and Minio to use persistent volumes.",source:"@site/versioned_docs/version-2.5/reference-guides/pipelines/configure-persistent-data.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/configure-persistent-data",permalink:"/v2.5/reference-guides/pipelines/configure-persistent-data",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/pipelines/configure-persistent-data.md",tags:[],version:"2.5",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Configuring Persistent Data for Pipeline Components",weight:600,aliases:["/rancher/v2.5/en/k8s-in-rancher/pipelines/storage","/rancher/v2.x/en/pipelines/storage/"]},sidebar:"tutorialSidebar",previous:{title:"Pipeline Configuration Reference",permalink:"/v2.5/reference-guides/pipelines/pipeline-configuration"},next:{title:"Example Repositories",permalink:"/v2.5/reference-guides/pipelines/example-repositories"}},c={},d=[{value:"A. Configuring Persistent Data for Docker Registry",id:"a-configuring-persistent-data-for-docker-registry",level:3},{value:"B. Configuring Persistent Data for Minio",id:"b-configuring-persistent-data-for-minio",level:3}],f={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The pipelines' internal Docker registry and the Minio workloads use ephemeral volumes by default. This default storage works out-of-the-box and makes testing easy, but you lose the build images and build logs if the node running the Docker Registry or Minio fails. In most cases this is fine. If you want build images and logs to survive node failures, you can configure the Docker Registry and Minio to use persistent volumes."),(0,o.kt)("p",null,"This section assumes that you understand how persistent storage works in Kubernetes. For more information, refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"how storage works.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisites (for both parts A and B):")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/create-kubernetes-persistent-storage"},"Persistent volumes")," must be available for the cluster.")),(0,o.kt)("h3",{id:"a-configuring-persistent-data-for-docker-registry"},"A. Configuring Persistent Data for Docker Registry"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the project that you're configuring a pipeline for, and click ",(0,o.kt)("strong",{parentName:"p"},"Resources > Workloads."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-registry")," workload and select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll to the ",(0,o.kt)("strong",{parentName:"p"},"Volumes")," section and expand it. Make one of the following selections from the ",(0,o.kt)("strong",{parentName:"p"},"Add Volume")," menu, which is near the bottom of the section:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add Volume > Add a new persistent volume (claim)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add Volume > Use an existing persistent volume (claim)")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the form that displays to choose a persistent volume for the internal Docker registry."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Add a new persistent volume",mdxType:"TabItem"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for the volume claim."),(0,o.kt)("li",{parentName:"ol"},"Select a volume claim ",(0,o.kt)("strong",{parentName:"li"},"Source"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you select ",(0,o.kt)("strong",{parentName:"li"},"Use a Storage Class to provision a new persistent volume"),", select a storage class and enter a ",(0,o.kt)("strong",{parentName:"li"},"Capacity"),"."),(0,o.kt)("li",{parentName:"ul"},"If you select ",(0,o.kt)("strong",{parentName:"li"},"Use an existing persistent volume"),", choose a ",(0,o.kt)("strong",{parentName:"li"},"Persistent Volume")," from the drop-down."))),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Customize")," section, choose the read/write access for the volume."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Define"),"."))),(0,o.kt)(l.Z,{value:"Use an existing persistent volume",mdxType:"TabItem"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for the volume claim."),(0,o.kt)("li",{parentName:"ol"},"Choose a ",(0,o.kt)("strong",{parentName:"li"},"Persistent Volume Claim")," from the drop-down."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Customize")," section, choose the read/write access for the volume."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Define"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Mount Point")," field, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/registry"),", which is the data storage path inside the Docker registry container.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Upgrade"),"."))),(0,o.kt)("h3",{id:"b-configuring-persistent-data-for-minio"},"B. Configuring Persistent Data for Minio"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the project view, click ",(0,o.kt)("strong",{parentName:"p"},"Resources > Workloads.")," Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"minio")," workload and select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll to the ",(0,o.kt)("strong",{parentName:"p"},"Volumes")," section and expand it. Make one of the following selections from the ",(0,o.kt)("strong",{parentName:"p"},"Add Volume")," menu, which is near the bottom of the section:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add Volume > Add a new persistent volume (claim)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add Volume > Use an existing persistent volume (claim)")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the form that displays to choose a persistent volume for the internal Docker registry."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Add a new persistent volume",mdxType:"TabItem"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for the volume claim."),(0,o.kt)("li",{parentName:"ol"},"Select a volume claim ",(0,o.kt)("strong",{parentName:"li"},"Source"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you select ",(0,o.kt)("strong",{parentName:"li"},"Use a Storage Class to provision a new persistent volume"),", select a storage class and enter a ",(0,o.kt)("strong",{parentName:"li"},"Capacity"),"."),(0,o.kt)("li",{parentName:"ul"},"If you select ",(0,o.kt)("strong",{parentName:"li"},"Use an existing persistent volume"),", choose a ",(0,o.kt)("strong",{parentName:"li"},"Persistent Volume")," from the drop-down."))),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Customize")," section, choose the read/write access for the volume."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Define"),"."))),(0,o.kt)(l.Z,{value:"Use an existing persistent volume",mdxType:"TabItem"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for the volume claim."),(0,o.kt)("li",{parentName:"ol"},"Choose a ",(0,o.kt)("strong",{parentName:"li"},"Persistent Volume Claim")," from the drop-down."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Customize")," section, choose the read/write access for the volume."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Define"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Mount Point")," field, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"/data"),", which is the data storage path inside the Minio container.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Upgrade"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Persistent storage is configured for your pipeline components."))}g.isMDXComponent=!0}}]);