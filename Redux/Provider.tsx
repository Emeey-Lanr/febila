'use client'
import { Provider } from "react-redux"
import { store } from "./Store"
export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
    </Provider>
  
  )
}

