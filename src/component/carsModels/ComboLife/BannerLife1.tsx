import { Dispatch, FormEvent, SetStateAction, SyntheticEvent } from 'react'
import banner from '/public/images/modelBannerLife.png'
import miniBanner from '/public/images/b.jpeg'
import zafira from '/public/images/models/0.jpg';

export function BannerLife({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {

    function showModal(event: SyntheticEvent) {
        event.preventDefault()
        setShowModal(true)
    }
    return (
        <>
            <div className="bannerZafira">
                    <div className="title"><span className='t'></span></div>
            </div>
             
             <div className='descriptionZafira'>
                 <div className='text'><h1 className='y'>Opel Combo Life — проверенный помощник в бизнесе и верный друг семьи.</h1></div>
             </div>
               
               <div className='blockBuy'>
                 <div className='imgBuy'>
                 </div>

                  <div className='blockEl'>
                    <div className='el'>
                      <h2 className="u">ЗАЧЕМ ЖДАТЬ?</h2>
                    </div>
                    <div className='el'>
                      <h4 className="u2">Найдите подходящий автомобиль в нашем Диллерском центре.</h4>
                    </div>
                    <div className='el'>
                       <form onSubmit={showModal}>
                        <button className='btn'>Найти авто</button>
                        </form>
                    </div>
                  </div>
               </div>
               <div className='mainName'>Комплектации</div>
              <div className='complectation'>
                <div className='content'>
                 <div className="comImg"></div>
                 <div className="complTitle">COMBO™ LIFE МТ</div>
                 <div className="complUl">
                   <ul>
                     <li>Бензиновый двигатель 1.6 (115)</li>
                     <li>Механическая, пятиступенчатая коробка передач</li>
                     <li>Объем багажного отделения от 675 л</li>
                     <li>Круиз-контроль с функцией ограничения скорости</li>
                     <li>Электрообогрев всей поверхности лобового стекла</li>
                   </ul>
                   <div className="complTitle">ОТ 2 194 900 ₽</div>
                  </div>
                </div>
                <div className='content'>
                 <div className="comImg"></div>
                 <div className="complTitle">COMBO™ LIFE АКПП</div>
                 <div className="complUl">
                   <ul>
                     <li>Бензиновый двигатель 1.6 (115)</li>
                     <li>Гидромеханическая автоматическая, шестиступенчатая коробка передач</li>
                     <li>Объем багажного отделения от 675 л</li>
                     <li>Круиз-контроль с функцией ограничения скорости</li>
                     <li>Электрообогрев всей поверхности лобового стекла</li>
                   </ul>
                   <div className="complTitle">ОТ 2 344 900 ₽</div>
                  </div>
                </div>
                <div className='content'>
                 <div className="comImg"></div>
                 <div className="complTitle">COMBO™ LIFE DIESEL</div>
                 <div className="complUl">
                   <ul>
                     <li>Дизельный двигатель 1.6 (90)</li>
                     <li>Механическая, пятиступенчатая коробка передач</li>
                     <li>Объем багажного отделения от 675 л</li>
                     <li>Круиз-контроль с функцией ограничения скорости</li>
                     <li>Электрообогрев всей поверхности лобового стекла</li>
                   </ul>
                   <div className="complTitle">ОТ 2 228 900 ₽</div>
                  </div>
                </div>
              </div>

            <style jsx>{`
            .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:row;
                    font-family:'Montserrat';
                    font-size:40px;
                }
            .t {
                    font-family:'Montserrat';
                    font-size:80px;
                    color:white;
                }
                .bannerZafira {
                    display:flex; 
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, .40);
                    width: 100%;
                    height: 600px;
                    justify-content: center;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;

                }

                .descriptionZafira{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .text {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    font-family:'Montserrat';
                    color: #888;
                    padding:20px;
                }

               .blockBuy{
                    display:flex;
                    align-items:center;
                 
               }
               .imgBuy{
                    display:flex;
                    background-image: url('${miniBanner.src}');
                    background-repeat: no-repeat;
                    background-size: contain;
                    width: 100%;
                    height: 500px;
               }
               .blockEl {
                display:flex;
                flex-direction:column;
                align-items:start;
                height: 500px;
                width: 100%;
               }
               .el {
                display:flex;
                flex-direction:row;
                color:black;
                font-family:'Montserrat';
               }
               .btn {
                  margin-top:30px;
                  font-family: 'Montserrat', sans-serif;
                  border-radius: 3px;
                  border:none;
                  transition: transform.3s ;
                  color: #ffffff;
                  background-color: #48484d;
                  width: 300px;
                  height: 40px;
                  font-size: 25px;
                  margin-bottom:20px;
                }

                .btn:hover {
                  background-color: #f7ff14;
                  font-size: 20px;
                  border: none;
                  font-family: 'Montserrat', sans-serif;
                  color:black;
                  transform: scale(1.02);
                  font-size: 24px;
                  box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
                } 
                .complectation{
                  display:flex;
                  margin-top:40px;
                  justify-content:space-evenly;
                  flex-direction:row;
                  margin-bottom:30px;
                  align-items: baseline;
                }
                .content {
                  display:flex;
                  justify-content:center;
                  flex-direction:column;
                  align-items:center;
                  width:20%;
                }
                .comImg{
                  display:flex;
                  flex-direction:row;
                  width:100%;
                  height:200px;
                  background-position: center center;
                  background-image: url('${zafira.src}');
                  background-repeat: no-repeat;
                  overflow: hidden;
                  background-size:contain;
                  transition: 0.5s linear;
                }
                .complTitle {
                  display:flex;
                  justify-content:center;
                  flex-direction:row;
                  font-family: 'Montserrat', sans-serif;
                  font-size:23px;
                }
                .mainName {
                   display:flex;
                   justify-content:center;
                   background:black;
                   color:white;
                   font-family: 'Montserrat', sans-serif;
                   font-size:33px;
                   
                }
                .complUl{
                  font-family: 'Montserrat', sans-serif;
                  font-size:16px;
                }
                @media (max-width: 1200px) {
                  .bannerZafira {
                    height: 500px;
                  }
                  .y{
                     font-size:30px;
                  }
                  .text {
                    font-size
                  }
                  .t{
                    font-size:60px;
                  }
                  .complUl {
                    font-size:13px;
                  }
                  .complTitle {
                    font-size:20px;
                  }
                }
                @media (max-width: 900px) {
                  .t{
                    font-size:55px;
                  }
                  .y{
                     font-size:25px;
                  }
                  .content {
                    width: 25%;
                  }
                  .complUl {
                    font-size:12px;
                  }
                  .complTitle {
                    font-size:18px;
                  }
                  .btn {
                    width: 250px;
                    font-size: 25px;
                  }
                  .btn:hover{
                    font-size: 26px;
                  }
                }
                @media (max-width: 800px) {
                  .t{
                    font-size:50px;
                  }
                  .y{
                     font-size:20px;
                  }
                  .bannerZafira {
                    height: 350px;
                  }
                  .u{
                    font-size:20px;
                  }
                  .u2{
                    font-size:14px;
                  }
                  .backgroundBuy {
                    flex-direction:column
                  }
                  .btn {
                    width: 200px;
                    font-size: 22px;
                  }
                  .btn:hover{
                    font-size: 23px;
                  }
                  .mainName{
                    font-size:50px;
                  }
                  .content {
                    width: 90%;
                  }
                  .complUl {
                    font-size:12px;
                  }
                  .complTitle {
                    font-size:18px;
                  }
                  .complectation {
                    flex-direction:column;
                  }
                  .blockBuy{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                  }
                  .imgBuy{
                    display:flex;
                    background-size: cover;
                    width: 100%;
                    height: 300px;
                  }
                  .blockEl {
                     display:flex;
                     flex-direction:column;
                     align-items:center;
                     height: 250px;
                     width: 100%;
                  }
                  .el{
                     justify-content:center;
                  }
                }
                @media (max-width: 500px) {
                  .y{
                     font-size:18px;
                  }
                  .t
                  {
                    font-size:40px;
                  }
                  .bannerZafira {
                    height: 250px;
                  }
                  .imgBuy{
                    display:flex;
                    background-size: cover;
                    width: 100%;
                    height: 200px;
                  }
                  .u{
                    font-size:17px;
                  }
                  .u2{
                    font-size:11px;
                  }
                  .el{
                    padding:10px;
                  }
                  .btn {
                    width: 150px;
                    font-size: 17px;
                  }
                  .btn:hover{
                    font-size: 18px;
                  }
                  .mainName{
                    font-size:20px;
                  }
                  .content{
                    height: 300px;
                   }
                   .complTitle {
                    font-size:16px;
                  }
                  .complUl {
                    font-size:10px;
                  }
                }
                @media (max-width: 300px) {
                  .y{
                     font-size:12px;
                  }
                  .t
                  {
                    font-size:30px;
                  }
                  .bannerZafira {
                    height: 100px;
                  }
                  .imgBuy{
                    display:flex;
                    background-size: cover;
                    width: 100%;
                    height: 150px;
                  }
                  u{
                    font-size:12px;
                  }
                  .u2{
                    font-size:10px;
                  }
                  .btn {
                    width: 100px;
                    font-size: 11px;
                    height: 25px;
                  }
                  .btn:hover{
                    font-size: 12px;
                  }
                  .mainName{
                    font-size:15px;
                  }
                  .content{
                    height: 300px;
                   }
                   .complTitle {
                    font-size:10px;
                  }
                  .complUl {
                    font-size:8px;
                  }
                }



            `}</style>
        </>
    )
}