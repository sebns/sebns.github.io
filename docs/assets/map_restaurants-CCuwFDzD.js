import{g as U,j as e,m as I,I as m,A as u,i as v,N as w,a as M,L as x,c as N,C as K}from"./Navbar-DOKrkXvf.js";import A,{createContext as $,useState as f,useContext as g,useEffect as j,useRef as R}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";const c=o=>`https://dynamic-media-cdn.tripadvisor.com/media/${o}?w=300&h=300&s=1`,y=o=>`https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${o}.png`,G={name:"Reference",iconUrl:y("red"),items:[{coords:[51.508039,-.128069],name:"Trafalgar Square",countryCode:"UK",city:"London"},{coords:[41.3870154,2.1700471],name:"Plaça de Catalunya",countryCode:"ES",city:"Barcelona"},{coords:[44.6463058,10.9255166],name:"Duomo di Modena",countryCode:"IT",city:"Modena"},{coords:[55.6759142,12.5691285],name:"City Hall Square",countryCode:"DK",city:"Copenhagen"}]},P={initialZoom:4,initialCenter:[47.145,6.592],layers:[{name:"Map",urlTemplate:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{name:"Satellite",urlTemplate:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:"Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, GIS"}],suites:{Seb:[G,{name:"Restaurants",iconUrl:y("violet"),items:[{coords:[41.9933638,2.8076499],name:"El Celler de Can Roca",countryCode:"ES",city:"Girona",info:"2012-11-29, 2015-11-28, 2017-02-14, 2022-11-26",photo:c("photo-o/0d/70/ad/a1/mesas-en-el-comedor-con.jpg")},{coords:[44.6448264,10.9215729],name:"Osteria Francescana",countryCode:"IT",city:"Modena",info:"2022-02-11",photo:c("photo-o/11/41/5f/db/suckling-pig-tender-and.jpg")},{coords:[55.6828273,12.6104808],name:"Noma",countryCode:"DK",city:"Copenhagen",info:"2019-07-26",photo:c("photo-o/06/ac/ec/de/noma.jpg")},{coords:[41.3877627,2.153199],name:"Disfrutar",countryCode:"ES",city:"Barcelona",info:"2022-11-29",photo:c("photo-o/07/09/74/ac/disfrutar.jpg")},{coords:[51.507914,-.701748],name:"The Fat Duck",countryCode:"UK",city:"Bray on Thames",info:"2017-05-13",photo:c("photo-o/1f/1e/88/81/nitro-poached-aperitif.jpg")}]},{name:"2٭",iconUrl:y("blue"),items:[{coords:[51.5203787,-.1365322],name:"Kitchen table",countryCode:"UK",city:"London",info:"2017-06-10 + ???",photo:c("photo-o/1b/2b/13/b1/kitchen-table.jpg")},{coords:[51.5112554,-.1551559],name:"Le Gavroche",countryCode:"UK",city:"London",info:"Tony 2015-06",photo:c("photo-s/01/83/d5/92/le-gavroche.jpg"),isClosed:!0},{coords:[51.502161,-.159964],name:"Dinner by Heston Blumenthal",countryCode:"UK",city:"London",info:"Seb 2021-10",photo:c("photo-o/06/ef/22/ed/meat-fruit.jpg")},{coords:[55.6722944,12.5889809],name:"Kadeau",countryCode:"DK",city:"Copenhagen",info:"2019-07-27",photo:c("photo-o/13/32/70/a5/photo2jpg.jpg")},{coords:[36.926756,14.741571],name:"Duomo",countryCode:"IT",city:"Ragusa",info:"Seb 2016-10",photo:c("photo-o/29/66/76/e0/duomo-interior.jpg")},{coords:[51.5270972,-.0793385],name:"The Clove Club",countryCode:"UK",city:"London",info:"2022-05-14",photo:c("photo-o/13/a3/da/2c/raw-orkney-scallop-truffle.jpg")}]},{name:"1٭",iconUrl:y("gold"),items:[{coords:[51.5147644,-.1575224],name:"KOL",countryCode:"UK",city:"London",info:"2022-10-07",photo:c("photo-o/1c/63/1b/26/kol-restaurant.jpg")},{coords:[41.3767234,2.1540984],name:"Enigma",countryCode:"ES",city:"Barcelona",info:"2022-11-28",photo:c("photo-o/12/15/2b/e2/august-2016.jpg")},{coords:[41.3752608,2.1568707],name:"Tickets",countryCode:"ES",city:"Barcelona",info:"2015-11?? + 2017-02-11",photo:"https://albertadria.com/wp-content/uploads/2023/01/Tickets-%C2%AEPepoSeguraYU5L7900-1024x859.jpg",isClosed:!0},{coords:[51.4926222,-.2676784],name:"Hedone",countryCode:"UK",city:"London",info:"Tony 2018-06",photo:"https://lh3.googleusercontent.com/p/AF1QipOObLj95F5VElYedHy691CjsvaQXW13jPhM5Aj7=s680-w680-h510",isClosed:!0},{coords:[51.5237542,-.0764767],name:"Lyle's",countryCode:"UK",city:"London",info:"2022-06-18",photo:c("photo-o/1b/2b/0e/75/lyle-s.jpg")},{coords:[51.5197892,-.1427257],name:"Portland",countryCode:"UK",city:"London",info:"Maja 2023-02",photo:c("photo-o/07/5a/a5/d3/portland.jpg")}]},{name:"0٭",iconUrl:y("grey"),items:[{coords:[51.5064253,-.1261457],name:"Ekstedt at The Yard",countryCode:"UK",city:"London",info:"2024-09-28",photo:c("photo-o/2d/9e/16/97/sunday-roast-wood-oven.jpg")},{coords:[51.5189387,-.1355877],name:"ROKA Charlotte Street",countryCode:"UK",city:"London",info:"2024-10-04 with Tony",photo:c("photo-o/09/5e/21/19/roka-charlotte-street.jpg")},{coords:[41.984698,2.825606],name:"Restaurant Normal",countryCode:"ES",city:"Girona",info:"2022-11-25",photo:c("photo-o/2a/69/f9/0f/caption.jpg")},{coords:[44.6384889,10.931725],name:"Franceschetta 58",countryCode:"IT",city:"Modena",info:"2022-02",photo:c("photo-o/12/f7/f3/9c/photo4jpg.jpg")}]}]}},h=$(null),D=({children:o})=>{const n=U(),[t,s]=f(null),[a,i]=f(n.get("page")==="map"),[r,l]=f(null),[d,T]=f(0),L={data:t,setData:s,isMapEnabled:a,setIsMapEnabledWithURL:b=>{i(b),I({page:[b?"map":"list","list"]})},centreZoom:r,setCentreZoom:l,scrollTop:d,setScrollTop:T};return e.jsx(h.Provider,{value:L,children:o})};var C=(o=>(o.UK="United Kingdom",o.ES="Spain",o.IT="Italy",o.DK="Denmark",o))(C||{});const Z=({origin:o,destination:n,centreZoom:t,isSatellite:s,hasTraffic:a,isByFoot:i})=>{if(n&&!o)throw new Error("Cannot have destination without origin");const r=n?"dir":"place";let l=`https://www.google.com/maps/${r}`;o&&(l+=`/${o}`),n&&(l+=`/${n}`),t&&(l+=`/@${t}`);let d=s?"!3m2!1e3!4b1":"!3m1!4b1";return r==="dir"&&(d+=i?"!4m2!4m1!3e2":"!4m2!4m1!3e0"),a&&(d+="!5m1!1e1"),l+(d.length>0?`/data=${d}`:"")},S=o=>encodeURIComponent(o).replaceAll("%20","+"),k=o=>{const n=/^\d+/.exec(o);return n?parseInt(n[0]):0},E=o=>{const n=C[o.countryCode],t=S(`${o.name}, ${o.city}, ${n}`),s=S(`${o.city}, ${n}`);return{michelin:"https://guide.michelin.com/en/restaurants?q="+t,tripAdv:"https://www.tripadvisor.co.uk/Search?ssrc=e&geo=1&searchNearby=false&q="+t,yelp:`https://www.yelp.co.uk/search?cflt=restaurants&find_desc=${o.name}&find_loc=${s}`,gmap:Z({origin:o.coords.join(","),centreZoom:o.coords.join(",")+",12z"}),weather:"https://www.wunderground.com/calendar/"+o.coords.join(",")}},B=({groups:o})=>{const n=g(h);return j(()=>{document.documentElement.scrollTop=document.body.scrollTop=n.scrollTop},[]),e.jsx("div",{children:o.filter(t=>t.name!=="Reference").map((t,s)=>e.jsx(F,{group:t},s))})},F=({group:o})=>{const n=k(o.name);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"x-list-delimiter",children:o.name}),e.jsx("div",{id:"x-list-container",children:o.items.map((t,s)=>e.jsx(O,{item:t,numStars:n},s))})]})},O=({item:o,numStars:n})=>{const t=g(h),s=r=>{r.preventDefault(),t.setScrollTop(document.documentElement.scrollTop||document.body.scrollTop),t.setCentreZoom([o.coords[0],o.coords[1],15]),t.setIsMapEnabledWithURL(!t.isMapEnabled)},a=E(o),i=[...Array(n).keys()].map(r=>e.jsx("i",{className:"fa-solid fa-star-of-life x-star"},r));return e.jsxs("div",{className:"x-list-item",children:[o.photo&&e.jsx("div",{className:"x-list-photo",children:e.jsx(m,{src:o.photo})}),e.jsxs("div",{className:"x-list-item-bottom"+(o.isClosed?" x-list-item-closed":""),children:[o.isClosed&&e.jsx("div",{className:"x-list-item-info-closed",children:"Permanently closed"}),e.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:e.jsxs("div",{className:"x-list-item-title",children:[o.name,e.jsx("span",{style:{whiteSpace:"nowrap"},children:i})]})}),e.jsxs("div",{className:"x-list-item-country",children:[o.city,", ",C[o.countryCode]]}),o.info&&e.jsx("div",{className:"x-list-item-info",children:o.info}),e.jsxs("div",{children:[e.jsx(u,{href:a.michelin,children:e.jsx(m,{title:"Guide Michelin",src:"https://designsystem.michelin.com/favicon.ico",className:"x-list-item-link"})}),e.jsx(u,{href:a.tripAdv,children:e.jsx(m,{title:"Trip Advisor",src:"https://static.tacdn.com/favicon.ico",className:"x-list-item-link"})}),e.jsx(u,{href:a.yelp,children:e.jsx(m,{title:"Yelp",src:"https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/dcfe403147fc/assets/img/logos/favicon.ico",className:"x-list-item-link"})}),e.jsx(u,{href:a.gmap,children:e.jsx(m,{title:"Google Maps",src:"https://mapsplatform.google.com/static/images/favicon.ico",className:"x-list-item-link"})}),e.jsx("i",{className:"fa-solid fa-map x-list-item-link",onClick:s,style:{color:"#005bc5"},title:"Go to Map"}),e.jsx(u,{href:a.weather,children:e.jsx("i",{className:"fa-solid fa-cloud-sun-rain x-list-item-link",style:{color:"#d5c645"},title:"Weather Forecast"})})]})]})]})},p=window.L,_=()=>{const o=g(h),n=R(null),[t,s]=f(null);return j(()=>{if(n.current===null)console.log("SKIP: Map div is not yet created (cannot create map yet)");else if(t!==null)console.log("SKIP: Map is already created (nothing to do)");else if("_leaflet_id"in n.current)console.log("SKIP: Map is already in the process of being created");else if(!o.data)console.error("Data not loaded yet...");else{console.log("Create a new Map");const a=W(n.current,o,o.data);s(a)}return()=>{t===null?console.log("SKIP: Map was already removed"):(console.log("Cleanup map"),t.remove())}},[t]),e.jsx("div",{id:"x-map",ref:n})},W=(o,n,t)=>{const s=Object.fromEntries(t.layers.map(r=>[r.name,p.tileLayer(r.urlTemplate,{attribution:r.attribution})])),a=z(t.suites.Seb),i=new p.Map(o,{center:n.centreZoom?n.centreZoom.slice(0,2):t.initialCenter,zoom:n.centreZoom?n.centreZoom[2]:t.initialZoom+(v?1:0),zoomControl:v,layers:[s.Map,...Object.values(a)]});return i.attributionControl.setPrefix(!1),p.control.scale({position:"bottomleft"}).addTo(i),p.control.layers(s,a).addTo(i),i.on("moveend",function(){const r=i.getCenter(),l=i.getZoom();n.setCentreZoom([r.lat,r.lng,l])}),i},z=o=>{const n={};let t=0;return o.forEach(s=>{const a={icon:new p.Icon({iconUrl:s.iconUrl,iconAnchor:[Math.round(12.5),41],shadowUrl:"https://cdn.jsdelivr.net/npm/leaflet/dist/images/marker-shadow.png"})},i=s.items.map(r=>{const l=`${s.name}: ${r.name}`;return p.marker(r.coords,a).bindTooltip(l,{permanent:!0,direction:"bottom",className:"x-tooltip"}).bindPopup(H(r,s.name),{className:"x-popup"}).setZIndexOffset(t--)});n[s.name]=p.layerGroup(i)}),n},H=(o,n)=>{const t=(l,d)=>`<a href="${l}" target="_blank" rel="noreferrer">${d}</a>`,s=E(o),a=[t(s.gmap,"Google Maps"),t(s.weather,"Weather Forecast")];n!=="Reference"&&(a.push("Search on "+t(s.michelin,"Michelin guide")),a.push("Search on "+t(s.tripAdv,"Trip Advisor"))),o.info&&a.push("info: "+o.info);const i=k(n),r='<i class="fa-solid fa-star-of-life x-star"></i>'.repeat(i);return[`<strong>${o.name}</strong>${r}`,"<ul>",...a.map(l=>`<li>${l}</li>`),"</ul>"].join(`
`)},q=()=>{const o=g(h),n=()=>{const a=!o.isMapEnabled;o.setIsMapEnabledWithURL(a),a&&(o.setScrollTop(0),o.setCentreZoom(null))},t=o.isMapEnabled?"fa-rectangle-list":"fa-map",s=o.isMapEnabled?o.scrollTop?"Back to List":"List":"Map";return e.jsxs(w,{id:"x-navbar",variant:"dark",children:[e.jsx(w.Brand,{children:e.jsx(m,{src:"img/map_restaurants/favicon.png",height:"32"})}),e.jsx(M,{className:"ms-auto me-auto",children:e.jsx(M.Link,{onClick:n,children:e.jsxs("div",{className:"x-toggle-button",children:[e.jsx("i",{className:"fa-solid "+t})," ",s]})})})]})};function Y(){const o=g(h);return j(()=>{o.data===null&&(console.log("Fetch initial data"),o.setData(P))},[o.data]),o.data===null?e.jsx("p",{children:"loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx("main",{children:o.isMapEnabled?e.jsx(_,{}):e.jsxs(e.Fragment,{children:[e.jsx(B,{groups:o.data.suites.Seb}),e.jsx(Q,{})]})})]})}const Q=()=>e.jsxs("div",{className:"x-shadow",style:{marginTop:"2rem"},children:["Extra links:",e.jsxs("ul",{children:[e.jsx(x,{href:"https://www.theworlds50best.com/Best-of-the-best",children:"World's 50 Best Restaurants"}),e.jsx(x,{href:"https://guide.michelin.com/gb/en",children:"Michelin"}),e.jsx(x,{href:"https://www.laliste.com/en/laliste/world",children:"La Liste"})]})]});N.createRoot(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(K,{children:e.jsx(D,{children:e.jsx(Y,{})})})}));
