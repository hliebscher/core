import{_ as c,p as t,k as _,l as b,A as o,L as s,u as d,q as f,x as g}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const v={name:"DeviceSungrow",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(a,e=void 0){this.$emit("update:configuration",{value:a,object:e})}}},w={class:"device-sungrow"},x={class:"small"};function h(a,e,i,q,C,u){const l=t("openwb-base-heading"),p=t("openwb-base-alert"),m=t("openwb-base-text-input"),r=t("openwb-base-number-input");return _(),b("div",w,[o(l,null,{default:s(()=>[d(" Einstellungen für Sungrow "),f("span",x,"(Modul: "+g(a.$options.name)+")",1)]),_:1}),o(p,{subtype:"info"},{default:s(()=>[d(" Bitte zur Fehlervermeidung die Firmware des Sungrow Wechselrichters und WiNet-S Dongels aktuell halten. ")]),_:1}),o(m,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>u.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),o(r,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>u.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),o(r,{title:"Geräteadresse",required:"",min:1,max:255,"model-value":i.configuration.modbus_id,"onUpdate:modelValue":e[2]||(e[2]=n=>u.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const S=c(v,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sungrow/device.vue"]]);export{S as default};