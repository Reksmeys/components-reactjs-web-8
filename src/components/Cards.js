import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Cards({products}) {
    
  return (
    products && products.map(product => (
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
                <img src={product.images[0]} className="card-img-top" alt="course image" />

                <div className="card-body pb-0">
                
                    <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-purple bg-opacity-10 text-purple">{product.category.name}</a>
                        <a href="#" className="h6 mb-0"><i className="far fa-heart"></i></a>
                    </div>
            
                    <h5 className="card-title fw-normal"><Link to={`/read/${product.id}`}>{product.title}</Link></h5>
                    <p className="mb-2 text-truncate-2">{product.description}</p>
                    
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                    </ul>
                </div>
            
                <div className="card-footer pt-0 pb-3">
                    <hr />
                    <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 56m</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>89</span>
                    </div>
                </div>
            </div>
        </div>
    ))
  )
}

export default Cards