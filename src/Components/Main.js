import React from 'react' 
import { NavigationBar } from './Links/NavigationBar'
import { PageRender } from './PageComponents/PageRender'

export function Main() {
    return(
        <div className="full__container">
            <NavigationBar/>
            <PageRender/>
        </div>
    )
}