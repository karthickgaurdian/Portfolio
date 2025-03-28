import content from './config/content.js';

// Initialize AOS with enhanced settings
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out',
  anchorPlacement: 'top-bottom',
  disable: 'mobile'
});

// Add loading screen
const loadingScreen = document.createElement('div');
loadingScreen.className = 'loading';
document.body.appendChild(loadingScreen);

// Slider functionality
let currentSlide = 0;
let slideInterval;

function initSlider() {
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (slider && content.sliderImages) {
    // Clear existing images
    slider.innerHTML = '';

    // Add images to slider
    content.sliderImages.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = `Slide ${index + 1}`;
      if (index === 0) img.classList.add('active');
      slider.appendChild(img);
    });

    // Function to show slide
    function showSlide(index) {
      const slides = slider.querySelectorAll('img');
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    // Function to next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % content.sliderImages.length;
      showSlide(currentSlide);
    }

    // Function to previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + content.sliderImages.length) % content.sliderImages.length;
      showSlide(currentSlide);
    }

    // Start auto slide
    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 5000);
    }

    // Stop auto slide
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }

    // Add event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
      });
    }

    // Start auto slide
    startAutoSlide();
  }
}

// Populate content
document.addEventListener('DOMContentLoaded', () => {
  // Remove loading screen
  loadingScreen.remove();

  // Initialize slider
  initSlider();

  // About section
  const aboutText = document.getElementById('about-text');
  if (aboutText && content.personal.about) {
    aboutText.textContent = content.personal.about;
  }

  // Skills section
  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    // Add search input
    const skillsSearch = document.createElement('input');
    skillsSearch.type = 'text';
    skillsSearch.className = 'skills-search';
    skillsSearch.placeholder = 'Search skills...';
    skillsContainer.insertBefore(skillsSearch, skillsContainer.firstChild);

    // Add category buttons
    const skillsCategories = document.createElement('div');
    skillsCategories.className = 'skills-categories';
    
    // Add "All" button first
    const allButton = document.createElement('button');
    allButton.className = 'skill-category-btn active';
    allButton.textContent = 'All';
    allButton.dataset.category = 'all';
    skillsCategories.appendChild(allButton);

    // Add other category buttons
    Object.keys(content.personal.skills).forEach(category => {
      const button = document.createElement('button');
      button.className = 'skill-category-btn';
      button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      button.dataset.category = category;
      skillsCategories.appendChild(button);
    });
    skillsContainer.insertBefore(skillsCategories, skillsContainer.firstChild);

    // Add skills grid
    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'skills-grid';
    skillsContainer.appendChild(skillsGrid);

    // Function to filter and display skills
    function filterSkills(category = 'all', searchTerm = '') {
      skillsGrid.innerHTML = '';
      let skillsToShow = [];

      if (category === 'all') {
        // Show all skills from all categories
        Object.values(content.personal.skills).forEach(skills => {
          skillsToShow = skillsToShow.concat(skills);
        });
      } else {
        // Show skills from selected category
        skillsToShow = content.personal.skills[category] || [];
      }

      // Filter by search term
      skillsToShow = skillsToShow.filter(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Display filtered skills
      skillsToShow.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillItem.setAttribute('data-aos', 'fade-up');
        skillsGrid.appendChild(skillItem);
      });
    }

    // Add event listeners for skills filtering
    skillsCategories.querySelectorAll('.skill-category-btn').forEach(button => {
      button.addEventListener('click', () => {
        skillsCategories.querySelectorAll('.skill-category-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterSkills(button.dataset.category);
      });
    });

    skillsSearch.addEventListener('input', (e) => {
      const activeCategory = skillsCategories.querySelector('.skill-category-btn.active')?.dataset.category || 'all';
      filterSkills(activeCategory, e.target.value);
    });

    // Initial skills load
    filterSkills();
  }

  // Projects section
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid && content.projects) {
    content.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.setAttribute('data-category', project.category);
      projectCard.setAttribute('data-aos', 'fade-up');

      projectCard.innerHTML = `
        ${project.image ? `
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
        ` : ''}
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
          </div>
          ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">View Project</a>` : ''}
        </div>
      `;
      projectsGrid.appendChild(projectCard);
    });
  }

  // Experience section
  const experienceGrid = document.querySelector('.experience-grid');
  if (experienceGrid && content.experience) {
    content.experience.forEach(exp => {
      const experienceCard = document.createElement('div');
      experienceCard.className = 'experience-card';
      experienceCard.setAttribute('data-aos', 'fade-up');
      experienceCard.innerHTML = `
        <h3>${exp.role}</h3>
        <h4>${exp.company}</h4>
        <p class="date">${exp.startDate} - ${exp.endDate}</p>
        <ul>
          ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      `;
      experienceGrid.appendChild(experienceCard);
    });
  }

  // Education section
  const educationGrid = document.querySelector('.education-grid');
  if (educationGrid && content.education) {
    content.education.forEach(edu => {
      const educationCard = document.createElement('div');
      educationCard.className = 'education-card';
      educationCard.setAttribute('data-aos', 'fade-up');
      educationCard.innerHTML = `
        <h3>${edu.level}</h3>
        <h4>${edu.institution}</h4>
        <p class="date">${edu.yearJoined} - ${edu.yearCompleted}</p>
        <p class="cgpa">CGPA: ${edu.cgpa}</p>
      `;
      educationGrid.appendChild(educationCard);
    });
  }

  // Contact section
  const contactEmail = document.getElementById('contact-email');
  const contactLinkedin = document.getElementById('contact-linkedin');
  const contactGithub = document.getElementById('contact-github');
  
  if (contactEmail && content.personal.email) contactEmail.textContent = content.personal.email;
  if (contactLinkedin && content.personal.linkedin) contactLinkedin.textContent = content.personal.linkedin;
  if (contactGithub && content.personal.github) contactGithub.textContent = content.personal.github;

  // Footer links
  const footerEmail = document.getElementById('footer-email');
  const footerLinkedin = document.getElementById('footer-linkedin');
  const footerGithub = document.getElementById('footer-github');
  
  if (footerEmail && content.personal.email) footerEmail.href = `mailto:${content.personal.email}`;
  if (footerLinkedin && content.personal.linkedin) footerLinkedin.href = content.personal.linkedin;
  if (footerGithub && content.personal.github) footerGithub.href = content.personal.github;

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('projectSearch');

  if (filterButtons.length && projectCards.length) {
    function filterProjects(category = 'all', searchTerm = '') {
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.project-tags span'))
          .map(tag => tag.textContent.toLowerCase());
        
        const matchesCategory = category === 'all' || cardCategory === category;
        const matchesSearch = searchTerm === '' || 
          title.includes(searchTerm) || 
          description.includes(searchTerm) || 
          tags.some(tag => tag.includes(searchTerm));
        
        card.style.display = matchesCategory && matchesSearch ? 'block' : 'none';
      });
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjects(button.getAttribute('data-filter'));
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
        filterProjects(activeFilter, e.target.value.toLowerCase());
      });
    }
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      if (navLinks) {
        navLinks.classList.remove('active');
      }
    }
  });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    if (!name.value) {
      isValid = false;
    }
    
    if (!email.value || !isValidEmail(email.value)) {
      isValid = false;
    }
    
    if (!message.value) {
      isValid = false;
    }
    
    if (isValid) {
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = 'Message sent successfully!';
      contactForm.appendChild(successMessage);
      
      setTimeout(() => {
        successMessage.remove();
        contactForm.reset();
      }, 3000);
    }
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add success message styles
const successStyles = document.createElement('style');
successStyles.textContent = `
  .success-message {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--gradient-1);
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    animation: slideIn 0.5s ease forwards;
    z-index: 1000;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(successStyles); 