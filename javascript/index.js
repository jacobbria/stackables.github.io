// Track 

// Control menu visibility while scrolling
let lastScrollTop = 0;
const navbar = document.getElementById("gorrdyNavbar");
const bottomNavbar = document.getElementById("stackablesNavbar");

// event listner for scroll event to trigger menu
window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || this.document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        navbar.style.top = "-90px";
        bottomNavbar.style.top = "0";

    } else {
        navbar.style.top = "0";
        bottomNavbar.style.top = "90px";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Contact Us Visibility
const contactBtn = document.getElementById('contactBtn');
const contactForm = document.getElementById('contactForm');
const closeForm = document.getElementById('closeForm');
const contactFormForm = document.querySelector('#contactForm form');

contactBtn.addEventListener('click', () => {
    console.log("contactBtn clicked!");
    contactForm.style.display = 'block';
  });
closeForm.addEventListener('click', () => {
    console.log("closeForm clicked!");
    contactForm.style.display = 'none';
  });
contactFormForm.addEventListener('submit', (event) => {
    console.log("Contact form submit attempt");

    if (!contactFormForm.reportValidity()){
        event.preventDefault();
        console.log("Contact form INVALID");
    } else {
      console.log("Contact form validation passed!");
      event.preventDefault(); // no backend is handling the form
      contactForm.style.display = 'none';
    }
})

  // Report Issue Visibility
const reportIssuetBtn = document.getElementById('reportIssueBtn');
const reportIssueForm = document.getElementById('reportIssueForm');
const closeIssueForm = document.getElementById('closeReportForm');
const issueForm = document.querySelector('#reportIssueForm form');

reportIssuetBtn.addEventListener('click', () => {
    console.log("reportIssueBtn clicked!");
    reportIssueForm.style.display = 'block';
  });

  closeIssueForm.addEventListener('click', () => {
    console.log("closeIssueForm clicked!");
    reportIssueForm.style.display = 'none';
  });
  issueForm.addEventListener('submit', (event) => {
    console.log("sendIssueForm clicked!");
  
    // browser validation
    if (!issueForm.reportValidity()) {
      event.preventDefault();
      console.log("Form validation failed!");
    } else {
      console.log("Form validation passed!");
      event.preventDefault(); // no backend is handling the form
      reportIssueForm.style.display = 'none';
    }
  });