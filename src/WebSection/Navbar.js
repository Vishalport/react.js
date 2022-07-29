import React from 'react'

export default function header() {
  return (
      <>
          <header id="home">
            <div class="container">
              <nav class="navbar navbar-expand-lg navbar-light ">  
                <a class="navbar-brand" data-scroll href="/"><img src="images/LC_Pink.png" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <div class="interactive-menu-button">
                    <a href="#">
                      <span>Menu</span>
                    </a>
                  </div>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" data-scroll href="/">Home.<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      
                      <a class="nav-link" data-scroll href="about">About.</a>
                    </li>
  
                    <li class="nav-item">
                      
                      <a class="nav-link" data-scroll href="Service">Service.</a>
                    </li>
                    <li class="nav-item">
                      
                      <a class="nav-link" data-scroll href="contact">Contact.</a>
                    </li>
                     
                  </ul>

                </div>
              </nav>
            </div>
          </header>      
    </>
  )
}




