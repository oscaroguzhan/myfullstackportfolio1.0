import{s as _,b9 as j,e as g,P as w,cq as B,j as a,ah as L,cp as O,ae as T,aF as S,ai as A,l as D,a4 as W,a2 as z}from"./sanity.63423e42.js";import{P as C}from"./PaneItem-c5593821.esm.4c60a8b3.js";import{u as F}from"./index-989e9e04.esm.298fbba0.js";import"./index.f2302418.js";var r;function G(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const H=_.hr(r||(r=G([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function U(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:h}=n,{features:f}=F(),{collapsed:m}=j(),{defaultLayout:y,displayOptions:i,items:c,menuItems:v,menuItemGroups:I,title:b}=u,P=i==null?void 0:i.showIcons,k=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return g(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:h,maxWidth:640,minWidth:320,selected:p,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:f.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(D,{overflow:m?void 0:"auto",children:a(W,{padding:2,space:1,children:c&&c.map((e,o)=>{if(e.type==="divider")return a(z,{paddingY:1,children:a(H,{})},"divider-".concat(o));const s=!d&&t===e.id,x=d&&t===e.id;return a(C,{icon:k(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{U as default};
