"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[2636],{36:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(6560),t=s(8432);const r={},c="\uac00\ube44\uc9c0 \uceec\ub809\ud130",o={id:"basics/javascript/garbage_collection",title:"\uac00\ube44\uc9c0 \uceec\ub809\ud130",description:"\ub354\uc774\uc0c1 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uba54\ubaa8\ub9ac\ub97c \ud574\uc81c\ud558\ub294 \uae30\ub2a5",source:"@site/docs/basics/javascript/garbage_collection.md",sourceDirName:"basics/javascript",slug:"/basics/javascript/garbage_collection",permalink:"/dev-store/docs/basics/javascript/garbage_collection",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/basics/javascript/garbage_collection.md",tags:[],version:"current",frontMatter:{},sidebar:"feBasicsSidebar",previous:{title:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",permalink:"/dev-store/docs/basics/javascript/execution_context"},next:{title:"\ud638\uc774\uc2a4\ud305",permalink:"/dev-store/docs/basics/javascript/hoisting"}},l={},a=[{value:"\uac00\ube44\uc9c0 \uceec\ub809\ud130 \uc54c\uace0\ub9ac\uc998?",id:"\uac00\ube44\uc9c0-\uceec\ub809\ud130-\uc54c\uace0\ub9ac\uc998",level:2},{value:"\ub354 \ube60\ub974\uac8c \ub3d9\uc791\ud558\ub3c4\ub85d\ud558\ub294 \ub2e4\uc591\ud55c \ucd5c\uc801\ud654 \uae30\ubc95",id:"\ub354-\ube60\ub974\uac8c-\ub3d9\uc791\ud558\ub3c4\ub85d\ud558\ub294-\ub2e4\uc591\ud55c-\ucd5c\uc801\ud654-\uae30\ubc95",level:2},{value:"\ucc38\uace0\ubb38\uc11c",id:"\ucc38\uace0\ubb38\uc11c",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\uac00\ube44\uc9c0-\uceec\ub809\ud130",children:"\uac00\ube44\uc9c0 \uceec\ub809\ud130"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\ub354\uc774\uc0c1 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uba54\ubaa8\ub9ac\ub97c \ud574\uc81c\ud558\ub294 \uae30\ub2a5"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Javascript\ub294 \uac00\ube44\uc9c0 \uceec\ub809\ud130\ub97c \ub0b4\uc7a5\ud558\ub294 ",(0,i.jsx)(n.strong,{children:"\ub9e4\ub2c8\uc9c0\ub4dc \uc5b8\uc5b4"}),"\ub85c, ",(0,i.jsx)(n.strong,{children:"\uba54\ubaa8\ub9ac \ub204\uc218\ub97c \ubc29\uc9c0"}),"\ud55c\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294\xa0",(0,i.jsx)(n.em,{children:"\ub3c4\ub2ec \uac00\ub2a5\uc131(reachability)"}),"\xa0\uc774\ub77c\ub294 \uac1c\ub150\uc744 \uc0ac\uc6a9\ud574 \uba54\ubaa8\ub9ac \uad00\ub9ac\ub97c \uc218\ud589\ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uac00\ube44\uc9c0-\uceec\ub809\ud130-\uc54c\uace0\ub9ac\uc998",children:"\uac00\ube44\uc9c0 \uceec\ub809\ud130 \uc54c\uace0\ub9ac\uc998?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\ub9c8\ud06c \uc564 \uc2a4\uc704\ud504 \uc54c\uace0\ub9ac\uc998"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uac00\ube44\uc9c0 \uceec\ub809\ud130\ub294 \ub8e8\ud2b8(root) \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uace0 \uc774\ub97c ",(0,i.jsx)(n.strong,{children:"mark(\uae30\uc5b5)"})," \ud55c\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:["\ub8e8\ud2b8\uac00 \ucc38\uc870\ud558\uace0 \uc788\ub294 \ubaa8\ub4e0 \uac1d\uccb4\ub97c \ubc29\ubb38\ud558\uace0 \uc774\uac83\ub4e4\uc744 ",(0,i.jsx)(n.strong,{children:"mark"})," \ud55c\ub2e4."]}),"\n",(0,i.jsx)(n.li,{children:"mark \ub41c \ubaa8\ub4e0 \uac1d\uccb4\uc5d0 \ubc29\ubb38\ud558\uace0\xa0\uadf8 \uac1d\uccb4\ub4e4\uc774\xa0\ucc38\uc870\ud558\ub294 \uac1d\uccb4\ub3c4 mark \ud569\ub2c8\ub2e4. \ud55c\ubc88 \ubc29\ubb38\ud55c \uac1d\uccb4\ub294 \uc804\ubd80 mark \ud558\uae30 \ub54c\ubb38\uc5d0 \uac19\uc740 \uac1d\uccb4\ub97c \ub2e4\uc2dc \ubc29\ubb38\ud558\ub294 \uc77c\uc740 \uc5c6\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\ub8e8\ud2b8\uc5d0\uc11c \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uac1d\uccb4\ub97c \ubc29\ubb38\ud560 \ub54c\uae4c\uc9c0 \uc704 \uacfc\uc815\uc744 \ubc18\ubcf5\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"mark \ub418\uc9c0 \uc54a\uc740 \ubaa8\ub4e0 \uac1d\uccb4\ub97c \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc0ad\uc81c\ud55c\ub2e4."})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\ub8e8\ud2b8(root)\uc5d0 \ud398\uc778\ud2b8\ub97c \ubd93\ub294\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \uc27d\ub2e4.\n\ud398\uc778\ud2b8\uac00 \ubd80\uc5b4\uc9c0\uc9c0 \uc54a\ub294 \uac1d\uccb4\ub97c \uc0ad\uc81c\ud558\ub294 \uac83."})}),"\n",(0,i.jsx)(n.h2,{id:"\ub354-\ube60\ub974\uac8c-\ub3d9\uc791\ud558\ub3c4\ub85d\ud558\ub294-\ub2e4\uc591\ud55c-\ucd5c\uc801\ud654-\uae30\ubc95",children:"\ub354 \ube60\ub974\uac8c \ub3d9\uc791\ud558\ub3c4\ub85d\ud558\ub294 \ub2e4\uc591\ud55c \ucd5c\uc801\ud654 \uae30\ubc95"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"generational collection(\uc138\ub300\ubcc4 \uc218\uc9d1)"}),", ",(0,i.jsx)(n.strong,{children:"incremental collection(\uc810\uc9c4\uc801 \uc218\uc9d1)"}),", ",(0,i.jsx)(n.strong,{children:"idle-time collection(\uc720\ud734 \uc2dc\uac04 \uc218\uc9d1)"})," \ub4f1\uc774 \uc788\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ucc38\uace0\ubb38\uc11c \ucc38\uc870."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ucc38\uace0\ubb38\uc11c",children:"\ucc38\uace0\ubb38\uc11c"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://ko.javascript.info/garbage-collection",children:"https://ko.javascript.info/garbage-collection"})})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8432:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>c});var i=s(4424);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);