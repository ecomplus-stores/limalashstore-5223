(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{261:function(e,i,t){var s=t(266);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t(187).default)("9248a57e",s,!0,{})},262:function(e,i,t){var s=t(273);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t(187).default)("48117795",s,!0,{})},263:function(e,i,t){"use strict";i.a=(e,i)=>e.sort(((e,t)=>{if(e.app_id===t.app_id)return 0;const s=i.indexOf(e.app_id),a=i.indexOf(t.app_id);return s>-1?a>-1?s<a?-1:1:s>-1?-1:1:a>-1?1:0}))},265:function(e,i,t){"use strict";t(261)},266:function(e,i,t){(i=t(186)(!0)).push([e.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,4BAA4B,uCAAuC,CAAC,8BAA8B,qBAAqB,CAAC,kCAAkC,CAAC,0BAA0B,CAAC,6BAA6B,CAAC,4BAA4B,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),e.exports=i},269:function(e,i,t){"use strict";t(8),t(3),t(22),t(17),t(15),t(33),t(193);var s=t(27),a=t(38),o=t(55),r=t(103),n=t(40),c=t(5),p=t(263),l=t(264),d=t.n(l),u=t(267);const h="object"==typeof window&&window.localStorage,A="shipping-to-zip",v="object"==typeof window&&window.propsShippingCalculator||{},m=e=>{const i={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((t=>{void 0!==e[t]&&(i[t]=e[t])})),i};var g={name:"ShippingCalculator",components:{CleaveInput:d.a,ShippingLine:u.a},props:{zipCode:String,canSelectServices:Boolean,canAutoSelectService:{type:Boolean,default:"boolean"!=typeof v.canAutoSelectService||v.canAutoSelectService},canInputZip:{type:Boolean,default:"boolean"!=typeof v.canInputZip||v.canInputZip},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},skipAppIds:Array,shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(o.a)(s.j),i19calculateShipping:()=>Object(o.a)(s.E),i19zipCode:()=>Object(o.a)(s.ye),i19freeShipping:()=>Object(o.a)(s.Cb).toLowerCase(),i19selectShippingMsg:()=>Object(o.a)({pt_br:"Selecione uma forma de envio abaixo",en_us:"Select a shipping method below"}),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},productionDeadline(){let e=0;return this.shippedItems.forEach((i=>{if(i.quantity&&i.production_time){const{days:t,cumulative:s}=i.production_time,a=s?t*i.quantity:t;a>e&&(e=a)}})),e}},methods:{formatMoney:r.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],e.length&&(e.forEach((i=>{const{validated:t,error:s,response:a}=i;if(!t||s)return;if(this.skipAppIds&&this.skipAppIds.includes(i.app_id)&&e.filter((e=>{let{app_id:i}=e;return!this.skipAppIds.includes(i)})).length)return;a.shipping_services.forEach((e=>{this.shippingServices.push({app_id:i.app_id,...e})}));const o=a.free_shipping_from_value;o&&(!this.freeFromValue||this.freeFromValue>o)&&(this.freeFromValue=o)})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((e,i)=>{const t=e.shipping_line.total_price-i.shipping_line.total_price;return t<0?-1:t>0?1:e.shipping_line.delivery_time&&i.shipping_line.delivery_time&&e.shipping_line.delivery_time.days<i.shipping_line.delivery_time.days?-1:1})),this.canAutoSelectService?this.setSelectedService(0):this.selectedService=null,this.hasPaidOption=Boolean(this.shippingServices.find((e=>e.shipping_line.total_price||e.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(p.a)(this.shippingServices,this.shippingAppsSort))):i?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),e)},fetchShippingServices(e){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:i}=this;let t="/calculate_shipping.json";this.skipAppIds&&this.skipAppIds.length&&(t+="?skip_ids=",this.skipAppIds.forEach(((e,i)=>{i>0&&(t+=","),t+=`${e}`})));const s={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(s.items=this.localShippedItems,s.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(c.c)({url:t,method:"POST",storeId:i,data:s}).then((i=>{let{data:t}=i;return this.parseShippingOptions(t.result,e)})).catch((i=>{e||this.scheduleRetry(4e3),console.error(i)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),h&&h.setItem(A,this.localZipCode),this.fetchShippingServices()},setSelectedService(e){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[e]),this.selectedService=e)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(m);const{amountSubtotal:e}=this;this.amountSubtotal=this.shippedItems.reduce(((e,i)=>e+Object(n.a)(i)*i.quantity),0),this.hasCalculated&&(this.canSelectServices||e!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(e){"BR"===this.countryCode&&8===e.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(e){e&&(this.localZipCode=e)},immediate:!0},skipAppIds(){this.fetchShippingServices()},shippingResult:{handler(e){e.length&&this.parseShippingOptions(e)},immediate:!0}},created(){if(!this.zipCode&&h){const e=h.getItem(A);e&&(this.localZipCode=e)}}},C=g,f=(t(265),t(47)),_=Object(f.a)(C,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"shipping-calculator"},[e.canInputZip?t("form",{staticClass:"shipping-calculator__form",on:{submit:function(i){return i.preventDefault(),e.submitZipCode.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"shipping-calculator-zip"}},[e._v(" "+e._s(e.i19calculateShipping)+" ")]),t("div",{staticClass:"input-group"},[t("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:e.i19zipCode,"aria-label":e.i19zipCode,options:e.cleaveOptions},model:{value:e.localZipCode,callback:function(i){e.localZipCode=i},expression:"localZipCode"}}),t("div",{staticClass:"input-group-append"},[t("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":e.i19calculateShipping}},[t("i",{staticClass:"i-shipping-fast"})])])],1)])]):e._e(),t("div",{staticClass:"shipping-calculator__services"},[t("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.isWaiting?t("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[e._v("Loading...")])]):t("div",{key:"services",staticClass:"list-group"},[t("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.canSelectServices&&!e.canAutoSelectService&&null===e.selectedService&&e.shippingServices.length?t("div",{staticClass:"shipping-calculator__label"},[t("i",{staticClass:"i-arrow-down animated wobble"}),e._v(" "+e._s(e.i19selectShippingMsg)+" ")]):e._e()]),e._l(e.shippingServices,(function(i,s){return t(e.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":e.canSelectServices,active:e.canSelectServices&&e.selectedService===s},attrs:{href:e.canSelectServices&&"#"},on:{click:function(i){return i.preventDefault(),e.setSelectedService(s)}}},[t("span",{staticClass:"shipping-calculator__option"},[e._t("option",(function(){return[t("shipping-line",{attrs:{"shipping-line":i.shipping_line,"production-deadline":e.productionDeadline,"data-service-code":i.service_code}}),e.canSelectServices&&!e.canAutoSelectService?t("div",{staticClass:"custom-control custom-radio"},[t("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"shipping-method-"+i.service_code,name:"shipping-method-select"},domProps:{checked:e.selectedService===s}}),t("label",{staticClass:"custom-control-label",attrs:{for:"shipping-method-"+i.service_code}},[t("small",[e._v(e._s(i.label))])])]):t("small",[e._v(e._s(i.label))])]}),null,{service:i})],2)])}))],2)]),t("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.freeFromPercentage?t("div",{staticClass:"shipping-calculator__free-from-value"},[e._t("free-from-value",(function(){return[t("span",[e._v(" "+e._s(e.i19add$1ToEarn.replace("$1",e.formatMoney(e.freeFromValue-e.amountSubtotal)))+" "),t("strong",[e._v(e._s(e.i19freeShipping))])]),e.freeFromPercentage>=33?t("div",{staticClass:"progress"},[t("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+e.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":e.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[t("span",[e._v(" "+e._s(e.i19freeShipping)+" "),t("i",{staticClass:"i-truck mx-1"}),t("strong",[e._v(e._s(e.freeFromPercentage)+"%")])])])]):e._e()]}),null,{amountSubtotal:e.amountSubtotal,freeFromValue:e.freeFromValue,freeFromPercentage:e.freeFromPercentage})],2):e._e()])],1)])}),[],!1,null,null,null);i.a=_.exports},270:function(e,i,t){"use strict";var s={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:e,zIndex:i,transitionMs:t,opacity:s}=this;return{top:e,transition:`opacity ${t}ms linear`,opacity:s,zIndex:i}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth=`${document.body.offsetWidth}px`,document.body.style.overflow="hidden"}},watch:{isVisible(e){e?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(e){0===e?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(t(272),t(47)),o=Object(a.a)(s,(function(){var e=this,i=e.$createElement;return(e._self._c||i)("div",{staticClass:"backdrop",style:e.style,on:{click:e.hide}})}),[],!1,null,null,null);i.a=o.exports},271:function(e,i,t){"use strict";i.a=e=>{"object"==typeof window&&"function"==typeof window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,500)}},272:function(e,i,t){"use strict";t(262)},273:function(e,i,t){(i=t(186)(!0)).push([e.i,".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,4BAA4B,CAAC,cAAc,CAAC,YAAY,CAAC,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}"]}]),e.exports=i},275:function(e,i,t){"use strict";i.a=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(;e.offsetParent;)i+=e.offsetTop,e=e.offsetParent;return window.scroll({top:i,behavior:"smooth"})}},325:function(e,i,t){var s=t(403);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t(187).default)("a7b8dabe",s,!0,{})},402:function(e,i,t){"use strict";t(325)},403:function(e,i,t){(i=t(186)(!0)).push([e.i,".product-quickview__box{border-radius:0;left:0;max-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:576px){.product-quickview__box{border-radius:var(--border-radius);margin-left:5vw;margin-top:5vh;max-height:90vh;width:90vw}}.product-quickview__loading{padding:var(--spacer-5);text-align:center}.product-quickview__loading .spinner-border{height:5rem;width:5rem}.product-quickview__btn-redirect{display:block;margin:var(--spacer-4) auto var(--spacer-5);max-width:400px}","",{version:3,sources:["ProductQuickview.scss"],names:[],mappings:"AAAA,wBAAwB,eAAe,CAAC,MAAM,CAAC,gBAAgB,CAAC,eAAe,CAAC,cAAc,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,wBAAwB,wBAAwB,kCAAkC,CAAC,eAAe,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,CAAC,4BAA4B,uBAAuB,CAAC,iBAAiB,CAAC,4CAA4C,WAAW,CAAC,UAAU,CAAC,iCAAiC,aAAa,CAAC,2CAA2C,CAAC,eAAe",file:"ProductQuickview.scss",sourcesContent:[".product-quickview__box{border-radius:0;left:0;max-height:100vh;overflow-y:auto;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:576px){.product-quickview__box{border-radius:var(--border-radius);margin-left:5vw;margin-top:5vh;max-height:90vh;width:90vw}}.product-quickview__loading{padding:var(--spacer-5);text-align:center}.product-quickview__loading .spinner-border{height:5rem;width:5rem}.product-quickview__btn-redirect{display:block;margin:var(--spacer-4) auto var(--spacer-5);max-width:400px}"]}]),e.exports=i},474:function(e,i,t){"use strict";t.r(i);var s=t(27),a=t(55),o=t(284),r=t(296),n=t(270),c={name:"ProductQuickView",components:{Portal:o.a,TheProduct:r.default,ABackdrop:n.a},props:{productId:String,product:Object,portalId:{type:String,default:"quickview"}},data:()=>({productName:"",productLink:"",isVisible:!1}),computed:{i19close:()=>Object(a.a)(s.P),i19seeMoreInfo:()=>Object(a.a)(s.Ld)},methods:{setProduct(e){let{name:i,slug:t}=e;this.productName=i,this.productLink=`/${t}`},hide(){this.isVisible=!1,setTimeout((()=>{this.isVisible||this.$destroy()}),450)}},created(){let e=document.getElementById(this.portalId);e?e.innerHTML="":(e=document.createElement("div"),e.setAttribute("id",this.portalId),document.body.appendChild(e)),this.product&&this.setProduct(this.product),this.isVisible=!0}},p=(t(402),t(47)),l=Object(p.a)(c,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("portal",{attrs:{selector:"#"+e.portalId}},[t("div",{staticClass:"product-quickview"},[t("a-backdrop",{attrs:{"is-visible":e.isVisible},on:{hide:e.hide}}),t("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[e.isVisible?t("div",{staticClass:"product-quickview__box card"},[e._t("header",(function(){return[t("div",{staticClass:"product-quickview__header card-header"},[e._v(" "+e._s(e.productName)+" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":e.i19close},on:{click:e.hide}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])]})),t("div",{staticClass:"product-quickview__body card-body"},[e.productName?e._e():t("div",{staticClass:"product-quickview__loading"},[t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[e._v("Loading...")])])]),t("div",{staticClass:"container"},[t("the-product",{attrs:{"is-quickview":"","product-id":e.productId,product:e.product},on:{"update:product":e.setProduct,buy:e.hide}})],1),e.productName?t("a",{staticClass:"product-quickview__btn-redirect btn btn-secondary",attrs:{href:e.productLink}},[e._v(" "+e._s(e.i19seeMoreInfo)+" ")]):e._e()])],2):e._e()])],1)])}),[],!1,null,null,null);i.default=l.exports}},0,[39,40]]);