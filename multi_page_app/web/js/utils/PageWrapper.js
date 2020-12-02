
// page wrapper works by assigning button a click event
function appendPageWrapper(pages, toggleButtons){
    
    const pageWrapper = document.createElement("div")
    sessionStorage.activePage = pages[0].id
    for(let i=0; i < pages.length; i++){
        if(i > 0) pages[i].hidden = true
        toggleButtons[i].addEventListener('click',()=>toggleApps(pages[i].id))
        pageWrapper.appendChild(pages[i])
    }
    return pageWrapper
}

// utilizing event dispatch and get detail.content
function appendPageWrapperListener(pages, eventName){
    const pageWrapperListener = document.createElement("div")
    sessionStorage.activePage = pages[0].id
    window.addEventListener(eventName, (e)=>{toggleApps(e.detail.content)})
    for(let i=0; i < pages.length; i++){
        if(i > 0) pages[i].hidden = true
        pageWrapperListener.appendChild(pages[i])
    }
    return pageWrapperListener
}

// 
function setPageWrapperListener(element,pages, eventName){
    const page = document.getElementById(element)
    sessionStorage.activePage = pages[0].id
    window.addEventListener(eventName, (e)=>{toggleApps(e.detail.content)})
    for(let i=0; i < pages.length; i++){
        if(i > 0) pages[i].hidden = true
        page.appendChild(pages[i])
    }
}

function toggleApps(newApp) {
    document.getElementById(sessionStorage.activePage).hidden = true
    document.getElementById(newApp).hidden = false
    sessionStorage.activePage = newApp
}


export {appendPageWrapper,appendPageWrapperListener, setPageWrapperListener}