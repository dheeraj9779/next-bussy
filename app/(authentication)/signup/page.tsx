"use client";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { motion } from "framer-motion";

export default function login() {
    return (
        <div className="h-screen w-full flex">
            <section className="img-sec w-1/2">
            </section>
            <section className="form-sec w-1/2 flex justify-center items-center text-white flex-col">
                <form className="w-full max-w-lg space-y-6">
                    <div className="grid w-full max-w-lg items-center gap-3 text-white">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input type="text" id="firstname" placeholder="First Name" className="h-12" />
                    </div>
                    <div className="grid w-full max-w-lg items-center gap-3 text-white">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" className="h-12" />
                    </div>
                    <div className="grid w-full max-w-lg items-center gap-3 text-white">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Password" className="h-12" />
                    </div>
                    <div className="flex items-center text-white gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms & conditions</Label>
                    </div>
                    <div className="grid w-full max-w-lg items-center gap-3">
                        <motion.div className="flex-1"
                            whileTap={{ scale: 0.8 }}>
                            <Button className="h-12 w-full" type="submit">Signup</Button>
                        </motion.div>

                    </div>
                </form>
                <div className="w-full max-w-lg mt-4"><p>Already have an account? &nbsp;<Link href="/login">Login</Link></p></div>
            </section>
        </div>
    )
}