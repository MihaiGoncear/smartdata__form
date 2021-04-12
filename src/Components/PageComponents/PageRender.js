import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageForm } from "./PageForm"
import { PageResult } from "./PageResult"


export function PageRender(props) {
    return (
        <div className="full__info__container">
            <Switch>
                <Route path="/result">
                    <PageResult />
                </Route>
                <Route path="/">
                    <PageForm HandleSubmit={props.HandleSubmit} HandleChangeInput={props.HandleChangeInput} />
                </Route>
            </Switch>
        </div>
    )
}