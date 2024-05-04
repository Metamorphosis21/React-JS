// function to create element and add inside a container
function ctRender(ele , container){
    /* const newEle = document.createElement(ele.type)

    newEle.innerHTML = ele.children
    newEle.setAttribute('href', ele.props.href)         - setAttribute not optimal for large number of attributes
    newEle.setAttribute('target', ele.props.target)

    container.appendChild(newEle) */

    const newEle = document.createElement(ele.type)

    newEle.innerHTML = ele.children
    for (const pr in ctReactElement.props) {
        // if(pr === 'children') continue;
        newEle.setAttribute(pr , ctReactElement.props[pr])
    }

    container.appendChild(newEle)
}

// element 1
const ctReactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Visit google"
}
const mainContainer = document.querySelector("#root")

ctRender(ctReactElement,mainContainer)