import './App.css';
import pic from './pic.png';
import {
  MailOutline as EmailIcon,
  Phone as PhoneIcon,
  PersonPinCircle as LocationIcon
} from '@material-ui/icons';
import { Grid, Chip } from '@material-ui/core';

import SkillItem from './components/resume/SkillItem';
import Experience from './components/resume/Experience';
import Education from './components/resume/Education';

import skillList from './components/resume/data/skills';
import bestPractices from './components/resume/data/bestPractices';
import experienceData from './components/resume/data/experience';
import education from './components/resume/data/education';

function App() {
  skillList.sort((a, b) => {
    const descRating = b.rating - a.rating;
    if (descRating === 0) {
      return a.skill.localeCompare(b.skill);
    }
    return descRating;
  });

  return (
    <div className="wrapper">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
          <aside className="side-content">
            <div className="user-name">NAVEEN<br /><b>KUMAR</b></div>
            <div className="user-role">Frontend Engineer</div>
            <section className="user-aboutme-pic-box">
              <div className="user-picture">
                <img alt="Profile" src={pic} />
              </div>
              <div className="user-aboutme-box">
                <div className="user-aboutme-title">ABOUT ME</div>
                <div className="user-aboutme-content">
                  In my career, I have played numerous roles, achieved many milestones, tackled various challenges.
                  I have justified the requirement of my roles. In this journey I have been a <strong>Tech mentor, Scrum master</strong> etc.
                  I have learned a lot and enjoyed each phase of my career.<br />
                  To summarize, I would like to call myself a <strong>technologist</strong> with strong determination to explore new challenges.
                </div>
              </div>
            </section>
            <section className="user-contact">
              <div className="user-contact-chip">
                <EmailIcon style={{ marginRight: 4 }} /> <a href="mailto:naveen2593kumar@gmail.com">naveen2593kumar@gmail.com</a>
              </div>
              <div className="user-contact-chip">
                <PhoneIcon style={{ marginRight: 4 }} /> <a href="tel:+917042119756">+91 7042119756</a>
              </div>
              <div className="user-contact-chip">
                <LocationIcon style={{ marginRight: 4 }} /> <span>Roorkee, 247667, UKND, India</span>
              </div>
            </section>

            <Grid container>
              <Grid item xs={6}>
                <section className="user-side-box">
                  <header className="user-side-title">LINKS</header>
                  <nav><a rel="noreferrer" target="_blank" href="https://github.com/naveen2593kumar">Github</a></nav>
                  <nav><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/naveen-kumar-83959b11b/">LinkedIn</a></nav>
                  <nav><a rel="noreferrer" target="_blank" href="https://stackoverflow.com/users/7518108/naveen-kumar">Stackoverflow</a></nav>
                </section>
              </Grid>
              <Grid item xs={6}>
                <section className="user-side-box">
                  <header className="user-side-title">LANGUAGES</header>
                  <nav>English</nav>
                  <nav>Hindi</nav>
                </section>
              </Grid>
            </Grid>
            <section className="user-side-box">
              <header className="user-side-title">AWARDS</header>
              <ul>
                <li><strong>15</strong> – awards from TCS</li>
                <li><strong>4</strong> – awards from Client ING Bank</li>
              </ul>
            </section>
          </aside>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
          <main className="main-content">
            <section>
              <header className="main-title">
                BEST PRACTICES
              </header>
              <article style={{ padding: 16 }}>
                {
                  bestPractices.map(practice => <Chip style={{ margin: 4 }} key={practice} label={practice} />)
                }
              </article>
            </section>
            <section>
              <header className="main-title">
                SKILLS
              </header>
              <article>
                <Grid container style={{ padding: 16 }}>
                  {
                    skillList.map(
                      skillData =>
                        <Grid key={`${skillData.skill}_${skillData.rating}`} item xs={12} sm={6} md={3} lg={3} xl={3} style={{ padding: 4 }}>
                          <SkillItem skill={skillData.skill} rating={skillData.rating} />
                        </Grid>
                    )
                  }
                </Grid>
              </article>
            </section>
            <section>
              <header className="main-title">
                EXPERIENCE
              </header>
              <article>
                <Grid container>
                  {experienceData.map(exp => <Grid key={exp.duration} item xs={12} sm={6}>
                    <Experience experience={exp} />
                  </Grid>)}
                </Grid>
              </article>
            </section>
            <section>
              <header className="main-title">
                EDUCATION
              </header>
              <article>
                <Education {...education} />
              </article>
            </section>
          </main>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
