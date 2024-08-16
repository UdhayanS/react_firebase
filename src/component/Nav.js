import React from 'react'


const Nav = () => {
  return (
    <div>
      <header>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body text-light fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Udhayan Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto w-100 justify-content-around">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience">Experiences</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#certification">Certification</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
          <a class="btn btn-outline-success" id="btnn" href="assets/Resume-Udhayan.pdf" target="_blank">Resume</a>
        </div>
      </div>
    </nav>
  </header>

    </div>
  )
}

export default Nav
