import React from 'react'


const Footer = () => {
    
    return <div className='bg-purple-500 w-full'>    
    <div className="text-center flex flex-row md:flex justify-between">
        <div className=" w-2/5 flex flex-col justify-center text-center text-yellow-50">
        ¿Quienes Somos?
        
        </div>
        
        <div className="w-3/5 flex flex-col justify-center text-center text-yellow-50" >
        <p ><i class="fab fa-facebook">  Facebook</i></p>
        <p ><i class="fab fa-instagram">  Instagram</i></p>
        <p ><i class="fab fa-twitter">  Twitter</i></p>
        
        </div>

    </div>

    
    </div>
}

export default Footer
