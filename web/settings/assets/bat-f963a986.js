import{_ as r,p as n,k as p,l as d,A as o,L as s,u as a,q as u,x as l}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const _={name:"DeviceRCTBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-rct-bat"},m={class:"small"};function b(e,t,g,h,v,w){const i=n("openwb-base-heading"),c=n("openwb-base-alert");return p(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für RCT Batteriespeicher "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(c,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=r(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/rct/bat.vue"]]);export{x as default};
