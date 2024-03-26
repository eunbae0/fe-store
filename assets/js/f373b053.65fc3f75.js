"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[2200],{2480:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(6560),t=n(8432);const i={},c="CSRF\uc640 XSS \uacf5\uaca9",o={id:"basics/web/csrf_and_xss",title:"CSRF\uc640 XSS \uacf5\uaca9",description:"CSRF(Cross Site Request Forgery)",source:"@site/docs/basics/web/csrf_and_xss.md",sourceDirName:"basics/web",slug:"/basics/web/csrf_and_xss",permalink:"/dev-store/docs/basics/web/csrf_and_xss",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/basics/web/csrf_and_xss.md",tags:[],version:"current",frontMatter:{},sidebar:"feBasicsSidebar",previous:{title:"Web",permalink:"/dev-store/docs/category/web"},next:{title:"RESTful API",permalink:"/dev-store/docs/basics/web/restfulAPI"}},l={},d=[{value:"CSRF(Cross Site Request Forgery)",id:"csrfcross-site-request-forgery",level:2},{value:"\ud574\uacb0\ucc45",id:"\ud574\uacb0\ucc45",level:3},{value:"XSS(Cross Site Scripting)",id:"xsscross-site-scripting",level:2},{value:"\ud574\uacb0\ucc45",id:"\ud574\uacb0\ucc45-1",level:3}];function a(e){const s={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"csrf\uc640-xss-\uacf5\uaca9",children:"CSRF\uc640 XSS \uacf5\uaca9"}),"\n",(0,r.jsx)(s.h2,{id:"csrfcross-site-request-forgery",children:"CSRF(Cross Site Request Forgery)"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\ud574\ucee4\uac00 \uc0ac\uc6a9\uc790\uc758 \uacc4\uc815 \uad8c\ud55c\uc744 \ub3c4\uc6a9\ud558\uc5ec \uc0ac\uc774\ud2b8\uc758 \uc911\uc694 \uae30\ub2a5\uc744 \uc2e4\ud589, GET\uc744 \uc81c\uc678\ud55c \uc694\uccad\ud558\ub294 \uacf5\uaca9"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\ud574\uacb0\ucc45",children:"\ud574\uacb0\ucc45"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\uc11c\ubc84\uc5d0\uc11c CSRF token\uc744 \uc0dd\uc131\ud558\uc5ec \uc138\uc158\uc5d0 \uc800\uc7a5\ud558\uace0, \ud074\ub77c\uc5d0\uc11c \uc694\uccad\uc2dc \ud574\ub2f9 \ud1a0\ud070\uc744 \ud568\uaed8 \uc804\uc1a1\ud558\uc5ec \uc778\uc99d\ud55c\ub2e4."}),"\n",(0,r.jsx)(s.li,{children:"SameSite(SameOrigin \uc815\ucc45)\ub97c \uc124\uc815\ud558\uc5ec \ub2e4\ub978 \uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \ucfe0\ud0a4\ub97c \uc0ac\uc6a9 \ud560 \uc218 \uc5c6\ub3c4\ub85d \uc81c\ud55c"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"xsscross-site-scripting",children:"XSS(Cross Site Scripting)"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\ube0c\ub77c\uc6b0\uc800\uc5d0 \uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub97c \uc0bd\uc785\ud574 \uc2e4\ud589\uc2dc\ucf1c \uac1c\ubc1c\uc790\uac00 \uace0\ub824\ud558\uc9c0 \uc54a\uc740 \uae30\ub2a5\uc744 \uc791\ub3d9\ud558\uac8c \ud568\n\ucfe0\ud0a4\uc815\ubcf4, \uc138\uc158, \uc2dc\uc2a4\ud15c \uad8c\ud55c \ud68d\ub4dd, \uc545\uc131 \ucf54\ub4dc \ub2e4\uc6b4\ub85c\ub4dc \ub4f1\ub4f1"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\ud574\uacb0\ucc45-1",children:"\ud574\uacb0\ucc45"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\uc785\ub825 \uac12\ub4e4\uc758 \uc720\ud6a8\uc131 \uac80\uc99d, \ud2b9\uc218\ubb38\uc790\ub97c \uc815\uaddc\uc2dd\uc744 \uc774\uc6a9\ud574 \uc81c\uac70"}),"\n",(0,r.jsx)(s.li,{children:"\uc11c\ubc84\uc5d0\uc11c CSP\ub97c \uc774\uc6a9\ud558\uc5ec \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \ud5c8\uc6a9\ub41c \ub9ac\uc18c\uc2a4(\uc2a4\ud06c\ub9bd\ud2b8)\ub9cc \uc2e4\ud589\ub418\ub3c4\ub85d \uc81c\ud55c"}),"\n",(0,r.jsx)(s.li,{children:"HTTP \ub300\uc2e0 HTTPS\uc774\uc6a9, \ud1b5\uc2e0 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc554\ud638\ud654"}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8432:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>c});var r=n(4424);const t={},i=r.createContext(t);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);