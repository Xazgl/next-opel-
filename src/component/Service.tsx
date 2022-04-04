
import banner from '/public/images/banner3.webp'
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"

  
  
export function Service({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
        <>
        <div className='cont'>
                 <div className='el'>
                   <span className='word'>Запишитесь на сервис в один клик</span>
                 </div>
                <div className='el'>
                <form onSubmit={showModal}>
                  <button className='btn'>Записаться</button>
                </form>
           </div>
        </div>

       
<style jsx>{`

.cont {
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: url('${banner.src}');
    background-size: cover;
    width: auto;
    height: 800px;
    background-repeat:no-repeat;
    flex-direction:column;


}



.el {
    display:flex;
    justify-content:center;
    alight-items: center;

}

.word {
    font-family: 'Montserrat', sans-serif;
    color:white;
    font-size: 70px;
    margin-bottom:100px;

}
.btn {
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 290px;
    height: 50px;
    font-size: 30px;
    margin-top:30px;
}



.btn:hover {
    background-color: #f7ff14;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}
     
`}</style>
 </>
    )
}