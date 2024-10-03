import{u as h,b as he,j as e,d as u,g as fe,P as N,e as ge,f as je,h as xe,k as ye,F as ve,E as Ce,l as Ne,n as we,o as Fe,I as G,N as I,a as V,m as be,c as Te,C as ke}from"./Navbar-CXp4MzOV.js";import*as m from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import Re,{createContext as $e,useState as z,useContext as x,useMemo as O,useRef as B,useEffect as J,useCallback as Ee}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";const K=m.forwardRef(({as:t,bsPrefix:s,variant:n="primary",size:o,active:a=!1,disabled:r=!1,className:c,...i},l)=>{const d=h(s,"btn"),[p,{tagName:g}]=he({tagName:t,disabled:r,...i}),j=g;return e.jsx(j,{...p,...i,ref:l,disabled:r,className:u(c,d,a&&"active",n&&`${d}-${n}`,o&&`${d}-${o}`,i.href&&r&&"disabled")})});K.displayName="Button";const Se={skills:[{name:"Python",icon:"https://cdn-icons-png.flaticon.com/512/5968/5968350.png"},{name:"C#",icon:"https://img.icons8.com/?size=512&id=55251&format=png"},{name:"C++",icon:"https://img.icons8.com/?size=512&id=40669&format=png"},{name:"Typescript",icon:"https://cdn-icons-png.flaticon.com/512/5968/5968381.png"},{name:"React",icon:"https://cdn-icons-png.flaticon.com/512/919/919851.png"},{name:"FastAPI",icon:"https://fastapi.tiangolo.com/img/icon-white.svg",background:"#009485"},{name:"Postgres",icon:"https://img.icons8.com/?size=512&id=38561&format=png"},{name:"Mongo DB",icon:"https://img.icons8.com/?size=512w&id=bosfpvRzNOG8&format=png"},{name:"Playwright",icon:"https://playwright.dev/python/img/playwright-logo.svg"},{name:"Robot Framework",icon:"https://robotframework.org/img/RF.svg"},{name:"Selenium",icon:"https://www.selenium.dev/favicons/favicon.ico"},{name:"PyTest",icon:"https://docs.pytest.org/en/stable/_static/pytest1.png"},{name:"Docker",icon:"https://cdn-icons-png.flaticon.com/512/919/919853.png"},{name:"GIT",icon:"https://cdn-icons-png.flaticon.com/512/15466/15466163.png"},{name:"Jenkins",icon:"https://img.icons8.com/?size=512&id=39292&format=png"},{name:"Ansible",icon:"https://img.icons8.com/?size=512&id=iGCCE2iEmh2u&format=png"},{name:"AWS",icon:"https://img.icons8.com/?size=512&id=33039&format=png"}]},M=$e(null),Ie=({children:t})=>{const s=fe(),[n,o]=z(s.get("page")??"home"),a={data:Se,selectedPage:n,setSelectedPage:o};return e.jsx(M.Provider,{value:a,children:t})},Be={type:N.string,tooltip:N.bool,as:N.elementType},D=m.forwardRef(({as:t="div",className:s,type:n="valid",tooltip:o=!1,...a},r)=>e.jsx(t,{...a,ref:r,className:u(s,`${n}-${o?"tooltip":"feedback"}`)}));D.displayName="Feedback";D.propTypes=Be;const v=m.createContext({}),H=m.forwardRef(({id:t,bsPrefix:s,className:n,type:o="checkbox",isValid:a=!1,isInvalid:r=!1,as:c="input",...i},l)=>{const{controlId:d}=x(v);return s=h(s,"form-check-input"),e.jsx(c,{...i,ref:l,type:o,id:t||d,className:u(n,s,a&&"is-valid",r&&"is-invalid")})});H.displayName="FormCheckInput";const L=m.forwardRef(({bsPrefix:t,className:s,htmlFor:n,...o},a)=>{const{controlId:r}=x(v);return t=h(t,"form-check-label"),e.jsx("label",{...o,ref:a,htmlFor:n||r,className:u(s,t)})});L.displayName="FormCheckLabel";function Le(t,s){return m.Children.toArray(t).some(n=>m.isValidElement(n)&&n.type===s)}const Q=m.forwardRef(({id:t,bsPrefix:s,bsSwitchPrefix:n,inline:o=!1,reverse:a=!1,disabled:r=!1,isValid:c=!1,isInvalid:i=!1,feedbackTooltip:l=!1,feedback:d,feedbackType:p,className:g,style:j,title:y="",type:C="checkbox",label:w,children:F,as:k="input",...b},R)=>{s=h(s,"form-check"),n=h(n,"form-switch");const{controlId:T}=x(v),$=O(()=>({controlId:t||T}),[T,t]),E=!F&&w!=null&&w!==!1||Le(F,L),S=e.jsx(H,{...b,type:C==="switch"?"checkbox":C,ref:R,isValid:c,isInvalid:i,disabled:r,as:k});return e.jsx(v.Provider,{value:$,children:e.jsx("div",{style:j,className:u(g,E&&s,o&&`${s}-inline`,a&&`${s}-reverse`,C==="switch"&&n),children:F||e.jsxs(e.Fragment,{children:[S,E&&e.jsx(L,{title:y,children:w}),d&&e.jsx(D,{type:p,tooltip:l,children:d})]})})})});Q.displayName="FormCheck";const A=Object.assign(Q,{Input:H,Label:L}),Z=m.forwardRef(({bsPrefix:t,type:s,size:n,htmlSize:o,id:a,className:r,isValid:c=!1,isInvalid:i=!1,plaintext:l,readOnly:d,as:p="input",...g},j)=>{const{controlId:y}=x(v);return t=h(t,"form-control"),e.jsx(p,{...g,type:s,size:o,ref:j,readOnly:d,id:a||y,className:u(r,l?`${t}-plaintext`:t,n&&`${t}-${n}`,s==="color"&&`${t}-color`,c&&"is-valid",i&&"is-invalid")})});Z.displayName="FormControl";const Ae=Object.assign(Z,{Feedback:D}),P=m.forwardRef(({className:t,bsPrefix:s,as:n="div",...o},a)=>(s=h(s,"form-floating"),e.jsx(n,{ref:a,className:u(t,s),...o})));P.displayName="FormFloating";const q=m.forwardRef(({controlId:t,as:s="div",...n},o)=>{const a=O(()=>({controlId:t}),[t]);return e.jsx(v.Provider,{value:a,children:e.jsx(s,{...n,ref:o})})});q.displayName="FormGroup";function Ge({as:t,bsPrefix:s,className:n,...o}){s=h(s,"col");const a=ge(),r=je(),c=[],i=[];return a.forEach(l=>{const d=o[l];delete o[l];let p,g,j;typeof d=="object"&&d!=null?{span:p,offset:g,order:j}=d:p=d;const y=l!==r?`-${l}`:"";p&&c.push(p===!0?`${s}${y}`:`${s}${y}-${p}`),j!=null&&i.push(`order${y}-${j}`),g!=null&&i.push(`offset${y}-${g}`)}),[{...o,className:u(n,...c,...i)},{as:t,bsPrefix:s,spans:c}]}const ee=m.forwardRef((t,s)=>{const[{className:n,...o},{as:a="div",bsPrefix:r,spans:c}]=Ge(t);return e.jsx(a,{...o,ref:s,className:u(n,!c.length&&r)})});ee.displayName="Col";const te=m.forwardRef(({as:t="label",bsPrefix:s,column:n=!1,visuallyHidden:o=!1,className:a,htmlFor:r,...c},i)=>{const{controlId:l}=x(v);s=h(s,"form-label");let d="col-form-label";typeof n=="string"&&(d=`${d} ${d}-${n}`);const p=u(a,s,o&&"visually-hidden",n&&d);return r=r||l,n?e.jsx(ee,{ref:i,as:"label",className:p,htmlFor:r,...c}):e.jsx(t,{ref:i,className:p,htmlFor:r,...c})});te.displayName="FormLabel";const se=m.forwardRef(({bsPrefix:t,className:s,id:n,...o},a)=>{const{controlId:r}=x(v);return t=h(t,"form-range"),e.jsx("input",{...o,type:"range",ref:a,className:u(s,t),id:n||r})});se.displayName="FormRange";const ne=m.forwardRef(({bsPrefix:t,size:s,htmlSize:n,className:o,isValid:a=!1,isInvalid:r=!1,id:c,...i},l)=>{const{controlId:d}=x(v);return t=h(t,"form-select"),e.jsx("select",{...i,size:n,ref:l,className:u(o,t,s&&`${t}-${s}`,a&&"is-valid",r&&"is-invalid"),id:c||d})});ne.displayName="FormSelect";const oe=m.forwardRef(({bsPrefix:t,className:s,as:n="small",muted:o,...a},r)=>(t=h(t,"form-text"),e.jsx(n,{...a,ref:r,className:u(s,t,o&&"text-muted")})));oe.displayName="FormText";const ae=m.forwardRef((t,s)=>e.jsx(A,{...t,ref:s,type:"switch"}));ae.displayName="Switch";const Oe=Object.assign(ae,{Input:A.Input,Label:A.Label}),re=m.forwardRef(({bsPrefix:t,className:s,children:n,controlId:o,label:a,...r},c)=>(t=h(t,"form-floating"),e.jsxs(q,{ref:c,className:u(s,t),controlId:o,...r,children:[n,e.jsx("label",{htmlFor:o,children:a})]})));re.displayName="FloatingLabel";const Me={_ref:N.any,validated:N.bool,as:N.elementType},Y=m.forwardRef(({className:t,validated:s,as:n="form",...o},a)=>e.jsx(n,{...o,ref:a,className:u(t,s&&"was-validated")}));Y.displayName="Form";Y.propTypes=Me;const f=Object.assign(Y,{Group:q,Control:Ae,Floating:P,Check:A,Switch:Oe,Label:te,Text:oe,Range:se,Select:ne,FloatingLabel:re}),_=2**31-1;function ce(t,s,n){const o=n-Date.now();t.current=o<=_?setTimeout(s,o):setTimeout(()=>ce(t,s,n),_)}function De(){const t=xe(),s=B();return ye(()=>clearTimeout(s.current)),O(()=>{const n=()=>clearTimeout(s.current);function o(a,r=0){t()&&(n(),r<=_?s.current=setTimeout(a,r):ce(s,a,Date.now()+r))}return{set:o,clear:n,handleRef:s}},[])}const We={[Ce]:"showing",[Ne]:"showing show"},ie=m.forwardRef((t,s)=>e.jsx(ve,{...t,ref:s,transitionClasses:We}));ie.displayName="ToastFade";const le=m.createContext({onClose(){}}),de=m.forwardRef(({bsPrefix:t,closeLabel:s="Close",closeVariant:n,closeButton:o=!0,className:a,children:r,...c},i)=>{t=h(t,"toast-header");const l=x(le),d=we(p=>{l==null||l.onClose==null||l.onClose(p)});return e.jsxs("div",{ref:i,...c,className:u(t,a),children:[r,o&&e.jsx(Fe,{"aria-label":s,variant:n,onClick:d,"data-dismiss":"toast"})]})});de.displayName="ToastHeader";const me=m.forwardRef(({className:t,bsPrefix:s,as:n="div",...o},a)=>(s=h(s,"toast-body"),e.jsx(n,{ref:a,className:u(t,s),...o})));me.displayName="ToastBody";const ue=m.forwardRef(({bsPrefix:t,className:s,transition:n=ie,show:o=!0,animation:a=!0,delay:r=5e3,autohide:c=!1,onClose:i,onEntered:l,onExit:d,onExiting:p,onEnter:g,onEntering:j,onExited:y,bg:C,...w},F)=>{t=h(t,"toast");const k=B(r),b=B(i);J(()=>{k.current=r,b.current=i},[r,i]);const R=De(),T=!!(c&&o),$=Ee(()=>{T&&(b.current==null||b.current())},[T]);J(()=>{R.set($,k.current)},[R,$]);const E=O(()=>({onClose:i}),[i]),S=!!(n&&a),U=e.jsx("div",{...w,ref:F,className:u(t,s,C&&`bg-${C}`,!S&&(o?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return e.jsx(le.Provider,{value:E,children:S&&n?e.jsx(n,{in:o,onEnter:g,onEntering:j,onEntered:l,onExit:d,onExiting:p,onExited:y,unmountOnExit:!0,children:U}):U})});ue.displayName="Toast";const X=Object.assign(ue,{Body:me,Header:de}),_e={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},pe=m.forwardRef(({bsPrefix:t,position:s,containerPosition:n,className:o,as:a="div",...r},c)=>(t=h(t,"toast-container"),e.jsx(a,{ref:c,...r,className:u(t,s&&_e[s],n&&`position-${n}`,o)})));pe.displayName="ToastContainer";const ze=()=>e.jsxs("main",{children:[e.jsx("section",{children:e.jsxs("p",{children:["You can contact us by email:"," ",e.jsx("a",{href:"mailto:solfege.media@gmail.com",children:"solfege.media@gmail.com"})]})}),e.jsxs("section",{children:[e.jsx("p",{children:"Alternatively use this contact form:"}),e.jsx(He,{})]}),e.jsx("section",{children:e.jsx("p",{children:"Solfege Media Ltd is a consultancy company registered in England and Wales, under the registration number 07701812."})})]});function He(){const[t,s]=z({}),n=B(null),o=async a=>{var i;a.preventDefault();const c=Object.fromEntries(["fullname","email","subject","message"].map(l=>[l,a.target[l].value]));if((i=n.current)!=null&&i.checked){console.log(c);const l=encodeURIComponent(c.subject),d=encodeURIComponent(`From: ${c.fullname} <${c.email}>

${c.message}`);window.open(`mailto:solfege.media@gmail.com?subject=${l}&body=${d}`)}else try{(await fetch("./solfege/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).ok?s({text:"Form submitted successfully"}):s({text:'Error submitting form. You can retry enabling "Submit using email".',isError:!0})}catch(l){console.log(l),s({text:'Error contacting server. You can retry enabling "Submit using email".',isError:!0})}};return e.jsxs(f,{onSubmit:o,children:[e.jsxs(f.Group,{children:[e.jsxs(f.Label,{children:["Full Name ",e.jsx(W,{})]}),e.jsx(f.Control,{type:"text",name:"fullname",required:!0})]}),e.jsxs(f.Group,{children:[e.jsxs(f.Label,{children:["Email address ",e.jsx(W,{})]}),e.jsx(f.Control,{type:"email",name:"email",required:!0})]}),e.jsxs(f.Group,{children:[e.jsx(f.Label,{children:"Subject"}),e.jsx(f.Control,{name:"subject"})]}),e.jsxs(f.Group,{children:[e.jsxs(f.Label,{children:["Message ",e.jsx(W,{})]}),e.jsx(f.Control,{as:"textarea",rows:10,name:"message",required:!0})]}),e.jsx(f.Group,{children:e.jsx(f.Check,{type:"switch",label:"Submit using email",ref:n})}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(K,{variant:"primary",type:"submit",children:"Submit"}),e.jsx(qe,{toastState:t,onClose:()=>s({})})]})]})}const qe=({toastState:t,onClose:s})=>e.jsx(pe,{position:"middle-center",children:e.jsx(X,{show:"text"in t,onClose:s,autohide:!0,delay:t.isError?3e4:5e3,bg:t.isError?"danger":"info",children:e.jsx(X.Header,{children:e.jsx("strong",{className:"me-auto",children:t.text})})})}),W=()=>e.jsx("span",{style:{color:"red"},children:"*"}),Ye=()=>e.jsxs("footer",{children:[e.jsx(G,{src:"img/solfege/logo_solfege.png",id:"x-brand-name"}),e.jsx("p",{style:{fontWeight:"bold"},children:"Software consultants"})]}),Ue=()=>e.jsxs(e.Fragment,{children:[e.jsx("main",{style:{padding:"0",maxWidth:"inherit"},children:e.jsx(G,{src:"img/solfege/pic_laptop.jpg",id:"x-picture"})}),e.jsx(Ye,{})]});function Ve(){const t=x(M),[s,n]=z(!0),o=r=>{n(r)},a=["home","services","contact"];return e.jsxs(I,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:o,expanded:s,children:[e.jsx(I.Brand,{href:"https://solfegemedia.com/",children:e.jsx(G,{src:"img/solfege/favicon.png",height:"32"})}),e.jsx(I.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(I.Collapse,{id:"basic-navbar-nav",children:e.jsx(V,{className:"ms-auto me-auto",children:a.map((r,c)=>{const i=()=>{t.setSelectedPage(r),be({page:[r,a[0]]})};return e.jsx(V.Link,{active:r===t.selectedPage,onClick:i,children:r},c)})})})]})}const Je=()=>{const t=x(M);return e.jsxs("main",{style:{lineHeight:"2rem"},children:[e.jsx("section",{children:e.jsxs("p",{children:["Solfege Media's engineers have over a decade work experience using Python. Our Services include:",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("u",{children:"Consulting"}),": providing expert software engineers for roles such as",e.jsxs("ul",{children:[e.jsx("li",{children:"Python Developer"}),e.jsx("li",{children:"Python SDET / Test Automation engineer"}),e.jsx("li",{children:"Full Stack engineer (back-end: Python/FastAPI/Postgres, fron-end: Typescript/React)"})]})]}),e.jsxs("li",{children:[e.jsx("u",{children:"Web Development"}),": Building responsive and user-friendly websites"]})]})]})}),e.jsx("section",{style:{marginTop:"2rem",display:"flex",gap:"1rem",justifyContent:"space-around",flexWrap:"wrap"},children:t.data.skills.map((s,n)=>e.jsxs("div",{style:{textAlign:"center",minWidth:"5rem"},children:[e.jsx(G,{src:s.icon,style:{height:"2rem",width:"2rem",minWidth:"2rem",backgroundColor:s.background??"inherit"}}),e.jsx("p",{children:s.name})]},n))})]})};function Xe(){const t=x(M);return e.jsxs(e.Fragment,{children:[e.jsx(Ve,{}),t.selectedPage==="home"?e.jsx(Ue,{}):t.selectedPage==="services"?e.jsx(Je,{}):t.selectedPage==="contact"?e.jsx(ze,{}):null]})}Te.createRoot(document.getElementById("root")).render(e.jsx(Re.StrictMode,{children:e.jsx(ke,{children:e.jsx(Ie,{children:e.jsx(Xe,{})})})}));