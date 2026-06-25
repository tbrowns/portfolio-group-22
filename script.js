const menu = document.getElementById("links_container");
const openButton = document.getElementById("menu-btn");
const closeButton = document.getElementById("close");
const header = document.getElementById("header");
const links = document.querySelectorAll(".nav-link");

function openmenu() {
  menu.classList.add("open");
  openButton.style.display = "none";
  closeButton.style.display = "block";
  openButton.setAttribute("aria-expanded", "true");
}

function closemenu() {
  menu.classList.remove("open");
  openButton.style.display = "";
  closeButton.style.display = "none";
  openButton.setAttribute("aria-expanded", "false");
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    closemenu();
    links.forEach((navLink) => navLink.classList.remove("active-nav-link"));
    link.classList.add("active-nav-link");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    header.style.background = "rgba(16, 19, 22, 0.92)";
    header.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.25)";
  } else {
    header.style.background = "rgba(16, 19, 22, 0.72)";
    header.style.boxShadow = "none";
  }
});

function handleMissingIcon(img) {
  const fallback = document.createElement("span");
  fallback.className = "stack-tag icon-fallback-tag";
  fallback.textContent = img.alt;
  img.closest(".icon-container").replaceWith(fallback);
}

const toolGroups = [
  {
    title: "Design & Front-End",
    tools: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "NativeWind",
    ],
  },
  {
    title: "Backend & APIs",
    tools: [
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
      "API integration",
      "Authentication flows",
      "Environment variables",
    ],
  },
  {
    title: "Databases & Cloud",
    tools: ["SQL", "PostgreSQL", "Supabase", "Firebase", "SQLAlchemy"],
  },
  {
    title: "Data & AI",
    tools: [
      "Pandas",
      "Data cleaning",
      "Data analysis",
      "Visualization",
      "Embeddings",
      "RAG",
      "BeautifulSoup",
      "Scrapy",
    ],
  },
  {
    title: "Dev Tools & Deployment",
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Netlify",
      "Railway awareness",
    ],
  },
  {
    title: "IT & Infrastructure",
    tools: ["Network troubleshooting", "Technical support", "User support"],
  },
];

const projects = [
  {
    title: "AI-Powered Study Assistant",
    status: "Prototype",
    description:
      "Built a NotebookLM-style study assistant that helps students organize notebooks, upload documents, and ask questions from their own study materials using retrieval-augmented generation.",
    image: "assets/images/moscore-preview.png",
    features: [
      "Notebook creation and editing",
      "PDF upload and text processing",
      "Embeddings and RAG-based document chat",
      "Supabase database integration and Firebase Storage",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Firebase", "Python"],
    github: "https://github.com/tbrowns/moscore-web-app.git",
  },
  {
    title: "VendorConnect Ecommerce App",
    status: "Deployed",
    description:
      "Developed a vendor-focused ecommerce platform for listing products, managing inventory-style flows, and supporting customer purchasing experiences.",
    image: "assets/images/vendor-connect-preview.png",
    features: [
      "Product listing experience",
      "Vendor dashboard concept",
      "Authentication-aware interface",
      "Responsive product browsing",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/tbrowns/e-commerce",
    demo: "https://vendor-connect-delta.vercel.app/",
  },
  {
    title: "Wine Store Management App",
    status: "Deployed",
    description:
      "Created a Firebase-powered management app for tracking wine and spirits purchases, stock, payment status, and purchase history.",
    image: "assets/images/wine-app-preview.png",
    features: [
      "Purchase history tracking",
      "Stock and product views",
      "Payment status labels",
      "Firebase-backed data handling",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/tbrowns/wines-spirits",
    demo: "https://winesapp.netlify.app/",
  },
  {
    title: "HisaFlow Kenyan Shares MVP",
    status: "MVP concept",
    description:
      "Designed and started building a Kenyan shares investment MVP focused on simple onboarding, amount-based share buying, portfolio tracking, and disciplined monthly investing.",
    image: "assets/images/Screenshot 2024-11-27 151105.png",
    features: [
      "ID and KRA PIN onboarding concept",
      "Mock CDS account flow",
      "Amount-based share buying",
      "Dividend and monthly investing concepts",
    ],
    stack: [
      "React Native",
      "NativeWind",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
    ],
  },
  {
    title: "Sign Language Recognition Prototype",
    status: "Prototype",
    description:
      "Developed a sign language recognition prototype using MediaPipe hand landmarks and machine learning to explore assistive communication tools.",
    image: "assets/images/contact-3018.png",
    features: [
      "Hand landmark detection",
      "Gesture class dataset structure",
      "RandomForest classifier experiments",
      "Streamlit UI and speech experiments",
    ],
    stack: ["Python", "MediaPipe", "scikit-learn", "Streamlit", "OpenCV"],
  },
  {
    title: "Job Scraper API Workflow",
    status: "Project",
    description:
      "Built scraping workflows and API endpoints to collect, clean, and expose structured job listing data from public job sources.",
    image: "assets/images/file.png",
    features: [
      "Scrapy spiders",
      "BeautifulSoup and Requests workflows",
      "Data cleaning and JSON export",
      "FastAPI endpoint for structured listings",
    ],
    stack: ["Python", "FastAPI", "Pandas", "JSON"],
  },
];

const techIconMap = {
  "Next.js": "assets/icons/next.svg",
  React: "assets/icons/react.png",
  "React Native": "assets/icons/react-native.svg",
  TypeScript: "assets/icons/ts.svg",
  JavaScript: "assets/icons/javascript.svg",
  HTML: "assets/icons/HTML.svg",
  CSS: "assets/icons/css.svg",
  "Tailwind CSS": "assets/icons/tail.svg",
  NativeWind: "assets/icons/nativewind.svg",
  Python: "assets/icons/python.svg",
  FastAPI: "assets/icons/fastapi.svg",
  Flask: "assets/icons/flask.svg",
  "REST APIs": "assets/icons/api.svg",
  "API integration": "assets/icons/api.svg",
  "Authentication flows": "assets/icons/auth.svg",
  "Environment variables": "assets/icons/env.svg",
  SQL: "assets/icons/sql.svg",
  PostgreSQL: "assets/icons/postgresql.svg",
  Supabase: "assets/icons/sb.svg",
  Firebase: "assets/icons/firebase.svg",
  SQLAlchemy: "assets/icons/sqlalchemy.svg",
  Pandas: "assets/icons/pandas.svg",
  "Data cleaning": "assets/icons/data-cleaning.svg",
  "Data analysis": "assets/icons/data-analysis.svg",
  Visualization: "assets/icons/visualization.svg",
  Embeddings: "assets/icons/embeddings.svg",
  RAG: "assets/icons/rag.svg",
  BeautifulSoup: "assets/icons/beautifulsoup.svg",
  Scrapy: "assets/icons/scrapy.svg",
  MediaPipe: "assets/icons/mediapipe.svg",
  OpenCV: "assets/icons/opencv.svg",
  "scikit-learn": "assets/icons/scikit-learn.svg",
  Streamlit: "assets/icons/streamlit.svg",
  JSON: "assets/icons/json.svg",
  Git: "assets/icons/git.svg",
  GitHub: "assets/icons/github.svg",
  "VS Code": "assets/icons/vscode.svg",
  Postman: "assets/icons/postman.svg",
  Netlify: "assets/icons/netlify.svg",
  "Railway awareness": "assets/icons/railway.svg",
  "Network troubleshooting": "assets/icons/network.svg",
  "Technical support": "assets/icons/technical-support.svg",
  "User support": "assets/icons/user-support.svg",
};

function renderIconStack(items, label) {
  const icons = items
    .filter((item) => techIconMap[item])
    .map(
      (item) =>
        `<span class="icon-container" title="${item}"><img src="${techIconMap[item]}" alt="${item}" loading="lazy" onerror="handleMissingIcon(this)"></span>`,
    )
    .join("");

  if (!icons) return "";

  return `<div class="icon-stack" aria-label="${label}">${icons}</div>`;
}

function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  const noIconCategories = ["Data & AI", "IT & Infrastructure"];

  toolGroups.forEach((group, index) => {
    const card = document.createElement("article");
    card.className = "skill-card";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", `${index * 50}`);

    const iconRow = noIconCategories.includes(group.title)
      ? ""
      : `<div class="tool-icon-row">
           ${renderIconStack(group.tools, `${group.title} icons`)}
         </div>`;

    card.innerHTML = `
      <h3><span aria-hidden="true">☆</span>${group.title}</h3>
      <div class="skill-list">
        ${group.tools.map((tool) => `<span class="skill-pill">${tool}</span>`).join("")}
      </div>
      ${iconRow}
    `;
    skillsGrid.appendChild(card);
  });
}

function renderProjects() {
  const projectGrid = document.querySelector(".project-grid");

  projects.forEach((project, index) => {
    const labelStack = project.stack.filter((item) => !techIconMap[item]);
    const linksMarkup = [
      project.github
        ? `<a href="${project.github}" target="_blank" rel="noreferrer"><img src="assets/icons/git.svg" alt="" aria-hidden="true">Code</a>`
        : "",
      project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noreferrer"><img src="assets/icons/link.svg" alt="" aria-hidden="true">Live demo</a>`
        : "",
    ].join("");

    const projectCard = document.createElement("article");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-aos", "fade-up");
    projectCard.setAttribute("data-aos-delay", `${index * 55}`);
    projectCard.innerHTML = `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title} preview">
      </div>
      <div class="project-body">
        <div class="project-topline">
          <h3>${project.title}</h3>
          <span class="project-status">${project.status}</span>
        </div>
        <p>${project.description}</p>
        <ul class="project-features">
          ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <div class="tech-stack" aria-label="${project.title} technology stack">
          ${renderIconStack(project.stack, `${project.title} technology icons`)}
          ${
            labelStack.length
              ? `<div class="stack-list">
                  ${labelStack.map((item) => `<span class="stack-tag">${item}</span>`).join("")}
                </div>`
              : ""
          }
        </div>
        ${linksMarkup ? `<div class="project-links">${linksMarkup}</div>` : ""}
      </div>
    `;
    projectGrid.appendChild(projectCard);
  });
}

function initEmail() {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  if (window.emailjs) {
    emailjs.init({
      publicKey: "qMHmY9ldVNVeksvn2",
      limitRate: {
        id: "app",
        throttle: 15000,
      },
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!window.emailjs) {
      window.location.href = `mailto:tb.obande@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${phone}`)}`;
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      phone_number: phone,
      message,
    };

    emailjs
      .send("service_dpy3quy", "template_kaeqr8c", templateParams)
      .then(() => {
        alert("Your message was sent successfully.");
        form.reset();
      })
      .catch(() => {
        alert(
          "Failed to send the message. Please try email or WhatsApp from the contact links.",
        );
      });
  });
}

function initAnimations() {
  if (!window.AOS) return;

  document.body.classList.add("aos-ready");
  AOS.init({
    once: true,
    duration: 750,
    easing: "ease-out-cubic",
    offset: 80,
  });
}

renderSkills();
renderProjects();
initEmail();
initAnimations();
