"use client"
import { ModalProvider } from "@/lib/model-context";

export default function Layout({children}: Readonly<{children: React.ReactNode}>){
    return(
        <main className="font-exo">
            <div className="bg-black h-screen">
                    <ModalProvider>
                        {children}
                    </ModalProvider>
            </div>
        </main>
    )
}