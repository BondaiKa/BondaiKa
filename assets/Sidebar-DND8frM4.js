import{j as e}from"./index-kkFOJGry.js";import{F as m,a as u,b as f,c as h,d as b,e as p}from"./index-DvmPCiNU.js";const j="/assets/profile-CxAfe41a.jpg",g="/assets/resume-CzENG4Nx.pdf",k=({isOpen:r,isMobile:a,onToggleSidebar:l,onCloseSidebar:n})=>{const i=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"experience",label:"Experience"},{id:"education",label:"Education"},{id:"projects",label:"Projects"}],o=t=>{(t.key==="Enter"||t.key===" ")&&l()},c=t=>{const s=document.getElementById(t);s&&s.scrollIntoView({behavior:"smooth"}),a&&n()},x=t=>{c(t)},d=()=>i.map(t=>e.jsx("li",{className:"w-full mb-2",children:e.jsx("button",{type:"button",onClick:()=>x(t.id),className:"w-full py-2 text-center text-gray-800 bg-white hover:text-blue-500 transition-colors duration-300 rounded shadow",children:t.label})},t.id));return e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"fixed top-4 left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-2xl text-gray-800 cursor-pointer z-50 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300",onClick:l,role:"button",tabIndex:0,onKeyDown:o,"aria-label":"Toggle Sidebar",children:r?e.jsx(m,{}):e.jsx(u,{})}),e.jsxs("aside",{className:`fixed top-0 left-0 h-full bg-gray-100 shadow-lg p-5 flex flex-col items-center transform transition-transform duration-300 z-40 ${r||!a?"translate-x-0":"-translate-x-full"}`,style:{width:a?"75%":"250px",maxWidth:"250px"},children:[e.jsx("img",{src:j,alt:"Karim Safiullin",className:"w-32 h-32 rounded-full object-cover mb-5"}),e.jsx("h1",{className:"text-2xl font-semibold text-center",children:"Karim Safiullin"}),e.jsx("p",{className:"mt-2 mb-5 text-gray-600 text-center",children:"Senior Data Engineer"}),e.jsxs("div",{className:"flex mb-5 justify-center",children:[e.jsx("a",{href:"mailto:karim.safiullin.career@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2","aria-label":"Email",children:e.jsx(f,{size:24})}),e.jsx("a",{href:"https://github.com/BondaiKa",target:"_blank",rel:"noopener noreferrer",className:"text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2","aria-label":"GitHub",children:e.jsx(h,{size:24})}),e.jsx("a",{href:"https://linkedin.com/in/karim-safiullin",target:"_blank",rel:"noopener noreferrer",className:"text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2","aria-label":"LinkedIn",children:e.jsx(b,{size:24})}),e.jsx("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2","aria-label":"Resume",children:e.jsx(p,{size:24})})]}),e.jsx("nav",{className:"w-full",children:e.jsx("ul",{className:"flex flex-col items-center list-none",children:d()})}),e.jsx("footer",{className:"mt-auto text-gray-400 text-center",children:e.jsx("p",{children:"© 2024 Karim Safiullin"})})]})]})};export{k as default};
