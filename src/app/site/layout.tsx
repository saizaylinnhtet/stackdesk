import Navigation from '@/components/site/navigation'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='relative min-w-0 w-full max-w-full overflow-x-clip'>
            <div className="pointer-events-none absolute inset-0 z-[-1] min-h-screen bg-background bg-[radial-gradient(140%_75%_at_50%_0%,rgba(0,163,255,0.13)_0%,rgba(0,163,255,0.13)_25%,rgba(0,163,255,0)_75%)] dark:bg-[radial-gradient(140%_75%_at_50%_0%,rgba(56,189,248,0.24)_0%,rgba(56,189,248,0.24)_25%,rgba(56,189,248,0)_75%)]" />
            <Navigation />
            {children}
        </main>
    )
}

export default layout