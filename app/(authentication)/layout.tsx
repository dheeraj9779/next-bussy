export default function Layout({children}: Readonly<{children: React.ReactNode}>){
    return(
        <main className="font-exo">
            <div className="bg-black h-screen">
                {children}
            </div>
        </main>
    )
}