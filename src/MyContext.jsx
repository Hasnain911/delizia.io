import { createContext } from 'react';
import Data from './Components/data'

const ItemContext = createContext("")
const DataProvider = ({children})=>{
    return(
        
      <ItemContext.Provider value = {Data}>
      {children}
      </ItemContext.Provider>
    )
}
export { ItemContext, DataProvider };