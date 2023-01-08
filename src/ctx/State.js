import {useState, createContext} from 'react'

export const StateCtx = createContext()

export const StateProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
    <StateCtx.Provider value={{
        showSidebar,
        setShowSidebar
    }}>
        {children}
    </StateCtx.Provider>
    )
}