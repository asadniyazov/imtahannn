import React, { useContext, useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Maincontext } from '../context/Mainprovider5';
import "./Home.scss"
function Home() {
    const {AddBasket,isExsisted,AddWishlist} = useContext(Maincontext)
    const [Category, setCategory] = useState([])
    useEffect(() => {
      GetProduct()
    }, [])
     async function GetProduct() {
         const res= await fetch ("http://localhost:3000/mongoose/")
         const data= await res.json()
         setCategory(data)
    }
  return (
<>
<Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className='Herosection'>
      </section>
      <section className='Middlesection'>
        <div className='Middlesection_container'>
          <div className='Middlesection_container1'>
            <div>
            <div className='Middlesection_container_text1'>RESCUE AN ORPHAN</div>
            <div className='Middlesection_container_text2'>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</div>
            </div>
          </div>
          <div  className='Middlesection_container2'>
            <div>
            <div  className='Middlesection_container_text1'> FEED THE HUNGRY</div>
            <div  className='Middlesection_container_text2'>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</div>
            </div>
          </div>
         
        <div  className='Middlesection_container3'>
          <div>
          <div  className='Middlesection_container_text1'> FREE EDUCATION</div>
          <div className='Middlesection_container_text2'>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</div>
          </div>
        </div>
        </div>
      </section>
      <section className='ThirdSection'>
        <div className='ThirdSection_container'>
          
 {Category.map((x)=><>
 
<div className='Card' key={x._id}>
 <div className='icon' onClick={()=>AddWishlist(x)}>{isExsisted(x) ?<i class="fa-solid fa-heart"></i> :<i class="fa-regular fa-heart"></i> }</div>
    <i className='Card_icon' class={x.icon}></i>
    <div className='title'>{x.title}</div>
    <div className='des'>{x.des}</div>
    <div className='price'>{x.price}$</div>
    <buton className="button"><Link to={'/detail/'+x._id}>Go Detail</Link></buton>
    <button className="button" onClick={()=>AddBasket(x)}>Add Basket</button>
  
</div>

</>)}
        </div>
      </section>
      <section className='FourthSection'>
        <div className='FourthSection_container'>
          <div className='text1'>Our Leadership</div>
          <div className='text2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis, eius, eos consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.</div>
  
        <div className='CardContainer'>
          <div className='Card'>
            <img className='img' src='https://preview.colorlib.com/theme/foundation/images/person_1.jpg'/>
            <div className='card1'>MINING EXPERT</div>
            <div className='card2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!</div>
          </div>
          <div className='Card'>
            <img className='img' src='https://preview.colorlib.com/theme/foundation/images/person_2.jpg'/>
            <div className='card1'>PROJECT MANAGER</div>
            <div className='card2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quia veritatis, nam quam obcaecati fuga.</div>
          </div>

          <div className='Card'>
            <img className='img' src='https://preview.colorlib.com/theme/foundation/images/person_3.jpg'/>
            <div className='card1'>ENGINEER</div>
            <div className='card2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quidem, laudantium, illum minus numquam voluptas?</div>
          </div>
        </div>
        </div>
      </section>
</>

  )
}

export default Home