(this["webpackJsonpibm-react"]=this["webpackJsonpibm-react"]||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),s=(a(98),a(7)),o=a(178),l=a(179),j=a(180),b=a(181),d=a(182),h=a(26),u=a(84),x=a(177),O=a(74),m=a.n(O),p=[{href:"/about",text:"About"},{href:"/users",text:"Users"},{href:"/",text:"Home"}],f=a(1);function y(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],r=function(){c(null)};return Object(f.jsxs)("div",{children:[Object(f.jsx)(m.a,{onClick:function(e){c(e.currentTarget)}}),Object(f.jsx)(u.a,{anchorEl:a,open:Boolean(a),onClose:r,children:p.map((function(e){return Object(f.jsx)(x.a,{onClick:r,children:Object(f.jsx)(h.b,{to:e.href,children:e.text})})}))})]})}var v=a(79),g=a.n(v),w=Object(o.a)({button:{color:"white"}});function S(){var e=w();return Object(f.jsx)(l.a,{position:"static",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(y,{}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(h.b,{to:"/about",className:e.button,children:Object(f.jsx)(d.a,{color:"inherit",children:"About"})}),Object(f.jsx)(h.b,{to:"/cart",className:e.button,children:Object(f.jsx)(d.a,{color:"inherit",startIcon:Object(f.jsx)(g.a,{}),children:"Cart"})}),Object(f.jsx)(h.b,{to:"/serverless",className:e.button,children:Object(f.jsx)(d.a,{color:"inherit",children:"Serverless"})}),Object(f.jsx)(h.b,{to:"/thoughts",className:e.button,children:Object(f.jsx)(d.a,{color:"inherit",children:"Thoughts"})})]})]})})}var k=a(13),T=a(62),I=a(176),N=a(143),A=a(183),C=Object(o.a)((function(e){return{warningText:{color:"#ff0000"}}}));function D(){var e=C();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(T.a,{variant:"h3",children:"AWS Serverless"}),Object(f.jsxs)(T.a,{variant:"body1",children:["This is a new project with the backend is completely on the cloud using AWS Serverless Suite ",Object(f.jsx)("br",{}),"Serverless Architecture: API Gateway -",">"," AWS Lambda -",">"," DynamoDB ",Object(f.jsx)("br",{}),"DynamoDb stores simple MOVIES table data layer, AWS Lambda stores the logic layer while API Gateway is the routing layer ",Object(f.jsx)("br",{}),"Click on Serverless button above the access the app ",Object(f.jsx)("br",{}),"The IAM account below has been given permission to view DynamoDB and Lambda function ",Object(f.jsx)("br",{}),Object(f.jsxs)("b",{children:["URL: https://khainl1110-aws.signin.aws.amazon.com/console/ ",Object(f.jsx)("br",{}),"Username: visitor ",Object(f.jsx)("br",{}),"Password: passenger3879!@ ",Object(f.jsx)("br",{}),"Choose us-west-2 region ",Object(f.jsx)("br",{})]})]}),Object(f.jsxs)(T.a,{className:e.warningText,children:["Because of how each values has different keys, adding new properties will work but will not display on the frontend",Object(f.jsx)("br",{}),"I haven't really figured out how to loop through object keys to display all properties",Object(f.jsx)("br",{})]})]})}function M(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)(T.a,{variant:"h6",children:["About me: International student pursuing BS Software Engineer at SJSU '23 ",Object(f.jsx)("br",{}),"Like technologies in general, currently learning about cloud and security ",Object(f.jsx)("br",{}),"Feel free to connect by any means and talk! ",Object(f.jsx)("br",{}),"Click on Thoughts section to see my what I think about some technologies I learn ",Object(f.jsx)("br",{}),Object(f.jsx)("a",{href:"https://linkedin.com/in/khai-nguyen-b59503106/",children:"LinkedIn "}),"Email: khainl1110@gmail.com (612) 743-6850"]}),Object(f.jsx)(T.a,{variant:"h3",children:"A new way to shop"}),Object(f.jsx)(T.a,{children:" This project uses"}),Object(f.jsxs)(I.a,{children:[Object(f.jsx)(N.a,{children:Object(f.jsx)(A.a,{children:"React and Material Design"})}),Object(f.jsx)(N.a,{children:Object(f.jsx)(A.a,{children:"Advanced knowledge in React such as useState, useContext"})}),Object(f.jsx)(N.a,{children:Object(f.jsx)(A.a,{children:"Advanced knowledge in Material Design like theme API"})}),Object(f.jsx)(N.a,{children:Object(f.jsx)(A.a,{children:"Software engineer concepts such as low coupling, high cohesion for organizing code"})})]}),Object(f.jsx)(T.a,{children:"Github: @khainl1110"}),Object(f.jsx)(D,{})]})}var B=Object(n.createContext)(),E=a(142),H=[{href:"https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",name:"Beautiful cheesecake",description:"Will ligten a bad day with this beautiful cheesecake",price:12.5,id:0},{href:"https://images.unsplash.com/photo-1514454529242-9e4677563e7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",name:"Sky",description:"Use it whenever you need a break. And its' free",price:0,id:1},{href:"https://images.unsplash.com/photo-1610450949065-1f2841536c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",name:"Chocolate",description:"Chocolate for a better day",price:6,id:2},{href:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",name:"Coffee",description:"A reliable friend whenever you need to concentrate",price:1.5,id:3},{href:"https://images.unsplash.com/photo-1619538189193-2c20c210f8b6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",name:"Hot dog",description:"Made with the finest ingredients to enjoy",price:2,id:4},{href:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",name:"Chocolate cookies",description:"Hand made and carefully crafted",price:2,id:5},{href:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",name:"Villa",description:"A nice house to live in",price:4e6,id:6}],q=Object(o.a)({paper:{margin:10},button:{background:"#4dabf5",borderRadius:3,color:"white"},name:{color:"#f73378"}});function G(e){var t=q(),a=e.item,n=a.id,c=a.quantity,r=H.find((function(e){return e.id===n})),i=r.href,s=r.name,o=(r.description,r.price);r._;return Object(f.jsx)(E.a,{className:t.paper,children:Object(f.jsxs)(b.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(f.jsx)(b.a,{item:!0,children:Object(f.jsx)("img",{src:i,alt:s,width:"200",height:"200"})}),Object(f.jsxs)(b.a,{item:!0,children:[Object(f.jsx)(T.a,{variant:"h5",className:t.name,children:s}),Object(f.jsxs)(T.a,{children:["Quantity ",c]}),Object(f.jsxs)(T.a,{children:["Price ",c*o]}),Object(f.jsx)(d.a,{className:t.button,children:"Buy now"})]})]})})}function L(){var e=Object(n.useContext)(B),t=(e.value,e.value2),a=Object(s.a)(t,2),c=a[0];a[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Cart page"}),Object(f.jsx)(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:c.map((function(e){return Object(f.jsx)(G,{item:e})}))})]})}var P=a(144),W=a(85),V=Object(o.a)({button:{background:"#4dabf5",borderRadius:3,color:"white"}});function F(e){var t=V(),a=Object(n.useContext)(B),c=(a.value,a.value2),r=Object(s.a)(c,2),i=r[0],o=r[1],l=e.id;return Object(f.jsx)(b.a,{item:!0,children:Object(f.jsx)(d.a,{className:t.button,onClick:function(){var e=i.find((function(e){return e.id===l})),t=i.indexOf(e),a=Object(W.a)(i);-1===t?a.push({id:l,quantity:1}):a[t].quantity=i[t].quantity+1,o(a),alert("Added")},children:"Add to cart"})})}var R=Object(o.a)({name:{color:"#f73378"},description:{maxWidth:250}});function U(e){var t=R(),a=e.order,c=(a._,a.name),r=a.description,i=a.price,o=a.id,l=Object(n.useContext)(B),j=(l.value,l.value2),d=Object(s.a)(j,2);d[0],d[1];return Object(f.jsxs)(b.a,{item:!0,container:!0,direction:"column",justify:"center",alignItems:"flex-start",children:[Object(f.jsx)(T.a,{className:t.name,variant:"h5",children:c}),Object(f.jsx)(T.a,{className:t.description,children:r}),Object(f.jsxs)(T.a,{variant:"h6",children:["$",i]}),Object(f.jsx)(b.a,{item:!0,children:Object(f.jsx)(F,{id:o})})]})}var z=Object(o.a)({paper:{margin:10}});function Y(e){var t=z(),a=e.order,n=a.href,c=a.name;return Object(f.jsx)(E.a,{className:t.paper,children:Object(f.jsxs)(b.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(f.jsx)(b.a,{item:!0,children:Object(f.jsx)("img",{src:n,alt:c,width:"200",height:"200"})}),Object(f.jsx)(b.a,{item:!0,children:Object(f.jsx)(U,{order:e.order})})]})})}var J=Object(P.a)({root:{background:"red",borderRadius:10}});function K(){J();var e=Object(n.useContext)(B),t=e.value,a=(e.value1,Object(n.useState)(t)),c=Object(s.a)(a,2),r=(c[0],c[1],Object(n.useState)(H)),i=Object(s.a)(r,2),o=i[0];i[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(T.a,{variant:"h5",children:"React mock shopping app "}),Object(f.jsx)(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:o.map((function(e){return Object(f.jsx)(b.a,{item:!0,children:Object(f.jsx)(Y,{order:e})})}))})]})}function Q(){return Object(f.jsx)("h1",{children:"List of users"})}function X(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"checkbox","data-testid":"checkbox-agree",onChange:function(e){return c(!e.target.checked)}}),Object(f.jsx)("button",{disabled:a,children:"Click here to continue"})]})}function _(){var e=Object(n.useState)("red"),t=Object(s.a)(e,2),a=(t[0],t[1],Object(n.useState)(!1)),c=Object(s.a)(a,2);c[0],c[1];return Object(f.jsx)(X,{})}var $=a(185),Z=a(184),ee=a(80),te=a.n(ee),ae=Object(o.a)((function(e){return{modal:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"30%",left:"30%"},mainText:{color:e.palette.secondary.main},secondaryText:{color:e.palette.primary.main}}}));function ne(e){var t=e.reloadData,a=ae(),c=Object(n.useState)(!1),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),b=j[0],h=j[1],u=Object(n.useState)(""),x=Object(s.a)(u,2),O=x[0],m=x[1],p=Object(n.useState)(""),y=Object(s.a)(p,2),v=y[0],g=y[1],w=Object(n.useRef)(),S=[{type:"text",value:b,label:"title",onChange:function(e){return h(e.target.value)}},{type:"text",value:O,label:"year",onChange:function(e){return m(e.target.value)}},{type:"text",value:v,label:"copies",onChange:function(e){return g(e.target.value)}}];return Object(f.jsxs)("div",{children:[Object(f.jsx)(d.a,{href:"#architecture",className:a.secondaryText,children:Object(f.jsx)(T.a,{children:"Go to architecture"})}),Object(f.jsx)(d.a,{type:"button",onClick:function(){return o(!0)},className:a.secondaryText,children:Object(f.jsx)(T.a,{children:"Add Item"})}),Object(f.jsx)($.a,{open:i,onClose:function(){return o(!1)},children:Object(f.jsxs)("div",{className:a.modal,children:[Object(f.jsx)(T.a,{variant:"h5",className:a.mainText,children:"Add item"}),S.map((function(e){return Object(f.jsx)(Z.a,{type:e.type,label:e.label,onChange:e.onChange,value:e.value})})),Object(f.jsx)(T.a,{variant:"h6",className:a.mainText,children:"Movie avatar"}),Object(f.jsxs)(d.a,{variant:"contained",component:"label",children:["Upload File",Object(f.jsx)("input",{type:"file",ref:w})]}),Object(f.jsx)(d.a,{onClick:function(){console.log(w.current.files[0]);var e=w.current.files[0],t=w.current.files[0].name;new te.a({bucketName:"khainl1110-serverless",dirName:"/images/avatar",region:"us-west-2",accessKeyId:"AKIAQH7O2BFE4CJMFQHL",secretAccessKey:"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"}).uploadFile(e,t).then((function(e){console.log(e),204===e.status?console.log("Success"):console.log("Fail")}))},children:"Test upload"}),Object(f.jsx)(d.a,{onClick:function(){O&&b&&fetch("https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({year:O,title:b,copies:v,avatarFileName:w.current.files[0].name})}).then((function(e){200===e.status?(t(),h(""),m(""),g(""),o(!1)):alert("Error")})).catch((function(e){return console.log(e)}))},className:a.secondaryText,children:"Add new item"}),Object(f.jsxs)(T.a,{children:["Note: title and year values are required ",Object(f.jsx)("br",{}),"No effect if title and year pair already existed"]})]})})]})}var ce=a(42),re=a.n(ce),ie=a(61),se=a(81),oe=a.n(se),le=a(82),je=a.n(le),be=Object(o.a)((function(e){return{mainText:{color:e.palette.secondary.main},secondaryText:{color:e.palette.primary.main},warningText:{color:e.palette.warning.dark},modal:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"30%",left:"30%"}}}));function de(e){var t=e.movie,a=e.reloadData,c=be(),r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],l=i[1],j=function(){var e=Object(ie.a)(re.a.mark((function e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies",{method:"DELETE",body:JSON.stringify({tableName:"MOVIES",year:t.year.N,title:t.title.S})}).then((function(e){200!==e.status&&alert("Error deleting item"),l(!1),a()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)(d.a,{onClick:function(){return l(!0)},children:Object(f.jsx)(T.a,{className:c.warningText,children:"Delete"})}),Object(f.jsx)($.a,{open:o,onClose:function(){return l(!1)},children:Object(f.jsxs)("div",{className:c.modal,children:[Object(f.jsx)(T.a,{variant:"h6",children:"Delete Item ?"}),Object(f.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(f.jsx)(d.a,{startIcon:Object(f.jsx)(oe.a,{}),className:c.mainText,onClick:j,children:Object(f.jsx)(T.a,{children:"Yes"})}),Object(f.jsx)(d.a,{startIcon:Object(f.jsx)(je.a,{}),className:c.secondaryText,onClick:function(){return l(!1)},children:Object(f.jsx)(T.a,{children:"No"})})]})]})})]})}var he=Object(o.a)((function(e){return{paper:{margin:10,"&:hover":{backgroundColor:"#dbdbdb"}},item:{padding:e.spacing(5),margin:"1em"},mainText:{color:e.palette.secondary.main},secondaryText:{color:e.palette.primary.main},warningText:{color:e.palette.warning.dark}}}));function ue(e){var t=e.movie,a=e.reloadData,c=he(),r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),h=Object(s.a)(j,2),u=h[0],x=h[1],O=Object(n.useState)([]),m=Object(s.a)(O,2),p=(m[0],m[1],function(){var e=Object(ie.a)(re.a.mark((function e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!u){e.next=3;break}return e.next=3,fetch("https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies",{method:"PUT",body:JSON.stringify({tableName:"MOVIES",year:t.year.N,title:t.title.S,updateTitle:o,updateValue:u})}).then((function(e){200!==e.status?alert(e.errorMessage):a()}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(f.jsx)(E.a,{className:c.paper,children:Object(f.jsxs)(b.a,{item:!0,className:c.item,children:[Object(f.jsxs)(T.a,{variant:"h6",className:c.mainText,children:["year: ",t.year.N]}),Object(f.jsxs)(b.a,{item:!0,container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(f.jsxs)(T.a,{variant:"h6",className:c.mainText,children:["movie: ",t.title.S]}),Object(f.jsx)(de,{movie:t,reloadData:a})]}),t.copies&&Object(f.jsxs)(T.a,{children:["copies: ",t.copies.S]}),t.quantity&&Object(f.jsxs)(T.a,{children:["quantity: ",t.quantity.S]}),t.author&&Object(f.jsxs)(T.a,{children:["author: ",t.author.S]}),Object(f.jsx)(T.a,{className:c.secondaryText,children:"Edit below"}),Object(f.jsx)(Z.a,{type:"text",label:"attribute",value:o,onChange:function(e){l(e.target.value)}}),Object(f.jsx)(Z.a,{id:"standard-basic",type:"text",label:"value",value:u,onChange:function(e){x(e.target.value)}}),Object(f.jsx)(d.a,{className:c.secondaryText,onClick:p,children:"Confirm"}),Object(f.jsxs)(T.a,{children:["Can only change values that are not part of key (Year, Movie) ",Object(f.jsx)("br",{}),"For ex, copies, quantity, author ",Object(f.jsx)("br",{}),"No capitalize first word to match the database rows"]})]})})}var xe=Object(o.a)((function(e){return{mainText:{color:e.palette.secondary.main},secondaryText:{color:e.palette.primary.main}}}));function Oe(){var e=xe();return Object(f.jsxs)("div",{id:"architecture",children:[Object(f.jsx)(T.a,{variant:"h3",children:"App Architecture"}),Object(f.jsxs)(T.a,{variant:"body2",children:[Object(f.jsx)("span",{className:e.secondaryText,children:Object(f.jsx)("b",{children:" API Gateway => AWS Lambda => DynamoDB "})})," ",Object(f.jsx)("br",{}),"Each method in API Gateway (GET, POST, PUT, DELETE) is mapped to a AWS Lambda function ",Object(f.jsx)("br",{}),"Then AWS Lambda makes request to DynamoDB ",Object(f.jsx)("br",{}),"I'm confident there's a way to map all API Gateway method to one Lambda function ",Object(f.jsx)("br",{}),"But I have not figured it out yet but this way give overall more flexibilities to change each Lambda function without affecting others",Object(f.jsx)("br",{})]}),Object(f.jsx)(T.a,{variant:"h6",children:"Architecture DynamoDB"}),Object(f.jsxs)(T.a,{variant:"body2",children:["MOVIES table with",Object(f.jsx)("span",{className:e.secondaryText,children:Object(f.jsx)("b",{children:" year (Number) "})}),"as primary partition key and",Object(f.jsx)("span",{className:e.secondaryText,children:Object(f.jsx)("b",{children:" title (String) "})})," as primary sort key ",Object(f.jsx)("br",{}),"MOVIES table has the following String attributes",Object(f.jsx)("span",{className:e.secondaryText,children:Object(f.jsx)("b",{children:" year, title, copies, quantity, author "})})]}),Object(f.jsx)(T.a,{variant:"h6",children:"Architecture API Gateway"}),Object(f.jsxs)(T.a,{variant:"body2",children:["Invoke URL ",Object(f.jsx)("span",{className:e.mainText,children:Object(f.jsx)("b",{children:Object(f.jsx)("i",{children:" https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies "})})}),Object(f.jsx)("br",{}),"Body for methods ",Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:e.secondaryText,children:Object(f.jsx)("b",{children:"GET: "})}),"(get all movies): No body needed ",Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:e.secondaryText,children:Object(f.jsx)("b",{children:"POST "})}),"(create new movie): Required year and title. Value copies is optional ",Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:e.secondaryText,children:Object(f.jsx)("b",{children:"PUT "})}),'(update created movie): Required tableName("MOVIES"), year, title, updateTitle(attribute to update), updateValue ',Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:e.secondaryText,children:Object(f.jsx)("b",{children:"DELETE "})}),"(delete movie): Required year and title"]})]})}var me=a(83),pe=a.n(me);function fe(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(!1),h=Object(s.a)(j,2),u=h[0],x=h[1];Object(n.useEffect)((function(){console.log("Test env file abcdef");console.log("Test env file2 production"),fetch("https://iov3zsd5oh.execute-api.us-west-2.amazonaws.com/Beta/movies",{}).then((function(e){return e.json()})).then((function(e){c(e.Items),x(!0)}))}),[o]);var O=function(){l(!o),x(!1)};return Object(f.jsxs)(E.a,{children:[Object(f.jsx)(D,{}),Object(f.jsx)(ne,{reloadData:O}),Object(f.jsx)(T.a,{variant:"h5",children:"Data"}),Object(f.jsx)(d.a,{startIcon:Object(f.jsx)(pe.a,{}),onClick:O}),u?Object(f.jsx)(b.a,{container:!0,direction:"row",justifyContent:"space-evenly",alignItems:"center",children:a.map((function(e){return Object(f.jsx)(ue,{movie:e,reloadData:O})}))}):Object(f.jsx)(T.a,{variant:"h1",children:"Loading..."}),Object(f.jsx)(Oe,{})]})}function ye(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Thoughts"}),Object(f.jsxs)("h6",{children:["These are my thoughts on things I learn about, they are not really organized ",Object(f.jsx)("br",{}),"I'm always excited about new technologies and want to learn them"]}),Object(f.jsxs)("p",{children:["MaterialUI ",Object(f.jsx)("br",{}),"It's a very good library and speed up my web development a lot ",Object(f.jsx)("br",{}),"Before knowing about MaterialUI, I often write the CSS myself for my React App and that's very time consuming ",Object(f.jsx)("br",{}),"Now I can focus on writing my app, state management, fetch API, etc and MaterialUI takes care of the rest ",Object(f.jsx)("br",{}),"In addition, what I like about MaterialUI is that it follow Material Design by Google and the result is very consistent"]}),Object(f.jsxs)("p",{children:["React ",Object(f.jsx)("br",{}),"After using React for many schools/clubs projects, I have to admit it's one of the best thing for web developer ",Object(f.jsx)("br",{}),"Instead of having 3 separate files for html, css and javascript, now you only need one javascript file for one page ",Object(f.jsx)("br",{}),"React ecosystem is so vast and help you with various things, like MaterialUI, so that you can spend more time for worrying about state management and overall user experiences of the app ",Object(f.jsx)("br",{})]}),Object(f.jsxs)("p",{children:["AWS ",Object(f.jsx)("br",{}),"AWS is a service that has a really big impact on cloud computing and being used by many big companies ",Object(f.jsx)("br",{}),"I want to learn more about cloud computing in general, especially AWS and what it is capable of ",Object(f.jsx)("br",{}),"I also want to learn other things as well such as Security, AI, ML, etc ",Object(f.jsx)("br",{}),"The cost of using AWS services are very cheap and I'm surprised how cheap it actually is ",Object(f.jsx)("br",{}),"EC2 instance are very famous and I want to learn how to use it ",Object(f.jsx)("br",{}),"The experience working with Serverless Suite was really good, I like how it can host backend on the cloud natively with Lambda function ",Object(f.jsx)("br",{})]}),Object(f.jsxs)("p",{children:["DynamoDB ",Object(f.jsx)("br",{}),"DynamoDB is very interesting, instead of having unique key, it allows 2 value to be part of unique key ",Object(f.jsx)("br",{}),"This eliminate one column of data and can be very useful, however, there are some benefit of using relational database that this doesn't offer ",Object(f.jsx)("br",{}),"Therefore, this is suited more for storing data that can be stored in one single row and not composed of complex parts ",Object(f.jsx)("br",{}),"I can see how this is suited for mobile application where each row is a complete user's data"]})]})}function ve(){return Object(f.jsxs)(h.a,{basename:"/react-learn",children:[Object(f.jsx)(S,{}),Object(f.jsx)("div",{children:Object(f.jsxs)(k.c,{children:[Object(f.jsx)(k.a,{path:"/testingApp",children:Object(f.jsx)(_,{})}),Object(f.jsx)(k.a,{path:"/about",children:Object(f.jsx)(M,{})}),Object(f.jsx)(k.a,{path:"/users",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(k.a,{path:"/cart",children:Object(f.jsx)(L,{})}),Object(f.jsx)(k.a,{path:"/serverless",children:Object(f.jsx)(fe,{})}),Object(f.jsx)(k.a,{path:"/thoughts",children:Object(f.jsx)(ye,{})}),Object(f.jsx)(k.a,{path:"/",children:Object(f.jsx)(K,{})})]})})]})}function ge(){var e=Object(n.useState)("test"),t=Object(s.a)(e,2),a=(t[0],t[1],Object(n.useState)([{id:1,quantity:1}])),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(f.jsx)(B.Provider,{value:{value2:[r,i]},children:Object(f.jsx)(ve,{})})}var we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,186)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(ge,{})}),document.getElementById("root")),we()},98:function(e,t,a){}},[[140,1,2]]]);
//# sourceMappingURL=main.562ce980.chunk.js.map