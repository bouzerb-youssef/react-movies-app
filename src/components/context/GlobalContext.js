import { createContext, useReducer ,useContext} from "react";
import reducer from "./reducer";
const initialState={
    wachlist:[],
    watched:[],


}


export  const GlobalContext =createContext(initialState)



const ContextProvider= ({children})=>{
    const [state ,dispatch]=useReducer(reducer ,initialState)
    return <GlobalContext.Provider
                value=
                {{
                wachlist:state.wachlist
                ,watched:state.watched 
                , MoviesDispatch:dispatch}}>
                {children}
            </GlobalContext.Provider>
}




export default ContextProvider;


export const UseMovieContext=()=>{
    return useContext(GlobalContext)
}