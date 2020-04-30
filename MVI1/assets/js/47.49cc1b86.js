(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{401:function(t,e,a){"use strict";a.r(e);var l=a(35),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"solution-sizing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-sizing"}},[t._v("#")]),t._v(" Solution sizing")]),t._v(" "),a("p",[t._v("By default, the Ansible playbooks create VMs according to the following recommended specifications. You can override\nthese recommended values in the configuration files, as detailed in the section\n"),a("a",{attrs:{href:"../config-core/group-vars"}},[t._v("Configuring the solution")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"admin-cluster-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-cluster-nodes"}},[t._v("#")]),t._v(" Admin cluster nodes")]),t._v(" "),a("p",[t._v("For high resiliency requirements, we recommend deploying HPE SimpliVity clusters with three (or more) nodes with\nadmin and user cluster components spread across the three nodes.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Rancher nodes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Ubuntu 18.04")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),a("br"),t._v("8GB RAM"),a("br"),t._v("60GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Three nodes are deployed by default.")])])])]),t._v(" "),a("h2",{attrs:{id:"load-balancers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancers"}},[t._v("#")]),t._v(" Load balancers")]),t._v(" "),a("p",[t._v("Two load balancer VMs are configured by default.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Load balancers")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Ubuntu 18.04")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),a("br"),t._v("8GB RAM"),a("br"),t._v("60GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Two load balancers are deployed by default. You can configure one (no HA) or 0 where you use your own existing load balancers")])])])]),t._v(" "),a("h2",{attrs:{id:"support-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-node"}},[t._v("#")]),t._v(" Support node")]),t._v(" "),a("p",[t._v("A single VM is configured to provide DHCP services")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Support")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Ubuntu 18.04")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),a("br"),t._v("8GB RAM"),a("br"),t._v("60GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Single node for DHCP")])])])]),t._v(" "),a("h2",{attrs:{id:"user-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-cluster"}},[t._v("#")]),t._v(" User cluster")]),t._v(" "),a("p",[t._v("By default, one master and two worker nodes are deployed.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Sizing")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Master")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Ubuntu 18.04")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),a("br"),t._v("8GB RAM"),a("br"),t._v("60GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Worker")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Ubuntu 18.04")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2x vCPU"),a("br"),t._v("8GB RAM"),a("br"),t._v("60GB disk space")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])])])}),[],!1,null,null,null);e.default=i.exports}}]);