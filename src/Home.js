import React from 'react'

function Home()
{

   return(
      <div>

         <div className='home_page_div'>

         <div>
         <h1 className='home_first_h1'> Hello, I am </h1> 
         <h1 className='home_second_h1 home_second_h1:hover'> Kerem </h1>
         <h1 className='home_third_h1'> Full Stack Developer </h1>
         </div>

         <img className='img_for_profile' src='/images/example.jpg' alt='Person Photo'/>

      
         </div>
         
      </div>
   );

}


export default Home;