window.addEventListener('load', () => {
  var isSidebarColapsed = true;
  var sidebarToggle = document.querySelector('.sidebar__toggle-box__btn');
  var backdrop = document.querySelector('.backdrop');
  var sidebarContentBox = document.querySelector('.sidebar__content-box');

  sidebarToggle.addEventListener('click', () => {
    toggleSidebar();
  });
  
  var sidebarTabs = document.querySelectorAll('.sidebar__content-box__menu__nav__tab');
  var sidebarContent = document.querySelector('.sidebar__content-box__content');
  
  sidebarTabs.forEach(elem => {
    elem.addEventListener('click', () => {
      setSidebarContent(elem);
    });
  });
  
  const toggleSidebar = () => {
    if (isSidebarColapsed) {
      backdrop.classList.add('active');
      sidebarContentBox.classList.add('active');
      isSidebarColapsed = false;
    }
    
    else {
      backdrop.classList.remove('active');
      sidebarContentBox.classList.remove('active');
      isSidebarColapsed = true;
    }
  }
  
  const setSidebarContent = element => {
    sidebarTabs.forEach(e => {
      if (e === element) e.classList.add('active'); 
      else e.classList.remove('active');
    });
    
    switch (element.innerHTML) {
      case 'SKILLS':
        sidebarContent.innerHTML = `<div class="sidebar__content-box__content__skills">
      <article class="sidebar__content-box__content__skills__skill">
      <h3>UI DESIGN</h3>
        <p>I love making innovative solutions for those who want to stand out. I usually build user interfaces using Figma and Adobe Illustrator.</p>
        </article>
        
        <article class="sidebar__content-box__content__skills__skill">
        <h3>PROTOTYPING</h3>
        <p>I make effective prototypes as an useful method for testing ideas. I’m used to make prototypes using tools like Adobe XD and Figma.</p>
        </article>
        
        <article class="sidebar__content-box__content__skills__skill">
        <h3>FRONTEND DEV.</h3>
        <p>I use modern web technologies such as React.js and other javascript libraries to bring my projects to life.</p>
        </article>
        </div> `;
        break;
        
        case 'ABOUT':
          sidebarContent.innerHTML = `<div class="sidebar__content-box__content__about-me">
        <h3>ABOUT MY WORK</h3>
        <p>I love making minimalist but effective designs to create wonderful experiences. I’m very open to criticism about my work that helps me design higher quality products, to stay motivated to learn new things and keep improving everyday.</p>
        </div>`;
        break;
        
        case 'CONTACT':
          sidebarContent.innerHTML = `<div class="sidebar__content-box__content__contact">
          <h4>LET'S MAKE</h4>
          <h3>AWESOME PROJECTS</h3>
          <div>
          <p><strong>contact me at</strong></p>
          <p>•</p>
          <p>joansebastian35@gmail.com</p>
        </div>
        </div>`;
        break;
      }
    }

    setSidebarContent(sidebarTabs[0]);
  });