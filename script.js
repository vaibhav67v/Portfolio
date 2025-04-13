// alert("I'm currently working on this site. Feel free to share your suggestions.")

// ................PHONE VIEW.....................

// handle visible tabs & divider lines according to the screen size
const visibleTabs = document.querySelector(".normal-tabs");
if (window.innerWidth < 768) {
    // mobile view
    for(let i = 0; i < visibleTabs.length - 1; i++) {
        visibleTabs.classList.add("hide");
    }
} else if (window.innerWidth < 1024) {
    // tab view
    const tabElements = document.querySelectorAll(".normal-tabs li");
    for (let i = 0; i < tabElements.length - 2; i++) {
        tabElements[i].classList.remove("hide");
    }

    const sidebarElements = document.querySelectorAll(".sidebar li");
    for(let i = 1; i <= 3; i++) {
        sidebarElements[i].classList.add("hide");
    }
} else {
    // desktop view
    const tabElements = document.querySelectorAll(".normal-tabs li");
    const dividerLine = document.querySelectorAll(".divider");
    for (let i = 0; i < tabElements.length-1; i++) {
        tabElements[i].classList.remove("hide");
    }

    dividerLine[0].classList.remove("hide");
    dividerLine[1].classList.remove("hide");
}

// handle sidebar actions
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const sidebar = document.querySelector(".sidebar");

openMenuBtn.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
        sidebar.classList.add("active");
        openMenuBtn.classList.add("hide");
    }
});

closeMenuBtn.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
        sidebar.classList.remove("active");
        openMenuBtn.classList.remove("hide");
    }
});

// close sidebar when user clicks anywhere else on the site other than the sidebar
document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        openMenuBtn.classList.remove("hide");
    });
});

document.addEventListener("click", (event) => {
    const isClickInside =
        sidebar.contains(event.target) || openMenuBtn.contains(event.target);

    if (!isClickInside) {
        sidebar.classList.remove("active");
        openMenuBtn.classList.remove("hide");
    }
});
