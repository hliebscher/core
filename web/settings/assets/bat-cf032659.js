import{_ as r,q as n,l as p,m as d,A as o,K as s,v as a,u as l,x as u}from"./vendor-6ce277ad.js";import"./vendor-sortablejs-bb80b62c.js";const _={name:"DeviceTeslaBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-tesla-bat"},m={class:"small"};function b(e,t,g,v,h,w){const i=n("openwb-base-heading"),c=n("openwb-base-alert");return p(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für Tesla Batteriespeicher "),l("span",m,"(Modul: "+u(e.$options.name)+")",1)]),_:1}),o(c,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=r(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/tesla/bat.vue"]]);export{x as default};