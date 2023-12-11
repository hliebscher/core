import{u as S}from"./index-f1ef9dbb.js";import{l as y,C as v,F as k,D as q}from"./vendor-fortawesome-e1f714a9.js";import{_ as h}from"./vendor-inkline-1cb250cb.js";import{l as o,o as i,n as m,p as t,k as s,s as e,I as M,j as A,i as x}from"./vendor-5b88de11.js";import{D as I}from"./DashBoardCard-b23b7b4e.js";y.add(v);const F={name:"ReloadButton",props:{},data(){return{}},components:{FontAwesomeIcon:k},methods:{reloadDisplay(){location.reload()}}};function D(w,l,f,b,d,_){const r=o("FontAwesomeIcon"),n=o("i-button");return i(),m(n,{color:"success",onClick:l[0]||(l[0]=a=>_.reloadDisplay())},{default:t(()=>[s(" Display neu laden "),e(r,{"fixed-width":"",icon:["fas","fa-undo"]})]),_:1})}const N=h(F,[["render",D]]);y.add(v);const W={name:"RebootButton",props:{},data(){return{mqttStore:S(),showModal:!1}},components:{FontAwesomeIcon:k},methods:{toggleModal(){this.showModal=!this.showModal},cancel(){this.toggleModal()},confirm(){console.log("reboot requested"),this.$root.sendSystemCommand("systemReboot")}}};function L(w,l,f,b,d,_){const r=o("FontAwesomeIcon"),n=o("i-container"),a=o("i-button"),u=o("i-column"),p=o("i-row"),g=o("i-modal");return i(),m(a,{color:"warning",onClick:l[3]||(l[3]=c=>_.toggleModal())},{default:t(()=>[s(" openWB neu starten "),e(r,{"fixed-width":"",icon:["fas","fa-undo"]}),(i(),m(M,{to:"body"},[e(g,{modelValue:d.showModal,"onUpdate:modelValue":l[2]||(l[2]=c=>d.showModal=c),size:"sm"},{header:t(()=>[s(" openWB neu starten... ")]),footer:t(()=>[e(n,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{class:"_text-align:right"},{default:t(()=>[e(a,{color:"success",onClick:l[0]||(l[0]=c=>_.cancel())},{default:t(()=>[s(" Zurück ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(a,{color:"danger",onClick:l[1]||(l[1]=c=>_.confirm())},{default:t(()=>[s("Neustart")]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(n,null,{default:t(()=>[s(" Möchten Sie diese openWB wirklich neu starten? ")]),_:1})]),_:1},8,["modelValue"])]))]),_:1})}const R=h(W,[["render",L]]);y.add(q);const z={name:"ShutdownButton",props:{},data(){return{mqttStore:S(),showModal:!1}},components:{FontAwesomeIcon:k},methods:{toggleModal(){this.showModal=!this.showModal},cancel(){this.toggleModal()},confirm(){console.log("shutdown requested"),this.$root.sendSystemCommand("systemShutdown")}}},T=A("br",null,null,-1);function U(w,l,f,b,d,_){const r=o("FontAwesomeIcon"),n=o("i-container"),a=o("i-button"),u=o("i-column"),p=o("i-row"),g=o("i-modal");return i(),m(a,{color:"danger",onClick:l[3]||(l[3]=c=>_.toggleModal())},{default:t(()=>[s(" openWB ausschalten "),e(r,{"fixed-width":"",icon:["fas","fa-power-off"]}),(i(),m(M,{to:"body"},[e(g,{modelValue:d.showModal,"onUpdate:modelValue":l[2]||(l[2]=c=>d.showModal=c),size:"sm"},{header:t(()=>[s(" openWB ausschalten... ")]),footer:t(()=>[e(n,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{class:"_text-align:right"},{default:t(()=>[e(a,{color:"success",onClick:l[0]||(l[0]=c=>_.cancel())},{default:t(()=>[s(" Zurück ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(a,{color:"danger",onClick:l[1]||(l[1]=c=>_.confirm())},{default:t(()=>[s("Ausschalten")]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(n,null,{default:t(()=>[s(" Möchten Sie diese openWB wirklich ausschalten?"),T,s(" Nach dem Ausschalten muss die Ladestation komplett spannungsfrei geschaltet werden. Erst beim erneuten Zuschalten der Spannung fährt das System wieder hoch. ")]),_:1})]),_:1},8,["modelValue"])]))]),_:1})}const Z=h(z,[["render",U]]),E={name:"StatusView",props:{changesLocked:{required:!1,type:Boolean,default:!1}},components:{ReloadButton:N,RebootButton:R,ShutdownButton:Z,DashBoardCard:I},data(){return{mqttStore:S()}}};function P(w,l,f,b,d,_){const r=o("i-form-label"),n=o("i-column"),a=o("i-input"),u=o("i-row"),p=o("i-form-group"),g=o("reload-button"),c=o("reboot-button"),B=o("shutdown-button"),C=o("i-form"),V=o("i-container"),$=o("dash-board-card");return i(),m($,{color:"primary"},{headerLeft:t(()=>[s(" Status ")]),default:t(()=>[e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{class:"_margin-top:2"},{default:t(()=>[e(n,{xl:"2",lg:"3",md:"4"},{default:t(()=>[e(r,null,{default:t(()=>[s(" IP-Adresse ")]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(a,{id:"input_system_ip",plaintext:"","model-value":d.mqttStore.getSystemIp},null,8,["model-value"])]),_:1})]),_:1}),e(u,{class:"_margin-top:1"},{default:t(()=>[e(n,{xl:"2",lg:"3",md:"4"},{default:t(()=>[e(r,null,{default:t(()=>[s(" Systemzeit ")]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(a,{id:"input_system_time",plaintext:"","model-value":d.mqttStore.getSystemTime},null,8,["model-value"])]),_:1})]),_:1}),e(u,{class:"_margin-top:1"},{default:t(()=>[e(n,{xl:"2",lg:"3",md:"4"},{default:t(()=>[e(r,null,{default:t(()=>[s(" Version ")]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(a,{id:"input_system_version",plaintext:"","model-value":d.mqttStore.getSystemVersion},null,8,["model-value"])]),_:1})]),_:1}),e(u,{class:"_margin-top:1"},{default:t(()=>[e(n,{xl:"2",lg:"3",md:"4"},{default:t(()=>[e(r,null,{default:t(()=>[s(" Version (Details) ")]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(a,{id:"input_system_commit",plaintext:"","model-value":d.mqttStore.getSystemCurrentCommit},null,8,["model-value"])]),_:1})]),_:1}),e(u,{class:"_margin-top:1"},{default:t(()=>[e(n,{xl:"2",lg:"3",md:"4"},{default:t(()=>[e(r,null,{default:t(()=>[s(" Entwicklungszweig ")]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(a,{id:"input_system_branch",plaintext:"","model-value":d.mqttStore.getSystemBranch},null,8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),f.changesLocked?x("",!0):(i(),m(u,{key:0,class:"_margin-top:5",between:""},{default:t(()=>[e(n,null,{default:t(()=>[e(g,{block:""})]),_:1})]),_:1})),f.changesLocked?x("",!0):(i(),m(u,{key:1,between:""},{default:t(()=>[e(n,null,{default:t(()=>[e(c,{block:"",class:"_margin-top:2"})]),_:1}),e(n,null,{default:t(()=>[e(B,{block:"",class:"_margin-top:2"})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})}const K=h(E,[["render",P]]);export{K as default};