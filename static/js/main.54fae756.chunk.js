(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(1),l=a.n(i),s=(a(14),a(3)),o=a(4),c=a(6),u=a(5),d=a(7),h=(a(15),/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim),m=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).removeGtTitle=function(t){return t.replace("Game Thread: ","")},a.finalFunc=function(t){var e=/^Game/;if(a.state.redditData.filter(function(t){return e.test(t.data.title)}).length===a.state.dataArr.length){console.log(a.state.dataArr[t][1].data.children[1].data.body);var n=a.state.dataArr[t][1].data.children[2].data.body.match(h);return r.a.createElement("a",{href:n[0],target:"_blank",className:"italicize"},"Watch live in HD HERE")}},a.dataObject=function(t){var e=a.state.dataArr,n=t.slice();e.push(n),a.setState({dataArr:e})},a.renderList=function(t){return 0===t.length?r.a.createElement("li",null," No NBA games goin on right now. Check back later! "):t.map(function(t,e){return r.a.createElement("li",{key:t.data.created_utc},r.a.createElement("a",{href:t.data.url,target:"_blank",style:{fontWeight:"bold"}},a.removeGtTitle(t.data.title)),r.a.createElement("div",null," ",a.finalFunc(e)," "),r.a.createElement("br",null))})},a.state={redditData:[],text:"",loading:!0,comments:"",thread:[],num:0,num2:0,num3:0,linksArr:[],dataArr:[],arr:["first link","second link","third link","fourth link","fifth link","sixth link","seventh link"]},a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://www.reddit.com/r/nbastreams.json").then(function(t){return t.json()}).then(function(e){return t.setState({redditData:e.data.children,loading:!1})})}},{key:"componentDidUpdate",value:function(){var t=this,e=/^Game/,a=this.state.redditData.filter(function(t){return e.test(t.data.title)}),n=[];if(this.state.num<a.length){for(var r=0;r<a.length;r++)n.push(a[r].data.url);this.setState({num:this.state.num+1,linksArr:n})}if(this.state.num2<1&&this.state.linksArr.length>0){for(var i=0;i<this.state.linksArr.length;i++)fetch(this.state.linksArr[i]+".json").then(function(t){return t.json()}).then(function(e){return t.dataObject(e)}),this.setState({num3:this.state.num3+1});this.setState({num2:this.state.num2+1})}a.length===this.state.dataArr.length&&console.log("cant believe you got this far")}},{key:"render",value:function(){var t,e=/^Game/,a=this.state.redditData.filter(function(t){return e.test(t.data.title)}),n=new Date;return t=this.state.loading?r.a.createElement("h2",{className:"loading"}," ","grabbing all the latest nba games, hold up! ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{class:"loader"}," ")):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h2",{onClick:function(){return window.open("https://campusstreams.ga")},className:"weather"}," ","NBA Games for ",["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()],", ",["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]," ",n.getDate()),r.a.createElement("ol",{className:"center"},this.renderList(a))),r.a.createElement("div",null," ",t," ")}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.54fae756.chunk.js.map