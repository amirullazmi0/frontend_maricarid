(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{6398:function(e,t,s){Promise.resolve().then(s.bind(s,3113))},954:function(e,t,s){"use strict";s.r(t),s.d(t,{AuthContext:function(){return l},default:function(){return o}});var n=s(7437),r=s(3107),a=s(7907),i=s(2265),c=s(146);let l=(0,i.createContext)({});function o(e){let{children:t}=e,[s,o]=(0,i.useState)(!1),[d,u]=(0,i.useState)(),[h,f]=(0,i.useState)(!1),m=(0,a.useRouter)(),x=c.Z.get("access_token"),g=async()=>{try{let e=await r.Z.get("".concat("http://localhost:5555","/api/auth/checkAuth"),{headers:{Authorization:"Bearer ".concat(x)}});e.data.success?(o(!0),u(e.data.data)):(f(!0),setTimeout(()=>{m.push("/login"),f(!1)},5e3))}catch(e){console.log(e),f(!0),setTimeout(()=>{f(!1),m.push("/login")},5e3)}};return(0,n.jsx)(l.Provider,{value:{Login:s,currentUser:d,CheckAuth:g,Alert:h},children:t})}},52:function(e,t,s){"use strict";s.d(t,{R:function(){return c},Z:function(){return l}});var n=s(7437),r=s(3107),a=s(2265),i=s(146);let c=(0,a.createContext)({addStatus:!1,setAddStatus:()=>{},errorStatus:!1,setErrorStatus:()=>{},deleteSelect:void 0,setDeleteSelect:()=>{},deleteStatus:!1,setDeleteStatus:()=>{},modalEdit:!1,setModalEdit:()=>{},editSelect:void 0,setEditSelect:()=>{},editStatus:!1,setEditStatus:()=>{},handleDeleteClient:async()=>{}});function l(e){let{children:t}=e,[s,l]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!1),[u,h]=(0,a.useState)(void 0),[f,m]=(0,a.useState)(!1),[x,g]=(0,a.useState)(!1),[p,v]=(0,a.useState)(void 0),[j,b]=(0,a.useState)(!1),w=i.Z.get("access_token"),A=async()=>{if(u)try{let e=await r.Z.delete("".concat("http://localhost:5555","/api/client"),{data:{id:u.id},headers:{Authorization:"Bearer ".concat(w)}});!0==e.data.success&&(m(!0),h(void 0),setTimeout(()=>{m(!1)},5e3))}catch(e){}};return(0,n.jsx)(c.Provider,{value:{addStatus:s,setAddStatus:l,errorStatus:o,setErrorStatus:d,deleteSelect:u,setDeleteSelect:h,deleteStatus:f,setDeleteStatus:m,handleDeleteClient:A,modalEdit:x,setModalEdit:g,editSelect:p,setEditSelect:v,editStatus:j,setEditStatus:b},children:t})}},3113:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var n=s(7437),r=s(2265),a=s(52),i=s(3107),c=s(7907),l=s(703),o=s(2122),d=s(146),u=()=>{let e=(0,r.useContext)(a.R),t=(0,c.useRouter)(),[s,u]=(0,r.useState)(!1),[h,f]=(0,r.useState)(""),[m,x]=(0,r.useState)(""),[g,p]=(0,r.useState)(""),[v,j]=(0,r.useState)(!1),[b,w]=(0,r.useState)(null),A=d.Z.get("access_token"),N=async()=>{if(h)try{let s=new FormData;s.append("name",h),s.append("desc",m||""),s.append("images",g);let n=await i.Z.post("".concat("http://localhost:5555","/api/client"),s,{headers:{Authorization:"Bearer ".concat(A)}});!0==n.data.success&&(e.setAddStatus(!0),f(""),x(""),p(""),u(!1),setTimeout(()=>{t.push("/admin/client"),e.setAddStatus(!1)},5e3))}catch(e){window.scrollTo({top:0}),console.log(e)}else window.scrollTo({top:0}),j(!0),setTimeout(()=>{j(!1)},1e4)};return(0,n.jsx)("div",{className:"bg-admin min-h-[70vh]",children:(0,n.jsx)("div",{className:"flex justify-center p-4",children:(0,n.jsxs)("div",{className:"lg:w-[60%] w-[100%] p-4 bg-black",children:[(()=>{if(!0===e.addStatus)return(0,n.jsx)(r.Fragment,{children:(0,n.jsx)("div",{className:"fixed w-screen h-screen top-0 left-0 bg-[#000000c9] flex justify-center items-center",children:(0,n.jsx)("div",{className:" p-4 text-center min-h-[30%] lg:w-[40%] flex justify-center items-center",children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(l.default,{alt:"",src:o.Z,className:"h-32 w-fit"})}),(0,n.jsxs)("div",{className:"w-full text-center font-bold uppercase text-xl text-white",children:[(0,n.jsx)("div",{className:"",children:"Add Data Successfully"}),(0,n.jsx)("div",{className:"mt-3",children:(0,n.jsx)("span",{className:"loading loading-dots loading-md"})})]})]})})})})})(),(0,n.jsx)("div",{className:" text-xl uppercase text-white font-bold bg-red-600 p-2 rounded-sm w-fit",children:"Form Add client"}),(0,n.jsx)("div",{className:"grid gap-2 mt-3",children:(0,n.jsxs)("div",{className:" grid gap-2",children:[!0==v&&(0,n.jsxs)("div",{className:" border-red-600 border-4 text-red-600 uppercase font-bold p-3 rounded-sm text-center flex justify-between",children:[(0,n.jsx)("div",{className:"",children:"Name & Desc not be null"}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})]}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("div",{className:"text-white mb-1",children:"client Name"}),(0,n.jsx)("input",{value:h,onChange:e=>f(e.target.value),type:"text",placeholder:"client name",className:"input input-bordered rounded-sm w-full"})]}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("div",{className:"text-white mb-1",children:"client Image"}),(0,n.jsx)("input",{accept:"image/*",onChange:e=>{let t=e.target.files[0];if(t){p(t);let e=new FileReader;e.onloadend=()=>{w(e.result)},e.readAsDataURL(t)}},type:"file",className:"file-input border-none rounded-sm w-full"})]}),(0,n.jsx)("div",{className:"aspect-square lg:w-[20%] w-[35%] bg-white flex items-center",children:(0,n.jsx)("img",{src:b||"/default.jpg",alt:"Image Preview",className:"object-cover h-fit w-full"})}),(0,n.jsx)("button",{onClick:N,className:" btn btn-success uppercase rounded-sm",children:"Save"})]})})]})})})},h=s(7791),f=s(954),m=s(2550),x=s(8864);function g(){return(0,n.jsxs)(f.default,{children:[(0,n.jsx)(m.default,{}),(0,n.jsx)(a.Z,{children:(0,n.jsxs)("main",{className:"",children:[(0,n.jsx)(h.default,{active:"client"}),(0,n.jsx)("div",{className:"mt-[20vh]",children:(0,n.jsx)(u,{})}),(0,n.jsx)(x.Z,{})]})})]})}},2550:function(e,t,s){"use strict";s.r(t);var n=s(7437),r=s(2265),a=s(954),i=s(7907);t.default=()=>{let e=(0,r.useContext)(a.AuthContext);return((0,i.useRouter)(),(0,r.useEffect)(()=>{e.CheckAuth()},[]),!0===e.Alert)?(document.body.style.overflow="hidden",(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"p-3 fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#000000] text-center z-50",children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("div",{className:"uppercase text-white font-bold text-3xl",children:"SESSION TIMEOUT"}),(0,n.jsx)("div",{className:"text-warning",children:"Redirect To Login"}),(0,n.jsx)("div",{className:"text-white",children:(0,n.jsx)("span",{className:"loading loading-dots loading-lg"})})]})})})):(document.body.style.overflow="auto",null)}},8864:function(e,t,s){"use strict";var n=s(7437),r=s(703);s(2265);var a=s(9282);t.Z=()=>(0,n.jsx)("div",{className:"bg-black text-white p-4 min-h-20 flex items-center justify-center",children:(0,n.jsxs)("div",{className:"w-full text-center",children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(r.default,{alt:"",src:a.default,className:"h-24 w-fit"})}),(0,n.jsx)("div",{className:"text-xl font-bold",children:"MARICAR ADMIN"})]})})},7791:function(e,t,s){"use strict";s.r(t);var n=s(7437),r=s(703),a=s(2265),i=s(3193),c=s(7907),l=s(146);t.default=e=>{let{active:t}=e,s=(0,c.useRouter)(),[o,d]=(0,a.useState)(!1),u=(0,a.useRef)(null),h=e=>{s.push("/admin/".concat(e))},f=()=>{l.Z.remove("access_token"),s.push("/login")};(0,a.useEffect)(()=>{function e(e){u.current&&!u.current.contains(e.target)&&d(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[u]);let m=()=>(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)("button",{onClick:()=>h(""),className:"hover:scale-105 w-fit active:scale-95 duration-200 pl-3 pr-3 ".concat("dashboard"===t&&"border-b-4 border-warning"),children:"Dashboard"}),(0,n.jsx)("button",{onClick:()=>h("event"),className:"hover:scale-105 w-fit active:scale-95 duration-200 pl-3 pr-3 ".concat("event"===t&&"border-b-4 border-warning"),children:"Event"}),(0,n.jsx)("button",{onClick:()=>h("client"),className:"hover:scale-105 w-fit active:scale-95 duration-200 pl-3 pr-3 ".concat("client"===t&&"border-b-4 border-warning"),children:"Client"}),(0,n.jsx)("button",{onClick:()=>h("profile"),className:"hover:scale-105 w-fit active:scale-95 duration-200 pl-3 pr-3 ".concat("profile"===t&&"border-b-4 border-warning"),children:"Profile"}),(0,n.jsx)("button",{onClick:()=>f(),className:"btn btn-warning rounded-sm ml-2 mr-2",children:"Logout"})]});return(0,n.jsx)(a.Fragment,{children:(0,n.jsxs)("div",{className:"fixed w-screen z-40 top-0 left-0",ref:u,children:[(0,n.jsxs)("div",{className:"flex justify-between p-2 items-center text-white gap-6 z-20 lg:pl-52 pr-5 lg:pr-52 relative bg-dark shadow-lg",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)(r.default,{alt:"",src:i.Z,className:"h-28 w-fit"})}),(0,n.jsx)("div",{className:"lg:flex lg:visible hidden",children:m()}),(0,n.jsx)("button",{onClick:()=>{!0==o?d(!1):d(!0)},className:"lg:hidden btn btn-ghost text-white",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})]}),(0,n.jsx)("div",{ref:u,className:"lg:hidden visible flex justify-center p-2 bg-[#1f1f1f] w-screen z-10  duration-200 translate-y-[-100%] ".concat(o&&"translate-y-[0%]"," shadow-lg"),children:(0,n.jsx)("div",{className:"text-white flex flex-col justify-center items-center text-center gap-3",children:m()})})]})})}},703:function(e,t,s){"use strict";s.d(t,{default:function(){return r.a}});var n=s(7447),r=s.n(n)},7907:function(e,t,s){"use strict";var n=s(5313);s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}})},7447:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{getImageProps:function(){return c},default:function(){return l}});let n=s(6921),r=s(8630),a=s(1749),i=n._(s(536)),c=e=>{let{props:t}=(0,r.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},l=a.Image},3193:function(e,t){"use strict";t.Z={src:"/_next/static/media/fullWhite.b162bffd.png",height:2e3,width:4e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAARklEQVR42mMgCP51dWX96+k58+/du8h////7/Pv7N/Tfv38uQBwAxIYM/5qbs4D4NFBBBFBBMFBB4L9//zyBOAyI9QjaAAC+DzGcxQ6wcQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},9282:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/logo-white.5ae17c5d.png",height:3e3,width:3e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42g3ETQoBARgA0M+Ordj6KwsXYMMBsNEYs1QyK1cYavKXUmPHbV+mVy9MLHSE0DU3CUc/uRByX4ewVngbGXspLMPO2cNJ7u5iG1KlvcqzvpSExFXPSqbvZhMylbYQOj7SMDTV1Ki1zAz+JORSMnNmlVIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2122:function(e,t){"use strict";t.Z={src:"/_next/static/media/Success.817b3e7e.gif",height:500,width:498,blurWidth:0,blurHeight:0}},146:function(e,t,s){"use strict";/*! js-cookie v3.0.5 | MIT */function n(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)e[n]=s[n]}return e}s.d(t,{Z:function(){return r}});var r=function e(t,s){function r(e,r,a){if("undefined"!=typeof document){"number"==typeof(a=n({},s,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in a)a[c]&&(i+="; "+c,!0!==a[c]&&(i+="="+a[c].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+i}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],n={},r=0;r<s.length;r++){var a=s[r].split("="),i=a.slice(1).join("=");try{var c=decodeURIComponent(a[0]);if(n[c]=t.read(i,c),e===c)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){r(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[444,749,971,69,560],function(){return e(e.s=6398)}),_N_E=e.O()}]);