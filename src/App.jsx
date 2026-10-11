import { ArrowDown, ArrowUpRight, BookOpen, BriefcaseBusiness, Code2, GraduationCap, Heart, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { portfolio } from './data/portfolio';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import InfoCard from './components/InfoCard';
import ProjectCard from './components/ProjectCard';

function App() {
  const p = portfolio;
  const initials = p.name.split(' ').map((part) => part[0]).join('');
  return (
    <>
      <Navbar name={p.name} />
      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="availability"><span className="status-dot" /> Open to placement opportunities</span>
              <p className="hello">Hello, I'm</p>
              <h1>{p.name}<span className="name-period">.</span></h1>
              <h2>{p.role}</h2>
              <p className="hero-description">{p.tagline} I’m building my foundation in technology and looking forward to turning what I learn into meaningful work.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
                <a className="button button-quiet" href="#about">Explore portfolio <ArrowDown size={16} /></a>
              </div>
              <div className="hero-location"><MapPin size={16} /> {p.location}</div>
            </div>
            <div className="hero-visual">
              <div className="portrait-backdrop"><span className="portrait-sticker sticker-top"><Sparkles size={18} /></span><span className="portrait-sticker sticker-bottom"><Code2 size={18} /></span>
                <img className="portrait" src={p.photo} alt={`${p.name} portrait`} />
              </div>
              <div className="floating-note"><span className="note-icon"><GraduationCap size={20} /></span><span><strong>Final-year student</strong><small>Diploma · Computer Science</small></span></div>
              <span className="visual-initials">{initials}</span>
            </div>
          </div>
          <div className="hero-bottom container"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /></div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-aside"><span className="section-number">01 / ABOUT</span><div className="quote-mark">“</div><p className="aside-quote">Curiosity is where every good idea begins.</p><div className="aside-line" /></div>
            <div className="about-content">
              <SectionHeading eyebrow="A little about me" title="Curious mind.\nFuture technologist." />
              <p className="body-copy">{p.summary}</p>
              <div className="about-points">
                <div><span className="point-icon"><BookOpen size={19} /></span><span><strong>Always learning</strong><small>Ready to explore new tools and technologies.</small></span></div>
                <div><span className="point-icon"><Heart size={19} /></span><span><strong>People-first mindset</strong><small>Values communication, teamwork, and collaboration.</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container">
            <SectionHeading eyebrow="02 / EDUCATION" title="My learning journey" description="The academic milestones that have shaped my foundation." />
            <div className="education-list">
              {p.education.map((item, index) => <article className="education-item" key={item.title}>
                <div className="education-index">0{index + 1}</div><div className="education-marker"><span /></div>
                <div className="education-detail"><div className="education-meta"><span>{item.period}</span><span className="education-result">{item.result}</span></div><h3>{item.title}</h3><p>{item.institution}</p></div>
                <GraduationCap className="education-icon" size={23} />
              </article>)}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container skills-grid">
            <div><SectionHeading eyebrow="03 / SKILLS" title="What I bring" description="A growing skill set and a willingness to keep improving." /><p className="body-copy skills-intro">I believe strong fundamentals, clear communication, and a collaborative attitude are important starting points for a successful career.</p></div>
            <div className="skills-panel"><div className="skills-panel-head"><span className="skills-symbol"><BriefcaseBusiness size={20} /></span><div><strong>Core strengths</strong><small>Skills listed in my resume</small></div></div><div className="skill-chips">{p.skills.map((skill, index) => <span className="skill-chip" key={skill}><span>0{index + 1}</span>{skill}</span>)}</div><div className="language-block"><p>LANGUAGES</p><div className="language-chips">{p.languages.map((language) => <span key={language}>{language}</span>)}</div></div></div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="04 / PROJECTS" title="Things I’ve worked on" description="A space for projects that demonstrate what I’m learning and building." />
            {p.projects.length > 0 ? <div className="project-grid">{p.projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div> : <div className="project-empty"><div className="empty-icon"><Code2 size={25} /></div><div><h3>Projects are coming soon</h3><p>Project details weren’t included in the resume yet. Add them in <code>src/data/portfolio.js</code> and this section will populate automatically.</p></div><span className="empty-count">01 <ArrowUpRight size={16} /></span></div>}
          </div>
        </section>

        {p.activities.length > 0 && <section className="section activities-section"><div className="container"><SectionHeading eyebrow="EXTRA-CURRICULAR" title="Beyond the classroom" /><div className="activity-list">{p.activities.map((activity) => <p key={activity}>{activity}</p>)}</div></div></section>}

        <section className="contact-section" id="contact">
          <div className="container contact-container">
            <div className="contact-copy"><span className="section-number">05 / CONTACT</span><SectionHeading eyebrow="Let's connect" title="Ready for the next opportunity?" description="I’m looking forward to beginning my professional journey, learning from a team, and contributing with care." /><a className="button button-light" href={`tel:${p.phone.replace(/\s/g, '')}`}><Phone size={17} /> Call me <ArrowUpRight size={17} /></a></div>
            <div className="contact-cards"><InfoCard icon={Phone} label="Phone" value={p.phone} href={`tel:${p.phone.replace(/\s/g, '')}`} /><InfoCard icon={MapPin} label="Based in" value={p.location} />{p.email && <InfoCard icon={Mail} label="Email" value={p.email} href={`mailto:${p.email}`} />}</div>
            <div className="contact-watermark">HELLO</div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="container footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">{initials}</span><span>{p.name}</span></a><p>Designed with intention · Built for the next chapter</p><a className="back-top" href="#home">Back to top ↑</a></div></footer>
    </>
  );
}
export default App;
