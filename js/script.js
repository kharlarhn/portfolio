window.onload = function () {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    const welcome = document.getElementById('welcome');
    welcome.style.opacity = 1;
  }, 2000);
};

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function viewCertificate(src) {
  document.getElementById("popup-img").src = src;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openProject(el) {
  el.classList.add("selected");
}

function showCertificate() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

// Basic slideshow logic
let slideshowIntervals = [];

function startSlideshows() {
  const allSlideshows = document.querySelectorAll('.slideshow');
  allSlideshows.forEach((slideshow, index) => {
    const slides = slideshow.querySelectorAll('img');
    let current = 0;

    slides[current].classList.add('active');

    const interval = setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 2000);

    slideshowIntervals[index] = interval;
  });
}

function pauseSlideshow(slideshow) {
  const index = Array.from(document.querySelectorAll('.slideshow')).indexOf(slideshow);
  clearInterval(slideshowIntervals[index]);
}

function resumeSlideshow(slideshow) {
  const index = Array.from(document.querySelectorAll('.slideshow')).indexOf(slideshow);
  const slides = slideshow.querySelectorAll('img');
  let current = Array.from(slides).findIndex((img) => img.classList.contains('active'));

  slideshowIntervals[index] = setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 2000);
}

window.addEventListener('load', startSlideshows);

const slideshows = document.querySelectorAll('.slideshow');
const intervals = [];

slideshows.forEach((slideshow, i) => {
  const slides = slideshow.querySelectorAll('img');
  let index = 0;

  // Show the first image
  slides[0].classList.add('active');

  // Create slideshow interval
  intervals[i] = setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 2000); // 2 seconds per image
});

// Pause slideshow on hover
function pauseSlideshow(slideshow) {
  const i = Array.from(slideshows).indexOf(slideshow);
  clearInterval(intervals[i]);
}

// Resume on mouseout
function resumeSlideshow(slideshow) {
  const i = Array.from(slideshows).indexOf(slideshow);
  const slides = slideshow.querySelectorAll('img');
  let index = Array.from(slides).findIndex((img) => img.classList.contains('active'));

  intervals[i] = setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 2000);
}

  function showCertificate(imgSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "flex";
    modalImg.src = imgSrc;
  }

  function closeModal() {
    document.getElementById('certModal').style.display = "none";
  }


  function showPopup(src) {
    document.getElementById("certPopup").style.display = "flex";
    document.getElementById("popupImage").src = src;
  }
  function hidePopup() {
    document.getElementById("certPopup").style.display = "none";
  }


 

  
  const popup = document.getElementById("projectPopup");
  const popupTitle = document.getElementById("popupTitle");
  const popupDescription = document.getElementById("popupDescription");
  const popupLink = document.getElementById("popupLink");

  const projectDetails = [
    {
      title: "Wordpress Project with Google Anayltics Report",
      description: "Making a wordpress website for a business and tracking it using Google Anayltics and SEO Optimization",
      link: "https://wearpotential.com/"
    },
    {
      title: "WordPress Blog Individual Project",
      description: "Creating your own WordPress site (Individual Project from Midterm-Finals)",
      link: "https://kharlablogs.wordpress.com/"
    },
    {
      title: "Read Rover Finals Project",
      description: "To build custom and unique integrations using various web applications available in the internet. To implement these custom integrations in a hypothetical corporate website. To implement a cloud to local or cloud to cloud data synchronization.",
      link: "https://asi-workspace.bitbucket.io/"
    },
    {
      title: "Web Application Proposal Flawless Findings using MongoDB",
      description: "In turning this web application into life we needed resources that would help us build a pleasing output. The main attraction in making this is the database that will house the items in our skincare review web application using MongoDB",
      link: "https://docs.google.com/document/d/1GkGcAJJAKwdFMI0ChfCf5hkJW_N1W_yzxMfLfLTsxTA/edit?tab=t.0"
    },
    {
      title: "Final Project in OOPLANG Sky Airline using Netbeans and SQL",
      description: "The Airline Management System is essentially a menu-driven program. This format is created with the needs of the user in mind. This is done to make the user's life easier and faster. The system is able to provide much information like passenger's information, ticket number , booking, and ticket cancellation.",
      link: "https://docs.google.com/document/d/1Oq1OCYJ8FaLLZrXBhzG--5yGLYjjPX5AqSi3KSJOqmw/edit?tab=t.0"
    },
    {
      title: "Speak Sharp Final Output for INFOMAN using XAMPP, PHP, and SQL",
      description: "To provide online language learning courses to foreigners who want to learn new languages. To offer a convenient and easy way for users to take online courses by using CRUD. To establish online presence by providing quality materials to the users. To regularly update information on the database and maintain the website",
      link: "https://docs.google.com/document/d/1r_jgcLwN25mGX2jcWNUiXmQ7tcfbJQI_yyPagSUz4ME/edit?tab=t.0"
    },
    {
      title: "C'est la Vie Botique WCServer Project",
      description: "This website project's main objective is to give customers a seamless, user-friendly, and secure online buying experience. This project also intends to give business owners effective control of their inventory, orders, and payments.",
      link: "https://github.com/jrnng/WCSERVER-FINALS"
    },
    {
      title: "Final Website for WebTech using HTML/CSS & JS",
      description: "Creating a website with minimum of 3 linked webpages. Webpage must have forms that may function with very minimal JavaScript or PHP Webpages must be cohesive to other pages with design theme and layouts CSS must be external or separate file",
      link: "https://github.com/kharlarhn/webtech"
    },
     {
      title: "Final Capstone Thesis Project",
      description: "An Escape-Room Based Disaster Preparedness Learning Web App for Elementary School Students ",
      link: "https://riskescape.com/"
    }
  ];

  document.querySelectorAll(".view-project-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      popupTitle.textContent = projectDetails[index].title;
      popupDescription.textContent = projectDetails[index].description;
      popupLink.href = projectDetails[index].link;
      popup.style.display = "flex";
    });
  });

  function closePopup() {
    popup.style.display = "none";
  }

const carouselTrack = document.querySelector(".carousel-track");

// In your "VIEW PROJECT" button click:
document.querySelectorAll(".view-project-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    popupTitle.textContent = projectDetails[index].title;
    popupDescription.textContent = projectDetails[index].description;
    popupLink.href = projectDetails[index].link;
    popup.style.display = "flex";

    // Pause the carousel
    carouselTrack.classList.add("paused");
  });
});

function closePopup() {
  popup.style.display = "none";

  // Resume the carousel
  carouselTrack.classList.remove("paused");
}



  function openCertPopup(imgSrc, title) {
    document.getElementById("cert-popup-img").src = imgSrc;
    document.getElementById("cert-popup-title").innerText = title;
    document.getElementById("cert-popup").style.display = "flex";
  }

  function closeCertPopup() {
    document.getElementById("cert-popup").style.display = "none";
  }



  document.addEventListener("DOMContentLoaded", () => {
    const fills = document.querySelectorAll(".progress-fill");

    function animateOnScroll() {
      fills.forEach((fill, index) => {
        const rect = fill.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && fill.style.width !== getComputedStyle(fill).getPropertyValue("--fill")) {
          setTimeout(() => {
            fill.style.width = getComputedStyle(fill).getPropertyValue("--fill");
          }, index * 400); // stagger delay (400ms apart)
        }
      });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run on load too
  });


  function showCertificate() {
    document.getElementById("certificateModal").classList.add("show");
  }

  function closeCertificate() {
    document.getElementById("certificateModal").classList.remove("show");
  }

  // Optional: Close when clicking outside the image
  window.addEventListener('click', function(e) {
    const modal = document.getElementById("certificateModal");
    if (e.target === modal) {
      closeCertificate();
    }
  });

  function copyEmail() {
    const email = "kharlarhoen@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const msg = document.getElementById("copy-message");
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
      }, 1500);
    });
  }

  