function customRender(reactElement, container){
    
     /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
    
    
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    for(const prop in ReactElement.props){
        if (prop === 'children')continue;
        domElement.setAttribute(prop, ReactElement.props[prop])
    }
    container.appendChild(domElement)
}
const ReactElement = {
    type : 'a' ,
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
