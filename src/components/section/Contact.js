import React, { Component } from 'react'
import '../css/Contact.css'


export class Contact extends Component {
    render() {
        return (
            <>
           
           
        <h1 className='nous_contacter'>NOS CONTACTS</h1>
        <div className='informations'>
        <div className='telephone'>
            <h3 className='telephone_h2'>PAR TELEPHONE :</h3>
            
            <p className='text_telephone'>
            Du lundi au vendredi de 9h à 18h au +221.77.201.18.71
            </p>
            
        </div>
       
        <div className='email'>
            <h3 className='email_h2'>PAR E-MAIL:</h3>
            
            <p className='text_email'>
            Écrire, échanger, discuter : service.clients@feed.co
            </p>
            
        </div>

       
    
        </div>
        
            
            </>
     
        )
    }
}

export default Contact  