import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'


function Home() {

  const [showModal, setShowModal] = useState(false);

  function openModal(){
   
    setShowModal(true);
  }

  function closeModal(){
    
    setShowModal(false)
  }
  return (
    <div className="App w-screen h-screen flex flex-col justify-center items-center">
        <div className='container w-3/6 flex flex-col justify-center items-center px-4 py-10 m-5 rounded-lg'>
            <h1 className=' my-8'></h1>
            <p></p>
           <Button handleClick={openModal} text=""/>
        </div>
        {showModal && <Modal 
        headingOne=''
        closeModal={closeModal}/>}
    </div>
  )
}

export default Home