window.scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (!el) {
        console.warn("Section not found:", id);
        return;
    }

    el.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};

// Return current visible section
window.getActiveSection = () => {
    const sections = document.querySelectorAll(".section");

    let current = "home";
    let minDistance = Number.POSITIVE_INFINITY;

    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();

        // distance from top of viewport
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
            minDistance = distance;
            current = sec.id;
        }
    });

    return current;
};

window.initializeAOS = () => {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });

    AOS.refresh();
};

window.refreshAOS = () => {

    if (window.AOS) {
        AOS.refreshHard();
    }
};


window.observeSections = (dotNetHelper) => {

    const sections = document.querySelectorAll("section");

    let activeSection = "";

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting)
                return;

            const id = entry.target.id;

            if (id !== activeSection) {

                activeSection = id;

                dotNetHelper.invokeMethodAsync(
                    "UpdateActiveSection",
                    id
                );
            }

        });

    }, {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));
};

// window.observeSections = (dotNetHelper) => {

//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver(
//         entries => {

//             entries.forEach(entry => {

//                 if (entry.isIntersecting) {

//                     dotNetHelper.invokeMethodAsync(
//                         "UpdateActiveSection",
//                         entry.target.id
//                     );
//                 }

//             });

//         },
//         {
//             threshold: 0.2,
//             rootMargin: "-80px 0px -50% 0px"
//         }
//     );

//     sections.forEach(section => observer.observe(section));
// };

window.initializeTyping = () => {

    new Typed('#typed-text', {

        strings: [
            'Tech Enthusiast',
            'Information Tech Graduate',
            'Full Stack Developer',
            'Embedded Systems Developer',
            'Freelancer'
        ],

        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
};

window.setThemeColor = (color) => {
    document.documentElement.style.setProperty("--theme-primary", color);
};