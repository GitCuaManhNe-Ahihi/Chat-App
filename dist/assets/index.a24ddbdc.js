var se=Object.defineProperty,ae=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var z=(t,n,s)=>n in t?se(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,R=(t,n)=>{for(var s in n||(n={}))V.call(n,s)&&z(t,s,n[s]);if(N)for(var s of N(n))G.call(n,s)&&z(t,s,n[s]);return t},k=(t,n)=>ae(t,oe(n));var H=(t,n)=>{var s={};for(var a in t)V.call(t,a)&&n.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&N)for(var a of N(t))n.indexOf(a)<0&&G.call(t,a)&&(s[a]=t[a]);return s};import{i as re,g as ie,a as le,d as ce,R as l,w as Y,p as $,b as J,n as T,H as de,u as ue,o as he,j as e,S as X,s as C,C as _,c as u,T as v,B as w,P as pe,r as fe,e as x,f as g,A as E,z as me,h as ge,t as S,k as ye,F as y,l as xe,U as be,m as ve,I as ee,q as Ce,v as K,G as Ae,x as q,y as we,M as te,D as Le,E as W,J as Re,K as ke,L as Se,Q as Ee,N as Ne,O as Ue,V as Me,W as Fe,X as Q,Y as ne,Z as Ie}from"./vendor.a96f1a47.js";const Oe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};Oe();const Te={apiKey:"AIzaSyCLGBTjRdWUwaOH9E2n2YZVaCa9KjkUfU8",authDomain:"chatapp-806e1.firebaseapp.com",projectId:"chatapp-806e1",storageBucket:"chatapp-806e1.appspot.com",messagingSenderId:"586302620698",appId:"1:586302620698:web:992dc17ea913101e5cbda3",measurementId:"G-NP37QDE1MZ"},P=re(Te);ie(P);const U=le(P),F=ce(P);function O(t,n){const[s,a]=l.useState([]);return l.useEffect(()=>{let o;if(n){if(!n.value||!n.value.length){a([]);return}o=Y(T(F,t),J(n.field,n.operator,n.value),$("createdAt","desc"))}return de(o,h=>{var p=[];h.forEach(f=>{p=p.concat([k(R({},f.data()),{id:f.id})])}),a(p)})},[t,n]),s}const I=l.createContext();function Pe({children:t}){const[n,s]=l.useState(null),[a,o]=l.useState(!0),r=ue();return l.useEffect(()=>{const h=he(U,p=>{if(p){const{displayName:f,photoURL:i,email:c,uid:d}=p;s({displayName:f,photoURL:i,email:c,uid:d}),o(!1),r("/home");return}s({}),o(!1),r("/")});return()=>{h()}},[r]),e(I.Provider,{value:{user:n},children:a?e(X,{style:{position:"fixed",marginTop:"50vh",inset:0},size:"large"}):t})}const L=l.createContext();function De({children:t}){const[n,s]=l.useState(!1),[a,o]=l.useState(!1),[r,h]=l.useState(null),{user:{uid:p}}=l.useContext(I),f=l.useMemo(()=>({field:"members",operator:"array-contains",value:p}),[p]),i=O("rooms",f),c=i.filter(A=>A.id===r)[0]||{},d=l.useMemo(()=>({field:"uid",operator:"in",value:c==null?void 0:c.members}),[c==null?void 0:c.members]),b=O("users",d);return e(L.Provider,{value:{uid:p,rooms:i,setId:h,roomCurrent:c,members:b,visible:n,setVisible:s,visibleMember:a,setVisibleMember:o},children:t})}const{Panel:Be}=_,je=C(Be)`
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
`;function ze(){const t=l.useContext(L),{setVisible:n}=t,{rooms:s}=t,a=o=>{t.setId(o)};return e(_,{ghost:!0,defaultActiveKey:["1"],children:u(je,{style:{color:"white"},header:"list room",children:[s.map(o=>e(v.Link,{onClick:()=>a(o.id),children:o.name},o.id)),e(w,{icon:e(pe,{}),ghost:!0,onClick:()=>n(!0),children:"Add Room"})]},"1")})}function Ve(){var s;const{user:{photoURL:t,displayName:n}}=fe.exports.useContext(I);return u(x,{justify:"space-between",children:[e(g,{span:17,children:u(x,{align:"middle",children:[u(g,{span:9,children:[" ",e(E,{src:t,children:t?null:(s=n==null?void 0:n.charAt(0))==null?void 0:s.toUpperCase()})]}),e(g,{span:15,children:e(v.Text,{style:{color:"white",display:"block",textAlign:"left"},children:n||"Anymous"})})]})}),e(g,{span:7,children:e(w,{type:"ghost",style:{color:"white"},onClick:()=>U.signOut(),children:"Logout"})})]})}const Ge=C.div`
    background: #1a001a;
    height: 100vh;
`;function He(){return e(Ge,{children:u(x,{children:[e(g,{span:24,style:{marginBottom:"10px",marginTop:"10px"},children:e(Ve,{})}),e(g,{span:24,children:e(ze,{})})]})})}const M=async(t,n)=>{try{const s=await me(T(F,t),k(R({},n),{createdAt:ge.now()}))}catch(s){S.error(s.message)}},Z=t=>{const n=t.split(" ").filter(i=>i),s=n.length;let a=[],o=[],r=[];for(let i=0;i<s;i++)a[i]=!1;const h=i=>{const c=[];let d="";return i.split("").forEach(b=>{d+=b,c.push(d)}),c};function p(i){for(let c=0;c<s;c++)a[c]||(a[c]=!0,o[i]=n[c],i===s-1&&r.push(o.join(" ")),p(i+1),a[c]=!1)}return p(0),r.reduce((i,c)=>{const d=h(c);return[...i,...d]},[])},Ke=C.div`
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
`;function qe(t){let n="";return t&&(n=ye(new Date(t*1e3),new Date),n=n.charAt(0).toUpperCase()+n.slice(1)),n}function We(t){var n;return e(Ke,{children:u("div",{children:[u("div",{className:"header",children:[u("div",{children:[e(E,{src:t.photoURL,children:t.photoURL?"":t.displayName.charAt(0).toUpperCase()}),e(v.Text,{className:"author",children:t.displayName})]}),u(v.Text,{className:"date",children:[" ",qe((n=t.createdAt)==null?void 0:n.seconds)]})]}),e("div",{className:"content",children:e(v.Text,{children:t.content})})]})})}const Qe=C(g)`

    &&&{
        
        text-align: left;
        padding: 0 30px;
        p{
            font-size: 20px;
        }
    }
`,Ze=C(g)`
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
`,$e=C.div`
       height: 92%;
       overflow-y: scroll;
       display: flex;
       flex-direction: column-reverse;
      
    `;function Je(){const{roomCurrent:t,members:n,setVisibleMember:s}=l.useContext(L),{user:{photoURL:a,uid:o,displayName:r}}=l.useContext(I),[h,p]=l.useState(""),f=l.useRef(null),i=l.useRef(null),[c]=y.useForm(),d=()=>{M("message",{content:h,roomId:t.id,uid:o,displayName:r,photoURL:a}),c.resetFields(),f.current&&setTimeout(()=>{f.current.focus()})},b=m=>{p(m.target.value)},A=l.useMemo(()=>({field:"roomId",operator:"==",value:t.id}),[t.id]),D=O("message",A);return l.useEffect(()=>{i!=null&&i.current&&(i.current.scrollTop=i.current.scrollHeight+50)},[D]),e(xe,{children:t.id?e("div",{children:u(x,{children:[e(g,{span:24,children:u(x,{justify:"space-between",style:{borderBottom:"1px solid black"},align:"middle",children:[u(Qe,{span:10,children:[e("h1",{children:t==null?void 0:t.name}),e("p",{children:t==null?void 0:t.description})]}),u(Ze,{span:13,children:[e(w,{size:"middle",icon:e(be,{}),onClick:()=>{s(!0)},children:"Add"}),e(E.Group,{maxCount:2,size:"default",className:"avataGroup",children:n.map(m=>{var B,j;return e(ve,{title:m.displayName,children:e(E,{src:m.photoURL,children:m.photoURL?"":(j=(B=m.displayName)==null?void 0:B.charAt(0))==null?void 0:j.toUpperCase()})},m.id)})})]})]})}),u(Ye,{span:24,children:[e($e,{ref:i,children:D.map(m=>e(We,{content:m.content,photoURL:m.photoURL,displayName:m.displayName,createdAt:m==null?void 0:m.createdAt},m.id))}),u(x,{children:[e(g,{span:21,children:e(y,{form:c,children:e(y.Item,{name:"message",children:e(ee,{ref:f,placeholder:"Input your messager",autoComplete:"off",onPressEnter:()=>d(),onChange:m=>b(m)})})})}),e(g,{span:3,style:{textAlign:"right"},children:e(w,{type:"primary",onClick:()=>d(),children:"Send"})})]})]})]})}):e(Ce,{message:"H\xE3y ch\u1ECDn ph\xF2ng",type:"info",showIcon:!0,style:{margin:5},closable:!0})})}function Xe(){return u(x,{children:[e(g,{span:6,children:e(He,{})}),e(g,{span:18,children:e(Je,{})})]})}function _e(){const t=()=>{K(U,new Ae).then(s=>{if(s){if(q(s).isNewUser){const{user:{displayName:a,email:o,photoURL:r,uid:h}}=s;M("users",{uid:h,displayName:a,email:o,photoURL:r,keywords:Z(a)})}S.success("Login Success, Hello "+s.user.displayName)}}).catch(s=>{S.error("login fail "+s)})},n=()=>{K(U,new we).then(s=>{if(s){if(q(s).isNewUser){const{user:{displayName:a,email:o,photoURL:r,uid:h}}=s;M("users",{uid:h,displayName:a,email:o,photoURL:r,keywords:Z(a)})}S.success("Login Success, Hello "+s.user.displayName)}}).catch(s=>{S.error("login fail "+s)})};return e("div",{children:e(x,{justify:"center",style:{height:800},children:u(g,{span:8,children:[e(v.Title,{style:{textAlgin:"center"},level:3,children:"App Chat"}),e(w,{style:{width:"100%",marginBottom:5},danger:!0,type:"primary",onClick:()=>t(),children:"Login by Google"}),e(w,{style:{width:"100%"},type:"primary",onClick:s=>n(),children:"Login by Facebook"})]})})})}function et(o){var r=o,{fecthOption:t,debounceTime:n=300,curMembers:s}=r,a=H(r,["fecthOption","debounceTime","curMembers"]);const[h,p]=l.useState(!1),[f,i]=l.useState([]),c=l.useMemo(()=>{const d=b=>{i([]),p(!0),t(b,s).then(A=>{i(A),p(!1),console.log(A)})};return Le.exports.debounce(d,n)},[n,t,s]);return l.useEffect(()=>()=>{i([])},[]),u("div",{children:[e(v.Title,{level:3,children:a.label}),e(W,k(R({},a),{labelInValue:!0,filterOption:!1,onSearch:c,notFoundContent:h?e(X,{size:"small"}):null,children:f.map(d=>u(W.Option,{value:d.value,title:d.lable,children:[e(E,{src:d.photoURL,children:d.photoURL?null:d.label.charAt(0).toUpperCase()}),`${d.label}`]},d.value))}))]})}async function tt(t,n){if(!t)return[];const s=Y(T(F,"users"),J("keywords","array-contains",t),$("displayName"),Re(20));var a=[];return(await ke(s)).forEach(r=>{a.push({label:r.data().displayName,photoURL:r.data().photoURL,value:r.data().uid})}),a.filter(r=>!n.includes(r.value))}function nt(){const[t,n]=l.useState([]),{visibleMember:s,setVisibleMember:a,roomCurrent:o}=l.useContext(L),[r]=y.useForm();return e("div",{children:e(te,{visible:s,onOk:async()=>{console.log(r.getFieldValue());const f=t.map(d=>d.value),i=[...o.members,...f],c=Se(F,"rooms",o.id);await Ee(c,{members:i}),r.resetFields(),a(!1)},onCancel:()=>{r.resetFields(),a(!1)},children:e(y,{form:r,layout:"vertical",children:e(et,{mode:"multiple",name:"search-user",label:"T\u1EA5t c\u1EA3 th\xE0nh vi\xEAn",value:t,placeholder:"Nh\u1EADp t\xEAn th\xE0nh vi\xEAn",fecthOption:tt,onChange:f=>n(f),style:{width:"100%"},curMembers:o.members})})})})}function st(){const{visible:t,setVisible:n,uid:s}=l.useContext(L),[a]=y.useForm();return e("div",{children:e(te,{visible:t,onOk:()=>{M("rooms",k(R({},a.getFieldValue()),{members:[s]})),a.resetFields(),n(!1)},onCancel:()=>{a.resetFields(),n(!1)},closeIcon:e(Ne,{style:{color:"red"}}),children:u(y,{form:a,layout:"vertical",children:[e(y.Item,{label:"T\xEAn ph\xF2ng",name:"name",children:e(Ue,{placeholder:"Nh\u1EADp t\xEAn ph\xF2ng"})}),e(y.Item,{label:"m\xF4 t\u1EA3",name:"description",children:e(ee.TextArea,{})})]})})})}function at(){const{visible:t,visibleMember:n}=l.useContext(L);return e("div",{children:t?e(st,{}):n?e(nt,{}):null})}function ot(){return document.getElementById("modals"),u("div",{className:"App",children:[e(Me,{children:e(Pe,{children:u(De,{children:[u(Fe,{children:[e(Q,{path:"/",element:e(_e,{})}),e(Q,{path:"/home",element:e(Xe,{})})]}),e(at,{})]})})}),ne.createPortal(e(Ie,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),document.getElementById("toast"))]})}ne.render(e(l.StrictMode,{children:e(ot,{})}),document.getElementById("root"));
