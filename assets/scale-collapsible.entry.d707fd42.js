var s=Object.defineProperty;var a=(t,n)=>s(t,"name",{value:n,configurable:!0});import{r,c as i,h as e,H as c,g as p}from"./preview.d9401ce4.js";import{c as o}from"./index-713f92a5.4aea8bbf.js";import{e as d}from"./utils-004d7b05.d8cffc2b.js";import"./index.9c3aed27.js";import"./iframe.776a4473.js";import"./es.map.constructor.cd0b0d25.js";import"./decorateStory.c710b724.js";import"./vue.esm-bundler.be6c6897.js";const h=":host{--spacing-y:var(--telekom-spacing-unit-x4);--font-size-button:var(--telekom-typography-font-size-callout);--font-weight-button:var(--telekom-typography-font-weight-extra-bold);--line-height-button:var(--telekom-typography-line-spacing-standard);--border-width-button:var(--telekom-spacing-unit-x05);--radius-button:var(--telekom-radius-small);--spacing-left-button:var(--telekom-spacing-unit-x1);--spacing-left-button-text:var(--telekom-spacing-unit-x2);--color-button-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-button-active:var(--telekom-color-text-and-icon-primary-pressed);--background-button-hover:var(--telekom-color-ui-state-fill-hovered);--border-color-button-focus:var(--telekom-color-functional-focus);--spacing-top-icon:calc(var(--telekom-spacing-unit-x1) + 1px);--spacing-right-content:var(--telekom-spacing-unit-x12);--spacing-left-content:var(--telekom-spacing-unit-x8);--spacing-top-content:var(--telekom-spacing-unit-x4);--spacing-bottom-content:var(--telekom-spacing-unit-x6)}.collapsible{position:relative;margin:var(--spacing-y) 0}.collapsible--expanded:before{top:0;left:0;right:0;width:100%;border:var(--telekom-spacing-unit-x025) solid transparent;content:'';display:block;position:absolute;pointer-events:none;bottom:calc(-1 * var(--spacing-y))}.collapsible__heading{margin:0}.collapsible__button{color:currentColor;width:100%;display:flex;text-align:left;align-items:flex-start;padding-top:0;border-color:transparent;border-style:solid;padding-right:0;padding-bottom:0;background-color:transparent;font-size:var(--font-size-button);font-weight:var(--font-weight-button);line-height:var(--line-height-button);border-width:var(--border-width-button);border-radius:var(--radius-button);padding-left:var(--spacing-left-button);font-family:inherit;word-spacing:inherit;letter-spacing:inherit}.collapsible__button-text{margin-left:var(--spacing-left-button-text)}.collapsible__button:hover{cursor:pointer;color:var(--color-button-hover);background-color:var(--background-button-hover)}.collapsible__button:active{color:var(--color-button-active);background-color:transparent}.collapsible__button:focus{outline:none;border-color:var(--border-color-button-focus)}.collapsible__icon{transform:rotate(0.75turn);flex-shrink:0;margin-top:var(--spacing-top-icon)}.collapsible__icon-right{margin-left:auto}.collapsible__button[aria-expanded='true'] .collapsible__icon{transform:none}.collapsible__content{padding-right:var(--spacing-right-content);padding-left:var(--spacing-left-content);margin-top:var(--spacing-top-content);margin-bottom:var(--spacing-bottom-content)}";let g=0;const b=a(class{constructor(t){r(this,t),this.scaleExpand=i(this,"scale-expand",7),this.scaleExpandLegacy=i(this,"scaleExpand",7),this.headingLevel=2,this.iconLocation="left",this.handleClick=()=>{this.expanded=!this.expanded,d(this,"scaleExpand",{expanded:this.expanded})}}componentWillLoad(){const t=g++;this.headingId="collapsable-heading-"+t,this.panelId="collapsable-panel-"+t}componentDidLoad(){this.setHeadingFromLightDOM()}setHeadingFromLightDOM(){const t=this.hostElement.querySelector(":first-child");if(t==null)return;const n=t.tagName.charAt(0).toUpperCase()==="H",l=t.hasAttribute("slot");n&&!l&&(this.headingElement.innerHTML=t.innerHTML,t.style.display="none")}render(){return e(c,null,this.styles&&e("style",null,this.styles),e("div",{class:this.getCssClassMap(),part:o("base",this.expanded&&"expanded")},e("h2",{"aria-level":this.headingLevel,class:"collapsible__heading",part:"heading"},e("button",{id:this.headingId,class:"collapsible__button",part:"button",onClick:this.handleClick,"aria-expanded":this.expanded?"true":"false","aria-controls":this.panelId},this.iconLocation==="left"?e("scale-icon-navigation-collapse-down",{size:16,decorative:!0,class:"collapsible__icon",part:o("icon",this.expanded&&"expanded")}):null,e("span",{ref:t=>this.headingElement=t,class:"collapsible__button-text",part:"button-text"},e("slot",{name:"heading"})),this.iconLocation==="right"?e("scale-icon-navigation-collapse-down",{size:16,decorative:!0,class:"collapsible__icon collapsible__icon-right",part:o("icon",this.expanded&&"expanded")}):null)),e("div",{id:this.panelId,role:"region","aria-labelledby":this.headingId,hidden:!this.expanded,class:"collapsible__content",part:"content"},e("slot",null))))}getCssClassMap(){return o("collapsible",this.expanded&&"collapsible--expanded")}get hostElement(){return p(this)}},"Collapsible");b.style=h;export{b as scale_collapsible};
//# sourceMappingURL=scale-collapsible.entry.d707fd42.js.map
