import{_ as c,p as t,k as p,l as d,A as o,L as s,u as a,q as u,x as l}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const _={name:"DeviceFemsInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},f={class:"device-fems-inverter"},m={class:"small"};function b(e,n,v,g,h,w){const i=t("openwb-base-heading"),r=t("openwb-base-alert");return p(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für openEMS, Fenecon FEMS, Kaco Hy-Control Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const E=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fems/inverter.vue"]]);export{E as default};
