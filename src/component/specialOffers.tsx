import banner from '/public/images/modelBanner.jpg'
import Image from 'next/image'
import Image1 from '/public/images/specialOffers/img1.webp'
import Image2 from '/public/images/specialOffers/img2.webp'
import Image3 from '/public/images/specialOffers/img3.webp'
export function SpecialOffers() {
    return (
        <>
       <div className="specialOffers">
         <div className="titleMain">Специальные предложения</div>
            <div className="container">
                <div className='containerEl'>
                    <div className='img1'>
                   {/* <img src={banner.src} className='banner' />*/}
                    </div>
                   {/* <div className="img">
                     
                    </div> */}
                   <div className="titleOffers">Подарок на выбор</div>
                   <div className='btnDiv'>
                       <button className="btn" type="submit">Узнать больше</button>
                    </div>
                </div>
                <div className='containerEl'>
                   <div className="img2"></div>
                   <div className="titleOffers">Скидка на шиномонтаж</div>
                   <div className='btnDiv'>
                       <button className="btn" type="submit">Узнать больше</button>
                    </div>
                </div>
                <div className='containerEl'>
                   <div className="img3"></div>
                   <div className="titleOffers">Проверка углов колес в подарок</div>
                   <div className='btnDiv'>
                       <button className="btn" type="submit">Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>
        
<style jsx>{`
    .banner {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
.specialOffers{
    display:flex;
    flex-direction:column;
    margin-top:20px;
}

.titleMain{
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-family: 'Montserrat', sans-serif;
    font-size:30px;
    font-weight:bold;
}

.container{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;  
}

.containerEl{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border:solid;
    border-color:#f7ff14;
    padding:10px;
    margin-top:30px;
    width:350px;
    height:450px;
    background-color: #0f0f0f;
    border-radius: 7px;
    color: white;
}

.containerEl:hover{
        box-shadow: 19px 24px 11px 1px rgba(34, 60, 80, 0.42);
        transform: scale(1.005);
}

.img1{
    display:flex;
    width:100%;
    height:300px;
    background-position: center center;
    background-image: url('${Image1.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
}
.img2{
    width:100%;
    height:400px;
    background-position: center center;
    background-image: url('${Image2.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
}
.img3{
    width:100%;
    height:400px;
    background-position: center center;
    background-image: url('${Image3.src}');
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 5px;
    background-size:contain;
}
.titleOffers {
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:20px;
    font-family: 'Montserrat', sans-serif;
    align-items:center;
}

.btnDiv {
    display:flex;
    flex-direction:row;
    justify-content:center;
}

.btn {
    margin-top:20px;
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 180px;
    height: 35px;
    font-size: 18px;
    margin-bottom:10px;
}

.btn:hover {
    background-color: #f7ff14;
    font-size: 20px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    font-size: 17px;
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
}             
`}</style>
</>
)}