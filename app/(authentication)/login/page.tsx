"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2Icon } from "lucide-react";
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { motion } from "framer-motion";



export default function login() {
    const [loading, setLoading] = useState(false)
    async function handleSocialLogin() {
        setLoading(true)
        await signIn('github', { callbackUrl: '/dashboard' })
    }
      
    return (
        <div className="h-screen w-full flex">
            <section className="img-sec w-1/2">
                {/* <Image src="/back.jpeg" alt="bck" fill    style={{ objectFit: 'cover' }}/> */}
            </section>
            <section className="form-sec w-1/2 flex justify-center items-center text-white flex-col space-y-4">
                <form className="w-full max-w-lg space-y-6">
                    <div className="grid w-full max-w-lg items-center gap-3 text-white">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" className="h-12" />
                    </div>
                    <div className="grid w-full max-w-lg items-center gap-3 text-white">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Password" className="h-12" />
                    </div>
                    <motion.div

                        whileTap={{ scale: 0.8 }}>
                        <div className="grid w-full max-w-lg items-center gap-3">
                            <Button type="submit" className="h-12" disabled={loading}>Login</Button>
                        </div>
                    </motion.div>
                </form>
                <div className="w-full max-w-lg "><p>Create an account? &nbsp;<Link href="/signup">Signup</Link></p></div>

                <div className="flex w-full max-w-lg items-center justify-between gap-3">
                    <motion.div className=" flex-1"

                        whileTap={{ scale: 0.8 }}>
                        <Button className="h-12 w-full" disabled={loading} onClick={handleSocialLogin}>
                            {loading ? <Loader2Icon className="animate-spin" /> : <Image src="/github_login.png" alt="logo" width={24} height={24} />}Github
                        </Button>
                    </motion.div>
                    <motion.div className="flex-1"

                        whileTap={{ scale: 0.8 }}>
                        <Button className="h-12  w-full" disabled={loading}>
                            <Image src="/google_login.png" alt="logo" width={24} height={24} />Google
                        </Button>
                    </motion.div>
                </div>
                 <div>
                 
                </div>
            </section>
        </div>
    )
}
