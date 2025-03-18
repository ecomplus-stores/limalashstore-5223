(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{189:function(t,i,s){"use strict";var e=s(27),o=s(55),a=s(40),n=s(36),r=s(107),c=s(56),d=s(39),u=s(5),l=s(11),b=s(188),p=s(207),y=s(206),_=s(209),h=s(41),m=s(196);const g=(t,i)=>{if("object"==typeof window){t=`productCard${t}Html`;const s="function"==typeof window[t]?window[t](i):window[t];if("string"==typeof s)return s}};var f={name:"ProductCard",components:{ALink:b.a,APicture:p.a,APrices:y.a,QuantitySelector:_.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},ecomPassport:{type:Object,default:()=>h.a},accountUrl:{type:String,default:"/app/#/account/"},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},qntToBuy:1,isLoading:!1,isWaitingBuy:!1,isHovered:!1,isFavorite:!1,error:""}),computed:{i19addToFavorites:()=>Object(o.a)(e.m),i19outOfStock:()=>Object(o.a)(e.Sc),i19unavailable:()=>Object(o.a)(e.je),i19uponRequest:()=>"Sob consulta",isWithoutPrice(){return!Object(a.a)(this.body)},ratingHtml(){return g("Rating",this.body)},buyHtml(){return g("Buy",this.body)},footerHtml(){return g("Footer",this.body)},name(){return Object(n.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(o.a)(e.z)},isInStock(){return Object(r.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},isLogged:()=>h.a.checkAuthorization(),discount(){const{body:t}=this;return Object(c.a)(t)?Math.round(100*(t.base_price-Object(a.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records,this.isFavorite=Object(m.a)(this.body._id,this.ecomPassport)},fetchItem(){this.productId&&(this.isLoading=!0,Object(u.g)({url:`/products/${this.productId}.json`}).then((t=>{let{data:i}=t;this.$emit("update:product",i),this.setBody(i),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(o.a)(e.W))})).finally((()=>{this.isLoading=!1})))},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(m.b)(this.body._id,this.ecomPassport))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(u.g)({url:`/products/${t._id}.json`}).then((i=>{let{data:e}=i;const o=["variations","customizations","kit_composition"];for(let t=0;t<o.length;t++){const i=e[o[t]];if(i&&i.length)return Promise.all([s.e(0),s.e(2),s.e(3),s.e(19)]).then(s.bind(null,474)).then((t=>{new d.a({render:i=>i(t.default,{props:{product:e}})}).$mount(this.$refs.quickview)}))}const{quantity:a,price:n}=e;l.a.addProduct({...t,quantity:a,price:n},null,this.qntToBuy)})).catch((i=>{console.error(i),window.location=`/${t.slug}`})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}};i.a=f},197:function(t,i,s){"use strict";s.d(i,"a",(function(){return e})),s.d(i,"b",(function(){return o}));var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(i){t.isHovered=!0}}},[s("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():s("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?s("span",{staticClass:"product-card__offer-stamp"},[s("i",{staticClass:"i-arrow-down"}),t._v(" "),s("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("stamps"),t._t("body",(function(){return[s("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),s("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(i,e){return 1===t.body.pictures.length||1===e||t.isHovered?s("a-picture",{key:e,staticClass:"product-card__picture",attrs:{src:i,"can-calc-height":!1}}):t._e()})):s("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",(function(){return[s(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2)]})),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?t.isWithoutPrice?t._t("without-price",(function(){return[s("p",{staticClass:"badge badge-info mt-auto"},[t._v(" "+t._s(t.i19uponRequest)+" ")])]})):[t._t("prices",(function(){return[s("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]})),t.body.variations||t.isSmall?t._e():s("quantity-selector",{attrs:{items:[{_id:t.body._id,quantity:t.body.min_quantity||1}],min:t.body.min_quantity,max:t.body.quantity,"has-buy-button":!1},on:{"set-quantity":function(i){var s=i.quantity;return t.qntToBuy=s}}}),s("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",(function(){return[t.buyHtml?s("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),s("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?s("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",(function(){return[s("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}))],2)]:t._t("out-of-stock",(function(){return[s("p",{staticClass:"badge badge-dark mt-auto"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[s("p",{staticClass:"badge badge-warning mt-auto"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("favorite",(function(){return[s("a",{staticClass:"btn product-card__favorite fade",attrs:{href:t.isLogged?null:t.accountUrl},on:{click:t.toggleFavorite}},[s("i",{staticClass:"i-heart mr-1",class:t.isFavorite?"active":null})])]})),t._t("footer",(function(){return[t.footerHtml?s("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2)]),t.isLoading?[t._t("default"),t.error?s("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),s("div",{ref:"quickview"})],2)},o=[function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}]}}]);