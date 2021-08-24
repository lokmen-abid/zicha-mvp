import React from "react";
import Slider from "../inc/Slider";
import {Link} from "react-router-dom" ; 
import Vmc from "./inc/Vmc"
import produit from "../img/prd.jpg"

function Home() {
  return (
    <div>
      <Slider/>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> Our Shop </h3>
              <div className="underline mx-auto"></div>
                <p>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. 
                </p>
                <Link to="/about" className="btn btn-warning shadow"> Read More </Link>
            </div>
          </div>
        </div>
      </section>


       {/* Products */}

       <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading"> Products </h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
            <div className="card shadow" >
                <img src={produit} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h6 className="card-title">Card title</h6>
                  <div className="underline"></div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prix:45DT</li>
                  <li className="list-group-item">Taille:S,M,L,XL</li>
                  <li className="list-group-item">Disponible</li>
                </ul>
                <div className="card-body">
                  <Link to="/produits" className="card-link"> See More </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="card shadow" >
                <img src={produit} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h6 className="card-title">Card title</h6>
                  <div className="underline"></div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prix:45DT</li>
                  <li className="list-group-item">Taille:S,M,L,XL</li>
                  <li className="list-group-item">Disponible</li>
                </ul>
                <div className="card-body">
                  <Link to="/produits" className="card-link"> See More </Link>
                </div>
              </div>
             
            </div>
            <div className="col-md-4">
            <div className="card shadow" >
                <img src={produit} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h6 className="card-title">Card title</h6>
                  <div className="underline"></div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prix:45DT</li>
                  <li className="list-group-item">Taille:S,M,L,XL</li>
                  <li className="list-group-item">Disponible</li>
                </ul>
                <div className="card-body">
                  <Link to="/produits" className="card-link"> See More </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* VMC */}
      <Vmc />

    </div>
  );
}

export default Home;
