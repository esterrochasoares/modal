import React from 'react'
import Button from './Button';

function Modal({ closeModal, headingOne }) {
    function handleClick(){
        closeModal();
    }
    function closeModalBgClick(e){
        if(e.target.id==="modal-bg"){
            closeModal();
        }
    }
    return (
        <div  id="modal-bg" className='  absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center '>
            <div className='flex flex-col justify-center items-center p-4 m-4 rounded-lg w-7/12
            max-w-screen-md shadow-2xl relative' onClick={closeModalBgClick}>
                <a onClick={closeModal} className='absolute right-5 top-3 text-2xl hover:cursor-pointer'>X</a>
                <h1 className=' py-8 '>{headingOne}</h1>
                <div className=' w-5/12 h-1 mx-auto mb-8'></div>
                <h2 className='pb-5'></h2>
                <p className='text-center px-6 pb-5'></p>
                <Button handleClick={handleClick} text=''/>
            </div>
        </div>
    );
}

export default Modal