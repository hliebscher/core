import{_ as m,q as t,k as _,l as b,B as o,M as a,x as s,u as i,y as f}from"./vendor-d624aab7.js";import"./vendor-sortablejs-c0fcb1ea.js";const g={name:"DeviceMTecCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},h={class:"device-mtec-counter"},v={class:"small"},w=i("span",{class:"text-danger"}," M-Tec Zähler geben keine Ströme aus, sodass nur ein Lastmanagement anhand der Gesamtleistung, aber nicht phasenbasiert möglich ist. ",-1);function M(n,e,r,x,B,d){const u=t("openwb-base-heading"),c=t("openwb-base-alert"),p=t("openwb-base-number-input");return _(),b("div",h,[o(u,null,{default:a(()=>[s(" Einstellungen für M-Tec Zähler "),i("span",v,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),o(c,{subtype:"info"},{default:a(()=>[w]),_:1}),o(p,{title:"Modbus ID",required:"","model-value":r.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=l=>d.updateConfiguration(l,"configuration.modbus_id"))},{help:a(()=>[s(" Die Standard-Modbus-ID von M-Tec ist 247 ")]),_:1},8,["model-value"])])}const T=m(g,[["render",M],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/mtec/counter.vue"]]);export{T as default};
