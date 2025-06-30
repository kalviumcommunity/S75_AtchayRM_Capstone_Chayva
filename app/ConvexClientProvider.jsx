"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import React, { Suspense } from 'react'
import Provider from "./provider";

function ConvexClientProvider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
        <Suspense fallback ={<div>Loading....</div>}>
            
        <ConvexProvider client={convex}>
            <Provider>
                {children}
            </Provider>
        </ConvexProvider>
        </Suspense>
    )
}

export default ConvexClientProvider