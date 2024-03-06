import React, { Suspense } from "react";

export const withSuspense = (Component) => {

    function Wrapper(props) {
        return <Suspense fallback={<p>LOADING...</p>}>
            <Component {...props}/>
        </Suspense>
    }
    return Wrapper
    // БЕСПОЛЕЗНО Т.К. SUSPENSE-ОМ МОЖНО ОБОРАЧИВАТЬ НЕСКОЛЬКО РОУТОВ
}