import React from 'react';
import './card.css'


const Card = ({openhandleclick,data ,id}) => {
  return (
    
    <section className="articles">
    {data.map((element,index) =>( 
   <article key={index} className='card'>
     <div className="article-wrapper">
       <div className='img-div-h'>
         <img  className="img-h-w"  onClick={openhandleclick} src={element.image} alt={element.title} />
         </div>
       <div className="article-body flex flex-col items-center ">
         <h2  className="title-f-w" onClick={openhandleclick}>{element.title}</h2>
         <p  className='des-clr-sz-h truncate-3-lines text-center'  onClick={openhandleclick}>
           {element.description}
         </p>
         <div className='div-pr-bg-br flex place-content-center'><p className='price-f-w-h' >{element.price}</p></div>
       <div className='btn-div'><button  className="btn-font-w-h w-48 h-8 justify-center" onClick={openhandleclick}>{element.cardtitle}</button> </div>
       </div>
     </div>
   </article>
     ))}
       </section>
   
      

  );
}

export default Card;



