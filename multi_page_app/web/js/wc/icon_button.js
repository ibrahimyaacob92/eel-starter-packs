// Square iconed button with active state - it also launch an event on click
// CSS Variables = [themeColor]
import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class iconButton extends LitElement{
    
    static get properties(){
        return{
            label:{type:String},
            svgLink:{type:String},
            appName:{type:String, reflect:true},
            toolTipText:{type:String},
            active:{type:Boolean, reflect:true},
            eventName:{type:String,reflect:true}
        }
    }
    
    constructor(){
        super()
        
    }

    firstUpdated(changedProperties) {
        if (this.eventName == null) this.eventName = "launch-app"
        this.active = false
        window.addEventListener(this.eventName, this.unFocus.bind(this))
    }
    
    static get styles(){
        return css`
            div{
                width:42px;
                height:45px;
                background-color:var(--themeColor, darkslategrey);
                border-left: var(--themeColor, grey) solid 3px;
                text-align:center;
                padding: 2px;
            
            }
            div:hover{
                cursor:pointer;
                border-left-color:darkslategrey;
            }

            span{
                font-size:10px;   
            }
            
            div[active=true]{
                background:rgb(40, 65, 65);
                outline: none;
                border-left: gold solid 3px;
            }
            
            img{
                vertical-align: middle;
            }
        `
    }

    render(){
        return html`
            <div active=${this.active} @click=${this.launchApp}>
                <img part=icon width="30px" height="30px" src=${this.svgLink} alt="">
                <span part="label">${this.label}</span>
            </div>
        `
    }

    launchApp(){
        console.log(this.eventName)
        this.dispatchEvent(new CustomEvent(this.eventName ,{
            bubbles:true,
            composed:true,
            detail:{
                content:this.appName
            }
        }))
        console.log(this.appName + " event dispatched")
        this.active = true;
    }

    unFocus(e){
        if (e.detail.content != this.appName){
            this.active = false
        }
    }
}

customElements.define('icon-btn',iconButton)
