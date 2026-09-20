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

/**
 * An icon that fails to load is removed outright rather than swapped for a
 * text pill. A row of logos with one word wedged into it reads as a mistake,
 * and the stack is already spelled out in the project copy.
 */
function handleMissingIcon(img) {
  img.closest(".icon-container")?.remove();
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
    title: "ShambaLens AI",
    status: "Tested",
    description:
      "Built evidence-first crop triage that ranks up to three competing causes from a photo instead of forcing a single label. It asks up to three questions chosen to separate the leaders, then runs an independent verification pass and deterministic safety guardrails before a plan reaches the farmer.",
    image: "assets/images/shambalens-preview.png",
    features: [
      "Image quality gating before any analysis runs",
      "Ranked differential showing supporting and contradicting evidence",
      "Follow-up questions picked to separate the leading causes",
      "Deterministic guardrails that strip unsafe chemical instructions",
      "Backend and frontend suites run in CI against live PostgreSQL",
    ],
    stack: [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Firebase",
      "Vision models",
      "RAG",
    ],
    github: "https://github.com/tbrowns/shambalens-ai",
  },
  {
    title: "DRIP Orchestrator",
    status: "Project",
    description:
      "Built a dividend reinvestment simulator for the Nairobi Securities Exchange that models what reinvested dividends actually compound into, accounting for Kenya's 5% withholding tax, brokerage and exchange levies, and the fact that the NSE has no fractional shares.",
    image: "assets/images/drip-preview.png",
    features: [
      "Scheduled NSE quote scraping and dividend history tracking",
      "Multi-period compounding projection across one to forty years",
      "Whole-share purchases with leftover cash carried forward",
      "Side-by-side comparison against not reinvesting",
      "Expo client over a JWT-authenticated FastAPI service",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "React Native"],
    github: "https://github.com/tbrowns/drip_orch_platform",
  },
  {
    title: "Mindbase",
    status: "Deployed",
    description:
      "Built an internal knowledge assistant that answers questions with source citations. It masks personal data before anything is stored, indexes documents to a vector database, and filters retrieved passages for relevance before the model writes an answer.",
    image: "assets/images/mindbase-preview.png",
    features: [
      "Retrieval-augmented answers with cited sources",
      "Personal data masking before storage",
      "Relevance filtering ahead of generation",
      "Workspace accounts with per-document privacy",
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "Pinecone", "Groq"],
    github: "https://github.com/tbrowns/mind-base",
    demo: "https://mind-base-nine.vercel.app",
  },
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
    github: "https://github.com/tbrowns/moscore-web-app",
  },
  {
    title: "VendorConnect Ecommerce App",
    status: "Project",
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
  RAG: "assets/icons/rag.png",
  Groq: "assets/icons/groq.svg",
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
};

/**
 * Icons that would disappear or look wrong on the dark circle behind them.
 * "invert" is for black-only line art, which is otherwise ink on ink;
 * "plate" is for logos that carry their own full-bleed background, which need
 * a rounded corner so they read as a badge rather than a clipped square.
 */
const iconTreatment = {
  RAG: "invert",
  SQLAlchemy: "invert",
  NativeWind: "invert",
  Groq: "plate",
};

function renderIconStack(items, label) {
  const seen = new Set();
  const icons = items
    .filter((item) => {
      // Several skills share one icon ("REST APIs" and "API integration" are
      // both api.svg). Repeating it in the row reads as a rendering bug, and
      // the pills above already spell out the full list.
      const src = techIconMap[item];
      if (!src || seen.has(src)) return false;
      seen.add(src);
      return true;
    })
    .map((item) => {
      const treatment = iconTreatment[item]
        ? ` icon-img--${iconTreatment[item]}`
        : "";
      return `<span class="icon-container" title="${item}"><img class="icon-img${treatment}" src="${techIconMap[item]}" alt="${item}" loading="lazy" onerror="handleMissingIcon(this)"></span>`;
    })
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

/**
 * lucide link. Inline rather than an <img> so the stroke picks up the anchor's
 * accent colour - the old flat box-arrow was dark grey on a dark badge and
 * barely registered as a control.
 */
const LINK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

/** How many project cards show before the visitor asks for more. */
const VISIBLE_PROJECT_COUNT = 3;

function renderProjects() {
  const projectGrid = document.querySelector(".project-grid");
  if (!projectGrid) return;

  const extraCards = [];

  projects.forEach((project, index) => {
    const isExtra = index >= VISIBLE_PROJECT_COUNT;
    const linksMarkup = [
      project.github
        ? `<a href="${project.github}" target="_blank" rel="noreferrer" aria-label="${project.title} source on GitHub"><img src="assets/icons/git.svg" alt="" aria-hidden="true"></a>`
        : "",
      project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noreferrer" aria-label="${project.title} live demo">${LINK_ICON}</a>`
        : "",
    ].join("");

    const projectCard = document.createElement("article");
    projectCard.className = "project-card";

    if (isExtra) {
      // Deliberately no data-aos on the hidden cards. AOS holds an element at
      // opacity 0 until it scrolls into view, and an element revealed by a
      // button has already been scrolled past - it would unhide as a blank
      // box. These animate themselves via .project-card--revealed instead.
      projectCard.classList.add("project-card--extra");
      projectCard.id = `project-extra-${index}`;
      projectCard.hidden = true;
      extraCards.push(projectCard);
    } else {
      projectCard.setAttribute("data-aos", "fade-up");
      projectCard.setAttribute("data-aos-delay", `${index * 55}`);
    }

    projectCard.innerHTML = `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title} preview" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-topline">
          <div class="project-title-group">
            <h3>${project.title}</h3>
            <span class="project-status">${project.status}</span>
          </div>
          ${linksMarkup ? `<div class="project-links">${linksMarkup}</div>` : ""}
        </div>
        <p>${project.description}</p>
        <ul class="project-features">
          ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <div class="tech-stack" aria-label="${project.title} technology stack">
          ${renderIconStack(project.stack, `${project.title} technology icons`)}
        </div>
      </div>
    `;
    projectGrid.appendChild(projectCard);
  });

  if (extraCards.length) {
    mountProjectToggle(projectGrid, extraCards);
  }
}

/** lucide chevrons-down / chevrons-up, as path data. */
const CHEVRONS = {
  down: ["m7 6 5 5 5-5", "m7 13 5 5 5-5"],
  up: ["m17 11-5-5-5 5", "m17 18-5-5-5 5"],
};

const SVG_NS = "http://www.w3.org/2000/svg";

/** An inline SVG, not an <img>: only inline markup can inherit currentColor. */
function chevrons() {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.classList.add("project-reveal-icon");
  svg.append(
    document.createElementNS(SVG_NS, "path"),
    document.createElementNS(SVG_NS, "path"),
  );
  return svg;
}

function setChevrons(svg, [top, bottom]) {
  const [a, b] = svg.querySelectorAll("path");
  a.setAttribute("d", top);
  b.setAttribute("d", bottom);
}

/**
 * Show the remaining projects behind a button.
 *
 * The cards are rendered into the DOM either way and only hidden, so the
 * markup stays crawlable and Ctrl+F finds them once expanded - the button is
 * about first impressions, not about withholding the work.
 */
function mountProjectToggle(projectGrid, extraCards) {
  const wrap = document.createElement("div");
  wrap.className = "project-reveal";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn project-reveal-btn";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", extraCards.map((card) => card.id).join(" "));

  const label = document.createElement("span");
  const icon = chevrons();
  button.append(icon, label);

  const paint = (expanded) => {
    label.textContent = expanded ? "Show less" : "Show more";
    // Two distinct glyphs rather than one rotated 180deg: chevrons-up is not
    // chevrons-down upside down, the arrowheads stack the other way.
    setChevrons(icon, expanded ? CHEVRONS.up : CHEVRONS.down);
  };

  paint(false);
  wrap.appendChild(button);
  projectGrid.insertAdjacentElement("afterend", wrap);

  button.addEventListener("click", () => {
    const expanding = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expanding));
    paint(expanding);

    if (expanding) {
      extraCards.forEach((card, index) => {
        card.hidden = false;
        // Stagger without a timer: a custom property drives the CSS delay, so
        // collapsing mid-animation cannot leave a stray callback behind.
        card.style.setProperty("--reveal-order", String(index));
        card.classList.add("project-card--revealed");
      });
    } else {
      // Move focus out before hiding, or it lands on a hidden element and the
      // browser drops it to <body> - losing the reader's place on the page.
      if (extraCards.some((card) => card.contains(document.activeElement))) {
        button.focus();
      }
      extraCards.forEach((card) => {
        card.classList.remove("project-card--revealed");
        card.hidden = true;
      });
      wrap.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
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

function initCopyButtons() {
  const copyButtons = document.querySelectorAll(
    ".contact-info-card span:last-child img[src*='copy']",
  );

  copyButtons.forEach((button) => {
    button.parentElement.style.cursor = "pointer";

    button.parentElement.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the text to copy (the strong element's text content)
      const contactCard = button.closest(".contact-info-card");
      const textToCopy = contactCard.querySelector("strong").textContent;

      // Copy to clipboard
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // Show visual feedback
          const originalSrc = button.src;
          button.src = "assets/icons/check.png"; // Assuming you have a check icon

          // Reset after 2 seconds
          setTimeout(() => {
            button.src = originalSrc;
          }, 2000);
        })
        .catch(() => {
          // Fallback for older browsers
          const textarea = document.createElement("textarea");
          textarea.value = textToCopy;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);

          const originalSrc = button.src;
          button.src = "assets/icons/check.png";
          setTimeout(() => {
            button.src = originalSrc;
          }, 2000);
        });
    });
  });
}

renderSkills();
renderProjects();
initEmail();
initCopyButtons();
initAnimations();
