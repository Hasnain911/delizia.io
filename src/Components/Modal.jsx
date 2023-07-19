import React, { useState } from 'react';
import MyModal from './ShowModal';
import Card from './card'
import  {ItemContext}  from '../MyContext';
import { useContext } from 'react';
import Data from "./data"


const Modal = ({index}) => {
    const [showModal , setShowModal ] = useState(false);
    const [updateModal,setUpdateModal]=useState(null)
    const data = useContext(ItemContext)

 
    const openhandleclick = ({id}) => {
    setShowModal(true)
setUpdateModal(id)
    }
    const  closehandleclick = () => { 
      setShowModal(false)
    }
return (
    <>
   {/* <Card setShowModal={setShowModal} openModal={openModal} key={index} data={data}/> */}
   <Card  openhandleclick={openhandleclick} key={index} data={data}/>
        {/* {showModal  &&<MyModal closeModal={closeModal} />} */}
        {showModal  &&<MyModal key={index} closehandleclick={closehandleclick} />}
    </>
  );
}

export default Modal;





