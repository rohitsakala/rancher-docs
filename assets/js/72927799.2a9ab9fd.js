"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58053],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=i(n),k=o,h=u["".concat(l,".").concat(k)]||u[k]||p[k]||c;return n?r.createElement(h,d(d({ref:t},s),{},{components:n})):r.createElement(h,d({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,d=new Array(c);d[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,d[1]=a;for(var i=2;i<c;i++)d[i]=n[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45485:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),d=["components"],a={title:"Troubleshooting etcd Nodes",weight:1},l=void 0,i={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-etcd-nodes",id:"troubleshooting/kubernetes-components/troubleshooting-etcd-nodes",title:"Troubleshooting etcd Nodes",description:"This section contains commands and tips for troubleshooting nodes with the etcd role.",source:"@site/docs/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes",permalink:"/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes.md",tags:[],version:"current",lastUpdatedAt:1663087368,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Troubleshooting etcd Nodes",weight:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Components",permalink:"/pages-for-subheaders/kubernetes-components"},next:{title:"Troubleshooting Controlplane Nodes",permalink:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes"}},s={},p=[{value:"Checking if the etcd Container is Running",id:"checking-if-the-etcd-container-is-running",level:2},{value:"etcd Container Logging",id:"etcd-container-logging",level:2},{value:"etcd Cluster and Connectivity Checks",id:"etcd-cluster-and-connectivity-checks",level:2},{value:"Check etcd Members on all Nodes",id:"check-etcd-members-on-all-nodes",level:3},{value:"Check Endpoint Status",id:"check-endpoint-status",level:3},{value:"Check Endpoint Health",id:"check-endpoint-health",level:3},{value:"Check Connectivity on Port TCP/2379",id:"check-connectivity-on-port-tcp2379",level:3},{value:"Check Connectivity on Port TCP/2380",id:"check-connectivity-on-port-tcp2380",level:3},{value:"etcd Alarms",id:"etcd-alarms",level:2},{value:"etcd Space Errors",id:"etcd-space-errors",level:2},{value:"Compact the Keyspace",id:"compact-the-keyspace",level:3},{value:"Defrag All etcd Members",id:"defrag-all-etcd-members",level:3},{value:"Check Endpoint Status",id:"check-endpoint-status-1",level:3},{value:"Disarm Alarm",id:"disarm-alarm",level:3},{value:"Log Level",id:"log-level",level:2},{value:"etcd Content",id:"etcd-content",level:2},{value:"Watch Streaming Events",id:"watch-streaming-events",level:3},{value:"Query etcd Directly",id:"query-etcd-directly",level:3},{value:"Replacing Unhealthy etcd Nodes",id:"replacing-unhealthy-etcd-nodes",level:2}],u={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,d);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This section contains commands and tips for troubleshooting nodes with the ",(0,c.kt)("inlineCode",{parentName:"p"},"etcd")," role."),(0,c.kt)("h2",{id:"checking-if-the-etcd-container-is-running"},"Checking if the etcd Container is Running"),(0,c.kt)("p",null,"The container for etcd should have status ",(0,c.kt)("strong",{parentName:"p"},"Up"),". The duration shown after ",(0,c.kt)("strong",{parentName:"p"},"Up")," is the time the container has been running."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker ps -a -f=name=etcd$\n")),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                         COMMAND                  CREATED             STATUS              PORTS               NAMES\n605a124503b9        rancher/coreos-etcd:v3.2.18   "/usr/local/bin/et..."   2 hours ago         Up 2 hours                              etcd\n')),(0,c.kt)("h2",{id:"etcd-container-logging"},"etcd Container Logging"),(0,c.kt)("p",null,"The logging of the container can contain information on what the problem could be."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker logs etcd\n")),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Log"),(0,c.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"health check for peer xxx could not connect: dial tcp IP:2380: getsockopt: connection refused")),(0,c.kt)("td",{parentName:"tr",align:null},"A connection to the address shown on port 2380 cannot be established. Check if the etcd container is running on the host with the address shown.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"xxx is starting a new election at term x")),(0,c.kt)("td",{parentName:"tr",align:null},"The etcd cluster has lost its quorum and is trying to establish a new leader. This can happen when the majority of the nodes running etcd go down/unreachable.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},'connection error: desc = "transport: Error while dialing dial tcp 0.0.0.0:2379: i/o timeout"; Reconnecting to {0.0.0.0:2379 0  <nil>}')),(0,c.kt)("td",{parentName:"tr",align:null},"The host firewall is preventing network communication.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"rafthttp: request cluster ID mismatch")),(0,c.kt)("td",{parentName:"tr",align:null},"The node with the etcd instance logging ",(0,c.kt)("inlineCode",{parentName:"td"},"rafthttp: request cluster ID mismatch")," is trying to join a cluster that has already been formed with another peer. The node should be removed from the cluster, and re-added.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"rafthttp: failed to find member")),(0,c.kt)("td",{parentName:"tr",align:null},"The cluster state (",(0,c.kt)("inlineCode",{parentName:"td"},"/var/lib/etcd"),") contains wrong information to join the cluster. The node should be removed from the cluster, the state directory should be cleaned and the node should be re-added.")))),(0,c.kt)("h2",{id:"etcd-cluster-and-connectivity-checks"},"etcd Cluster and Connectivity Checks"),(0,c.kt)("p",null,"The address where etcd is listening depends on the address configuration of the host etcd is running on. If an internal address is configured for the host etcd is running on, the endpoint for ",(0,c.kt)("inlineCode",{parentName:"p"},"etcdctl")," needs to be specified explicitly. If any of the commands respond with ",(0,c.kt)("inlineCode",{parentName:"p"},"Error:  context deadline exceeded"),", the etcd instance is unhealthy (either quorum is lost or the instance is not correctly joined in the cluster)"),(0,c.kt)("h3",{id:"check-etcd-members-on-all-nodes"},"Check etcd Members on all Nodes"),(0,c.kt)("p",null,"Output should contain all the nodes with the ",(0,c.kt)("inlineCode",{parentName:"p"},"etcd")," role and the output should be identical on all nodes."),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl member list\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'docker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list"\n')),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"xxx, started, etcd-xxx, https://IP:2380, https://IP:2379,https://IP:4001\nxxx, started, etcd-xxx, https://IP:2380, https://IP:2379,https://IP:4001\nxxx, started, etcd-xxx, https://IP:2380, https://IP:2379,https://IP:4001\n")),(0,c.kt)("h3",{id:"check-endpoint-status"},"Check Endpoint Status"),(0,c.kt)("p",null,"The values for ",(0,c.kt)("inlineCode",{parentName:"p"},"RAFT TERM")," should be equal and ",(0,c.kt)("inlineCode",{parentName:"p"},"RAFT INDEX")," should be not be too far apart from each other."),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec -e ETCDCTL_ENDPOINTS=$(docker exec etcd /bin/sh -c \"etcdctl member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") etcd etcdctl endpoint status --write-out table\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl endpoint status --endpoints=$(docker exec etcd /bin/sh -c \"etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") --write-out table\n")),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"+-----------------+------------------+---------+---------+-----------+-----------+------------+\n| ENDPOINT        |        ID        | VERSION | DB SIZE | IS LEADER | RAFT TERM | RAFT INDEX |\n+-----------------+------------------+---------+---------+-----------+-----------+------------+\n| https://IP:2379 | 333ef673fc4add56 |  3.2.18 |   24 MB |     false |        72 |      66887 |\n| https://IP:2379 | 5feed52d940ce4cf |  3.2.18 |   24 MB |      true |        72 |      66887 |\n| https://IP:2379 | db6b3bdb559a848d |  3.2.18 |   25 MB |     false |        72 |      66887 |\n+-----------------+------------------+---------+---------+-----------+-----------+------------+\n")),(0,c.kt)("h3",{id:"check-endpoint-health"},"Check Endpoint Health"),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec -e ETCDCTL_ENDPOINTS=$(docker exec etcd /bin/sh -c \"etcdctl member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") etcd etcdctl endpoint health\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl endpoint health --endpoints=$(docker exec etcd /bin/sh -c \"etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\")\n")),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"https://IP:2379 is healthy: successfully committed proposal: took = 2.113189ms\nhttps://IP:2379 is healthy: successfully committed proposal: took = 2.649963ms\nhttps://IP:2379 is healthy: successfully committed proposal: took = 2.451201ms\n")),(0,c.kt)("h3",{id:"check-connectivity-on-port-tcp2379"},"Check Connectivity on Port TCP/2379"),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'for endpoint in $(docker exec etcd /bin/sh -c "etcdctl member list | cut -d, -f5"); do\n   echo "Validating connection to ${endpoint}/health"\n   docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -w "\\n" --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) "${endpoint}/health"\ndone\n')),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'for endpoint in $(docker exec etcd /bin/sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5"); do\n  echo "Validating connection to ${endpoint}/health";\n  docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -w "\\n" --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) "${endpoint}/health"\ndone\n')),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'Validating connection to https://IP:2379/health\n{"health": "true"}\nValidating connection to https://IP:2379/health\n{"health": "true"}\nValidating connection to https://IP:2379/health\n{"health": "true"}\n')),(0,c.kt)("h3",{id:"check-connectivity-on-port-tcp2380"},"Check Connectivity on Port TCP/2380"),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'for endpoint in $(docker exec etcd /bin/sh -c "etcdctl member list | cut -d, -f4"); do\n  echo "Validating connection to ${endpoint}/version";\n  docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl --http1.1 -s -w "\\n" --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) "${endpoint}/version"\ndone\n')),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'for endpoint in $(docker exec etcd /bin/sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f4"); do\n  echo "Validating connection to ${endpoint}/version";\n  docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl --http1.1 -s -w "\\n" --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) "${endpoint}/version"\ndone\n')),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'Validating connection to https://IP:2380/version\n{"etcdserver":"3.2.18","etcdcluster":"3.2.0"}\nValidating connection to https://IP:2380/version\n{"etcdserver":"3.2.18","etcdcluster":"3.2.0"}\nValidating connection to https://IP:2380/version\n{"etcdserver":"3.2.18","etcdcluster":"3.2.0"}\n')),(0,c.kt)("h2",{id:"etcd-alarms"},"etcd Alarms"),(0,c.kt)("p",null,"etcd will trigger alarms, for instance when it runs out of space."),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl alarm list\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'docker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT alarm list"\n')),(0,c.kt)("p",null,"Example output when NOSPACE alarm is triggered:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"memberID:x alarm:NOSPACE\nmemberID:x alarm:NOSPACE\nmemberID:x alarm:NOSPACE\n")),(0,c.kt)("h2",{id:"etcd-space-errors"},"etcd Space Errors"),(0,c.kt)("p",null,"Related error messages are ",(0,c.kt)("inlineCode",{parentName:"p"},"etcdserver: mvcc: database space exceeded")," or ",(0,c.kt)("inlineCode",{parentName:"p"},"applying raft message exceeded backend quota"),". Alarm ",(0,c.kt)("inlineCode",{parentName:"p"},"NOSPACE")," will be triggered."),(0,c.kt)("p",null,"Resolutions:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"#compact-the-keyspace"},"Compact the Keyspace")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"#defrag-all-etcd-members"},"Defrag All etcd Members")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"#check-endpoint-status"},"Check Endpoint Status")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"#disarm-alarm"},"Disarm Alarm"))),(0,c.kt)("h3",{id:"compact-the-keyspace"},"Compact the Keyspace"),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"rev=$(docker exec etcd etcdctl endpoint status --write-out json | egrep -o '\"revision\":[0-9]*' | egrep -o '[0-9]*')\ndocker exec etcd etcdctl compact \"$rev\"\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'rev=$(docker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT endpoint status --write-out json | egrep -o \'\\"revision\\":[0-9]*\' | egrep -o \'[0-9]*\'")\ndocker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT compact \\"$rev\\""\n')),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"compacted revision xxx\n")),(0,c.kt)("h3",{id:"defrag-all-etcd-members"},"Defrag All etcd Members"),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec -e ETCDCTL_ENDPOINTS=$(docker exec etcd /bin/sh -c \"etcdctl member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") etcd etcdctl defrag\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd sh -c \"etcdctl defrag --endpoints=$(docker exec etcd /bin/sh -c \"etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\")\"\n")),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Finished defragmenting etcd member[https://IP:2379]\nFinished defragmenting etcd member[https://IP:2379]\nFinished defragmenting etcd member[https://IP:2379]\n")),(0,c.kt)("h3",{id:"check-endpoint-status-1"},"Check Endpoint Status"),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec -e ETCDCTL_ENDPOINTS=$(docker exec etcd /bin/sh -c \"etcdctl member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") etcd etcdctl endpoint status --write-out table\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd sh -c \"etcdctl endpoint status --endpoints=$(docker exec etcd /bin/sh -c \"etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") --write-out table\"\n")),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"+-----------------+------------------+---------+---------+-----------+-----------+------------+\n| ENDPOINT        |        ID        | VERSION | DB SIZE | IS LEADER | RAFT TERM | RAFT INDEX |\n+-----------------+------------------+---------+---------+-----------+-----------+------------+\n| https://IP:2379 |  e973e4419737125 |  3.2.18 |  553 kB |     false |        32 |    2449410 |\n| https://IP:2379 | 4a509c997b26c206 |  3.2.18 |  553 kB |     false |        32 |    2449410 |\n| https://IP:2379 | b217e736575e9dd3 |  3.2.18 |  553 kB |      true |        32 |    2449410 |\n+-----------------+------------------+---------+---------+-----------+-----------+------------+\n")),(0,c.kt)("h3",{id:"disarm-alarm"},"Disarm Alarm"),(0,c.kt)("p",null,"After verifying that the DB size went down after compaction and defragmenting, the alarm needs to be disarmed for etcd to allow writes again."),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl alarm list\ndocker exec etcd etcdctl alarm disarm\ndocker exec etcd etcdctl alarm list\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'docker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT alarm list"\ndocker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT alarm disarm"\ndocker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT alarm list"\n')),(0,c.kt)("p",null,"Example output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl alarm list\nmemberID:x alarm:NOSPACE\nmemberID:x alarm:NOSPACE\nmemberID:x alarm:NOSPACE\ndocker exec etcd etcdctl alarm disarm\ndocker exec etcd etcdctl alarm list\n")),(0,c.kt)("h2",{id:"log-level"},"Log Level"),(0,c.kt)("p",null,"The log level of etcd can be changed dynamically via the API. You can configure debug logging using the commands below."),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -XPUT -d \'{"Level":"DEBUG"}\' --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) $(docker exec etcd printenv ETCDCTL_ENDPOINTS)/config/local/log\n')),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -XPUT -d \'{"Level":"DEBUG"}\' --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) $(docker exec etcd printenv ETCDCTL_ENDPOINT)/config/local/log\n')),(0,c.kt)("p",null,"To reset the log level back to the default (",(0,c.kt)("inlineCode",{parentName:"p"},"INFO"),"), you can use the following command."),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -XPUT -d \'{"Level":"INFO"}\' --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) $(docker exec etcd printenv ETCDCTL_ENDPOINTS)/config/local/log\n')),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -XPUT -d \'{"Level":"INFO"}\' --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) $(docker exec etcd printenv ETCDCTL_ENDPOINT)/config/local/log\n')),(0,c.kt)("h2",{id:"etcd-content"},"etcd Content"),(0,c.kt)("p",null,"If you want to investigate the contents of your etcd, you can either watch streaming events or you can query etcd directly, see below for examples."),(0,c.kt)("h3",{id:"watch-streaming-events"},"Watch Streaming Events"),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl watch --prefix /registry\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl --endpoints=\\$ETCDCTL_ENDPOINT watch --prefix /registry\n")),(0,c.kt)("p",null,"If you only want to see the affected keys (and not the binary data), you can append ",(0,c.kt)("inlineCode",{parentName:"p"},"| grep -a ^/registry")," to the command to filter for keys only."),(0,c.kt)("h3",{id:"query-etcd-directly"},"Query etcd Directly"),(0,c.kt)("p",null,"Command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl get /registry --prefix=true --keys-only\n")),(0,c.kt)("p",null,"Command when using etcd version lower than 3.3.x (Kubernetes 1.13.x and lower) and ",(0,c.kt)("inlineCode",{parentName:"p"},"--internal-address")," was specified when adding the node:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl --endpoints=\\$ETCDCTL_ENDPOINT get /registry --prefix=true --keys-only\n")),(0,c.kt)("p",null,"You can process the data to get a summary of count per key, using the command below:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl get /registry --prefix=true --keys-only | grep -v ^$ | awk -F'/' '{ if ($3 ~ /cattle.io/) {h[$3\"/\"$4]++} else { h[$3]++ }} END { for(k in h) print h[k], k }' | sort -nr\n")),(0,c.kt)("h2",{id:"replacing-unhealthy-etcd-nodes"},"Replacing Unhealthy etcd Nodes"),(0,c.kt)("p",null,"When a node in your etcd cluster becomes unhealthy, the recommended approach is to fix or remove the failed or unhealthy node before adding a new etcd node to the cluster."))}k.isMDXComponent=!0}}]);