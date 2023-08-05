import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div>LandingPage (Unprotected)</div>
            <Link href="/sign-in">
                <Button>
                    Login
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button variant="secondary">
                    Register
                </Button>
            </Link>
        </>
    )
}

export default LandingPage