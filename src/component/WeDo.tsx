import pic from '/public/images/12.webp'
import pic2 from '/public/images/13.webp'
import pic3 from '/public/images/14.webp'
import router from "next/router";

export function WeDo() {
    async function showService() {
        const res = await fetch('/api/serviceClick', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ })
        })
        if (res.ok) {
        const result = await (await res).json()
            if (result.redirectUrl) {
               router.push(result.redirectUrl as string)
            }
      }
    }  

    async function showModel() {
        const res = await fetch('/api/modelClick', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ })
        })
        if (res.ok) {
        const result = await (await res).json()
            if (result.redirectUrl) {
               router.push(result.redirectUrl as string)
            }
      }
    }  

    return (
        <>
            <div className="background">
                <div className='mainTitle'>Что мы делаем</div>
            </div>
            <div className="background">
             <div className="container" >
               <div className="row">
                   <div className="el" id='yellow' onClick={showModel}>
                        <div className="title" >Продам автомобили</div>
                        <div className="words"></div>
                   </div>
                   <div className="el">
                        <div className="pic"></div>
                    </div>
                   <div className="el" id='white'  onClick={showService}> 
                        <div className="title">Обслуживаем</div>
                        <div className="words"></div>
                    </div>
                </div>
                <div className="row">
                   <div className="el">
                        <div className="pic2"></div>
                   </div>
                   <div className="el" id='grey'  onClick={showModel}>
                        <div className="title" id='greyT' >Продаем с выгодой</div>
                        <div className="words"></div>
                   </div>
                   <div className="el">
                        <div className="pic3"></div>
                   </div>
                </div>
                </div>
            </div>

            <style jsx>{`
                .background {
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                }
                .mainTitle{
                    display:flex;
                    justify-content:center;
                    flex-direction:row;
                    font-family: 'Montserrat', sans-serif;
                    font-size:30px;
                    margin-top:50px;
                    font-weight: bold;

                }
                .container {
                    display:flex;
                    flex-direction:column;
                    width:900px;
                    align-items:center;
                    justify-content:center;
                    margin-top:50px;
                    margin-bottom:50px;
                  
                }
                .row{
                    display:flex;
                    flex-direction:row;
                    justify-content:center;
                }
                .el{
                    height:250px;
                    width:300px;
                    display:flex;
                    border:solid;
                    border:black;
                    flex-direction:column;
                    transition: transform.3s ;
                }
                .el:hover{
                    transform: scale(1.01);

                }
                .pic {
                    background-color:black;
                    height: 300px;
                    background-position: center center;
                    overflow: hidden;
                    background-repeat: no-repeat;

                    background-size: cover;
                    background-image: url('${pic.src}');
                }
                .pic2 {
                    background-color:black;
                    height: 300px;
                    background-position: center center;
                    overflow: hidden;
                    background-repeat: no-repeat;

                    background-size: cover;
                    background-image: url('${pic2.src}');
                }
                .pic3 {
                    background-color:black;
                    height: 300px;
                    background-position: center center;
                    overflow: hidden;
                    background-repeat: no-repeat;

                    background-size: cover;
                    background-image: url('${pic3.src}');
                }
                .txt {
                    height: 300px;
                    width:300px;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
                #yellow{
                    background-color:rgb(247, 255, 20);
                }
                #white {
                    background-color:rgb(245,245,245);
                }
                #grey{
                    background-color:#0a0a0a;
                }
                #greyT{
                    color:white;
                }
                .title{
                    display:flex;
                    flex-direction:row;
                    margin-top:30px;
                    justify-content:center;
                    font-family: 'Montserrat', sans-serif;
                    margin-top: 30%;
                    font-size:23px;
                }
            `}</style>
        </>
    )
}