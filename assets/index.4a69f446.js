import{d,r as j,o as n,c,F as g,a as y,t as x,b as e,e as S,f,g as u,h as v,i as p,j as w,n as $,k as m,l as N,A as C,m as L}from"./vendor.50b772cc.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}};P();const A={class:"bg-transparent py-12 md:px-12 flex justify-around lg:justify-end"},O=["href"],z=d({setup(o){const t=j(["work","skills","about"]);return(l,r)=>(n(),c("nav",A,[(n(!0),c(g,null,y(t.value,s=>(n(),c("a",{key:s.toString(),class:"lg:mx-6 text-black tracking-widest lg:tracking-more-wide uppercase hover:text-primary-dark",href:"#"+s},x(s),9,O))),128))]))}}),F={"data-aos":"fade-up",class:"w-[20rem] h-[14rem] md:w-96 md:h-72 shadow-2xl rounded inline-block overflow-hidden relative group"},B=["src"],V={class:"absolute inset-0 bg-transparent z-30 scale-100"},H=e("div",{class:"w-full h-full absolute opacity-0 inset-0 bg-black group-hover:opacity-70 transition duration-150"},null,-1),I={class:"w-full h-full flex flex-col gap-6 justify-center items-center z-40 scale-0 group-hover:scale-100 transition duration-150"},M=d({props:{project:{}},setup(o){function t(l){var r;(r=window.open(l,"_blank"))==null||r.focus}return(l,r)=>(n(),c("div",F,[e("img",{class:"w-full h-full object-cover",src:o.project.img},null,8,B),e("div",V,[H,e("div",I,[e("button",{onClick:r[0]||(r[0]=s=>t(o.project.appURL)),class:"text-white border-white border w-40 py-1 rounded text-lg cursor-pointer hover:bg-white hover:text-black"},"View"),e("button",{onClick:r[1]||(r[1]=s=>t(o.project.githubURL)),class:"text-white border-white border w-40 py-1 rounded text-lg cursor-pointer hover:bg-white hover:text-black"},"Source Code")])])]))}}),h="/db.json",b=S({id:"Store",state:()=>({}),actions:{async getHeader(o){try{const{data:t}=await f.get(h);o(!0,t.header)}catch(t){o(!1,t.message)}},async getProjects(o){try{const{data:t}=await f.get(h);o(!0,t.projects)}catch(t){o(!1,t.message)}},async getSkills(o){try{const{data:t}=await f.get(h);o(!0,t.skills)}catch(t){o(!1,t.message)}},async getFeeds(o){try{const{data:t}=await f.get(h);o(!0,t.testimonials)}catch(t){o(!1,t.message)}},async getContact(o){try{const{data:t}=await f.get(h);o(!0,t.contact)}catch(t){o(!1,t.message)}}}}),D={id:"work",class:"mt-32 lg:mx-32"},E=e("p",{"data-aos":"fade-down",class:"text-primary px-8 lg:px-0 text-5xl lg:text-7xl font-extralight"},[p(" Some of my "),e("strong",null,"Notable Projects")],-1),J={class:"my-10 gap-7 flex flex-wrap justify-center"},R=e("div",{"data-aos":"fade",class:"text-center mt-10"},[e("a",{href:"https://github.com/thejawadali?tab=repositories",target:"_blank",rel:"noopener noreferrer",class:"uppercase bg-secondary hover:bg-secondary-dark text-white text-xl md:text-2xl px-20 py-5 rounded-xl"}," see all projects ")],-1),T=d({setup(o){const t=b(),l=u([]);return v(()=>{t.getProjects((r,s)=>{r?l.value=s:console.error(s)})}),(r,s)=>(n(),c("div",D,[E,e("div",J,[(n(!0),c(g,null,y(l.value,a=>(n(),w(M,{key:a.id,project:a},null,8,["project"]))),128))]),R]))}}),U={class:"w-full p-10 lg:p-32 flex flex-col lg:flex-row items-center justify-between"},q=e("div",{class:"flex-1 lg:text-left text-center flex items-center justify-around"},[e("h1",{class:"text-primary text-4xl lg:text-7xl max-w-md"},[p(" Hello "),e("br"),p(" I'm "),e("strong",null," Jawad Ali")]),e("div",{class:"h-44 hidden xl:block border-l border-black opacity-10"})],-1),K={class:"flex-1 flex flex-col mt-4"},Y={class:"text-gray-500 font-normal text-sm lg:text-base lg:my-4 text-justify"},G={class:"my-3 mx-auto lg:mx-0"},Q=["href"],W=d({setup(o){const t=b(),l=u(""),r=u([]);return v(()=>{t.getHeader((s,a)=>{s?(l.value=a.summary,r.value=a.socialIcons):console.error(a)})}),(s,a)=>(n(),c("header",U,[q,e("div",K,[e("p",Y,x(l.value),1),e("div",G,[(n(!0),c(g,null,y(r.value,i=>(n(),c("a",{key:i.id,class:"mx-2",href:i.url,target:"_blank",rel:"noopener noreferrer"},[e("i",{class:$([i.icon,"text-2xl text-primary fa hover:text-primary-dark"])},null,2)],8,Q))),128))])])]))}}),X={class:"mt-32 lg:mx-32 relative flex flex-col items-end px-8 lg:px-0",id:"about"},Z=e("p",{"data-aos":"fade-down",class:"text-primary text-5xl lg:text-7xl font-extralight w-full"},[p(" You can "),e("strong",null,"Contact me"),p(" via ")],-1),ee={class:"w-full hidden md:inline-block"},te=e("div",{class:"mt-10 w-full h-56 bg-footer"},null,-1),se={class:"ml-1 text-gray-500 text-xs max-w-lg tracking-wider my-5 hidden xl:inline-block"},oe={class:"bg-secondary-light pl-10 pr-20 py-3 mx-auto my-5 md:m-0 md:relative md:bottom-24 xl:bottom-56 md:right-10 inline-block"},re={class:"my-3"},ae=e("p",{class:"uppercase text-xs text-gray-500 tracking-more-wide"},"email",-1),le={class:"my-1 text-sm text-gray-600"},ne={class:"my-3"},ce=e("p",{class:"uppercase text-xs text-gray-500 tracking-more-wide"},"role",-1),ie={class:"my-1 text-sm text-gray-600"},de={class:"my-3"},ue=e("p",{class:"uppercase text-xs text-gray-500 tracking-more-wide"},"phone",-1),_e={class:"my-1 text-sm text-gray-600"},xe=d({setup(o){const t=b(),l=u(""),r=u(""),s=u(""),a=u("");return v(()=>{t.getContact((i,_)=>{i?(l.value=_.description,r.value=_.email,s.value=_.role,a.value=_.phoneNumber):console.error(_)})}),(i,_)=>(n(),c("div",X,[Z,e("div",ee,[te,e("p",se,x(l.value),1)]),e("div",oe,[e("div",re,[ae,e("p",le,x(r.value),1)]),e("div",ne,[ce,e("p",ie,x(s.value),1)]),e("div",de,[ue,e("p",_e,x(a.value),1)])])]))}});var pe=(o,t)=>{const l=o.__vccOpts||o;for(const[r,s]of t)l[r]=s;return l};const me={},fe={class:"w-full h-44 bg-gray-200 mt-5 flex flex-col justify-center items-center"},he=e("p",{class:"text-base font-extralight text-primary"},"Designed with love by",-1),ge=e("p",{class:"text-base font-bold text-primary"},"Jawad Ali",-1),ye=[he,ge];function ve(o,t){return n(),c("div",fe,ye)}var be=pe(me,[["render",ve]]);const we={"data-aos":"zoom-in",class:"bg-gray-100 cursor-pointer rounded p-5 m-5"},$e=d({props:{icon:String},setup(o){return(t,l)=>(n(),c("div",we,[e("i",{class:$([o.icon,"text-8xl"])},null,2)]))}}),ke={id:"skills",class:"mt-32 lg:mx-32"},je=e("p",{"data-aos":"fade-down",class:"text-primary px-8 lg:px-0 text-5xl lg:text-7xl font-extralight"},[p(" My "),e("strong",null,"Top Skills")],-1),Se={class:"my-10 flex flex-wrap justify-center"},Ne=d({setup(o){const t=b(),l=u([]);return v(()=>{t.getSkills((r,s)=>{r?l.value=s:console.error(s)})}),(r,s)=>(n(),c("div",ke,[je,e("div",Se,[(n(!0),c(g,null,y(l.value,a=>(n(),w($e,{key:a.id,icon:a.icon},null,8,["icon"]))),128))])]))}}),Ce=e("div",{class:"absolute top-0 right-0 bg-secondary w-full lg:w-9/12 h-lg rounded-b-large lg:rounded-none z-n opacity-20"},null,-1),Le=d({setup(o){return(t,l)=>(n(),c("div",null,[m(z),Ce,m(W),m(T),m(Ne),m(xe),m(be)]))}});const k=N(Le);C.init({once:!0,duration:800});k.use(L());k.mount("#app");
