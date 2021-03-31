(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{177:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/RTW-74ba28348fd8ec78a501c0009d9e640b.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(95)),l={slug:"/ReduxStore",title:"Redux store \ud83d\uddc3\ufe0f"},c={unversionedId:"3_Guides/3_4_ReduxStore",id:"3_Guides/3_4_ReduxStore",isDocsHomePage:!1,title:"Redux store \ud83d\uddc3\ufe0f",description:"The store section is now really easy to use thanks to Redux-tookit and our Redux-tookit-wrapper.",source:"@site/docs/3_Guides/3_4_ReduxStore.md",slug:"/ReduxStore",permalink:"/react-native-boilerplate/docs/ReduxStore",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_4_ReduxStore.md",version:"current",sidebar:"docs",previous:{title:"Splash screen & loading data \ud83d\udcbe",permalink:"/react-native-boilerplate/docs/SplashScreenLoadingData"},next:{title:"Add a lang translation \ud83c\udf10",permalink:"/react-native-boilerplate/docs/AddALangTranslation"}},b=[{value:"Architecture",id:"architecture",children:[]},{value:"Slices",id:"slices",children:[]},{value:"Redux-toolkit-wrapper",id:"redux-toolkit-wrapper",children:[{value:"buildAsyncState",id:"buildasyncstate",children:[]},{value:"buildAsyncActions",id:"buildasyncactions",children:[]},{value:"buildAsyncReducers",id:"buildasyncreducers",children:[]},{value:"buildSlice",id:"buildslice",children:[]}]}],o={toc:b};function d(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{align:"center"},Object(i.b)("img",{width:"100%",src:n(177).default})),Object(i.b)("p",null,"The store section is now really easy to use thanks to ",Object(i.b)("a",{parentName:"p",href:"https://redux-toolkit.js.org/"},"Redux-tookit")," and our ",Object(i.b)("a",{parentName:"p",href:"https://github.com/thecodingmachine/redux-toolkit-wrapper"},"Redux-tookit-wrapper"),"."),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"The root file include configuration of redux. The two main constants are ",Object(i.b)("inlineCode",{parentName:"p"},"reducers")," and ",Object(i.b)("inlineCode",{parentName:"p"},"persistConfig")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const reducers = combineReducers({\n  startup,\n  user,\n  theme\n})\n\nconst persistConfig = {\n  key: 'root',\n  storage: AsyncStorage,\n  whitelist: ['theme'],\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"whitelist")," includes state to persist (with ",Object(i.b)("inlineCode",{parentName:"li"},"redux-persist"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"reducers")," includes all ",Object(i.b)("inlineCode",{parentName:"li"},"reducer modules"))),Object(i.b)("h2",{id:"slices"},"Slices"),Object(i.b)("p",null,"A slice is a group of actions, states and reducers for a same domain. For example, in this boilerplate, there are tree slices : ",Object(i.b)("inlineCode",{parentName:"p"},"Startup")," ",Object(i.b)("inlineCode",{parentName:"p"},"Theme")," and ",Object(i.b)("inlineCode",{parentName:"p"},"User"),".",Object(i.b)("br",{parentName:"p"}),"\n","In each slice, an ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," file which combines each store's feature/module (",Object(i.b)("inlineCode",{parentName:"p"},"fetchOne.js")," for the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," slice example).",Object(i.b)("br",{parentName:"p"}),"\n","We've decided to separate each module in one file in order to avoid very large incomprehensible files.\nSo each of them includes its scoped state, his only action and related reducers. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  initialState: buildAsyncState('fetchOne'),\n  action: buildAsyncActions('user/fetchOne', fetchOneUserService),\n  reducers: buildAsyncReducers({\n    errorKey: 'fetchOne.error',\n    loadingKey: 'fetchOne.loading',\n  }),\n}\n")),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," file, all modules are merged in a slice where states, actions, and reducers are merged and placed into it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const sliceInitialState = {\n  item: {},\n}\n\nexport default buildSlice('user', [FetchOne], sliceInitialState).reducer\n")),Object(i.b)("p",null,"For the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," example, the below state will be created :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{\n  user: {\n    item: {},\n    fetchOne: {\n      loading: false,\n      error: null,\n    }   \n }\n}\n")),Object(i.b)("p",null,"Actions will be : ",Object(i.b)("inlineCode",{parentName:"p"},"user/fetchOne/pending"),", ",Object(i.b)("inlineCode",{parentName:"p"},"user/fetchOne/fulfilled"),", ",Object(i.b)("inlineCode",{parentName:"p"},"user/fetchOne/rejected")," prefixed and wrapped by the ",Object(i.b)("inlineCode",{parentName:"p"},"user/fetchOne")," action",Object(i.b)("br",{parentName:"p"}),"\n","For each wrapped action, a reducer is associated."),Object(i.b)("h2",{id:"redux-toolkit-wrapper"},"Redux-toolkit-wrapper"),Object(i.b)("p",null,"The boilerplate includes a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/thecodingmachine/redux-toolkit-wrapper"},"wrapper of redux-toolkit")," to make it easier to use. It provides three helpers.\nIf your are not familiar with redux-toolkit, please have a look at their ",Object(i.b)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},"documentation"),"."),Object(i.b)("h3",{id:"buildasyncstate"},"buildAsyncState"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildAsyncState")," create a loading and error state. You can scope it in a key."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Parameters"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"scope"),Object(i.b)("td",{parentName:"tr",align:"left"},"name of the scope"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"undefined")))),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"}," buildAsyncState('fetchOne')\n...\n buildAsyncState()\n")),Object(i.b)("p",null,"Will generate:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  {\n    fetchOne: {\n      loading: false, \n      error: null,\n    }\n  } \n...\n  {\n    loading: false, \n    error: null,\n  } \n")),Object(i.b)("h3",{id:"buildasyncactions"},"buildAsyncActions"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildAsyncActions")," is a wrapper of ",Object(i.b)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createAsyncThunk"},Object(i.b)("inlineCode",{parentName:"a"},"createAsyncThunk")),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Parameters"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"actionName"),Object(i.b)("td",{parentName:"tr",align:"left"},"the name of the action"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"undefined")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"action"),Object(i.b)("td",{parentName:"tr",align:"left"},"function to launch and await"),Object(i.b)("td",{parentName:"tr",align:"left"},"function"),Object(i.b)("td",{parentName:"tr",align:"left"},"() => {}")))),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"   buildAsyncActions('user/fetchOne', fetchOneUserService)\n")),Object(i.b)("p",null,"Where fetchOneUserService is an async function.\nSo, when the fetchOneUserService is launched the action ",Object(i.b)("inlineCode",{parentName:"p"},"user/fetchOne/pending")," is dispatched.\nWhen the fetchOneUserService is endded the action ",Object(i.b)("inlineCode",{parentName:"p"},"user/fetchOne/fulfilled")," is dispatched.\nWhen the fetchOneUserService throw an error the action ",Object(i.b)("inlineCode",{parentName:"p"},"user/fetchOne/rejected")," is dispatched."),Object(i.b)("h3",{id:"buildasyncreducers"},"buildAsyncReducers"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildAsyncReducers")," create default reducers based on CRUD logic. It creates three functions : pending, fulfilled and rejected."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pending")," set the ",Object(i.b)("inlineCode",{parentName:"li"},"loadingKey")," to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," and the ",Object(i.b)("inlineCode",{parentName:"li"},"errorKey")," to ",Object(i.b)("inlineCode",{parentName:"li"},"null"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fulfilled")," replaces ",Object(i.b)("inlineCode",{parentName:"li"},"itemKey")," with the payload (if ",Object(i.b)("inlineCode",{parentName:"li"},"itemKey")," is not ",Object(i.b)("inlineCode",{parentName:"li"},"null"),") and the ",Object(i.b)("inlineCode",{parentName:"li"},"loadingKey")," to ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rejected")," set the ",Object(i.b)("inlineCode",{parentName:"li"},"loadingKey")," to ",Object(i.b)("inlineCode",{parentName:"li"},"false")," and the ",Object(i.b)("inlineCode",{parentName:"li"},"errorKey")," to payload.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Parameters"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"itemKey"),Object(i.b)("td",{parentName:"tr",align:"left"},"the key of the item state"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'item'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"loadingKey"),Object(i.b)("td",{parentName:"tr",align:"left"},"the key of the loading state"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'loading'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"errorKey"),Object(i.b)("td",{parentName:"tr",align:"left"},"the key of the error state"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'error'")))),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"buildAsyncReducers({\n    errorKey: 'fetchOne.error', // Optionally, if you scoped variables, you can use a key with dot notation\n    loadingKey: 'fetchOne.loading',\n})\n")),Object(i.b)("h3",{id:"buildslice"},"buildSlice"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildSlice")," is a wrapper of ",Object(i.b)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createSlice"},Object(i.b)("inlineCode",{parentName:"a"},"createSlice")),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Parameters"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"name"),Object(i.b)("td",{parentName:"tr",align:"left"},"the name of the slice"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"undefined")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"modules"),Object(i.b)("td",{parentName:"tr",align:"left"},"array of all modules"),Object(i.b)("td",{parentName:"tr",align:"left"},"array"),Object(i.b)("td",{parentName:"tr",align:"left"},"[]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"sliceInitialState"),Object(i.b)("td",{parentName:"tr",align:"left"},"initial state for all modules of the slice"),Object(i.b)("td",{parentName:"tr",align:"left"},"object"),Object(i.b)("td",{parentName:"tr",align:"left"},"{}")))),Object(i.b)("h4",{id:"example-3"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"buildSlice('user', [FetchOne], { item: {} } ).reducer\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For async function you have to use ",Object(i.b)("inlineCode",{parentName:"p"},"buildAsyncState"),", ",Object(i.b)("inlineCode",{parentName:"p"},"buildAsyncActions")," and ",Object(i.b)("inlineCode",{parentName:"p"},"buildAsyncReducers")," from @thecodingmachine/redux-toolkit-wrapper.\nFor no async function you have to use ",Object(i.b)("inlineCode",{parentName:"p"},"createAction")," from redux-toolkit. And follow the example of the slice ",Object(i.b)("inlineCode",{parentName:"p"},"Theme")))))}d.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||i;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);