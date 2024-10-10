"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[31263],{80983:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>y,toc:()=>g});t(67294);var s=t(3905),m=t(54734),i=t(90238),n=t.n(i),l=t(36765),r=t(99473),p=t(50690),o=t(88337),c=t(48951),d=t(50551);const h={id:"patch-namespaced-node-network",title:"Patch a Namespaced Node Network",description:"Patch a NodeNetwork object.",sidebar_label:"Patch a Namespaced Node Network",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V01T4zgQ/SuuPu2HSWB2D7O+AbtVQ+0OUAPMJeTQsTuxBlvSSDKQSfm/b7VkJzE43kmG5RIjtVqv+3VLTytwuLCQTOCS3JMyDxamMWRkUyO0E0pCAtfo0jzC6FJl1FhFavaFUjeCGJQmg2x5kUECmm0vsSSrMaVsawnEYOhrRdadqWwJyQpSJR1Jx5+odSFS72b8xSp55P38yp88bdOcSuQvt9QECYTtIQYnXMEDD+/tSKjR48nIo4W6jjtOSzILegOvdYhCGMogcaYiP2C1kpYsu3p3fMw/3Qxe/Q3xULjDaDYbTgC1+EzGstsYHoTMmC5tmAQnAoItk40z64yQC6ibRX0TJTnM0GGAP8eqYKycx6K4mkMyGUYmsaTXYPxo326yrZGe2bqPgSu/6UdyCPW0jsFqSg+FylXZC7dDWx9qkfaPtx5fTcYbgMCWYXYoZBn6ZZSjeSTryOSpCDmYkcOT0VZP3XAOQjYcusrukY9u3KmSmeCo7RY2NAaXEINwVO7jejvVDa4m7lf5LtC6W4PS+s1vxY5iYbM7naGjnSYlWYuL/jlDaHcQusnbIbR1rfbg8LzNN7PH9RPsL/4czH8zLqSjBRmIYa5MiS4M/fZuG87xltd/hHy4eRnnmi3MAhIsrjvU7N/rQmb0/D04mS7sb6QSOVsXe3jqP2Fe8qeNKoVNK9VJwkypglC2hdBfPT/esVsE1OEQees2C6lvktEGs6vpvpunTj39f9zsSP0hLRhDZSk7W35EiQsqSbpWffSSHow/FygHzPY5mps2lo7MnO827u4Dj/amXqYHrmetUsfw+/HJazlyJ7FyuTLiG2UHCJN1B/gdNBosyZGxvkoD5W0hChk0YQ4vRSXflpGaRy6nyJBVlUkJXoqreOfmvK9zZNjVBI++HR/9MW1+7++Ppr8wbR0wQWsMIQoCI2LjCGUWcY4imypNcWQrVsA2misTOcLSegttFC+xb4t76qVYrtZyOizKIYExamHHO6pg3FTBmMVIY2PHK46n5jOB0soIt7xhZOEgOEPb0TO5cxoa7L4F/HwdwxmhITNkGQy4HrhsPm2E/l/PWGouXj7MhJwr76Wp5w9tBNHp9QWn8bEVrtAE489uZV2JciMnNy+S9UPDP06izVPjhZBbl/h/PGaa8Bw9u7EuUIRTwhTsI3DgJThD3cECB9FAD7KwZQJiSNp7M1fWsavVaoaW7kxR1zz8tSKzhGQyjeERjcAZJ2mygkxY/s4gmWNhaSC6nz41dfhztKPBeiNsbyLJ99AjFhX/xw8MWra9zO10EI4faqsD0YZm98I4J8y4dCerZv48gDy6ZS+b9UMvUI49LD5NU9JuYBl02vf69Pb8A8Qwa168pcp4kcEnPjLwCRK4h3vwr+i1+vbjLI3lovKKFoJj/vsXE85kiA==",sidebar_class_name:"patch api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},k=void 0,y={unversionedId:"api/patch-namespaced-node-network",id:"version-v1.3/api/patch-namespaced-node-network",title:"Patch a Namespaced Node Network",description:"Patch a NodeNetwork object.",source:"@site/versioned_docs/version-v1.3/api/patch-namespaced-node-network.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-node-network",permalink:"/v1.3/api/patch-namespaced-node-network",draft:!1,editUrl:null,tags:[],version:"v1.3",frontMatter:{id:"patch-namespaced-node-network",title:"Patch a Namespaced Node Network",description:"Patch a NodeNetwork object.",sidebar_label:"Patch a Namespaced Node Network",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V01T4zgQ/SuuPu2HSWB2D7O+AbtVQ+0OUAPMJeTQsTuxBlvSSDKQSfm/b7VkJzE43kmG5RIjtVqv+3VLTytwuLCQTOCS3JMyDxamMWRkUyO0E0pCAtfo0jzC6FJl1FhFavaFUjeCGJQmg2x5kUECmm0vsSSrMaVsawnEYOhrRdadqWwJyQpSJR1Jx5+odSFS72b8xSp55P38yp88bdOcSuQvt9QECYTtIQYnXMEDD+/tSKjR48nIo4W6jjtOSzILegOvdYhCGMogcaYiP2C1kpYsu3p3fMw/3Qxe/Q3xULjDaDYbTgC1+EzGstsYHoTMmC5tmAQnAoItk40z64yQC6ibRX0TJTnM0GGAP8eqYKycx6K4mkMyGUYmsaTXYPxo326yrZGe2bqPgSu/6UdyCPW0jsFqSg+FylXZC7dDWx9qkfaPtx5fTcYbgMCWYXYoZBn6ZZSjeSTryOSpCDmYkcOT0VZP3XAOQjYcusrukY9u3KmSmeCo7RY2NAaXEINwVO7jejvVDa4m7lf5LtC6W4PS+s1vxY5iYbM7naGjnSYlWYuL/jlDaHcQusnbIbR1rfbg8LzNN7PH9RPsL/4czH8zLqSjBRmIYa5MiS4M/fZuG87xltd/hHy4eRnnmi3MAhIsrjvU7N/rQmb0/D04mS7sb6QSOVsXe3jqP2Fe8qeNKoVNK9VJwkypglC2hdBfPT/esVsE1OEQees2C6lvktEGs6vpvpunTj39f9zsSP0hLRhDZSk7W35EiQsqSbpWffSSHow/FygHzPY5mps2lo7MnO827u4Dj/amXqYHrmetUsfw+/HJazlyJ7FyuTLiG2UHCJN1B/gdNBosyZGxvkoD5W0hChk0YQ4vRSXflpGaRy6nyJBVlUkJXoqreOfmvK9zZNjVBI++HR/9MW1+7++Ppr8wbR0wQWsMIQoCI2LjCGUWcY4imypNcWQrVsA2misTOcLSegttFC+xb4t76qVYrtZyOizKIYExamHHO6pg3FTBmMVIY2PHK46n5jOB0soIt7xhZOEgOEPb0TO5cxoa7L4F/HwdwxmhITNkGQy4HrhsPm2E/l/PWGouXj7MhJwr76Wp5w9tBNHp9QWn8bEVrtAE489uZV2JciMnNy+S9UPDP06izVPjhZBbl/h/PGaa8Bw9u7EuUIRTwhTsI3DgJThD3cECB9FAD7KwZQJiSNp7M1fWsavVaoaW7kxR1zz8tSKzhGQyjeERjcAZJ2mygkxY/s4gmWNhaSC6nz41dfhztKPBeiNsbyLJ99AjFhX/xw8MWra9zO10EI4faqsD0YZm98I4J8y4dCerZv48gDy6ZS+b9UMvUI49LD5NU9JuYBl02vf69Pb8A8Qwa168pcp4kcEnPjLwCRK4h3vwr+i1+vbjLI3lovKKFoJj/vsXE85kiA==",sidebar_class_name:"patch api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Patch a Namespaced Network Attachment Definition",permalink:"/v1.3/api/patch-namespaced-network-attachment-definition"},next:{title:"Patch a Namespaced Persistent Volume Claim",permalink:"/v1.3/api/patch-namespaced-persistent-volume-claim"}},u={},g=[{value:"Request",id:"request",level:2}],N={toc:g},b="wrapper";function f({components:e,...a}){return(0,s.kt)(b,{...N,...a,components:e,mdxType:"MDXLayout"},(0,s.kt)("h1",{className:"openapi__heading"},"Patch a Namespaced Node Network"),(0,s.kt)(n(),{method:"patch",path:"/apis/network.harvesterhci.io/v1beta1/nodenetworks/{name}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Patch a NodeNetwork object."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"namespace",in:"path",description:"Object name and auth scope, such as for teams and projects",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"object"))))),(0,s.kt)(d.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"object")))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"nic",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"nodeName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"networkIDs",required:!1,schemaName:"int32[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int32",default:0}},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"networkLinkStatus"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"property name*"),(0,s.kt)("span",{className:"openapi-schema__name"}," network.harvesterhci.io.v1beta1.LinkStatus"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"index",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"mac",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"masterIndex",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"promiscuous",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"nics"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"index",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"masterIndex",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"usedByManagementNetwork",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"usedByVlanNetwork",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "nic": "string",\n    "nodeName": "string",\n    "type": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "networkIDs": [\n      0\n    ],\n    "networkLinkStatus": {},\n    "nics": [\n      {\n        "index": 0,\n        "masterIndex": 0,\n        "name": "string",\n        "state": "string",\n        "type": "string",\n        "usedByManagementNetwork": true,\n        "usedByVlanNetwork": true\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))))))))))}f.isMDXComponent=!0}}]);