(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[60,168],{141:function(e,t,a){"use strict";var n=a(63),c=a(12),s=a(58),i=a(3);t.a=function(e){var t=Object(c.f)(),a=t.pathname.split("/")[1],r=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.d,{to:"/",tag:s.b,className:"text-decoration-none",children:"Home"}),a?Object(i.jsx)(n.d,{active:!0,children:a}):"",r?Object(i.jsx)(n.d,{active:!0,children:r}):""]})]})}},143:function(e,t,a){"use strict";var n=a(160);a(184);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},1459:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(9),s=a(27),i=a(1),r=a(12),l=a(63),o=(a(281),a(272),a(745)),d=a(160),j=a(141),u=a(147),b=a(326),h=a(327),f=a(143),O=a(7),x=a(3);function m(e){var t=e.stafftypedetails,a=e.staffeditdetails,n=e.handleInputs,c=e.userdetails,s=e.staffteamdetails;return Object(x.jsx)(l.A,{children:Object(x.jsx)(l.C,{children:Object(x.jsx)(u.default,{title:"Staff Details",creationModificationDate:a,children:Object(x.jsxs)(l.eb,{children:[Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsxs)(l.H,{children:["Name ",Object(x.jsx)("span",{className:"required",children:" *"})]}),Object(x.jsx)(l.E,{type:"text",onChange:n,value:a&&a.first_name,name:"first_name"})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsxs)(l.H,{children:["Email ",Object(x.jsx)("span",{className:"required",children:" *"})]}),Object(x.jsx)(l.E,{type:"email",onChange:n,value:a&&a.email,name:"email"})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Password"}),Object(x.jsx)(l.E,{type:"text",onChange:n,value:a&&a.pass_word,name:"pass_word"})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Status"}),Object(x.jsxs)(l.E,{type:"select",name:"status",onChange:n,value:a&&a.status,children:[Object(x.jsx)("option",{value:"",children:"Please Select"}),Object(x.jsx)("option",{defaultValue:"Current",children:"Current"}),Object(x.jsx)("option",{value:"Archive",children:"Archive"})]})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"User Group"}),Object(x.jsxs)(l.E,{type:"select",name:"user_group_id",onChange:n,value:a&&a.user_group_id,children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),c&&c.map((function(e){return Object(x.jsx)("option",{value:e.user_group_id,children:e.title},e.user_group_id)}))]})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Staff Team"}),Object(x.jsxs)(l.E,{type:"select",name:"team",onChange:n,value:a&&a.team,children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),s&&s.map((function(e){return Object(x.jsx)("option",{value:e.value,children:e.value},e.value)}))]})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Staff Type"}),Object(x.jsxs)(l.E,{type:"select",name:"staff_type",onChange:n,value:a&&a.staff_type,children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),t&&t.map((function(e){return Object(x.jsx)("option",{value:e.value,children:e.value},e.value)}))]})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Staff Rate"}),Object(x.jsx)(l.E,{type:"text",onChange:n,value:a&&a.staff_rate,name:"staff_rate"})]})}),Object(x.jsx)(l.s,{md:"3",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Position"}),Object(x.jsx)(l.E,{type:"text",onChange:n,value:a&&a.position,name:"position"})]})}),Object(x.jsx)(l.s,{md:"4",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Published"}),Object(x.jsx)("br",{}),Object(x.jsx)(l.H,{children:"Yes"}),Object(x.jsx)(l.E,{name:"published",value:"1",type:"radio",defaultChecked:a&&1===a.published&&!0,onChange:n}),Object(x.jsx)(l.H,{children:"No"}),Object(x.jsx)(l.E,{name:"published",value:"0",type:"radio",defaultChecked:a&&0===a.published&&!0,onChange:n})]})})]})})})})}function p(e){var t=e.staffeditdetails,a=e.handleInputs,n=e.allCountries;return Object(x.jsx)(l.A,{children:Object(x.jsx)(l.C,{children:Object(x.jsx)(u.default,{title:"Address",children:Object(x.jsxs)(l.eb,{children:[Object(x.jsx)(l.s,{md:"6",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Street Address"}),Object(x.jsx)(l.E,{type:"text",onChange:a,value:t&&t.address_street,name:"address_street"})]})}),Object(x.jsx)(l.s,{md:"6",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Town/Suburb"}),Object(x.jsx)(l.E,{type:"text",onChange:a,value:t&&t.address_town,name:"address_town"})]})}),Object(x.jsx)(l.s,{md:"6",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"State"}),Object(x.jsx)(l.E,{type:"text",onChange:a,value:t&&t.address_state,name:"address_state"})]})}),Object(x.jsx)(l.s,{md:"6",children:Object(x.jsxs)(l.C,{children:[Object(x.jsx)(l.H,{children:"Country"}),Object(x.jsxs)(l.E,{type:"select",name:"address_country",onChange:a,value:t&&t.address_country,children:[Object(x.jsx)("option",{defaultValue:"selected",children:"Please Select"}),n&&n.map((function(e){return Object(x.jsx)("option",{value:e.country_code,children:e.name},e.country_code)}))]})]})})]})})})})}var g=a(273);function v(e){var t=e.applyChanges,a=e.backToList,n=e.editStaffData,c=e.navigate;return Object(x.jsx)(l.A,{children:Object(x.jsx)(l.C,{children:Object(x.jsx)(g.a,{children:Object(x.jsxs)(l.eb,{children:[Object(x.jsx)(l.s,{children:Object(x.jsx)(l.e,{className:"shadow-none",color:"primary",onClick:function(){n(),setTimeout((function(){c("/Staff")}),1100)},children:"Save"})}),Object(x.jsx)(l.s,{children:Object(x.jsx)(l.e,{className:"shadow-none",color:"primary",onClick:function(){n(),t()},children:"Apply"})}),Object(x.jsx)(l.s,{children:Object(x.jsx)(l.e,{className:"shadow-none",color:"dark",onClick:function(){window.confirm("Are you sure you want to cancel  \n  \n You will lose any changes made")?c("/Staff"):t()},children:"Cancel"})}),Object(x.jsx)(l.s,{children:Object(x.jsx)(l.e,{className:"shadow-none",color:"dark",onClick:function(){a()},children:"Back to List"})})]})})})})}var y=a(219);t.default=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),a=t[0],g=t[1],C=Object(i.useState)(),w=Object(s.a)(C,2),S=w[0],_=w[1],N=Object(i.useState)(),E=Object(s.a)(N,2),k=E[0],P=E[1],D=Object(i.useState)(),T=Object(s.a)(D,2),H=T[0],A=T[1],F=Object(i.useState)(""),M=Object(s.a)(F,2),I=M[0],B=M[1],U=Object(i.useState)(""),L=Object(s.a)(U,2),Y=L[0],V=L[1],G=Object(i.useState)(!1),Z=Object(s.a)(G,2),q=Z[0],R=Z[1],J=Object(i.useState)([]),z=Object(s.a)(J,2),$=z[0],Q=z[1],W=Object(i.useState)({modelType:""}),K=Object(s.a)(W,2),X=K[0],ee=K[1],te=Object(r.h)().id,ae=Object(r.g)(),ne=function(e){console.log(e),g(Object(c.a)(Object(c.a)({},a),{},Object(n.a)({},e.target.name,e.target.value)))},ce=function(){O.a.post("/staff/getStaffById",{staff_id:te}).then((function(e){var t=e.data.data;t.status||(t.status="Current"),t.user_group_id||(t.user_group_id="1"),g(t)})).catch((function(){Object(f.a)("Staff Data Not Found","info")}))};return Object(i.useEffect)((function(){O.a.get("/staff/getStaffTypeFromValueList").then((function(e){_(e.data.data)})).catch((function(){Object(f.a)("Staff Data Not Found","info")})),O.a.get("/staff/getStaffTeamFromValueList").then((function(e){P(e.data.data)})).catch((function(){Object(f.a)("Staff Data Not Found","info")})),O.a.get("/staff/getUserGroup").then((function(e){A(e.data.data)})).catch((function(){Object(f.a)("Staff Data Not Found","info")})),ce(),O.a.get("/staff/getCountry").then((function(e){Q(e.data.data)})).catch((function(){Object(f.a)("Country Data Not Found","info")}))}),[te]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(d.a,{}),Object(x.jsx)(v,{navigate:ae,saveChanges:function(){a.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a.email)?""!==a.email&&""!==a.first_name&&ae("/Staff"):Object(f.a)("Enter valid email","warning"):Object(f.a)("Email is required","warning"),window.location.reload()},applyChanges:function(){},backToList:function(){ae("/Staff")},editStaffData:function(){a.modification_date=y.a,a.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a.email)?""!==a.email&&""!==a.first_name?O.a.post("/staff/editStaff",a).then((function(){Object(f.a)("Record editted successfully","success"),ce()})).catch((function(){Object(f.a)("Unable to edit record.","error")})):Object(f.a)("Please fill all required fields","warning"):Object(f.a)("Enter valid email","warning"):Object(f.a)("Email is required","warning")},deleteStaffData:function(){O.a.post("/staff/deleteStaff",{staff_id:te}).then((function(){Object(f.a)("Record editted successfully","success")})).catch((function(){Object(f.a)("Unable to edit record.","error")}))},id:te}),Object(x.jsx)(j.a,{heading:a&&a.staff_id}),Object(x.jsx)(m,{stafftypedetails:S,staffeditdetails:a,handleInputs:ne,userdetails:H,staffteamdetails:k}),Object(x.jsx)(p,{staffeditdetails:a,handleInputs:ne,allCountries:$}),Object(x.jsx)(l.A,{children:Object(x.jsx)(l.C,{children:Object(x.jsxs)(u.default,{title:"Picture",children:[Object(x.jsx)(l.eb,{children:Object(x.jsx)(l.s,{xs:"12",md:"3",className:"mb-3",children:Object(x.jsx)(l.e,{className:"shadow-none",color:"primary",onClick:function(){B("StaffPic"),V(["JPG","JPEG","PNG","GIF"]),ee({modelType:"picture"}),R(!0)},children:Object(x.jsx)(o.a,{className:"rounded-circle",width:"20"})})})}),Object(x.jsx)(b.a,{moduleId:te,attachmentModal:q,setAttachmentModal:R,roomName:I,fileTypes:Y,altTagData:"Staff Data",desc:"Staff Data",recordType:"Picture",mediaType:X.modelType}),Object(x.jsx)(h.a,{moduleId:te,roomName:"StaffPic",recordType:"Picture"})]})})})]})}},147:function(e,t,a){"use strict";a.r(t);var n=a(63),c=(a(1),a(3));function s(e){var t=e.details,a=void 0===t?null:t,s=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(n.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(c.jsxs)(n.eb,{children:[Object(c.jsx)(n.s,{children:s}),a&&Object(c.jsxs)(n.s,{children:[Object(c.jsx)(n.eb,{children:Object(c.jsxs)("small",{children:["Modification Date: ",a&&a.modification_date]})}),Object(c.jsx)(n.eb,{className:"d-flex",children:Object(c.jsxs)("small",{children:["Creation Date: ",a&&a.creation_date]})})]})]})})})}t.default=function(e){var t=e.children,a=e.title,i=e.subtitle,r=e.creationModificationDate;return Object(c.jsxs)(n.i,{className:"shadow-none",children:[Object(c.jsx)(s,{details:r,title:a}),Object(c.jsxs)(n.j,{className:"p-4",children:[Object(c.jsx)(n.m,{className:"text-muted mb-3",children:i||""}),Object(c.jsx)("div",{children:t})]})]})}},219:function(e,t,a){"use strict";var n=a(189),c=a.n(n)()().format("DD-MM-YYYY h:mm:ss a");t.a=c},272:function(e,t,a){},273:function(e,t,a){"use strict";var n=a(63),c=a(3),s={textAlign:"right",marginRight:"10px"},i={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(c.jsx)(n.i,{className:"shadow-none",children:Object(c.jsx)(n.j,{style:s,children:Object(c.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:i,children:t})})})}},326:function(e,t,a){"use strict";var n=a(27),c=a(1),s=a(63),i=a(499),r=a(7),l=a(143),o=a(3);t.a=function(e){var t=e.attachmentModal,a=e.setAttachmentModal,d=e.moduleId,j=e.roomName,u=e.fileTypes,b=e.altTagData,h=e.desc,f=Object(c.useState)([]),O=Object(n.a)(f,2),x=O[0],m=O[1],p=Object(c.useState)(),g=Object(n.a)(p,2),v=g[0],y=g[1],C=Object(c.useState)(null),w=Object(n.a)(C,2),S=w[0],_=w[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(s.N,{isOpen:t,children:[Object(o.jsx)(s.Q,{children:"Upload Media"}),Object(o.jsxs)(s.O,{children:[Object(o.jsxs)(s.C,{children:[Object(o.jsx)(i.a,{multiple:!0,handleChange:function(e){var t=Object.entries(e).map((function(e){return e[1]}));m(e),y(t),console.log(e)},name:"file",types:u}),v?v.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("span",{children:[" Name: ",e.name," "]})})})):Object(o.jsx)("span",{children:"No file selected"})]}),S&&Object(o.jsx)("div",{className:"progress mt-2",children:Object(o.jsx)("div",{className:"progress-bar h-4",role:"progressbar","aria-valuenow":S,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(S,"%")},children:"".concat(S,"% uploaded")})})]}),Object(o.jsxs)(s.P,{children:[Object(o.jsx)(s.e,{color:"primary",className:"shadow-none",onClick:function(){!function(){if(x){var e=new FormData;Object.entries(x).map((function(e){return e[1]})).forEach((function(t){e.append("files",t)})),e.append("record_id",d),e.append("room_name",j),e.append("alt_tag_data",b),e.append("description",h),r.a.post("/file/uploadFiles",e,{onUploadProgress:function(e){console.log(Math.round(e.loaded/e.total*100)),_(Math.round(e.loaded/e.total*100))}}).then((function(){Object(l.a)("Files Uploaded Successfully","success"),setTimeout((function(){window.location.reload()}),400)})).catch((function(){a(!1),Object(l.a)("Unable to upload File","error")}))}else Object(l.a)("No files selected","info")}()},children:"Upload"}),Object(o.jsx)(s.e,{color:"secondary",className:"shadow-none",onClick:function(){window.location.reload(),a(!1)},children:"Cancel"})]})]})})}},327:function(e,t,a){"use strict";var n=a(27),c=a(1),s=a(316),i=a.n(s),r=a(527),l=a(143),o=a(7),d=a(3);t.a=function(e){var t=e.moduleId,a=e.roomName,s={},j=Object(c.useState)(null),u=Object(n.a)(j,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){o.a.post("/file/getListOfFiles",{record_id:t,room_name:a}).then((function(e){h(e.data)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{style:s,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{style:s,children:[Object(d.jsx)("th",{style:s,children:"File Name"}),Object(d.jsx)("th",{width:"5%"})]})}),Object(d.jsx)("tbody",{children:b?b.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:s,children:Object(d.jsx)("a",{href:"http://43.228.126.245/united-ecomm-api/storage/uploads/".concat(e.name),target:"_blank",rel:"noreferrer",children:e.name})}),Object(d.jsx)("td",{style:s,children:Object(d.jsxs)("button",{type:"button",className:"btn shadow-none",onClick:function(){var t;t=e.media_id,i.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&o.a.post("/file/deleteFile",{media_id:t}).then((function(e){console.log(e),i.a.fire("Deleted!","Media has been deleted.","success"),window.location.reload()})).catch((function(){Object(l.a)("Unable to Delete Media","info")}))}))},children:[Object(d.jsx)(r.a,{})," "]})})]},e.media_id)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("p",{children:"no files uploaded yet"})})})})]})})}},745:function(e,t,a){"use strict";var n=a(1),c=a.n(n),s=a(0),i=a.n(s);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,s=e.size,i=void 0===s?24:s,o=l(e,["color","size"]);return c.a.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),c.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),c.a.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),c.a.createElement("polyline",{points:"21 15 16 10 5 21"}))}));o.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},o.displayName="Image",t.a=o}}]);
//# sourceMappingURL=60.6dd8d838.chunk.js.map