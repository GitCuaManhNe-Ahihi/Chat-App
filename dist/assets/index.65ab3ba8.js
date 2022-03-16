var ue=Object.defineProperty,he=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var K=(t,n,a)=>n in t?ue(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,R=(t,n)=>{for(var a in n||(n={}))W.call(n,a)&&K(t,a,n[a]);if(I)for(var a of I(n))$.call(n,a)&&K(t,a,n[a]);return t},N=(t,n)=>he(t,pe(n));var Q=(t,n)=>{var a={};for(var s in t)W.call(t,s)&&n.indexOf(s)<0&&(a[s]=t[s]);if(t!=null&&I)for(var s of I(t))n.indexOf(s)<0&&$.call(t,s)&&(a[s]=t[s]);return a};import{i as fe,g as me,a as ge,d as ye,R as i,w as j,p as z,b as te,n as T,H as ne,E as se,u as xe,o as be,j as e,S as oe,s as b,C as ae,c as h,T as A,B as S,P as ve,r as Z,e as x,f as g,A as k,h as V,Q as G,L as re,F as H,z as Ae,k as Ce,t as U,l as we,m as y,I as ie,U as Ee,q as Le,v as Re,x as Y,G as Ne,y as J,D as Se,M as le,J as ke,K as X,N as Ue,O as Oe,V as Fe,W as Ie,X as Me,Y as _,Z as ce,_ as De}from"./vendor.595c6c75.js";const Te=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}};Te();const Pe={apiKey:"AIzaSyCLGBTjRdWUwaOH9E2n2YZVaCa9KjkUfU8",authDomain:"chatapp-806e1.firebaseapp.com",projectId:"chatapp-806e1",storageBucket:"chatapp-806e1.appspot.com",messagingSenderId:"586302620698",appId:"1:586302620698:web:992dc17ea913101e5cbda3",measurementId:"G-NP37QDE1MZ"},q=fe(Pe);me(q);const M=ge(q),E=ye(q);function B(t,n){const[a,s]=i.useState([]);return i.useEffect(()=>{let o;if(n){if(!n.value||!n.value.length){s([]);return}o=j(T(E,t),te(n.field,n.operator,n.value),z("createdAt","desc"))}return ne(o,d=>{var u=[];d.forEach(f=>{u=u.concat([N(R({},f.data()),{id:f.id})])}),s(u)})},[t,n]),a}function de(t){const[n,a]=i.useState([]);return i.useEffect(()=>{const s=j(T(E,t),z("status","desc"),se(20));return ne(s,r=>{var d=[];r.forEach(u=>{d=d.concat([N(R({},u.data()),{id:u.id})])}),a(d)})},[t]),n}const P=i.createContext();function Be({children:t}){const[n,a]=i.useState(null),[s,o]=i.useState(!0),r=xe();return i.useEffect(()=>{const d=be(M,u=>{if(u){const{displayName:f,photoURL:l,email:p,uid:c}=u;a({displayName:f,photoURL:l,email:p,uid:c}),o(!1),r("/home");return}a({}),o(!1),r("/")});return()=>{d()}},[r]),e(P.Provider,{value:{user:n},children:s?e(oe,{style:{position:"fixed",marginTop:"50vh",inset:0},size:"large"}):t})}const C=i.createContext();function je({children:t}){const[n,a]=i.useState(!1),[s,o]=i.useState(!1),[r,d]=i.useState(null),u=de("users"),{user:{uid:f}}=i.useContext(P),l=i.useMemo(()=>({field:"members",operator:"array-contains",value:f}),[f]),p=B("rooms",l),c=p.filter(v=>v.id===r)[0]||{},w=i.useMemo(()=>({field:"uid",operator:"in",value:c==null?void 0:c.members}),[c==null?void 0:c.members]),L=B("users",w),O=u.filter(v=>v.uid!==f),m=u.find(v=>v.uid===f),F=m==null?void 0:m.id;return e(C.Provider,{value:{uid:f,rooms:p,setId:d,roomCurrent:c,members:L,visible:n,setVisible:a,visibleMember:s,setVisibleMember:o,allMember:O,idcollection:F},children:t})}const{Panel:ze}=ae,Ve=b(ze)`
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
`;function Ge(){const t=i.useContext(C),{setVisible:n}=t,{rooms:a}=t,s=o=>{t.setId(o)};return e(ae,{ghost:!0,defaultActiveKey:["1"],children:h(Ve,{style:{color:"white"},header:"list room",children:[a.map(o=>e(A.Link,{onClick:()=>s(o.id),children:o.name},o.id)),e(S,{icon:e(ve,{}),ghost:!0,onClick:()=>n(!0),children:"Add Room"})]},"1")})}function He(){var o;const{user:{photoURL:t,displayName:n}}=Z.exports.useContext(P),{idcollection:a}=Z.exports.useContext(C),s=async()=>{const r=V(E,"users",a);await G(r,{status:!1}),M.signOut()};return h(x,{justify:"space-between",children:[e(g,{span:17,children:h(x,{align:"middle",children:[h(g,{span:9,children:[" ",e(k,{src:t,children:t?null:(o=n==null?void 0:n.charAt(0))==null?void 0:o.toUpperCase()})]}),e(g,{span:15,children:e(A.Text,{style:{color:"white",display:"block",textAlign:"left"},children:n||"Anymous"})})]})}),e(g,{span:7,children:e(S,{type:"ghost",style:{color:"white"},onClick:()=>s(),children:"Logout"})})]})}const qe=b(k)`
    &&&{
        position:relative;
        ${t=>t.isOnline?`&::after
            {
                content:"";
                position: absolute;
                width:10px;
                height:10px;
                background:green;
                bottom:2px;
                right:5;
                border-radius:50%;
            }`:""}
    }
`,Ke=b(re.Item)`
{
    &&&{
        ${t=>t.isOnline?"":"opacity:0.5"}
    }
}`;function We(){const{allMember:t}=i.useContext(C);return h(H,{children:[e(A.Title,{level:4,style:{color:"white",textAlign:"left"},children:"Ng\u01B0\u1EDDi d\xF9ng hi\u1EC7n t\u1EA1i"}),e(re,{children:t.map(n=>h(Ke,{isOnline:n.status,style:{border:"none",display:"flex",alignContent:"center",color:"white",padding:"5px 10px"},children:[e(qe,{src:n.photoURL,isOnline:n.status,children:n.photoURL?"":n.displayName.charAt(0).toUpperCase()}),e("span",{style:{flex:"1",textAlign:"left",marginLeft:"20px"},children:n.displayName})]},n.id))})]})}const $e=b.div`
    background: #1a001a;
    height: 100vh;
`;function Qe(){return h($e,{children:[h(x,{children:[e(g,{span:24,style:{marginBottom:"10px",marginTop:"10px"},children:e(He,{})}),e(g,{span:24,children:e(Ge,{})})]}),e(x,{children:e(g,{span:24,children:e(We,{children:"'"})})})]})}const D=async(t,n)=>{try{const a=await Ae(T(E,t),N(R({},n),{createdAt:Ce.now()}))}catch(a){U.error(a.message)}},ee=t=>{const n=t.split(" ").filter(l=>l),a=n.length;let s=[],o=[],r=[];for(let l=0;l<a;l++)s[l]=!1;const d=l=>{const p=[];let c="";return l.split("").forEach(w=>{c+=w,p.push(c)}),p};function u(l){for(let p=0;p<a;p++)s[p]||(s[p]=!0,o[l]=n[p],l===a-1&&r.push(o.join(" ")),u(l+1),s[p]=!1)}return u(0),r.reduce((l,p)=>{const c=d(p);return[...l,...c]},[])},Ze=b.div`
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
`;function Ye(t){let n="";return t&&(n=we(new Date(t*1e3),new Date),n=n.charAt(0).toUpperCase()+n.slice(1)),n}function Je(t){var n;return e(Ze,{children:h("div",{children:[h("div",{className:"header",children:[h("div",{children:[e(k,{src:t.photoURL,children:t.photoURL?"":t.displayName.charAt(0).toUpperCase()}),e(A.Text,{className:"author",children:t.displayName})]}),h(A.Text,{className:"date",children:[" ",Ye((n=t.createdAt)==null?void 0:n.seconds)]})]}),e("div",{className:"content",children:e(A.Text,{children:t.content})})]})})}const Xe=({name:t,placeholder:n,onChange:a,onPressEnter:s,form:o},r)=>e(H,{children:e(y,{form:o,children:e(y.Item,{name:t,children:e(ie,{ref:r,placeholder:n,onChange:d=>a(d),onPressEnter:()=>s()})})})});var _e=i.forwardRef(Xe);const et=b(g)`

    &&&{
        
        text-align: left;
        padding: 0 30px;
        p{
            font-size: 20px;
        }
    }
`,tt=b(g)`
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
`,nt=b(g)`
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
`,st=b.div`
       height: 92%;
       overflow-y: scroll;
       display: flex;
       flex-direction: column-reverse;
      
    `;function ot(){const{roomCurrent:t,members:n,setVisibleMember:a}=i.useContext(C),{user:{photoURL:s,uid:o,displayName:r}}=i.useContext(P),[d,u]=i.useState(""),f=i.useRef(null),l=i.useRef(null),[p]=y.useForm(),c=()=>{D("message",{content:d,roomId:t.id,uid:o,displayName:r,photoURL:s}),p.resetFields(),f.current&&setTimeout(()=>{f.current.focus()})},w=m=>{u(m.target.value)},L=i.useMemo(()=>({field:"roomId",operator:"==",value:t.id}),[t.id]),O=B("message",L);return i.useEffect(()=>{l!=null&&l.current&&(l.current.scrollTop=l.current.scrollHeight+50)},[O]),e(H,{children:t.id?e("div",{children:h(x,{children:[e(g,{span:24,children:h(x,{justify:"space-between",style:{borderBottom:"1px solid black"},align:"middle",children:[h(et,{span:10,children:[e("h1",{children:t==null?void 0:t.name}),e("p",{children:t==null?void 0:t.description})]}),h(tt,{span:13,children:[e(S,{size:"middle",icon:e(Ee,{}),onClick:()=>{a(!0)},children:"Add"}),e(k.Group,{maxCount:2,size:"default",className:"avataGroup",children:n.map(m=>{var F,v;return e(Le,{title:m.displayName,children:e(k,{src:m.photoURL,children:m.photoURL?"":(v=(F=m.displayName)==null?void 0:F.charAt(0))==null?void 0:v.toUpperCase()})},m.id)})})]})]})}),h(nt,{span:24,children:[e(st,{ref:l,children:O.map(m=>e(Je,{content:m.content,photoURL:m.photoURL,displayName:m.displayName,createdAt:m==null?void 0:m.createdAt},m.id))}),h(x,{children:[e(g,{span:21,children:e(_e,{name:"message",onChange:w,onPressEnter:c,placeholder:"Nh\u1EADp tin nh\u1EAFn c\u1EE7a b\u1EA1n..",form:p,ref:f})}),e(g,{span:3,style:{textAlign:"right"},children:e(S,{type:"primary",onClick:()=>c(),children:"Send"})})]})]})]})}):e(Re,{message:"H\xE3y ch\u1ECDn ph\xF2ng",type:"info",showIcon:!0,style:{margin:5},closable:!0})})}function at(){return h(x,{children:[e(g,{span:6,children:e(Qe,{})}),e(g,{span:18,children:e(ot,{})})]})}function rt(){const t=de("users"),n=()=>{Y(M,new Ne).then(async s=>{if(s){if(J(s).isNewUser){const{user:{displayName:o,email:r,photoURL:d,uid:u}}=s;D("users",{uid:u,displayName:o,email:r,status:!0,photoURL:d,keywords:ee(o)})}else{const o=t.find(u=>u.uid===s.user.uid),r=o==null?void 0:o.id,d=V(E,"users",r);await G(d,{status:!0})}U.success("Login Success, Hello "+s.user.displayName)}}).catch(s=>{U.error("login fail "+s)})},a=()=>{Y(M,new Se).then(s=>{if(s){if(J(s).isNewUser){const{user:{displayName:o,email:r,photoURL:d,uid:u}}=s;D("users",{uid:u,displayName:o,email:r,photoURL:d,keywords:ee(o),online:!0})}U.success("Login Success, Hello "+s.user.displayName)}}).catch(s=>{U.error("login fail "+s)})};return e("div",{children:e(x,{justify:"center",style:{height:800},children:h(g,{span:8,children:[e(A.Title,{style:{textAlgin:"center"},level:3,children:"App Chat"}),e(S,{style:{width:"100%",marginBottom:5},danger:!0,type:"primary",onClick:()=>n(),children:"Login by Google"}),e(S,{style:{width:"100%"},type:"primary",onClick:s=>a(),children:"Login by Facebook"})]})})})}function it(o){var r=o,{fecthOption:t,debounceTime:n=300,curMembers:a}=r,s=Q(r,["fecthOption","debounceTime","curMembers"]);const[d,u]=i.useState(!1),[f,l]=i.useState([]),p=i.useMemo(()=>{const c=w=>{l([]),u(!0),t(w,a).then(L=>{l(L),u(!1),console.log(L)})};return ke.exports.debounce(c,n)},[n,t,a]);return i.useEffect(()=>()=>{l([])},[]),h("div",{children:[e(A.Title,{level:3,children:s.label}),e(X,N(R({},s),{labelInValue:!0,filterOption:!1,onSearch:p,notFoundContent:d?e(oe,{size:"small"}):null,children:f.map(c=>h(X.Option,{value:c.value,title:c.lable,children:[e(k,{src:c.photoURL,children:c.photoURL?null:c.label.charAt(0).toUpperCase()}),`${c.label}`]},c.value))}))]})}async function lt(t,n){if(!t)return[];const a=j(T(E,"users"),te("keywords","array-contains",t),z("displayName"),se(20));var s=[];return(await Ue(a)).forEach(r=>{s.push({label:r.data().displayName,photoURL:r.data().photoURL,value:r.data().uid})}),s.filter(r=>!n.includes(r.value))}function ct(){const[t,n]=i.useState([]),{visibleMember:a,setVisibleMember:s,roomCurrent:o}=i.useContext(C),[r]=y.useForm();return e("div",{children:e(le,{visible:a,onOk:async()=>{console.log(r.getFieldValue());const f=t.map(c=>c.value),l=[...o.members,...f],p=V(E,"rooms",o.id);await G(p,{members:l}),r.resetFields(),s(!1)},onCancel:()=>{r.resetFields(),s(!1)},children:e(y,{form:r,layout:"vertical",children:e(it,{mode:"multiple",name:"search-user",label:"T\u1EA5t c\u1EA3 th\xE0nh vi\xEAn",value:t,placeholder:"Nh\u1EADp t\xEAn th\xE0nh vi\xEAn",fecthOption:lt,onChange:f=>n(f),style:{width:"100%"},curMembers:o.members})})})})}function dt(){const{visible:t,setVisible:n,uid:a}=i.useContext(C),[s]=y.useForm();return e("div",{children:e(le,{visible:t,onOk:()=>{D("rooms",N(R({},s.getFieldValue()),{members:[a]})),s.resetFields(),n(!1)},onCancel:()=>{s.resetFields(),n(!1)},closeIcon:e(Oe,{style:{color:"red"}}),children:h(y,{form:s,layout:"vertical",children:[e(y.Item,{label:"T\xEAn ph\xF2ng",name:"name",children:e(Fe,{placeholder:"Nh\u1EADp t\xEAn ph\xF2ng"})}),e(y.Item,{label:"m\xF4 t\u1EA3",name:"description",children:e(ie.TextArea,{})})]})})})}function ut(){const{visible:t,visibleMember:n}=i.useContext(C);return e("div",{children:t?e(dt,{}):n?e(ct,{}):null})}function ht(){return document.getElementById("modals"),h("div",{className:"App",children:[e(Ie,{children:e(Be,{children:h(je,{children:[h(Me,{children:[e(_,{path:"/",element:e(rt,{})}),e(_,{path:"/home",element:e(at,{})})]}),e(ut,{})]})})}),ce.createPortal(e(De,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),document.getElementById("toast"))]})}ce.render(e(i.StrictMode,{children:e(ht,{})}),document.getElementById("root"));
