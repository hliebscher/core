import{_ as d,p as s,k as c,l as p,A as l,L as r,u}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const f={name:"VehicleSocTronity",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(a,e=void 0){this.$emit("update:configuration",{value:a,object:e})}}},g={class:"vehicle-soc-tronity"};function m(a,e,i,v,_,n){const o=s("openwb-base-text-input");return c(),p("div",g,[l(o,{title:"Vehicle ID",subtype:"text",required:"","model-value":i.vehicle.configuration.vehicle_id,"onUpdate:modelValue":e[0]||(e[0]=t=>n.updateConfiguration(t,"configuration.vehicle_id"))},{help:r(()=>[u(' Vehicle ID aus Tronity angeben. Diese ist in den "Assigned Vehicles" zu finden. ')]),_:1},8,["model-value"]),l(o,{title:"Client ID",subtype:"text",required:"","model-value":i.vehicle.configuration.client_id,"onUpdate:modelValue":e[1]||(e[1]=t=>n.updateConfiguration(t,"configuration.client_id"))},{help:r(()=>[u(' Client ID aus Tronity angeben. Diese ist in den "Application Settings" zu finden. ')]),_:1},8,["model-value"]),l(o,{title:"Client Secret",subtype:"password",required:"","model-value":i.vehicle.configuration.client_secret,"onUpdate:modelValue":e[2]||(e[2]=t=>n.updateConfiguration(t,"configuration.client_secret"))},{help:r(()=>[u(' Client Secret aus Tronity angeben. Diese ist in den "Application Settings" zu finden. Das Client Secret kann nur einmalig abgerufen werden. Ggf. neu erzeugen, womit frühere Client Secrets ungültig werden. ')]),_:1},8,["model-value"])])}const C=d(f,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/tronity/vehicle.vue"]]);export{C as default};