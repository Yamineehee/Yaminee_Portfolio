import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const GITHUB='https://github.com/Yamineehee';
const LINKEDIN='https://www.linkedin.com/in/yaminee-chaudhary-a78128250/';
const EMAIL='mailto:yaminee2004@gmail.com';

const projects=[
 {n:'01',title:'AI GYM TRAINER',type:'COMPUTER VISION / ML',desc:'A real-time workout assistant for exercise recognition, pose analysis and feedback, built around 33-point body landmarks and sequence-based exercise recognition.',stack:'OpenCV · MediaPipe · YOLO · Conv3D-LSTM · Django · FastAPI · React Native · Supabase',url:GITHUB},
 {n:'02',title:'BARGAIN BOT',type:'WEB AUTOMATION',desc:'A multi-store product comparison system that collects listings, prices and links across e-commerce platforms and groups matching products for comparison.',stack:'Puppeteer · Node.js · React · Vite · MongoDB',url:'https://github.com/tijilparakh04/multiCommerce'},
 {n:'03',title:'PPT SUMMARIZATION TOOL',type:'PYTHON / AI',desc:'A web application that extracts presentation content and turns lengthy slides into concise, structured summaries.',stack:'Python · Django · OpenAI · MongoDB',url:'https://github.com/Yamineehee/PPT-content-summarization-and-enhancement'},
 {n:'04',title:'ASSIGNMENT PORTAL',type:'JAVA / DATABASES',desc:'An academic platform inspired by classroom systems, with separate student and teacher flows for accounts, channels, assignments and submissions.',stack:'Java · NetBeans · JDBC · MySQL',url:'https://github.com/Yamineehee/Assignment-Portal-System-Java'},
 {n:'05',title:'ONLINE BOOK STORE',type:'FULL STACK',desc:'A MERN-stack online bookstore application covering the core flow of a full-stack web store.',stack:'MongoDB · Express · React · Node.js',url:'https://github.com/Yamineehee/Online-Book-Store-Application---mern-stack'},
 {n:'06',title:'EMOTION DETECTION',type:'ML / COMPUTER VISION',desc:'An exploratory machine-learning project around emotion detection and recommendation.',stack:'Machine Learning · Computer Vision',url:'https://github.com/Yamineehee/Emotion-Detection-and-Recommendation'}
];

const skills=['Python','Java','C++','JavaScript','SQL','Power BI','MySQL','BigQuery','ETL','Databricks','OpenCV','MediaPipe','NLP','Machine Learning','React','Node.js','Express','MongoDB','Django','REST APIs','Git','Postman','Jira','n8n','GCP'];

function App(){
 const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
 return <div className="site">
  <nav><button className="brand" onClick={()=>go('home')}>YC<span>.</span></button><div className="navlinks"><button onClick={()=>go('about')}>ABOUT</button><button onClick={()=>go('work')}>WORK</button><button onClick={()=>go('projects')}>PROJECTS</button><button onClick={()=>go('contact')}>CONTACT</button></div><a className="navmail" href={EMAIL}>LET'S TALK ↗</a></nav>

  <section id="home" className="hero">
   <div className="gridbg"/><div className="orbit o1"/><div className="orbit o2"/>
   <div className="top">PORTFOLIO / 2026</div>
   <div className="heroCopy">
    <p className="eyebrow"><i/> COMPUTER SCIENCE · DATA · AUTOMATION</p>
    <h1>YAMINEE<br/><i>CHAUDHARY</i></h1>
    <p className="heroDesc">Computer Science student at SIT, Pune · Intern @ Amgen India · Bharatanatyam dancer.</p>
    <p className="heroTiny">Building, analysing, automating — and usually asking “can this be done better?”</p>
   </div>
   <button className="scroll" onClick={()=>go('about')}>SCROLL TO EXPLORE <b>↓</b></button>
  </section>

  <section id="about" className="section about">
   <div className="label">01 / ABOUT</div>
   <div className="aboutGrid">
    <div><div className="giant">HEY,<br/><span>THERE.</span></div></div>
    <div className="aboutText">
     <p className="lead">I’m a curious human with a slightly concerning tendency to turn <strong>“that looks interesting”</strong> into a new hobby.</p>
     <p>Professionally, that curiosity lives around technology, data, automation, AI and problem-solving — building things, experimenting, figuring out how they work, and looking for better ways to make them useful.</p>
     <p>My internship at <strong>Amgen India</strong> gave me exposure to both the technology and the business side of that process: Python, Databricks, ETL, Jira data, Power BI, n8n workflows, document processing and AI-focused prototypes.</p>
     <p>Outside code, there is Bharatanatyam — around 15 years of it, including my arangetram, Visharad training, teaching younger students and leading the dance club at SIT.</p>
     <div className="aboutMeta">
      <div><small>EDUCATION</small><b>SIT, PUNE</b><span>B.Tech CSE · 2022—2026</span></div>
      <div><small>CURRENTLY CURIOUS ABOUT</small><b>DATA · AUTOMATION · AI</b><span>and product problems worth solving</span></div>
     </div>
    </div>
   </div>
  </section>

  <section id="work" className="section work">
   <div className="label">02 / EXPERIENCE</div>
   <article className="exp">
    <div className="meta"><span>JAN — JUL 2026</span><span>HYDERABAD</span></div>
    <h2>AMGEN INDIA</h2><h3>GRADUATE INTERN</h3>
    <div className="cols">
     <div><b>AI & DEVELOPMENT</b><p>Worked on an Insights Presentation Platform using Python, Databricks, enterprise AI services and workflow orchestration; built reusable Excel ETL workflows and explored document intelligence / RAG approaches.</p></div>
     <div><b>AUTOMATION</b><p>Built an invoice-processing workflow using n8n, document extraction and country-specific data handling. A process that previously took days was reduced to minutes.</p></div>
     <div><b>AGILE ENABLEMENT</b><p>Worked with Jira, JQL, Python and Power BI for dashboards and supported SAFe processes, PI planning and internal automation initiatives.</p></div>
    </div>
   </article>
   <article className="exp secondExp">
    <div className="meta"><span>MAY — JUL 2024</span><span>INTERNSHIP</span></div>
    <h2>CANDENT TECHNOLOGIES</h2><h3>SUMMER INTERN · BACKEND & NLP</h3>
    <div className="cols"><div><b>BACKEND</b><p>Worked in an Agile environment on Node.js / Express APIs, authentication, resume uploads and MySQL-backed application flows.</p></div><div><b>NLP</b><p>Worked with PDF parsing and NLP-based resume extraction, with exposure to automated email generation and Django-based development.</p></div></div>
   </article>
  </section>

  <section id="projects" className="section projects">
   <div className="label">03 / SELECTED WORK</div>
   <div className="projectIntro"><h2>THINGS I<br/><i>BUILT.</i></h2><p>Some serious. Some experimental. Most started with a “what if?”</p></div>
   <div>{projects.map(p=><a className="project" key={p.n} href={p.url} target="_blank" rel="noreferrer"><div className="num">{p.n}</div><div><span className="tag">{p.type}</span><h2>{p.title}</h2><p>{p.desc}</p><small>{p.stack}</small></div><div className="arrow">↗</div></a>)}</div>
  </section>

  <section className="section skills"><div className="label">04 / TOOLBOX</div><div className="skillIntro"><h2>WHAT I<br/><i>WORK WITH.</i></h2><p>Technologies I’ve used across coursework, projects, internships and experiments — with the stack changing depending on the problem.</p></div><div className="cloud">{skills.map(s=><span key={s}>{s}</span>)}</div></section>

  <section className="dance"><div className="danceGrid"><div className="label light">05 / BEYOND THE CODE</div><div className="danceBig"></div><div className="danceCopy"><span>15 YEARS OF BHARATANATYAM</span><h2>BEYOND<br/><i>TECH.</i></h2><p>Arangetram done. Visharad qualified. Weekend dance teacher. Former Head / President of the SIT dance club.</p><p className="note">Different medium. Same discipline.</p></div></div><div className="danceLine">ART <i/> DISCIPLINE <i/> EXPRESSION</div></section>

  <section id="contact" className="contact"><div className="label">06 / CONTACT</div><div className="contactBody"><p className="eyebrow">HAVE AN IDEA?</p><h2>LET'S TALK<span>.</span></h2><p>For opportunities, collaborations, interesting problems — or just a good conversation about technology.</p><div className="links"><a href={GITHUB} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={LINKEDIN} target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href={EMAIL}>EMAIL ↗</a></div></div><footer><span>© 2026 YAMINEE CHAUDHARY</span><span>PUNE, INDIA</span><span>MADE WITH CURIOSITY.</span></footer></section>
 </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
