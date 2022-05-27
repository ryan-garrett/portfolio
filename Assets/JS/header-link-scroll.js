document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll
  const links = document.querySelectorAll('.header-link');
  const sections = document.querySelectorAll('section');
  const lastLink = document.getElementById('last-nav');

  function changeLinkState() {
    let index = sections.length;
    if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 50) {
      links.forEach((link) => link.classList.remove('active'));
      lastLink.classList.add('active');
    } else {
      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
      
      links.forEach((link) => link.classList.remove('active'));
      links[index].classList.add('active');
    }
  }
  changeLinkState();
  window.addEventListener('scroll', changeLinkState);

  // Navbar menu
  const dropDown = document.getElementById('drop-down');
  document.getElementById("menu-button").onclick = function () {
    if(dropDown.classList.contains('active')) {
      console.log("Class removed")
      dropDown.classList.remove('active')
    } else {
      console.log("Class added")
      dropDown.classList.add('active')
    }
  };


  // const el = document.getElementById('menu-button');
  // const dropDown = document.getElementById('drop-down');
  // function changeMenuState() {
  //   if(dropDown.classList.contains('active')) {
  //     console.log("Class removed")
  //     dropDown.classList.remove('active')
  //   } else {
  //     console.log("Class added")
  //     dropDown.classList.add('active')
  //   }
  // }
  
})
