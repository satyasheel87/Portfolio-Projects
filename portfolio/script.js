    // Mobile menu toggle (small JS but purely UI)
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle && menuToggle.addEventListener('click', ()=>{
      if(getComputedStyle(navLinks).display === 'none'){
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.right = '24px';
        navLinks.style.top = '64px';
        navLinks.style.background = 'linear-gradient(180deg, rgba(6,10,15,0.95), rgba(6,10,15,0.95))';
        navLinks.style.padding = '12px';
        navLinks.style.borderRadius = '10px';
      } else {
        navLinks.style.display = '';
      }
    });

    // small enhancement: animate progress bars when visible
    const skills = document.querySelectorAll('.skill');
    const io = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.querySelector('.progress::before')
        }
      })
    }, {threshold:0.2});
    // (progress is driven by data attribute using CSS — JS is optional)