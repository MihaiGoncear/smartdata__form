import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageForm } from "./PageForm"
import { PageResult } from "./PageResult"


export function PageRender() {
    return (
        <div className="full__info__container">
            <Switch>
                <Route path="/result">
                    <PageResult />
                </Route>
                <Route path="/">
                    <PageForm/>
                </Route>
            </Switch>
        </div>
    )
}