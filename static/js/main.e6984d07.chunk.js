(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(15),i=c.n(s),d=(c(20),c(5)),r=c(6),o=c(9),m=c(8),l=(c(21),c(10)),j=(c(13),c(26)),h=c(24),u=c(25),b=(c(14),c(0)),O=function(e){Object(o.a)(c,e);var t=Object(m.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).setListItem=function(e){var t=e.target.value;a.setState({listItem:t})},a.addItem=function(){var e={name:a.state.listItem,isChecked:!1};a.props.setList(e),document.getElementById("add-item").value=""},a.state={todoList:[],listItem:""},a.setListItem=a.setListItem.bind(Object(l.a)(a)),a}return Object(r.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"item-div",children:Object(b.jsx)("div",{className:"add-item",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(u.a,{lg:8,md:8,sm:8,children:Object(b.jsx)("input",{type:"text",name:"add-item",id:"add-item",placeholder:"\uf02c\u2002What needs to be done?",className:"input-item",onChange:this.setListItem})}),Object(b.jsx)(u.a,{lg:4,md:4,sm:4,children:Object(b.jsxs)(j.a,{className:"btn",onClick:this.addItem,children:[Object(b.jsx)("i",{className:"fa fa-circle-thin icon-circle","aria-hidden":"true",children:Object(b.jsx)("i",{className:"fa fa-plus icon-plus","aria-hidden":"true"})}),"  Add"]})})]})})})}}]),c}(n.a.Component),f=function(e){Object(o.a)(c,e);var t=Object(m.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).checkedItem=function(e,t){a.props.checkedItem(t.name,e.target.checked)},a.deleteItem=function(e){a.props.remove(e.name)},a}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"todo-list-item",children:this.props.lists.map((function(t,c,a){var n=a.length;return Object(b.jsxs)(h.a,{className:c+1===n?"top-space":"border-bot",children:[Object(b.jsx)(u.a,{lg:10,md:10,sm:10,children:Object(b.jsxs)("div",{className:"list",children:[Object(b.jsx)("input",{type:"checkbox",className:"input-checkbox",onChange:function(c){return e.checkedItem(c,t)}}),"\u2002",Object(b.jsx)("i",{className:"fa fa-square-o ".concat(!0===t.isChecked?"icon-square2":"icon-square1"),"aria-hidden":"true"}),Object(b.jsx)("i",{className:"fa ".concat(!0===t.isChecked?"fa-check icon-check":"fa-minus icon-minus"),"aria-hidden":"true"}),"\u2002",Object(b.jsx)("p",{className:!0===t.isChecked?"para-strike align":"align",children:t.name})]})}),Object(b.jsx)(u.a,{lg:2,md:2,sm:2,children:Object(b.jsx)(j.a,{className:"btn delete-btn",onClick:function(){return e.deleteItem(t)},children:Object(b.jsx)("i",{className:"fa fa-trash-o icon-delete","aria-hidden":"true"})})})]})}))})}}]),c}(n.a.Component),v=function(e){Object(o.a)(c,e);var t=Object(m.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).getData=function(e){var t=a.state.todoItem;t.push(e),a.setState({todoItem:t})},a.checkedItem=function(e,t){var c=a.state.todoItem.findIndex((function(t){return t.name===e})),n=a.state.todoItem;n[c].isChecked=t,a.setState({todoItem:n})},a.removeItem=function(e){var t=a.state.todoItem.findIndex((function(t){return t.name===e})),c=a.state.todoItem;c.splice(t,1),a.setState({todoItem:c})},a.state={todoItem:[],color:"red"},a}return Object(r.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{setList:this.getData}),Object(b.jsx)("div",{className:"todo-div",children:Object(b.jsx)("div",{className:"todo-header",children:Object(b.jsx)("p",{children:"Todo List"})})}),Object(b.jsx)("div",{className:"todolist-div",children:Object(b.jsx)(f,{checkedItem:this.checkedItem,lists:this.state.todoItem,remove:this.removeItem})})]})}}]),c}(n.a.Component),I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(v,{}),document.getElementById("root")),I()}},[[23,1,2]]]);
//# sourceMappingURL=main.e6984d07.chunk.js.map