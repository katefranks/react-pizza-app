(this["webpackJsonpreact-pizza-app"]=this["webpackJsonpreact-pizza-app"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),i=r(9),s=r.n(i),a=(r(14),r(5)),o=r(2),d=r(3),l=r(4),p=r(7),u=r(6),h=(r(15),r(0));var j=function(e){var t=e.item;return Object(h.jsxs)("li",{children:[Object(h.jsx)("p",{children:t.name}),Object(h.jsx)("p",{children:t.description}),Object(h.jsx)("p",{children:Object(h.jsxs)("button",{children:["$",t.price]})}),Object(h.jsx)("button",{onClick:function(){return e.addToOrder(e.item)},children:"Add to order"})]},t.name)},b=function(e){Object(p.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).state={selection:"pizzas"},n}return Object(d.a)(r,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(e){return e.category})),r=Object(a.a)(new Set(t)).map((function(t){return Object(h.jsx)("button",{onClick:function(){return e.setState({selection:t})},children:t},t)})),n=this.props.items.filter((function(t){return t.category===e.state.selection})).map((function(t){return Object(h.jsx)(j,{item:t,addToOrder:e.props.addToOrder})}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Menu:"}),r,Object(h.jsx)("ul",{children:n})]})}}]),r}(n.Component);var m=function(e){var t=e.order.map((function(e,t){return Object(h.jsxs)("li",{children:[Object(h.jsx)("p",{children:e.name}),Object(h.jsxs)("p",{children:["$",e.price]}),Object(h.jsx)("button",{children:"Remove"})]})})),r=e.order.reduce((function(e,t){return e+t.price}),0);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"order-container",children:[Object(h.jsx)("ul",{children:t}),Object(h.jsxs)("div",{children:["$",r]}),Object(h.jsx)("button",{onClick:function(){e.order;localStorage.setItem("order",t)},children:"Save Order"})]})})},O=function(e){Object(p.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).state={items:[],order:[]},n.addToOrder=n.addToOrder.bind(Object(l.a)(n)),n}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.setState({items:[{category:"pizzas",price:14,selected:!1,name:"Cheese Pizza",description:"Full of cheesy goodness!"},{category:"pizzas",price:15,selected:!1,name:"Peperoni Pizza",description:"Gateway to peperoni heaven!"},{category:"pizzas",price:17,selected:!1,name:"Veggie Delight",description:"Slightly healthier, equally delicious!"},{category:"pizzas",price:18,selected:!1,name:"Meat Lover's",description:"Need some extra protein in your life?"},{category:"pizzas",price:21,selected:!1,name:"Everything",description:"For those that want it all!"},{category:"desserts",price:6,selected:!1,name:"Brownie Sundae",description:"Fresh brownie, scoop o' vanilla!"},{category:"desserts",price:6,selected:!1,name:"Apple Pie",description:"Better than your momma's!"},{category:"desserts",price:7,selected:!1,name:"Cheesecake",description:"NY style, southern flair!"},{category:"desserts",price:3,selected:!1,name:"Sherbert",description:"Somehow still a thing!"},{category:"desserts",price:4,selected:!1,name:"Strawberry Milkshake",description:"No, you can't have chocolate!"},{category:"drinks",price:3,selected:!1,name:"Coke",description:"A classic favorite!"},{category:"drinks",price:3,selected:!1,name:"Diet Coke",description:"Save those calories!"},{category:"drinks",price:5,selected:!1,name:"Bud Light",description:"Cheers to beers!"},{category:"drinks",price:6,selected:!1,name:"Blue Moon",description:"Almost craft beer!"},{category:"drinks",price:2,selected:!1,name:"Bottled Water",description:"Stay hydrated!"}]})}},{key:"addToOrder",value:function(e){var t=Object(a.a)(this.state.order);t.push(e),this.setState({order:t})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"main-menu",children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"Vic's Pizza"})}),Object(h.jsx)(b,{items:this.state.items,addToOrder:this.addToOrder}),Object(h.jsx)(m,{order:this.state.order})]})}}]),r}(n.Component),g=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.4139784b.chunk.js.map