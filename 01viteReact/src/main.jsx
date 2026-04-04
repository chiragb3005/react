import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'


function MyApp(){
    return(
        <div>
            <h2>Custom App !</h2>
        </div>
    )
}
    


// const ReactElement = {
//     type : 'a' ,
//     props : {
//         href : 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
// Here custom render of react will not accept this type of syntax

const AnotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const AnotherUser = 'DPS'

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google',
    <br />, <br />,
    AnotherUser
)



createRoot(document.getElementById('root')).render(
    
    <>
    <App />
    {ReactElement}
    <Chai />
    </>

)
