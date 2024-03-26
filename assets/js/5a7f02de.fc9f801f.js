"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[6872],{2420:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(6560),r=s(8432);const i={},l="RESTful API",c={id:"basics/web/restfulAPI",title:"RESTful API",description:"- HTTP \ud504\ub85c\ud1a0\ucf5c\uc744 \uae30\ubc18\uc73c\ub85c \ud558\ub294 \uc6f9 \uc11c\ube44\uc2a4 \uc544\ud0a4\ud14d\ucc98",source:"@site/docs/basics/web/restfulAPI.md",sourceDirName:"basics/web",slug:"/basics/web/restfulAPI",permalink:"/dev-store/docs/basics/web/restfulAPI",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/basics/web/restfulAPI.md",tags:[],version:"current",frontMatter:{},sidebar:"feBasicsSidebar",previous:{title:"CSRF\uc640 XSS \uacf5\uaca9",permalink:"/dev-store/docs/basics/web/csrf_and_xss"},next:{title:"Browser",permalink:"/dev-store/docs/category/browser"}},o={},d=[{value:"REST\ub780?",id:"rest\ub780",level:2},{value:"HTTP \uba54\uc11c\ub4dc\uc758 \uc885\ub958",id:"http-\uba54\uc11c\ub4dc\uc758-\uc885\ub958",level:2}];function u(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"restful-api",children:"RESTful API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HTTP \ud504\ub85c\ud1a0\ucf5c\uc744 \uae30\ubc18\uc73c\ub85c \ud558\ub294 \uc6f9 \uc11c\ube44\uc2a4 \uc544\ud0a4\ud14d\ucc98"}),"\n",(0,t.jsx)(n.li,{children:"\uc790\uc6d0, \uba54\uc11c\ub4dc, \uba54\uc138\uc9c0 \ub4f1\uc744 \uc815\uc758\ud558\uc5ec client-server \uac04\uc758 \ud1b5\uc2e0\uc744 \uac00\ub2a5\ud558\uac8c \ud55c\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\ud45c\uc900 HTTP \uba54\uc11c\ub4dc(GET, POST, PUT, DELETE)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ubc84\uc640 \ud1b5\uc2e0\ud55c\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rest\ub780",children:"REST\ub780?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Representational State Transfer(REST)"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"API \uc791\ub3d9 \ubc29\uc2dd\uc5d0 \ub300\ud55c \uc870\uac74\uc744 \ubd80\uacfc\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98."}),"\n",(0,t.jsx)(n.li,{children:"REST \uae30\ubc18 \uc544\ud0a4\ud14d\ucc98\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub300\uaddc\ubaa8\uc758 \uace0\uc131\ub2a5 \ud1b5\uc2e0\uc744 \uc548\uc815\uc801\uc73c\ub85c \uc9c0\uc6d0\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uc27d\uac8c \uad6c\ud604\ud558\uace0 \uc218\uc815\ud560 \uc218 \uc788\uc5b4 \ubaa8\ub4e0 API \uc2dc\uc2a4\ud15c\uc744 \ud30c\uc545\ud558\uace0 \uc5ec\ub7ec \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"http-\uba54\uc11c\ub4dc\uc758-\uc885\ub958",children:"HTTP \uba54\uc11c\ub4dc\uc758 \uc885\ub958"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GET: \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc694\uccad"}),"\n",(0,t.jsx)(n.li,{children:"POST: \uc11c\ubc84\uc5d0 \ub370\uc774\ud130\ub97c \uc804\uc1a1"}),"\n",(0,t.jsx)(n.li,{children:"PUT: \uc11c\ubc84\uc758 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,t.jsx)(n.li,{children:"DELETE: \uc11c\ubc84\uc758 \ub370\uc774\ud130\ub97c \uc0ad\uc81c"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8432:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>l});var t=s(4424);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);