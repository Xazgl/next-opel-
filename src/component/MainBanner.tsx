import Link from "next/link";
import Image from 'next/image';
import banner from '/public/images/banner.webp'

export function MainBanner() {
    return (
        <>
            <div className="MainBanner">
               {/* <Image
                    src={banner}
                    alt="opel"
                    width={1000}
                    height={1000}
                />*/}

                {/* <img  className="ImgBanner" src={banner.src} alt="opel" /> */}
                {/* <div  className="ImgBanner2" /> */}
                    <div className="title">
                       <div>АРКОНТ ОФИЦИАЛЬНЫЙ ДИЛЕР OPEL</div>
                        <div className="titleMini">
                          <div>Ждем Вас на Спартановке</div>
                          <div>Ежедневно с 8:00 до 20:00</div>
                        </div>
                   </div>
            </div>

            <style jsx>{`
                .MainBanner {
                    display:flex; 
                    width: 100%;
                    height: 600px;
                    justify-content: center;
                    background-blend-mode: darken;
                    background: rgba(0, 0, 0, .50);
                    background-position: center center;
                    background-image: url('${banner.src}');
                    
                }
                .title {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    color:white;
                    font-family: 'Montserrat'; 
                    font-size:40px;
                    font-weight: bold;
                }
                .titleMini {
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    color:white;
                    margin-top:100px;
                    font-family: 'Montserrat'; 
                    font-size:20px;
                    font-weight: bold;
                }
                .ImgBanner2{
                   /* overflow: hidden;
                       border-radius: 5px;
                   */
                    
                    background-position: center center;
                    display:flex;
                }
            `}</style>
        </>
    )
}