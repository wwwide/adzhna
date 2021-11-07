(()=>{"use strict";var e={6752:function(e,n,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),d=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&o(n,e,t);return a(n,e),n},i=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};Object.defineProperty(n,"__esModule",{value:!0}),n.Card=void 0;var c=d(t(6689)),l=t(225),s=t(859);n.Card=(0,c.memo)((function(e){var n=e.className,t=e.contentClassName,o=e.contentStyle,a=e.footerClassName,d=e.footerStyle,f=e.children,u=e.face,m=void 0===u?s.CardFace.Default:u,p=e.footer,h=e.header,g=e.width,b=e.onClick,y=i(e,["className","contentClassName","contentStyle","footerClassName","footerStyle","children","face","footer","header","width","onClick"]);return c.default.createElement(l.Box,r({},y,{$width:g,className:n,onClick:b}),!(!(null==h?void 0:h.title)&&!(null==h?void 0:h.actions))&&c.default.createElement(l.Header,{$face:m,className:h.headerClassName,style:h.headerStyle},!!h.title&&c.default.createElement(l.Title,{$hasActions:!!h.actions,className:h.titleClassName,style:h.titleStyle},h.title),!!h.actions&&c.default.createElement(l.Actions,null,h.actions)),c.default.createElement(l.Content,{className:t,style:o},f),!!p&&c.default.createElement(l.Footer,{className:a,style:d},p))}))},859:(e,n)=>{var t;Object.defineProperty(n,"__esModule",{value:!0}),n.CardFace=void 0,(t=n.CardFace||(n.CardFace={})).Default="default",t.Danger="danger",t.Primary="primary",t.Secondary="secondary",t.Success="success",t.Warning="warning"},9459:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},6966:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0})},4083:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getColor=void 0;var r=t(859);n.getColor=function(e,n,t){switch(e){case r.CardFace.Default:return"text"===t?n.adzhna.colors.text:"transparent";case r.CardFace.Primary:return n.adzhna.colors.primary[t].normal;case r.CardFace.Secondary:return n.adzhna.colors.secondary[t].normal;case r.CardFace.Danger:return n.adzhna.colors.danger[t].normal;case r.CardFace.Warning:return n.adzhna.colors.warning[t].normal;case r.CardFace.Success:return n.adzhna.colors.success[t].normal}}},7597:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__exportStar||function(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||r(n,e,t)};Object.defineProperty(n,"__esModule",{value:!0}),o(t(6752),n),o(t(9459),n),o(t(6966),n),o(t(859),n)},225:function(e,n,t){var r=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.Footer=n.Content=n.Actions=n.Title=n.Header=n.Box=void 0;var a,d,i,c,l,s,f=o(t(7518)),u=t(4083);n.Box=f.default.section(a||(a=r(["\n  ","\n  border-width: 1px;\n  border-style: solid;\n  border-radius: ","px;\n  border-color: ",";\n  font-size: ","rem;\n  font-family: ",";\n  box-shadow: ",";\n  overflow: hidden;\n  background: #fff;\n"],["\n  ","\n  border-width: 1px;\n  border-style: solid;\n  border-radius: ","px;\n  border-color: ",";\n  font-size: ","rem;\n  font-family: ",";\n  box-shadow: ",";\n  overflow: hidden;\n  background: #fff;\n"])),(function(e){return e.$width&&"width: "+e.$width+";"}),(function(e){return e.theme.adzhna.components.card.borderRadius||e.theme.adzhna.borders.radius}),(function(e){return e.theme.adzhna.borders.color}),(function(e){return e.theme.adzhna.fonts.size}),(function(e){return e.theme.adzhna.fonts.family}),(function(e){return e.theme.adzhna.components.card.shadow})),n.Header=f.default.div(d||(d=r(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: ","rem;\n  padding-bottom: ","rem;\n  padding-left: ","rem;\n  padding-right: ","rem;\n  background: ",";\n  color: ",";\n"],["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: ","rem;\n  padding-bottom: ","rem;\n  padding-left: ","rem;\n  padding-right: ","rem;\n  background: ",";\n  color: ",";\n"])),(function(e){return e.theme.adzhna.components.card.header.padding.top}),(function(e){return e.theme.adzhna.components.card.header.padding.bottom}),(function(e){return e.theme.adzhna.components.card.header.padding.left}),(function(e){return e.theme.adzhna.components.card.header.padding.right}),(function(e){return(0,u.getColor)(e.$face,e.theme,"fill")}),(function(e){return(0,u.getColor)(e.$face,e.theme,"text")})),n.Title=f.default.span(i||(i=r(["\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-weight: bold;\n  font-size: ","rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-right: ","rem;\n"],["\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-weight: bold;\n  font-size: ","rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-right: ","rem;\n"])),(function(e){return e.theme.adzhna.components.card.header.title.fontSize}),(function(e){return e.$hasActions?2*e.theme.adzhna.grid.step:0})),n.Actions=f.default.span(c||(c=r(["\n  flex:shrink: 0;\n  flex-shrink: 0;\n"],["\n  flex:shrink: 0;\n  flex-shrink: 0;\n"]))),n.Content=f.default.div(l||(l=r(["\n  padding-top: ","rem;\n  padding-bottom: ","rem;\n  padding-left: ","rem;\n  padding-right: ","rem;\n"],["\n  padding-top: ","rem;\n  padding-bottom: ","rem;\n  padding-left: ","rem;\n  padding-right: ","rem;\n"])),(function(e){return e.theme.adzhna.components.card.content.padding.top}),(function(e){return e.theme.adzhna.components.card.content.padding.bottom}),(function(e){return e.theme.adzhna.components.card.content.padding.left}),(function(e){return e.theme.adzhna.components.card.content.padding.right})),n.Footer=f.default.div(s||(s=r(["\n  padding-top: ","rem;\n  padding-bottom: ","rem;\n  padding-left: ","rem;\n  padding-right: ","rem;\n  font-size: ","rem;\n"],["\n  padding-top: ","rem;\n  padding-bottom: ","rem;\n  padding-left: ","rem;\n  padding-right: ","rem;\n  font-size: ","rem;\n"])),(function(e){return e.theme.adzhna.components.card.footer.padding.top}),(function(e){return e.theme.adzhna.components.card.footer.padding.bottom}),(function(e){return e.theme.adzhna.components.card.footer.padding.left}),(function(e){return e.theme.adzhna.components.card.footer.padding.right}),(function(e){return e.theme.adzhna.components.card.footer.fontSize}))},6689:e=>{e.exports=require("react")},7518:e=>{e.exports=require("styled-components")}},n={},t=function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}(7597),r=exports;for(var o in t)r[o]=t[o];t.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=card.js.map