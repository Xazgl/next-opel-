import u from '/public/images/u.png';
import credit from '/public/images/credit.png';
import lizing from '/public/images/lizing.png';
import price from '/public/images/price.png';
import { Dispatch, FormEvent, SetStateAction } from 'react';


export function PurchaseMethods({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {

    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
     <>
 
      <div className="nameBlock">Позволь себе больше</div>
      <div className="backgroundBuy">
          <div className="elem">
             <div className="img"><img className="mini" src={lizing.src}/> </div>
             <div className="title"><h5>Покупка в лизинг</h5></div>
             <div className="txt">Арконт предлагает простые финансовые решения, которые позволяют Вам приобрести этот автомобиль уже сегодня! Вы получаете не только автомобиль, но и выгодные условия! Предложение распространяется на все модели</div>
             <div className="btnDiv">
                   <form onSubmit={showModal}>
                        <button className='btn'>Узнать больше</button>
                    </form>
             </div>
          </div>
          <div className="elem">
             <div className="img"><img className="mini" src={credit.src}/></div>
             <div className="title"><h5>Покупка в кредит</h5></div>
             <div className="txt">В дилерских центрах АРКОНТ Вы можете воспользоваться автокредитом, в том числе, на выгодных условиях по программе льготного кредитования.</div>
             <div className="btnDiv">
                   <form onSubmit={showModal}>
                        <button className='btn'>Узнать больше</button>
                    </form>
             </div>
          </div>
          <div className="elem">
             <div className="img"><img className="mini" src={price.src}/> </div>
             <div className="title"><h5>Индивидуальные условия</h5></div>
             <div className="txt">Вы можете воспользоваться специальными финансовыми продуктами, предназначенными для покупки автомобилей определенных брендов и моделей.</div>
             <div className="btnDiv">
                   <form onSubmit={showModal}>
                        <button className='btn'>Узнать больше</button>
                    </form>
             </div>
          </div>
      </div>

        <style jsx>{`
            .backgroundBuy{
                display:flex;
                justify-content:space-evenly;
                flex-direction:row;
                margin-bottom:30px;
                margin-top:30px;
            }
            .elem {
                display:flex;
                flex-direction:column;
                align-items:center;
                background-color: rgb(250, 250, 250);
                height:500px;
                border: rgb(250, 250, 250);
                width:20%;
                margin-bottom:30px;
            }
            .elem:hover {
                transform: scale(1.02);
                  box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
            }
            .img {
                display:flex;
                justify-content:center;
                flex-direction:row; 
            }
            .mini {
                object-fit: cover;
                display:flex;
                width:100%;
            }
            .title {
                margin-top:5px;
                display:flex;
                justify-content:center;
                flex-direction:row;
                font-size:18px;
              
            }
            .txt{
                margin-top:5px;
                display:flex;
                justify-content:center;
                flex-direction:row;
                font-size:14px;
                width:80%
            }
            .btnDiv{
                display:flex;
                justify-content:center;
                flex-direction:row;
            }
            .btn {
                  margin-top:30px;
                  font-family: 'Montserrat', sans-serif;
                  border-radius: 3px;
                  border:none;
                  transition: transform.3s ;
                  color: #ffffff;
                  background-color: #48484d;
                  width: 150px;
                  height: 35px;
                  font-size: 15px;
                  margin-bottom:20px;
                }

                .btn:hover {
                  background-color: #f7ff14;
                  font-size: 16px;
                  border: none;
                  font-family: 'Montserrat', sans-serif;
                  color:black;
                  transform: scale(1.02);
                  box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
                }        
                .nameBlock{
                    display:flex;
                   justify-content:center;
                   background:black;
                   color:white;
                   font-family: 'Montserrat', sans-serif;
                   font-size:30px;
                } 
             @media (max-width: 800px) {
                .backgroundBuy{
                  flex-direction:column;
                  align-items: center
                }
                .elem {
                  flex-direction:column;
                  align-items:center;
                  height:450px;
                  width:80%;
                  margin-bottom:30px;
                }
            }
            @media (max-width: 500px) {
                .backgroundBuy{
                  flex-direction:column;
                  align-items: center
                }
                .elem {
                  flex-direction:column;
                  align-items:center;
                  height:400px;
                  width:80%;
                  margin-bottom:30px;
                }

            .mini {
                height: 150px;
                
            }
            .title {
                margin-top:5px;
                display:flex;
                justify-content:center;
                flex-direction:row;
                font-size:15px;
              
            }
            .txt{
                margin-top:5px;
                display:flex;
                justify-content:center;
                flex-direction:row;
                font-size:10px;
                width:80%
            }
            }
            @media (max-width: 300px) {
                .backgroundBuy{
                  flex-direction:column;
                  align-items: center
                }
                .elem {
                  flex-direction:column;
                  align-items:center;
                  height:300px;
                  width:80%;
                  margin-bottom:20px;
                }

            .mini {
                height: 100px;
                
            }
            .title {
                margin-top:5px;
                display:flex;
                justify-content:center;
                flex-direction:row;
                font-size:12px;
              
            }
            .txt{
                margin-top:5px;
                display:flex;
                justify-content:center;
                flex-direction:row;
                font-size:8px;
                width:80%
            }
            .btn {
                width: 120px;
                height: 25px;
                font-size: 12px;
            }
            .btn:hover {
                font-size: 13px;
            }
            }
        `}</style>
      </>)
    }