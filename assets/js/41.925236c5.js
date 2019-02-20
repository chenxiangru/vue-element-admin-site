(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{247:function(t,a,n){"use strict";n.r(a);var e=n(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"pagination-分页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pagination-分页","aria-hidden":"true"}},[t._v("#")]),t._v(" Pagination 分页 "),n("Badge",{attrs:{text:"v3.9.2+"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("其它 Element 的 "),n("code",[t._v("el-pagination")]),t._v("支持的属性，它也都支持。详情见"),n("a",{attrs:{href:"http://element.eleme.io/#/zh-CN/component/pagination",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),n("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Pagination/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线源码"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin/#/table/complex-table",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 Demo"),n("OutboundLink")],1)])])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Pagination 组件主要是基于 Element 的 "),a("code",[this._v("el-pagination")]),this._v("进行了二次封装，并拓展了自动滚动的功能。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用方式")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pagination")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":total")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("total"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":page.sync")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listQuery.page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":limit.sync")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listQuery.limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@pagination")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("getList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pagination "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Pagination'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Pagination "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      total"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      listQuery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取数据")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" Attributes")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("total")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("总条目数")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("/")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("page")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("当前页数   支持 .sync 修饰符")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("limit")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("每页显示条目个数，支持 .sync 修饰符")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("page-sizes")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("每页显示个数选择器的选项设置")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Number []")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("10, 20, 30, 50]")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("hidden")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("是否隐藏")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("auto-scroll")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("分页之后是否自动滚动到顶部")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("true")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("pagination")]),t._v(" "),n("td",[t._v("当 limit 或者 page 发生改变时会触发")]),t._v(" "),n("td",[t._v("{page,limit}")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"源码-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码-demo","aria-hidden":"true"}},[this._v("#")]),this._v(" 源码 && Demo")])}],!1,null,null,null);a.default=s.exports}}]);