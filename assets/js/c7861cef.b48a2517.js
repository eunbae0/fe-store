"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[3388],{7056:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=i(6560),s=i(8432);const l={},t="\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uacfc\uc815",o={id:"basics/browser/rendering_process",title:"\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uacfc\uc815",description:"\uad6c\ubb38 \ubd84\uc11d(Parsing)",source:"@site/docs/basics/browser/rendering_process.md",sourceDirName:"basics/browser",slug:"/basics/browser/rendering_process",permalink:"/dev-store/docs/basics/browser/rendering_process",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/basics/browser/rendering_process.md",tags:[],version:"current",frontMatter:{},sidebar:"feBasicsSidebar",previous:{title:"Browser",permalink:"/dev-store/docs/category/browser"},next:{title:"Web Storage",permalink:"/dev-store/docs/basics/browser/web_storage"}},d={},c=[{value:"\uad6c\ubb38 \ubd84\uc11d(Parsing)",id:"\uad6c\ubb38-\ubd84\uc11dparsing",level:2},{value:"DOM \ud2b8\ub9ac \uad6c\ucd95",id:"dom-\ud2b8\ub9ac-\uad6c\ucd95",level:3},{value:"CSSOM \ud2b8\ub9ac \uad6c\ucd95",id:"cssom-\ud2b8\ub9ac-\uad6c\ucd95",level:3},{value:"\ub80c\ub354(Render)",id:"\ub80c\ub354render",level:2},{value:"\uc2a4\ud0c0\uc77c(Style)",id:"\uc2a4\ud0c0\uc77cstyle",level:3},{value:"\ub808\uc774\uc544\uc6c3(Layout)",id:"\ub808\uc774\uc544\uc6c3layout",level:3},{value:"\ub808\uc774\uc5b4(Layer)",id:"\ub808\uc774\uc5b4layer",level:3},{value:"\ud398\uc778\ud2b8(Paint)",id:"\ud398\uc778\ud2b8paint",level:3},{value:"\ud569\uc131(Compositing)",id:"\ud569\uc131compositing",level:3},{value:"\ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ud398\uc778\ud305",id:"\ub9ac\ud50c\ub85c\uc6b0\uc640-\ub9ac\ud398\uc778\ud305",level:2},{value:"\ub9ac\ud50c\ub85c\uc6b0(Reflow)",id:"\ub9ac\ud50c\ub85c\uc6b0reflow",level:3},{value:"\ub9ac\ud398\uc778\ud305(Repainting)",id:"\ub9ac\ud398\uc778\ud305repainting",level:3},{value:"\ucc38\uace0\ubb38\uc11c",id:"\ucc38\uace0\ubb38\uc11c",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\ube0c\ub77c\uc6b0\uc800-\ub80c\ub354\ub9c1-\uacfc\uc815",children:"\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9c1 \uacfc\uc815"}),"\n",(0,r.jsx)(n.h2,{id:"\uad6c\ubb38-\ubd84\uc11dparsing",children:"\uad6c\ubb38 \ubd84\uc11d(Parsing)"}),"\n",(0,r.jsx)(n.p,{children:"\uad6c\ubb38 \ubd84\uc11d\uc740 \ube0c\ub77c\uc6b0\uc800\uac00 \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ubc1b\uc740 \ub370\uc774\ud130(html)\ub97c DOM\uc774\ub098 CSSOM\uc73c\ub85c \ubc14\uafb8\ub294 \ub2e8\uacc4\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"dom-\ud2b8\ub9ac-\uad6c\ucd95",children:"DOM \ud2b8\ub9ac \uad6c\ucd95"}),"\n",(0,r.jsx)(n.p,{children:"\ube0c\ub77c\uc6b0\uc800\ub294 \uac00\uc7a5 \uba3c\uc800 HTML\uc744 \ucc98\ub9ac\ud558\uc5ec DOM \ud2b8\ub9ac\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. HTML \uad6c\ubb38 \ubd84\uc11d\uc740 \ud1a0\ud070\ud654 (en-US)\uc640 \ud2b8\ub9ac \uc0dd\uc131\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. HTML \ud1a0\ud070\uc740 \uc2dc\uc791 \ubc0f \uc885\ub8cc \ud0dc\uadf8 \uadf8\ub9ac\uace0 \uc18d\uc131 \uc774\ub984 \ubc0f \uac12\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \ub9cc\uc57d \ubb38\uc11c\uac00 \uc798 \uad6c\uc131\ub418\uc5b4 \uc788\ub2e4\uba74 \uad6c\ubb38 \ubd84\uc11d\uc740 \uba85\ud655\ud558\uace0 \ube60\ub974\uac8c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \uad6c\ubb38 \ubd84\uc11d\uae30\ub294 \ud1a0\ud070\ud654\ub41c \uc785\ub825\uc744 \ubd84\uc11d\ud558\uc5ec DOM \ud2b8\ub9ac\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"DOM \ud2b8\ub9ac\ub294 \ubb38\uc11c\uc758 \ub0b4\uc6a9\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. html \uc694\uc18c\ub294 \uc2dc\uc791\ud558\ub294 \ud0dc\uadf8\uc774\uace0 DOM \ud2b8\ub9ac\uc758 \ub8e8\ud2b8 \ub178\ub4dc\uc785\ub2c8\ub2e4. \ud2b8\ub9ac\ub294 \ub2e4\ub978 \ud0dc\uadf8\uac04\uc758 \uad00\uacc4\uc640 \uacc4\uce35\uc744 \ubc18\uc601\ud569\ub2c8\ub2e4. \ub2e4\ub978 \ud0dc\uadf8\uc5d0 \uac10\uc2f8\uc838 \uc788\ub294 \ud0dc\uadf8\ub294 \uc790\uc2dd \ub178\ub4dc\uc785\ub2c8\ub2e4. DOM \ub178\ub4dc\uc758 \uac1c\uc218\uac00 \ub9ce\uc544\uc9c8\uc218\ub85d, DOM \ud2b8\ub9ac\ub97c \ub9cc\ub4dc\ub294\ub370 \ub354 \uc624\ub79c \uc2dc\uac04\uc774 \uac78\ub9bd\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"cssom-\ud2b8\ub9ac-\uad6c\ucd95",children:"CSSOM \ud2b8\ub9ac \uad6c\ucd95"}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uc73c\ub85c \ube0c\ub77c\uc6b0\uc800\ub294 \uc804\uc1a1\ubc1b\uc740 CSS\ub97c \uc791\uc5c5 \uac00\ub2a5\ud55c \uc0c1\ud0dc\ub85c \ubcc0\ud658\ud558\uae30 \uc704\ud574 CSSOM \ud2b8\ub9ac\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\ub294 CSS\uc5d0 \uc788\ub294 \uac01\uac01\uc758 \uaddc\uce59\uc744 \uc77d\uace0, \ud2b8\ub9ac \ub178\ub4dc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. CSS \uc120\ud0dd\uae30\uc5d0 \uae30\ubc18\ud574\uc11c \ubd80\ubaa8 \ub178\ub4dc, \uc790\uc2dd \ub178\ub4dc, \ud615\uc81c \uad00\uacc4\uc758 \ub178\ub4dc\ub97c \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"CSSOM \ud2b8\ub9ac\ub294 \uc0ac\uc6a9\uc790 \uc5d0\uc774\uc804\ud2b8\uc758 \uc2a4\ud0c0\uc77c \uc2dc\ud2b8\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\ub294 \ub178\ub4dc\uc5d0 \uc801\uc6a9 \uac00\ub2a5\ud55c \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \uaddc\uce59\ubd80\ud130 \uc801\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc7ac\uadc0\uc801\uc73c\ub85c \ub354 \uad6c\uccb4\uc801\uc73c\ub85c \uc801\uc6a9\ub41c \uaddc\uce59\uc5d0 \ub530\ub77c \uacc4\uc0b0\ub41c \uc2a4\ud0c0\uc77c\uc744 \uc218\uc815\ud574\uac11\ub2c8\ub2e4. \ub2e4\ub978 \ub9d0\ub85c, \uc18d\uc131 \uac12\uc744 \uce90\uc2a4\ucf00\uc774\ub4dc\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"CSSOM\uc744 \ub9cc\ub4dc\ub294 \uac83\uc740 \ub9e4\uc6b0 \ube60\ub974\uae30 \ub54c\ubb38\uc5d0 CSSOM\uc744 \ub9cc\ub4dc\ub294\ub370 \ub4dc\ub294 \uc2dc\uac04\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ud55c \ubc88\uc758 DNS \uc870\ud68c\ub97c \ud558\ub294 \uc2dc\uac04\ubcf4\ub2e4 \uc9e7\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc6f9 \uc131\ub2a5 \ucd5c\uc801\ud654\uc758 \uad00\uc810\uc5d0\uc11c CSSOM \ud2b8\ub9ac \uad6c\ucd95 \ub2e8\uacc4\ub294 \uc131\ub2a5 \ud5a5\uc0c1\uc5d0 \ud070 \uae30\uc5ec\ub97c \ud560 \uc218 \uc788\ub294 \uc601\uc5ed\uc740 \uc544\ub2d9\ub2c8\ub2e4."})}),"\n",(0,r.jsx)(n.h2,{id:"\ub80c\ub354render",children:"\ub80c\ub354(Render)"}),"\n",(0,r.jsx)(n.h3,{id:"\uc2a4\ud0c0\uc77cstyle",children:"\uc2a4\ud0c0\uc77c(Style)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Render Tree",src:i(4740).c+""})}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uc73c\ub85c \ube0c\ub77c\uc6b0\uc800\ub294 DOM\uacfc CSSOM\uc744 \ud569\uccd0 \ub80c\ub354 \ud2b8\ub9ac\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ub80c\ub354 \ud2b8\ub9ac\ub294 DOM \ud2b8\ub9ac\uc758 \ub8e8\ud2b8\ubd80\ud130 \uc2dc\uc791\ud558\uc5ec Node\ub97c \uc21c\ud68c\ud558\uba70 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"display: none"}),"\uacfc \uac19\uc740 \uc2a4\ud0c0\uc77c \uc18d\uc131\uc744 \uac00\uc9c4 \uc694\uc18c\uc640 \uac19\uc774 \ud654\uba74\uc5d0 \ub098\ud0c0\ub098\uc9c0 \uc54a\ub294 \ud0dc\uadf8\uc758 \uacbd\uc6b0, \ub80c\ub354\ub9c1 \uacb0\uacfc\uc5d0 \ub098\ud0c0\ub098\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ub80c\ub354 \ud2b8\ub9ac\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\ubc18\uba74 ",(0,r.jsx)(n.strong,{children:"visibility: hidden"})," \uc18d\uc131\uc744 \uac00\uc9c4 \uc694\uc18c\ub294 \uc790\ub9ac\ub97c \ucc28\uc9c0\ud558\uae30 \ub54c\ubb38\uc5d0 \ub80c\ub354 \ud2b8\ub9ac\uc5d0 \ud3ec\ud568\ub429\ub2c8\ub2e4."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"CSS\ub294 px, %, em, rem\ub4f1 \ub2e4\uc591\ud55c \ub2e8\uc704\ub85c \uc791\uc131\ud560 \uc218 \uc788\ub294\ub370, rem\ub4f1 \uc0c1\ub300\uc801\uc778 \uac12\uc740 \ud53d\uc140\ub85c \uce58\ud658\ub418\uc5b4 \uacc4\uc0b0\ub429\ub2c8\ub2e4."})}),"\n",(0,r.jsx)(n.p,{children:"\uac01\uac01\uc758 \ubcf4\uc774\ub294 \ub178\ub4dc\ub294 \uadf8 \ub178\ub4dc\uc5d0 \uc801\uc6a9\ub41c CSSOM \uaddc\uce59\uc774 \uc788\uc73c\uba70, \ub80c\ub354 \ud2b8\ub9ac\uac00 \ubcf4\uc774\ub294 \ubaa8\ub4e0 \ub178\ub4dc\uc758 \ub0b4\uc6a9\uacfc \uacc4\uc0b0\ub41c \uc2a4\ud0c0\uc77c\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. DOM \ud2b8\ub9ac\uc5d0\uc11c \ubcf4\uc774\ub294 \ubaa8\ub4e0 \ub178\ub4dc\uc5d0 \uad00\ub828\ub41c \uc2a4\ud0c0\uc77c\uc744 \ubaa8\ub450 \ub9de\ucdb0\ubcf4\uace0, CSS \uce90\uc2a4\ucf00\uc774\ub4dc (en-US) \ubc29\uc2dd\uc5d0 \ub530\ub77c\uc11c \uac01 \ub178\ub4dc\uc758 \uacc4\uc0b0\ub41c \uc2a4\ud0c0\uc77c\uc774 \ubb34\uc5c7\uc77c\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"\ub808\uc774\uc544\uc6c3layout",children:"\ub808\uc774\uc544\uc6c3(Layout)"}),"\n",(0,r.jsx)(n.p,{children:"\ub808\uc774\uc544\uc6c3(Layout)\uc740 \uc55e\uc11c \uc0dd\uc131\ub41c \ub80c\ub354 \ud2b8\ub9ac\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ub178\ub4dc\uc758 \ub108\ube44, \ub192\uc774, \uc704\uce58\ub97c \uacb0\uc815\ud558\ub294 \ud504\ub85c\uc138\uc2a4\uc785\ub2c8\ub2e4. \ucd94\uac00\ub85c \ud654\uba74\uc5d0\uc11c \uac01 \uac1d\uccb4\uc758 \ud06c\uae30\uc640 \uc704\uce58\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ub80c\ub354 \ud2b8\ub9ac\uac00 \ud55c \ubc88 \ub9cc\ub4e4\uc5b4\uc9c0\uace0 \ub098\uba74 \ub808\uc774\uc544\uc6c3\uc774 \uc2dc\uc791\ub429\ub2c8\ub2e4. \ub80c\ub354 \ud2b8\ub9ac\ub294 \uacc4\uc0b0\ub41c \uc2a4\ud0c0\uc77c\uacfc \ud568\uaed8 \uc5b4\ub5a4 \ub178\ub4dc\uac00 \ud654\uba74\uc5d0 \ud45c\uc2dc\ub420\uc9c0 \uc2dd\ubcc4\ud558\uc9c0\ub9cc, \uac01 \ub178\ub4dc\uc758 \uc704\uce58\ub098 \uc88c\ud45c\ub97c \uc54c\uc9c0\ub294 \ubabb\ud569\ub2c8\ub2e4. \uc774\uc5d0 \uac01 \uac1d\uccb4\uc758 \uc815\ud655\ud55c \ud06c\uae30\uc640 \uc704\uce58\ub97c \uacb0\uc815\ud558\uae30 \uc704\ud574\uc11c \ube0c\ub77c\uc6b0\uc800\ub294 \ub80c\ub354 \ud2b8\ub9ac\uc758 Root\ubd80\ud130 \uc2dc\uc791\ud558\uc5ec \uc21c\ud68c\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"\ub808\uc774\uc5b4layer",children:"\ub808\uc774\uc5b4(Layer)"}),"\n",(0,r.jsx)(n.p,{children:"\ub80c\ub354 \ud2b8\ub9ac\ub294 \ub808\uc774\uc544\uc6c3(Layout) \uc774\ud6c4 \uc815\ud574\uc9c4 \uae30\uc900\uc5d0 \ub530\ub77c layer\ub97c \ub098\ub204\uac8c \ub429\ub2c8\ub2e4.\n\ube0c\ub77c\uc6b0\uc800\ub294 \ub808\uc774\uc5b4\ub97c \ud06c\uac8c 2\uac00\uc9c0\ub85c \ubd84\ub958\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"RenderLayer"}),"\n",(0,r.jsx)(n.li,{children:"GraphicsLayer"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"layout \ub2e8\uacc4\uc5d0\uc11c Layout Object\ub85c \uad6c\uc131\ub41c Layout Tree\uac00 \uc0dd\uc131\ub418\uace0, Layout Object\uc5d0\uc11c \uc544\ub798 \uc870\uac74\uc744 \ub9cc\uc871\ud558\uba74 \ubcc4\ub3c4\uc758 Paint Layer\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"3D\ub098 perspective\ub97c \ud45c\ud604\ud558\ub294 CSS transform \uc18d\uc131\uc744 \uac00\uc9c4 \uacbd\uc6b0"}),"\n",(0,r.jsx)(n.li,{children:"(\ud50c\ub798\uc2dc\uc640 \uac19\uc740) \ud50c\ub7ec\uadf8\uc778 \uc601\uc5ed"}),"\n",(0,r.jsx)(n.li,{children:"\ud22c\uba85\ub3c4(opacity) \uc18d\uc131 \ud639\uc740 webkit transform\uc758 \uc560\ub2c8\uba54\uc774\uc158\uc758 \uc0ac\uc6a9"}),"\n",(0,r.jsx)(n.li,{children:"\uac00\uc18d \uac00\ub2a5\ud55c CSS \ud544\ud130\ub97c \uac00\uc9c4 \uacbd\uc6b0(css filter)"}),"\n",(0,r.jsx)(n.li,{children:"\ud569\uc131 \ub808\uc774\uc5b4(Compositing Layer)\ub97c \ud558\uc704 \ub178\ub4dc\ub85c \uac00\uc9c4 \uacbd\uc6b0"}),"\n",(0,r.jsx)(n.li,{children:"\ub0ae\uc740(lower) z-index\ub97c \uac00\uc9c4 \ud615\uc81c \ub178\ub4dc(Sibling)\uac00 \ud569\uc131 \ub808\uc774\uc5b4(Compositing Layer)\ub97c \uac00\uc9c4 \uacbd\uc6b0"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"layer\ub97c \ubd84\ub9ac\ud558\uba74 paint\ub294 \ucc98\uc74c\uc5d0\ub9cc \uc77c\uc5b4\ub098\uba70, reflow(relayouting)\uc640 repaint\ub97c \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub808\uc774\uc5b4\uac00 \ubd84\ub9ac\ub418\uc5b4 \ub2e4\ub974\uac8c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\ub808\uc774\uc5b4\ub294 \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uba54\ubaa8\ub9ac \uad00\ub9ac \uce21\uba74\uc5d0\uc11c \ubd24\uc744 \ub54c\ub294 \ube44\uc2fc \uc791\uc5c5\uc774\uae30 \ub54c\ubb38\uc5d0, \uc6f9 \uc131\ub2a5 \ucd5c\uc801\ud654 \uc804\ub7b5\uc73c\ub85c \uacfc\ub3c4\ud558\uac8c \uc4f0\uc774\uc9c0\ub294 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4."})}),"\n",(0,r.jsx)(n.h3,{id:"\ud398\uc778\ud2b8paint",children:"\ud398\uc778\ud2b8(Paint)"}),"\n",(0,r.jsx)(n.p,{children:"\ube0c\ub77c\uc6b0\uc800\ub294 \uac01 \ub178\ub4dc\ub97c \ud654\uba74\uc5d0 \ucc98\uc74c \ud398\uc778\ud305\ud558\ub294 \ud398\uc778\ud2b8(Paint)\uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\uc5d0\uc11c \ube0c\ub77c\uc6b0\uc800\ub294 \ub808\uc774\uc544\uc6c3 \ub2e8\uacc4\uc5d0\uc11c \uacc4\uc0b0\ub41c \uac01 \ubc15\uc2a4\ub97c \uc2e4\uc81c \ud654\uba74\uc758 \ud53d\uc140\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.\n\ud398\uc778\ud2b8 \ub2e8\uacc4\uc5d0\uc11c \ud14d\uc2a4\ud2b8, \uc0c9\uae54, \uacbd\uacc4, \uadf8\ub9bc\uc790 \ubc0f \ubc84\ud2bc\uc774\ub098 \uc774\ubbf8\uc9c0 \uac19\uc740 alt \uc694\uc18c\ub97c \ud3ec\ud568\ud558\uc5ec \ubaa8\ub4e0 \uc694\uc18c\uc758 \uc2dc\uac01\uc801\uc778 \ubd80\ubd84\uc744 \ud654\uba74\uc5d0 \uadf8\ub9ac\ub294 \uc791\uc5c5\uc774 \uc218\ud589\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"\ud569\uc131compositing",children:"\ud569\uc131(Compositing)"}),"\n",(0,r.jsx)(n.p,{children:"painting \uacfc\uc815\uc744 \uac70\uce5c Layer\ub4e4\uc744 \ud569\uc131\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4.(composite layers)\n\uc774 \ub2e8\uacc4\uc5d0\uc11c \ube0c\ub77c\uc6b0\uc800\ub294 layer\ub4e4\uc744 \ud569\uc131\ud558\uc5ec \ud558\ub098\uc758 bitmap\uc73c\ub85c \ub9cc\ub4e0 \ub4a4 \ucd5c\uc885 page\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ub9ac\ud50c\ub85c\uc6b0\uc640-\ub9ac\ud398\uc778\ud305",children:"\ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ud398\uc778\ud305"}),"\n",(0,r.jsx)(n.h3,{id:"\ub9ac\ud50c\ub85c\uc6b0reflow",children:"\ub9ac\ud50c\ub85c\uc6b0(Reflow)"}),"\n",(0,r.jsxs)(n.p,{children:["\ub808\uc774\uc544\uc6c3 \ub2e8\uacc4\uc5d0\uc11c \ucc98\uc74c \ub178\ub4dc\uc758 \uc0ac\uc774\uc988\uc640 \uc704\uce58\uac00 \uacb0\uc815\ub41c \uc774\ud6c4\uc5d0 ",(0,r.jsx)(n.strong,{children:"\ub178\ub4dc\uc758 \ud06c\uae30\uc640 \uc704\uce58\ub97c \ub2e4\uc2dc \uacc4\uc0b0"}),"\ud558\ub294 \uac83\uc744 \ub9ac\ud50c\ub85c\uc6b0(Reflow)\ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \uc774\ubbf8\uc9c0\ub97c \ubd88\ub7ec \uc624\uae30 \uc804 \ub808\uc774\uc544\uc6c3\uc774 \uc77c\uc5b4\ub09c \uacbd\uc6b0, \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\ub97c \uc120\uc5b8\ud558\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 \uc774\ubbf8\uc9c0 \ud06c\uae30\ub97c \uc54c\uac8c \ub41c \uc774\ud6c4 \ub9ac\ud50c\ub85c\uc6b0\uac00 \ud55c \ubc88 \uc77c\uc5b4\ub098\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"\ub9ac\ud398\uc778\ud305repainting",children:"\ub9ac\ud398\uc778\ud305(Repainting)"}),"\n",(0,r.jsx)(n.p,{children:"\uac01 \ub178\ub4dc\ub97c \ud654\uba74\uc5d0 \ub2e4\uc2dc \ud398\uc778\ud305\ud558\ub294 \uc791\uc5c5\uc744 \ub9ac\ud398\uc778\ud305(Repainting)\uc774\ub77c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ucc38\uace0\ubb38\uc11c",children:"\ucc38\uace0\ubb38\uc11c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/Performance/How_browsers_work",children:"https://developer.mozilla.org/ko/docs/Web/Performance/How_browsers_work"})})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4740:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/rendering_process_1-ced75a2bbf6d750368e3569374de17b2.png"},8432:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>t});var r=i(4424);const s={},l=r.createContext(s);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);