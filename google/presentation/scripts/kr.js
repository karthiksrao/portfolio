function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function keyboardNavigation(){
    var page_url = window.location.href;
    var current_page = page_url.substring(page_url.lastIndexOf('/') + 1);

    // Define the order of pages
    const pages = [
        "index.html",
        "app-development.html",
        "vmware.html",
        "genie-origin.html",
        "gcw-overview.html",
        "gcw-users.html",
        "gcw-metrics.html",
        "gcw-challenges.html",
        "gcw-sku-advisor.html",
        "gsc-overview.html",
        "gsc-strategy.html",
        "gsc-research.html",
        "gsc-roadmap.html",
        "gsc-sitemap.html",
        "gsc-mockups.html",
        "gsc-testing.html",
        "gsc-handoff.html",
        "agentyc-intro.html",
        "agentyc-origin.html",
        "agentyc-backend.html",
        "agentyc-design.html",
        "agentyc-dev.html",
        "agentyc-roadmap.html"
    ];

    let currentPageIndex = pages.indexOf(current_page);

    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowLeft") { // Left arrow key
            if (currentPageIndex > 0) {
                window.location.href = pages[currentPageIndex - 1];
            }
        } else if (event.key === "ArrowRight") { // Right arrow key
            if (currentPageIndex < pages.length - 1) {
                window.location.href = pages[currentPageIndex + 1];
            }
        }
    });
}

// Call the function to enable keyboard navigation
keyboardNavigation();