import React from 'react' 
import { NavigationBar } from './Links/NavigationBar'
import { PageRender } from './PageComponents/PageRender'

export function Main(props) {
    return(
        <div className="full__container">
            <NavigationBar/>
            <PageRender HandleSubmit={props.HandleSubmit} HandleChangeInput={props.HandleChangeInput}/>
        </div>
    )
}