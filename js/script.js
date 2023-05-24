function router() {
  const hash = window.location.hash
  const contentDiv = document.getElementById('content')

  switch (hash) {
    case '#home':
      contentDiv.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="mt-5">Welcome to My Website!</h1>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jL5ZTO8JClA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <!-- Here we will insert video cards dynamically -->
                        <div id="videoCards"></div>
                    </div>
                </div>
            `
      const videoCardsDiv = document.getElementById('videoCards')
      const videoIds = ['MwjxIoDS_b8', 'Ut74sWlKdao', 'P-t0rvz6dOg'] // replace these with your video IDs
      videoIds.forEach((id) => {
        videoCardsDiv.innerHTML += `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <div class="card-body">
                                <h4 class="card-title"><a href="https://www.youtube.com/watch?v=${id}" target="_blank">Video Title</a></h4>
                                <p class="card-text">Video Description</p>
                            </div>
                        </div>
                    </div>
                `
      })
      break
    case '#about':
      contentDiv.innerHTML = `
          <div class="container mt-5">
            <h1>My Journey</h1>
            <ul class="timeline">
            </ul>
          </div>
        `
      const timeline = document.querySelector('.timeline')
      const events = [
        { year: '1980', description: 'Born in Seoul' },
        { year: '2018', description: 'Started programming' },
        { year: '2021', description: 'Joined OpenAI' },
        // add your own events
      ]
      events.forEach((event, idx) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <div class="timeline-badge">${event.year}</div>
            <div class="timeline-panel">
              <div class="timeline-body">
                <p>${event.description}</p>
              </div>
            </div>
          `
        if (idx % 2 === 1) {
          li.classList.add('timeline-inverted')
        }
        timeline.appendChild(li)
      })
      break

    case '#portfolio':
      contentDiv.innerHTML = `
          <div class="container mt-5">
            <h1>My Portfolio</h1>
            <div class="row" id="portfolioCards"></div>
          </div>
        `
      const portfolioCardsDiv = document.getElementById('portfolioCards')
      const portfolioItems = [
        {
          title: 'Imagicrafter',
          description: '미드저니 프롬프트 마법 제작소',
          image: 'https://via.placeholder.com/150',
        },
        {
          title: 'Project 2',
          description: 'This is a description of Project 2.',
          image: 'https://via.placeholder.com/150',
        },
        {
          title: 'Project 3',
          description: 'This is a description of Project 3.',
          image: 'https://via.placeholder.com/150',
        },
        // add your own portfolio items
      ]
      portfolioItems.forEach((item) => {
        portfolioCardsDiv.innerHTML += `
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <img class="card-img-top" src="${item.image}" alt="${item.title}">
                <div class="card-body">
                  <h4 class="card-title">${item.title}</h4>
                  <p class="card-text">${item.description}</p>
                </div>
              </div>
            </div>
          `
      })
      break
    case '#gallery':
      contentDiv.innerHTML = `
          <div id="carouselExampleIndicators" class="carousel slide mt-5" data-ride="carousel">
            <ol class="carousel-indicators" id="carouselIndicators"></ol>
            <div class="carousel-inner" id="carouselImages"></div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        `
      const carouselIndicators = document.getElementById('carouselIndicators')
      const carouselImages = document.getElementById('carouselImages')
      const galleryImages = [
        'https://via.placeholder.com/800',
        'https://via.placeholder.com/800',
        'https://via.placeholder.com/800',
        // add your own image URLs
      ]
      galleryImages.forEach((image, idx) => {
        carouselIndicators.innerHTML += `
            <li data-target="#carouselExampleIndicators" data-slide-to="${idx}" ${
          idx === 0 ? 'class="active"' : ''
        }></li>
          `
        carouselImages.innerHTML += `
            <div class="carousel-item ${idx === 0 ? 'active' : ''}">
              <img src="${image}" class="d-block w-100" alt="Gallery Image ${
          idx + 1
        }">
            </div>
          `
      })
      break

    case '#sns':
      contentDiv.innerHTML = `
          <div class="container mt-5">
            <h1>Connect with Me</h1>
            <div class="row">
              <div class="col-md-3 col-6 my-2">
                <a href="mailto:jaehyun@aikoreacommunity.com" target="_blank">
                  <i class="fas fa-envelope fa-2x"></i>
                </a>
                <p>Email me at jaehyun@aikoreacommunity.com</p>
              </div>
              <div class="col-md-3 col-6 my-2">
                <a href="https://app.aikoreacommunity.com/share/SiU5my4O_u_G3CdY?utm_source=manual" target="_blank">
                  <i class="fas fa-users fa-2x"></i>
                </a>
                <p>Join my AI Developer Hub group</p>
              </div>
              <div class="col-md-3 col-6 my-2">
                <a href="https://app.aikoreacommunity.com/share/UgTn7h3P2hyWOIvu?utm_source=manual" target="_blank">
                  <i class="fas fa-book fa-2x"></i>
                </a>
                <p>Read my book "ChatGPT Coding" for free</p>
              </div>
              <div class="col-md-3 col-6 my-2">
                <a href="https://open.kakao.com/o/sYDIO74e" target="_blank">
                  <i class="fas fa-comments fa-2x"></i>
                </a>
                <p>Join my Kakao open chat</p>
              </div>
              <div class="col-md-3 col-6 my-2">
                <a href="https://www.instagram.com/jaehyunDevHub" target="_blank">
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
                <p>Follow me on Instagram: jaehyunDevHub</p>
              </div>
            </div>
          </div>
        `
      break

    default:
      contentDiv.innerHTML = 'This is the homepage'
  }
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
