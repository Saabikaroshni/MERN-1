import React from 'react'
import { Suspense,lazy } from 'react'
const LazyComp = lazy(()=>import("../components/FunctionalComponent/Hooks/Signup"))
const LazyLoadingAndSuapense = () => {
  return (
    <div>
        
        <Suspense fallback={<h1>loading</h1>}>
            <h1>This is Lazy Component</h1>
            <LazyComp/>

        </Suspense>
    </div>
  );
};

export default LazyLoadingAndSuapense