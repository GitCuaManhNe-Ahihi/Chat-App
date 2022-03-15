var te=Object.defineProperty,ne=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var B=(t,n,s)=>n in t?te(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,R=(t,n)=>{for(var s in n||(n={}))V.call(n,s)&&B(t,s,n[s]);if(U)for(var s of U(n))G.call(n,s)&&B(t,s,n[s]);return t},S=(t,n)=>ne(t,se(n));var H=(t,n)=>{var s={};for(var r in t)V.call(t,r)&&n.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&U)for(var r of U(t))n.indexOf(r)<0&&G.call(t,r)&&(s[r]=t[r]);return s};import{i as re,g as ae,a as oe,d as ie,R as l,w as W,p as Q,b as Y,n as F,H as le,u as ce,o as de,j as e,S as Z,t as N,s as C,C as $,c as u,T as v,B as w,P as ue,r as J,e as x,f as g,A as E,z as he,h as pe,k as fe,F as y,l as me,U as ge,m as ye,I as X,q as xe,v as be,G as ve,x as Ce,M as _,y as Ae,D as K,E as we,J as Le,K as Re,Q as Se,L as Ee,N as ke,O as Ue,V as Ne,W as q,X as ee,Y as Me}from"./vendor.bdbdaf06.js";const Ie=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}};Ie();const Fe={apiKey:"AIzaSyCLGBTjRdWUwaOH9E2n2YZVaCa9KjkUfU8",authDomain:"chatapp-806e1.firebaseapp.com",projectId:"chatapp-806e1",storageBucket:"chatapp-806e1.appspot.com",messagingSenderId:"586302620698",appId:"1:586302620698:web:992dc17ea913101e5cbda3",measurementId:"G-NP37QDE1MZ"},O=re(Fe);ae(O);const T=oe(O),M=ie(O);function I(t,n){const[s,r]=l.useState([]);return l.useEffect(()=>{let a;if(n){if(!n.value||!n.value.length){r([]);return}a=W(F(M,t),Y(n.field,n.operator,n.value),Q("createdAt","desc"))}return le(a,p=>{var h=[];p.forEach(f=>{h=h.concat([S(R({},f.data()),{id:f.id})])}),r(h)})},[t,n]),s}const k=l.createContext();function Oe({children:t}){const[n,s]=l.useState(null),[r,a]=l.useState(!0),o=ce();return l.useEffect(()=>{const p=de(T,h=>{if(h){const{displayName:f,photoURL:i,email:c,uid:d}=h;s({displayName:f,photoURL:i,email:c,uid:d}),a(!1),o("/home");return}s({}),a(!1),N.success("Logout Success"),o("/")});return()=>{p()}},[o]),e(k.Provider,{value:{user:n},children:r?e(Z,{style:{position:"fixed",marginTop:"50vh",inset:0},size:"large"}):t})}const L=l.createContext();function Te({children:t}){const[n,s]=l.useState(!1),[r,a]=l.useState(!1),[o,p]=l.useState(null),{user:{uid:h}}=l.useContext(k),f=l.useMemo(()=>({field:"members",operator:"array-contains",value:h}),[h]),i=I("rooms",f),c=i.filter(A=>A.id===o)[0]||{},d=l.useMemo(()=>({field:"uid",operator:"in",value:c==null?void 0:c.members}),[c==null?void 0:c.members]),b=I("users",d);return e(L.Provider,{value:{uid:h,rooms:i,setId:p,roomCurrent:c,members:b,visible:n,setVisible:s,visibleMember:r,setVisibleMember:a},children:t})}const{Panel:Pe}=$,De=C(Pe)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
      font-size: 20px;
      text-transform: capitalize;
    }
    a {
      display: block;
      text-align: left;
      color: white;
      font-size: 17px;
      padding: 5px 20px;
      &:hover {
        color: red;
      }
    }
    button {
      border: none;
    }
  }
`;function je(){const t=l.useContext(L),{setVisible:n}=t,{rooms:s}=t,r=a=>{t.setId(a)};return e($,{ghost:!0,defaultActiveKey:["1"],children:u(De,{style:{color:"white"},header:"list room",children:[s.map(a=>e(v.Link,{onClick:()=>r(a.id),children:a.name},a.id)),e(w,{icon:e(ue,{}),ghost:!0,onClick:()=>n(!0),children:"Add Room"})]},"1")})}function ze(){var s;const{user:{photoURL:t,displayName:n}}=J.exports.useContext(k);return u(x,{justify:"space-between",children:[e(g,{span:17,children:u(x,{align:"middle",children:[u(g,{span:9,children:[" ",e(E,{src:t,children:t?null:(s=n==null?void 0:n.charAt(0))==null?void 0:s.toUpperCase()})]}),e(g,{span:15,children:e(v.Text,{style:{color:"white",display:"block",textAlign:"left"},children:n||"Anymous"})})]})}),e(g,{span:7,children:e(w,{type:"ghost",style:{color:"white"},onClick:()=>T.signOut(),children:"Logout"})})]})}const Be=C.div`
    background: #1a001a;
    height: 100vh;
`;function Ve(){return e(Be,{children:u(x,{children:[e(g,{span:24,style:{marginBottom:"10px",marginTop:"10px"},children:e(ze,{})}),e(g,{span:24,children:e(je,{})})]})})}const P=async(t,n)=>{try{const s=await he(F(M,t),S(R({},n),{createdAt:pe.now()}))}catch(s){N.error(s.message)}},Ge=t=>{const n=t.split(" ").filter(i=>i),s=n.length;let r=[],a=[],o=[];for(let i=0;i<s;i++)r[i]=!1;const p=i=>{const c=[];let d="";return i.split("").forEach(b=>{d+=b,c.push(d)}),c};function h(i){for(let c=0;c<s;c++)r[c]||(r[c]=!0,a[i]=n[c],i===s-1&&o.push(a.join(" ")),h(i+1),r[c]=!1)}return h(0),o.reduce((i,c)=>{const d=p(c);return[...i,...d]},[])},He=C.div`
    align-self: flex-start;
    margin: 10px;
   .header{
         display: flex;
         width: 300px;
         height: 20px;
         align-items: center;
         margin-bottom: 10px;

    .author{
        margin-left: 12px;
        font-weight: bold;
        margin-left: 10px;
        display: inline-block;
    }
    .date{
        margin-left: 20px;
        font-size: 12px;
        color: #a7a7a7a7;
    }
   }
    .content{
        margin-left: 20px;
        max-width:500px;
        background-color: #a7a7a7a7;
        text-align: left;
        padding: 5px;
        border-radius: 5px;
    
       
    }
`;function Ke(t){let n="";return t&&(n=fe(new Date(t*1e3),new Date),n=n.charAt(0).toUpperCase()+n.slice(1)),n}function qe(t){var n;return e(He,{children:u("div",{children:[u("div",{className:"header",children:[u("div",{children:[e(E,{src:t.photoURL,children:t.photoURL?"":t.displayName.charAt(0).toUpperCase()}),e(v.Text,{className:"author",children:t.displayName})]}),u(v.Text,{className:"date",children:[" ",Ke((n=t.createdAt)==null?void 0:n.seconds)]})]}),e("div",{className:"content",children:e(v.Text,{children:t.content})})]})})}const We=C(g)`

    &&&{
        
        text-align: left;
        padding: 0 30px;
        p{
            font-size: 20px;
        }
    }
`,Qe=C(g)`
    &&&{
        
        height: 100px;
        text-align: right;
        line-height: 100px;
        padding: 0 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button{
          margin-right: 10px;
          background:#f0f2f5 ;
          border:none;
        }
        .avataGroup{
          line-height: 100px;
          
        }
    }
`,Ye=C(g)`
     &&&{
         position: relative;
         height: calc(100vh - 110px);
         button{
             width: 90%;
             margin-right: 20px;
             height: 50px;
         }
         input{
             display: block;
             height: 50px;
             width: 90%;
             margin-left: 30px;
         }
     }
`,Ze=C.div`
       height: 92%;
       overflow-y: scroll;
       display: flex;
       flex-direction: column-reverse;
      
    `;function $e(){const{roomCurrent:t,members:n,setVisibleMember:s}=l.useContext(L),{user:{photoURL:r,uid:a,displayName:o}}=l.useContext(k),[p,h]=l.useState(""),f=l.useRef(null),i=l.useRef(null),[c]=y.useForm(),d=()=>{P("message",{content:p,roomId:t.id,uid:a,displayName:o,photoURL:r}),c.resetFields(),f.current&&setTimeout(()=>{f.current.focus()})},b=m=>{h(m.target.value)},A=l.useMemo(()=>({field:"roomId",operator:"==",value:t.id}),[t.id]),D=I("message",A);return l.useEffect(()=>{i!=null&&i.current&&(i.current.scrollTop=i.current.scrollHeight+50)},[D]),e(me,{children:t.id?e("div",{children:u(x,{children:[e(g,{span:24,children:u(x,{justify:"space-between",style:{borderBottom:"1px solid black"},align:"middle",children:[u(We,{span:10,children:[e("h1",{children:t==null?void 0:t.name}),e("p",{children:t==null?void 0:t.description})]}),u(Qe,{span:13,children:[e(w,{size:"middle",icon:e(ge,{}),onClick:()=>{s(!0)},children:"Add"}),e(E.Group,{maxCount:2,size:"default",className:"avataGroup",children:n.map(m=>{var j,z;return e(ye,{title:m.displayName,children:e(E,{src:m.photoURL,children:m.photoURL?"":(z=(j=m.displayName)==null?void 0:j.charAt(0))==null?void 0:z.toUpperCase()})},m.id)})})]})]})}),u(Ye,{span:24,children:[e(Ze,{ref:i,children:D.map(m=>e(qe,{content:m.content,photoURL:m.photoURL,displayName:m.displayName,createdAt:m==null?void 0:m.createdAt},m.id))}),u(x,{children:[e(g,{span:21,children:e(y,{form:c,children:e(y.Item,{name:"message",children:e(X,{ref:f,placeholder:"Input your messager",autoComplete:"off",onPressEnter:()=>d(),onChange:m=>b(m)})})})}),e(g,{span:3,style:{textAlign:"right"},children:e(w,{type:"primary",onClick:()=>d(),children:"Send"})})]})]})]})}):e(xe,{message:"H\xE3y ch\u1ECDn ph\xF2ng",type:"info",showIcon:!0,style:{margin:5},closable:!0})})}function Je(){return u(x,{children:[e(g,{span:6,children:e(Ve,{})}),e(g,{span:18,children:e($e,{})})]})}function Xe(){const t=J.exports.useContext(k),n=()=>{be(T,new ve).then(s=>{if(s){if(Ce(s).isNewUser){const{user:{displayName:r,email:a,photoURL:o,uid:p}}=s;P("users",{uid:p,displayName:r,email:a,photoURL:o,keywords:Ge(r)})}N.success("Login Success, Hello "+s.user.displayName)}}).catch(s=>{N.error("login fail")})};return e("div",{children:e(x,{justify:"center",style:{height:800},children:u(g,{span:8,children:[e(v.Title,{style:{textAlgin:"center"},level:3,children:"App Chat"}),e(w,{style:{width:"100%",marginBottom:5},danger:!0,type:"primary",onClick:()=>n(),children:"Login by Google"}),e(w,{style:{width:"100%"},type:"primary",onClick:()=>t.handleLoginFb(),children:"Login by Facebook"})]})})})}function _e(a){var o=a,{fecthOption:t,debounceTime:n=300,curMembers:s}=o,r=H(o,["fecthOption","debounceTime","curMembers"]);const[p,h]=l.useState(!1),[f,i]=l.useState([]),c=l.useMemo(()=>{const d=b=>{i([]),h(!0),t(b,s).then(A=>{i(A),h(!1),console.log(A)})};return Ae.exports.debounce(d,n)},[n,t,s]);return l.useEffect(()=>()=>{i([])},[]),u("div",{children:[e(v.Title,{level:3,children:r.label}),e(K,S(R({},r),{labelInValue:!0,filterOption:!1,onSearch:c,notFoundContent:p?e(Z,{size:"small"}):null,children:f.map(d=>u(K.Option,{value:d.value,title:d.lable,children:[e(E,{src:d.photoURL,children:d.photoURL?null:d.label.charAt(0).toUpperCase()}),`${d.label}`]},d.value))}))]})}async function et(t,n){if(!t)return[];const s=W(F(M,"users"),Y("keywords","array-contains",t),Q("displayName"),we(20));var r=[];return(await Le(s)).forEach(o=>{r.push({label:o.data().displayName,photoURL:o.data().photoURL,value:o.data().uid})}),r.filter(o=>!n.includes(o.value))}function tt(){const[t,n]=l.useState([]),{visibleMember:s,setVisibleMember:r,roomCurrent:a}=l.useContext(L),[o]=y.useForm();return e("div",{children:e(_,{visible:s,onOk:async()=>{console.log(o.getFieldValue());const f=t.map(d=>d.value),i=[...a.members,...f],c=Re(M,"rooms",a.id);await Se(c,{members:i}),o.resetFields(),r(!1)},onCancel:()=>{o.resetFields(),r(!1)},children:e(y,{form:o,layout:"vertical",children:e(_e,{mode:"multiple",name:"search-user",label:"T\u1EA5t c\u1EA3 th\xE0nh vi\xEAn",value:t,placeholder:"Nh\u1EADp t\xEAn th\xE0nh vi\xEAn",fecthOption:et,onChange:f=>n(f),style:{width:"100%"},curMembers:a.members})})})})}function nt(){const{visible:t,setVisible:n,uid:s}=l.useContext(L),[r]=y.useForm();return e("div",{children:e(_,{visible:t,onOk:()=>{P("rooms",S(R({},r.getFieldValue()),{members:[s]})),r.resetFields(),n(!1)},onCancel:()=>{r.resetFields(),n(!1)},closeIcon:e(Ee,{style:{color:"red"}}),children:u(y,{form:r,layout:"vertical",children:[e(y.Item,{label:"T\xEAn ph\xF2ng",name:"name",children:e(ke,{placeholder:"Nh\u1EADp t\xEAn ph\xF2ng"})}),e(y.Item,{label:"m\xF4 t\u1EA3",name:"description",children:e(X.TextArea,{})})]})})})}function st(){const{visible:t,visibleMember:n}=l.useContext(L);return e("div",{children:t?e(nt,{}):n?e(tt,{}):null})}function rt(){return document.getElementById("modals"),u("div",{className:"App",children:[e(Ue,{children:e(Oe,{children:u(Te,{children:[u(Ne,{children:[e(q,{path:"/",element:e(Xe,{})}),e(q,{path:"/home",element:e(Je,{})})]}),e(st,{})]})})}),ee.createPortal(e(Me,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),document.getElementById("toast"))]})}ee.render(e(l.StrictMode,{children:e(rt,{})}),document.getElementById("root"));
