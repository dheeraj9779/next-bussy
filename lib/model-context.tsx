"use client"
import { createContext, useContext, useState } from "react"

type contextType = {
    isOpen: boolean,
    openModal: () => void,
    closeModal: () => void
}

const ModalContext = createContext<contextType | null>(null)

export const ModalProvider = ({children} : { children : React.ReactNode}) => {
    const [isOpen, setOpen ] = useState(false)

    const openModal = () => {setOpen(true)}
    const closeModal = () => {setOpen(false)}

    return(
        <ModalContext.Provider value={{isOpen,openModal,closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = (): contextType => {

    console.log("its here")
    const context = useContext(ModalContext);
    console.log(context)
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}