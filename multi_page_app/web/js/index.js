// add web components
import './wc/icon_button.js'
import './wc/quick_navbar.js'

// add your pages here
import redElement from "./apps/red.js"; redElement.id = "red"
import yellowElement from "./apps/yellow.js"; yellowElement.id = "yellow"
import greenElement from "./apps/green.js"; greenElement.id = "green"

// import your utils here
import {setPageWrapperListener} from "./utils/PageWrapper.js"




const pages = [redElement, greenElement, yellowElement]
setPageWrapperListener("app-content",pages,'launch')

console.log(sessionStorage, localStorage)