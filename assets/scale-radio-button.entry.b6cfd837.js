var l=Object.defineProperty;var r=(t,e)=>l(t,"name",{value:e,configurable:!0});import{r as d,c as a,h as o,H as s,g as c}from"./preview.d9401ce4.js";import{c as h}from"./index-713f92a5.4aea8bbf.js";import{e as u}from"./utils-004d7b05.d8cffc2b.js";import{s as b}from"./status-note-0089e9c9.0d9688b1.js";import"./index.9c3aed27.js";import"./iframe.776a4473.js";import"./es.map.constructor.cd0b0d25.js";import"./decorateStory.c710b724.js";import"./vue.esm-bundler.be6c6897.js";const p=`scale-radio-button{--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:var(--telekom-color-ui-disabled);--color-error:var(--telekom-color-text-and-icon-functional-danger);--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--color-focus:var(--telekom-color-functional-focus);--color-text:var(--telekom-color-text-and-icon-standard);--transition-helper-text:var(--transition);--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(
    --telekom-color-text-and-icon-functional-informational
  );--spacing-left-helper-text:var(--telekom-spacing-unit-x6);--spacing-top-helper-text:var(--telekom-spacing-unit-x1);--transition-label:var(--transition);--font-weight-label:var(--telekom-typography-font-weight-medium);--color-label:var(--color-text);--width-control:var(--telekom-spacing-unit-x4);--height-control:var(--telekom-spacing-unit-x4);--transition-control:var(--transition);--spacing-control:0 var(--telekom-spacing-unit-x2) 0 0;--background-color-control:var(--telekom-color-ui-base);--border-control:var(--telekom-spacing-unit-x025) solid
    var(--telekom-color-ui-border-standard);--border-control-checked:calc(0.5 * var(--telekom-spacing-unit-x3)) solid
    var(--telekom-color-primary-standard);--border-control-checked-active:calc(0.5 * var(--telekom-spacing-unit-x3))
    solid var(--telekom-color-primary-pressed, #cb0068);--border-control-checked-disabled:calc(0.5 * var(--telekom-spacing-unit-x3))
    solid var(--telekom-color-ui-border-disabled);--background-control-checked-disabled:none;--border-control-active:var(--telekom-spacing-unit-x2) solid
    var(--telekom-color-primary-pressed);--border-control-disabled:var(--telekom-spacing-unit-x025) solid
    var(--telekom-color-ui-border-disabled);--border-control-error:var(--telekom-spacing-unit-x05) solid
    var(--telekom-color-functional-danger-standard);--box-shadow-control-focus:0 0 0 var(--telekom-spacing-unit-x05)
    var(--color-focus)}.radio-button{position:relative;display:flex;flex-wrap:wrap;align-items:center;cursor:pointer;width:fit-content}.radio-button .radio-button__meta{width:100%;display:flex;justify-content:space-between}.radio-button .radio-button__helper-text{transition:var(--transition-helper-text);font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text);margin-top:var(--spacing-top-helper-text);padding-left:var(--spacing-left-helper-text)}.radio-button--status-error .radio-button__helper-text{color:var(--color-error)}.radio-button label{color:var(--color-label);transition:var(--transition-label);font-weight:var(--font-weight-label);cursor:pointer}.radio-button input{width:var(--width-control);height:var(--height-control);transition:var(--transition-control);border-radius:50%;-webkit-appearance:none;background-color:var(--telekom-color-ui-state-fill-standard);border:var(--border-control);margin:var(--spacing-control);cursor:pointer}.radio-button input:focus{outline:none;box-shadow:var(--box-shadow-control-focus)}.radio-button:hover input:not(:checked):not([disabled]){box-shadow:none;border-color:var(--telekom-color-ui-border-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.radio-button:hover input:not(:checked):not([disabled])~label{color:var(--color-primary-hover)}.radio-button:active input:not(:checked):not([disabled]){border-color:var(--telekom-color-ui-border-pressed);background-color:var(--telekom-color-ui-state-fill-pressed)}.radio-button input:not(:checked):not([disabled]):active~label{color:var(--color-primary-active)}.radio-button input:disabled{border:var(--border-control-disabled)}.radio-button input:disabled~label{color:var(--color-disabled)}.radio-button.radio-button--status-error input{border:var(--border-control-error)}.radio-button.radio-button--status-error:hover input:not(:checked):not([disabled]){border-color:var(--telekom-color-functional-danger-hovered)}.radio-button.radio-button--status-error:active input:not(:checked):not([disabled]){border-color:var(--telekom-color-functional-danger-pressed)}.radio-button input:checked{border:var(--border-control-checked)}.radio-button input:checked:active{border:var(--border-control-checked-active)}.radio-button input:checked:disabled{background:var(--background-control-checked-disabled);border:var(--border-control-checked-disabled)}.radio-button input:checked:disabled~label{color:var(--color-disabled)}.radio-button--disabled label,.radio-button--disabled .radio-button__label,.radio-button--disabled input,.radio-button--disabled .radio-button__helper-text{cursor:not-allowed;border-color:var(--color-disabled);color:var(--color-disabled);background:var(--telekom-color-ui-state-fill-standard)}`;let i=0;const v=r(class{constructor(t){d(this,t),this.scaleChange=a(this,"scale-change",7),this.scaleChangeLegacy=a(this,"scaleChange",7),this.name="",this.label="",this.helperText="",this.status="",this.invalid=!1,this.checked=!1,this.value="",this.handleCheckedChange=e=>{this.checked=e.target.checked,this.checked&&this.uncheckSiblings(),u(this,"scaleChange",{value:this.value==null?this.value:this.value.toString()})},this.handleLabelClick=e=>{e.stopPropagation()}}componentWillLoad(){this.inputId==null&&(this.inputId="input-"+i++)}componentDidRender(){this.status!==""&&b({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.hostElement})}uncheckSiblings(){this.getSiblingRadios().forEach(t=>{t.checked=!1})}getSiblingRadios(){return Array.from(document.querySelectorAll(`scale-radio-button[name="${this.name}"]`)).filter(t=>t.inputId!==this.inputId)}render(){const t=this.status==="error"||this.invalid?{"aria-invalid":!0}:{},e=`helper-message-${i}`,n={"aria-describedBy":e};return o(s,null,o("div",{class:this.getCssClassMap()},o("input",Object.assign({type:"radio",name:this.name,id:this.inputId,onChange:this.handleCheckedChange,value:this.value,checked:this.checked,disabled:this.disabled},t,this.helperText?n:{})),o("label",{htmlFor:this.inputId,onClick:this.handleLabelClick},this.label),!!this.helperText&&o("div",{class:"radio-button__meta",id:e,"aria-live":"polite","aria-relevant":"additions removals"},o("div",{class:"radio-button__helper-text"},this.helperText))))}getCssClassMap(){return h("radio-button",this.checked&&"radio-button--checked",this.disabled&&"radio-button--disabled",this.status&&`radio-button--status-${this.status}`,this.invalid&&"radio-button--status-error")}get hostElement(){return c(this)}},"RadioButton");v.style=p;export{v as scale_radio_button};
//# sourceMappingURL=scale-radio-button.entry.b6cfd837.js.map
