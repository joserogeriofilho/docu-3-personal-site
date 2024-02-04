"use strict";(self.webpackChunkdocu_3_personal_site=self.webpackChunkdocu_3_personal_site||[]).push([[610],{9703:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(5999),a=s(2244),i=s(5893);function r(e){const{metadata:t}=e,{previousPage:s,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,i.jsx)(a.Z,{permalink:s,title:(0,i.jsx)(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.Z,{permalink:r,title:(0,i.jsx)(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(9460),a=s(390),i=s(5893);function r(e){let{items:t,component:s=a.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(n.n,{content:t,children:(0,i.jsx)(s,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},1714:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Z});s(7294);var n=s(512),a=s(5999),i=s(8824),r=s(1944),l=s(5281),o=s(3692),c=s(2462),d=s(9703),m=s(197),g=s(9985),u=s(2212),h=s(2503),p=s(5893);function b(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function x(e){let{tag:t}=e;const s=b(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:s}),(0,p.jsx)(m.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:s,sidebar:n,listMetadata:i}=e;const r=b(t);return(0,p.jsxs)(c.Z,{sidebar:n,children:[t.unlisted&&(0,p.jsx)(u.Z,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.Z,{as:"h1",children:r}),(0,p.jsx)(o.Z,{href:t.allTagsPath,children:(0,p.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(g.Z,{items:s}),(0,p.jsx)(d.Z,{metadata:i})]})}function Z(e){return(0,p.jsxs)(r.FG,{className:(0,n.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},2212:(e,t,s)=>{s.d(t,{Z:()=>u});s(7294);var n=s(512),a=s(5999),i=s(5742),r=s(5893);function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(5281),m=s(9047);function g(e){let{className:t}=e;return(0,r.jsx)(m.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,n.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function u(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(g,{...e})]})}},8751:(e,t,s)=>{s.d(t,{Z:()=>h});s(7294);var n=s(7524),a=s(512),i=s(3692),r=s(5999),l=s(3961);const o={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};var c=s(5893);function d(e){let{sidebar:t}=e;const s=(0,l.c)(t.items);return(0,c.jsx)("aside",{className:"col col--3",children:(0,c.jsxs)("nav",{className:(0,a.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,c.jsx)("div",{className:(0,a.Z)(o.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,c.jsx)("ul",{className:(0,a.Z)(o.sidebarItemList,"clean-list"),children:s.map((e=>(0,c.jsx)("li",{className:o.sidebarItem,children:(0,c.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var m=s(3102);function g(e){let{sidebar:t}=e;const s=(0,l.c)(t.items);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("hr",{}),(0,c.jsxs)("ul",{className:"menu__list",children:[(0,c.jsx)("h3",{children:"BLOG"}),s.map((e=>(0,c.jsx)("li",{className:"menu__list-item",children:(0,c.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))]})]})}function u(e){return(0,c.jsx)(m.Zo,{component:g,props:e})}function h(e){let{sidebar:t}=e;const s=(0,n.i)();return t?.items.length?"mobile"===s?(0,c.jsx)(u,{sidebar:t}):(0,c.jsx)(d,{sidebar:t}):null}}}]);