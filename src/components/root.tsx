import * as React from "react";
import Workflow from './workflow';

export default function Root() {
    return(
        <div className="root">

            <nav>
                <img src="http://www.standashow.cz/logo-standashow-low.png"/>
                {/*<h1>Donate</h1>*/}
            </nav>
            <main>
                <Workflow/>
            </main>
        </div>
    )
}