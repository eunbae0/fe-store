"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[7032],{1428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(6560),i=t(8432);const o={},r="Methods",l={id:"ios/swift/methods",title:"Methods",description:"Objective-C\uc5d0\uc11c\ub294 \ud074\ub798\uc2a4\uc5d0\uc11c\ub9cc \uba54\uc11c\ub4dc\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc9c0\ub9cc, Swift\uc5d0\uc11c\ub294 \uad6c\uc870\uccb4, \ud074\ub798\uc2a4, \uc5f4\uac70\ud615\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \uc720\uc5f0\ud558\uac8c \uc800\uc7a5\ud560 \uc218 \uc788\ub2e4.",source:"@site/docs/ios/swift/methods.md",sourceDirName:"ios/swift",slug:"/ios/swift/methods",permalink:"/dev-store/docs/ios/swift/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/ios/swift/methods.md",tags:[],version:"current",frontMatter:{},sidebar:"iosSidebar",previous:{title:"Array",permalink:"/dev-store/docs/ios/swift/array"},next:{title:"Properties",permalink:"/dev-store/docs/ios/swift/properties"}},c={},d=[{value:"\uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc",id:"\uc778\uc2a4\ud134\uc2a4-\uba54\uc11c\ub4dc",level:2},{value:"self \ud504\ub85c\ud37c\ud2f0",id:"self-\ud504\ub85c\ud37c\ud2f0",level:2},{value:"\uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c \uac12 \ud0c0\uc785 \uc218\uc815",id:"\uc778\uc2a4\ud134\uc2a4-\uba54\uc11c\ub4dc-\ub0b4\ubd80\uc5d0\uc11c-\uac12-\ud0c0\uc785-\uc218\uc815",level:2},{value:"Mutating Method \ub0b4\ubd80\uc5d0\uc11c self \ud560\ub2f9",id:"mutating-method-\ub0b4\ubd80\uc5d0\uc11c-self-\ud560\ub2f9",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"Objective-C\uc5d0\uc11c\ub294 \ud074\ub798\uc2a4\uc5d0\uc11c\ub9cc \uba54\uc11c\ub4dc\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc9c0\ub9cc, Swift\uc5d0\uc11c\ub294 \uad6c\uc870\uccb4, \ud074\ub798\uc2a4, \uc5f4\uac70\ud615\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \uc720\uc5f0\ud558\uac8c \uc800\uc7a5\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\uc778\uc2a4\ud134\uc2a4-\uba54\uc11c\ub4dc",children:"\uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc"}),"\n",(0,s.jsx)(n.p,{children:"\uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc(Instance methods)\ub294 \ud2b9\uc815 \ud074\ub798\uc2a4,\uad6c\uc870\uccb4,\ub610\ub294 \uc5f4\uac70\ud615\uc758 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc18d\ud558\ub294 \ud568\uc218\uc774\ub2e4.\n\uc778\uc2a4\ud134\uc2a4 \ud504\ub85c\ud37c\ud2f0\uc5d0 \uc811\uadfc\ud558\uace0 \uc218\uc815\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uac70\ub098, \uc778\uc2a4\ud134\uc2a4\uc758 \ubaa9\uc801\uacfc \uad00\ub828\ub41c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uba70 \ud568\uc218 \uad6c\ubb38\uacfc \uc644\ubcbd\ud558\uac8c \uc77c\uce58\ud558\uac8c \ub3d9\uc791\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"self-\ud504\ub85c\ud37c\ud2f0",children:"self \ud504\ub85c\ud37c\ud2f0"}),"\n",(0,s.jsxs)(n.p,{children:["\ud0c0\uc785\uc758 \ubaa8\ub4e0 \uc778\uc2a4\ud134\uc2a4\ub294 \uc778\uc2a4\ud134\uc2a4 \uc790\uccb4\uc640 \uc815\ud655\ud558\uac8c \uc77c\uce58\ud558\ub294 ",(0,s.jsx)(n.code,{children:"self \ub77c\ub294 \uc554\uc2dc\uc801 \ud504\ub85c\ud37c\ud2f0"}),"\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"class Counter {\n  var count = 0\n  func increment() {\n    count += 1\n  }\n}\n\nclass Counter {\n  var count = 0\n  func increment() {\n    self.count += 1\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["increment() \uba54\uc11c\ub4dc\ub294 ",(0,s.jsx)(n.code,{children:"self \ud504\ub85c\ud37c\ud2f0"}),"\ub97c \uc774\uc6a9\ud558\uc5ec \uc544\ub798\ucc98\ub7fc \uc791\uc131\ud560 \uc218 \uc788\ub2e4.\n\ud558\uc9c0\ub9cc \uc2e4\uc81c\ub85c \ucf54\ub4dc\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"self"}),"\ub97c \uaf2d \uc791\uc131\ud560 \ud544\uc694\ub294 \uc5c6\ub2e4. ",(0,s.jsx)(n.code,{children:"self"}),"\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \uc791\uc131\ud558\uc9c0 \uc54a\uc73c\uba74 Swift\ub294 \uba54\uc11c\ub4dc \ub0b4\uc5d0\uc11c \uc774\ubbf8 \uc54c\uace0 \uc788\ub294 \ud504\ub85c\ud37c\ud2f0 \ub610\ub294 \uba54\uc11c\ub4dc \uc774\ub984\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub9c8\ub2e4 ",(0,s.jsx)(n.strong,{children:"\ud604\uc7ac \uc778\uc2a4\ud134\uc2a4\uc758 \ud504\ub85c\ud37c\ud2f0 \ub610\ub294 \uba54\uc11c\ub4dc\ub97c \ucc38\uc870\ud55c\ub2e4\uace0 \uac00\uc815"}),"\ud558\uae30 \ub54c\ubb38\uc774\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc\uc758 \ud30c\ub77c\ubbf8\ud130 \uba85\uc774 \uadf8 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ud504\ub85c\ud37c\ud2f0 \uba85\uacfc \ub3d9\uc77c\ud560 \uacbd\uc6b0, \uc774\ub984\uc744 \ubd84\ub9ac\ud558\uae30 \uc704\ud574 self \ud504\ub85c\ud37c\ud2f0\ub97c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"struct Point {\n    var x = 0.0, y = 0.0\n    func isToTheRightOf(x: Double) -> Bool {\n        return self.x > x // \ud30c\ub77c\ubbf8\ud130 x\uc640 \uc778\uc2a4\ud134\uc2a4 \ud504\ub85c\ud37c\ud2f0 self.x\ub97c \uad6c\ubd84\n    }\n}\nlet somePoint = Point(x: 4.0, y: 5.0)\nprint(somePoint.isToTheRightOf(x: 1.0)) // true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\uc778\uc2a4\ud134\uc2a4-\uba54\uc11c\ub4dc-\ub0b4\ubd80\uc5d0\uc11c-\uac12-\ud0c0\uc785-\uc218\uc815",children:"\uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c \uac12 \ud0c0\uc785 \uc218\uc815"}),"\n",(0,s.jsxs)(n.p,{children:["\uad6c\uc870\uccb4(struct)\uc640 \uc5f4\uac70\ud615(enum)\uc740 \uac12 \ud0c0\uc785\uc774\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uac12 \ud0c0\uc785\uc758 \ud504\ub85c\ud37c\ud2f0\ub294 ",(0,s.jsx)(n.strong,{children:"\uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc \ub0b4\uc5d0\uc11c \uc218\uc815\ub420 \uc218 \uc5c6\ub2e4."}),"\n\ud558\uc9c0\ub9cc \ud2b9\uc815 \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c \ud504\ub85c\ud37c\ud2f0\ub97c \uc218\uc815\ud558\uae30 \uc704\ud574\uc11c ",(0,s.jsx)(n.code,{children:"mutating \ud0a4\uc6cc\ub4dc"}),"\ub97c func \ud0a4\uc6cc\ub4dc \uc774\uc804\uc5d0 \uc704\uce58\uc2dc\ucf1c \ub3d9\uc791\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"struct Point {\n    var x = 0.0, y = 0.0\n    mutating func moveBy(x deltaX: Double, y deltaY: Double) {\n        x += deltaX\n        y += deltaY\n    }\n}\nvar somePoint = Point(x: 1.0, y: 1.0)\nsomePoint.moveBy(x: 2.0, y: 3.0)\nprint(somePoint.x, somePoint.y) // (3.0, 4.0)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud558\uc9c0\ub9cc \uad6c\uc870\uccb4\ub97c \uc0c1\uc218(let)\ub85c \uc120\uc5b8\ud55c\ub2e4\uba74 \uac12 \ud0c0\uc785\uc740 \ub0b4\ubd80\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"let fixedPoint = Point(x: 3.0, y: 3.0)\nfixedPoint.moveBy(x: 2.0, y: 3.0) // this will report an error\n"})}),"\n",(0,s.jsx)(n.h2,{id:"mutating-method-\ub0b4\ubd80\uc5d0\uc11c-self-\ud560\ub2f9",children:"Mutating Method \ub0b4\ubd80\uc5d0\uc11c self \ud560\ub2f9"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"struct Point {\n    var x = 0.0, y = 0.0\n    mutating func moveBy(x deltaX: Double, y deltaY: Double) {\n        self = Point(x: x + deltaX, y: y + deltaY)\n    } // \uc704 \uc608\uc2dc\uc758 moveBy \uba54\uc11c\ub4dc\uc640 \uc77c\uce58\ud558\uac8c \ub3d9\uc791\ud55c\ub2e4.\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"enum TriStateSwitch {\n    case off, low, high\n    mutating func next() {\n        switch self {\n        case .off:\n            self = .low\n        case .low:\n            self = .high\n        case .high:\n            self = .off\n        }\n    }\n}\nvar ovenLight = TriStateSwitch.low\novenLight.next()\n// ovenLight is now equal to .high\novenLight.next()\n// ovenLight is now equal to .off\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8432:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var s=t(4424);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);