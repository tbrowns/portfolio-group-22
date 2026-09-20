# -*- coding: utf-8 -*-
"""Rebuild the CV as an ATS-safe PDF.

ATS parsers fail on multi-column layouts, text boxes, tables, header/footer
contact details and image-only text. So: one linear column, Helvetica (a
base-14 font every extractor handles without embedding), plain '-' bullets,
and conventional section headings in the expected order.
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

# The built CV is served publicly from the portfolio site, and the site has no
# robots.txt, so anything in it is scrapable. Referees consented to being
# referees, not to having their mobile numbers indexed -- so the published
# version names them without contact details.
#
# For a version to attach directly to an application, run:
#     python tools/build_cv.py --with-referee-contacts
# It writes beside the public one and is git-ignored; do not commit it.
import json
import os
import sys

INCLUDE_REFEREE_CONTACTS = "--with-referee-contacts" in sys.argv

# Names and titles are safe to publish. Phone numbers and emails are NOT, and
# this repo is public, so they live in an untracked file rather than in source
# -- committing them here would put them in GitHub code search.
REFEREES = [
    ("Benard Amukah", "Partner, KPMG East Africa"),
    ("Nehemiah Atubwa",
     "Director of ICT, Jaramogi Oginga Odinga University of Science and Technology"),
]

CONTACTS = {}
if INCLUDE_REFEREE_CONTACTS:
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "referees.local.json")
    if not os.path.exists(path):
        sys.exit("Missing %s -- it holds the referee phone numbers and emails and is "
                 "deliberately untracked. See the comment above." % path)
    CONTACTS = json.load(open(path, encoding="utf-8"))

INK, MUTED, RULE = colors.HexColor("#15181c"), colors.HexColor("#4a5058"), colors.HexColor("#b9c0c8")

name_s = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=19, leading=22,
                        textColor=INK, spaceAfter=2)
role_s = ParagraphStyle("role", fontName="Helvetica", fontSize=10.2, leading=13,
                        textColor=MUTED, spaceAfter=4)
cont_s = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.9, leading=12.4,
                        textColor=INK, spaceAfter=1)
head_s = ParagraphStyle("head", fontName="Helvetica-Bold", fontSize=9.6, leading=12,
                        textColor=INK, spaceBefore=4.5, spaceAfter=1.0)
body_s = ParagraphStyle("body", fontName="Helvetica", fontSize=8.9, leading=11.35,
                        textColor=INK, spaceAfter=1.5)
item_s = ParagraphStyle("item", fontName="Helvetica-Bold", fontSize=9.2, leading=12.0,
                        textColor=INK, spaceBefore=3, spaceAfter=0.5)
meta_s = ParagraphStyle("meta", fontName="Helvetica-Oblique", fontSize=8.4, leading=10.8,
                        textColor=MUTED, spaceAfter=2)
bull_s = ParagraphStyle("bullet", fontName="Helvetica", fontSize=8.9, leading=11.5,
                        textColor=INK, leftIndent=9, firstLineIndent=-9, spaceAfter=1.4)

F = []


def head(t):
    F.append(Paragraph(t, head_s))
    F.append(HRFlowable(width="100%", thickness=0.6, color=RULE,
                        spaceBefore=1.2, spaceAfter=2.8))


def bullets(lines):
    # A literal "-" is the safest bullet glyph; fancy dingbats can extract as junk.
    for b in lines:
        F.append(Paragraph("-&nbsp;&nbsp;" + b, bull_s))


def link(url, label=None):
    return '<link href="%s" color="#15181c">%s</link>' % (url, label or url)


# ---------------------------------------------------------------- header
F.append(Paragraph("TOM OBANDE ONYANGO", name_s))
F.append(Paragraph("Software Developer &nbsp;|&nbsp; Full-Stack and Applied AI", role_s))
F.append(Paragraph(
    "Nairobi, Kenya &nbsp;|&nbsp; +254 794 687 383 &nbsp;|&nbsp; "
    + link("mailto:tb.obande@gmail.com", "tb.obande@gmail.com"), cont_s))
F.append(Paragraph(
    link("https://obande.netlify.app", "obande.netlify.app") + " &nbsp;|&nbsp; "
    + link("https://github.com/tbrowns", "github.com/tbrowns") + " &nbsp;|&nbsp; "
    + link("https://www.linkedin.com/in/tom-obande-13811a1a8",
           "linkedin.com/in/tom-obande-13811a1a8"), cont_s))

head("PROFESSIONAL SUMMARY")
F.append(Paragraph(
    "Bachelor of Information Technology candidate at Kenyatta University, awaiting graduation, with "
    "3+ years of project experience building full-stack web applications and applied-AI systems - "
    "retrieval-augmented search with source citations, deterministic financial checks and "
    "computer-vision pipelines - shipped with automated tests and continuous integration. Practical "
    "exposure to digital customer journeys through a web developer bootcamp engagement with mTek "
    "Insurance Broker. Interested in software engineering, financial technology, digital banking "
    "and data-driven service improvement.", body_s))

head("CORE SKILLS")
for label, items in [
    ("Languages", "Python, JavaScript, TypeScript, Java, SQL"),
    ("Frameworks", "FastAPI, Next.js, React, Node.js, Express, SQLAlchemy, Tailwind CSS"),
    ("Data and AI", "PostgreSQL, Supabase, Firestore, Pinecone, RAG pipelines, embeddings, vector "
                    "search, pandas, scikit-learn, MediaPipe, OpenCV"),
    ("Tools", "Git, GitHub, GitHub Actions, Docker, REST APIs, JWT authentication, Vercel, Netlify"),
    ("Business and professional", "Customer onboarding, requirements gathering, documentation, "
                                  "digital service delivery, risk-aware data handling, communication, "
                                  "teamwork, analytical thinking, problem solving"),
    ("Spoken languages", "English, Kiswahili, Basic Japanese"),
]:
    F.append(Paragraph("<b>%s:</b> %s" % (label, items), body_s))

head("PROFESSIONAL EXPERIENCE")
F.append(Paragraph("Web Developer Bootcamp Participant / Trainee Developer", item_s))
F.append(Paragraph("mTek Insurance Broker | Nairobi, Kenya | June 2025 (one-week engagement)",
                   meta_s))
bullets([
    "Supported development of website user onboarding, contributing to a smoother sign-up and "
    "customer information capture experience.",
    "Translated business requirements into user-facing web features in a fast-paced developer "
    "selection bootcamp, gaining exposure to digital insurance processes and secure data capture.",
])
F.append(Paragraph("IT Attache", item_s))
F.append(Paragraph("Jaramogi Oginga Odinga University of Science and Technology | "
                   "May 2024 - August 2024", meta_s))
bullets([
    "Configured and supported local area networks, improving office connectivity and day-to-day "
    "system access.",
    "Performed system updates, antivirus checks and software maintenance to support reliable "
    "computer operations.",
    "Provided end-user technical support by troubleshooting hardware, software and connectivity "
    "issues, and supported ICT team tasks requiring documentation and timely resolution of "
    "service requests.",
])

head("PROJECTS")
for title, url, shown, text in [
    ("ShambaLens AI", "https://github.com/tbrowns/shambalens-ai", "github.com/tbrowns/shambalens-ai",
     "Evidence-first crop triage: ranks up to three competing causes from a photo rather than forcing "
     "one label, then verifies independently before presenting a plan. FastAPI, Next.js and "
     "PostgreSQL; 207 backend and 19 frontend tests, CI against live PostgreSQL."),
    ("Mindbase", "https://github.com/tbrowns/mind-base", "github.com/tbrowns/mind-base",
     "Internal knowledge assistant answering with source citations. Masks personal data, indexes to "
     "Pinecone, filters retrieved chunks for relevance before generation. Next.js, Firestore, Groq."),
    ("DRIP Orchestrator", "https://github.com/tbrowns/drip_orch_platform",
     "github.com/tbrowns/drip_orch_platform",
     "Dividend reinvestment simulator for the Nairobi Securities Exchange: scrapes live NSE quotes, "
     "tracks dividend history, models reinvestment over time. FastAPI, SQLAlchemy, JWT auth."),
]:
    F.append(Paragraph("%s &nbsp;&nbsp;<font size=8 color='#4a5058'>%s</font>"
                       % (title, link(url, shown)), item_s))
    F.append(Paragraph(text, body_s))

head("EDUCATION")
F.append(Paragraph("Bachelor of Information Technology", item_s))
F.append(Paragraph("Kenyatta University | 2021 - 2026 | Awaiting graduation", meta_s))
F.append(Paragraph("Relevant areas: software development, databases, computer networks, information "
                   "systems, data analysis and web technologies. Additional study: Japanese.", body_s))
F.append(Paragraph("Kenya Certificate of Secondary Education", item_s))
F.append(Paragraph("St. Mary's School, Yala | 2017 - 2021 | Grade B+", meta_s))

head("CERTIFICATIONS")
F.append(Paragraph("IBM Data Science Practitioner &nbsp;|&nbsp; "
                   "IBM Enterprise Design Thinking Practitioner", body_s))

head("REFERENCES")
for who, what in REFEREES:
    F.append(Paragraph("%s &nbsp;&nbsp;<font size=8 color='#4a5058'>%s</font>" % (who, what), item_s))
    if INCLUDE_REFEREE_CONTACTS:
        c = CONTACTS.get(who, {})
        bits = [c["phone"]] if c.get("phone") else []
        if c.get("email"):
            bits.append(link("mailto:" + c["email"], c["email"]))
        F.append(Paragraph(" &nbsp;|&nbsp; ".join(bits), body_s))
if not INCLUDE_REFEREE_CONTACTS:
    F.append(Paragraph("Contact details available on request.", body_s))

OUT = ("assets/Tom_Onyango_referees.pdf" if INCLUDE_REFEREE_CONTACTS
       else "assets/Tom_Onyango.pdf")
SimpleDocTemplate(OUT, pagesize=A4, title="Tom Obande Onyango - CV",
                  author="Tom Obande Onyango", subject="Curriculum Vitae",
                  leftMargin=16 * mm, rightMargin=16 * mm,
                  topMargin=10 * mm, bottomMargin=8 * mm).build(F)
print("wrote", OUT)
