import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
    return (
       <section className="section footer bg-dark text-white">
           <div className="container">
               <div className="row">
                   <div className="col-md-4">
                       <h6>Naz Collection 2k20 </h6>
                       <hr/>
                        <p className="text-white">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition 
                        et la mise en page avant impression. Le Lorem Ipsum est le faux texte 
                        standard de l'imprimerie depuis les années 1500, quand un imprimeur 
                        anonyme assembla ensemble des morceaux de texte pour réaliser un livre. 
                        </p>
                   </div>
                   <div className="col-md-4">
                       <h6> Quick Links </h6>
                       <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/blog">Blog</Link></div>
                   </div>
                   <div className="col-md-4">
                       <h6>Contact Informations</h6>
                       <hr/>
                       <div><p className="text-white mb-1"></p> Akouda rue Xxxxxx</div>
                       <div><p className="text-white mb-1"></p>+216 XXXXXXXX</div>
                       <div><p className="text-white mb-1"></p>+216 XXXXXXXX</div>
                       <div><p className="text-white mb-1"></p>email@gmail.com</div>
                   </div>
               </div>
           </div>

       </section>
    )
}

export default Footer
