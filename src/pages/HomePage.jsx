import React from 'react'
import { Nav } from 'react-bootstrap'
import VaccineFinder from '../VaccineFinder'

function HomePage() {
    return (
        <div>
        <div className="col-sm-12 mb-5">            
          <Nav className="divbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <a className="navbar-brand" href="/"><h2 className="heading-div text-center">Vaccine Finder</h2></a>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item {{ 'active' if id == '363'}}">
                  
                  <a className="nav-link" href="/363">Pune</a>
                </li>
                <li className="nav-item {{ 'active' if id == '395' }}">
                  <a className="nav-link" href="395">Mumbai</a>
                </li>
                <li className="nav-item {{ 'active' if id == '154' }}">
                  <a className="nav-link" href="/154">Ahmedabad</a>
                </li>
              </ul>
            </div>
          </Nav>
        </div>
        <div className="container-fluid">
          <VaccineFinder />
        </div>
        <div className="text-center footer">
          <span className="foot">&#169;Copyright 2021 by Pranav Shah</span>
          <span className="note">**Note: This is only for reference purpose. Data shown here might not be accurate. Please visit government website.</span>
        </div>
      </div>
    )
}

export default HomePage
