import React, { Component } from 'react'
/*import About from '../svg/About.jpg'*/
import aboutimg from '../svg/About.jpg'
import '../css/About.css'

class Aboutjs extends Component {
  
  render() {
    return (
      <>

<div className='about_img'>
       <img src={aboutimg} alt="" width="100%"/>
       </div>
   

     
    <h1 className='presentation_du_groupe_h1'>PRESENTATION</h1>
    <h2 className='presentation_du_groupe_h2'>▸JAYMA est le leader africain du e-commerce.</h2>

    <div className='page_about'>
    <p>
        Notre mission est d’améliorer le quotidien du continent africain en proposant aux consommateurs des services en ligne innovants, pratiques et abordables tout en soutenant le développement d’entreprises ayant recours à notre plateforme pour satisfaire leurs clients. 
    </p>
    <p>
        Notre plateforme réunit une MarketPlace, qui connecte vendeurs et acheteurs, un réseau logistique, qui permet la livraison de millions de colis, et un service de paiement, qui facilite les transactions de nos clients dans la plupart de nos marchés.
    </p>
 
 

    </div>


       
       <h2 className='notre_ambition_h2'>
        NOTRE AMBITION
    </h2>


    <div className='notre_ambition'>
    <p>
        ▸Jayma est la première entreprise Africaine lauréat des prix de vente au détail en 2022 succédant aux entreprises comme ASOS et Zappos.com.
    </p>

    <p>
        ▸ Success Digest - Activité innovante de l'année 2022.
    </p>
    <p>
        ▸ Prix ​​d'excellence du meilleur service à la clientèle 2022
    </p>
    <p>
        ▸ Orange Academy brand wall of Fame - Jayma Afrique.
    </p>
    <p>
        ▸ Rima Awards - Meilleure utilisation de l'application mobile - Jayma App.
    </p>
      
    </div>

    
   
       </>
    )
  }
}
export default Aboutjs

