import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/welcome.png'
import pic02 from '../images/analytics.png'
import pic03 from '../images/selfie.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Welcome to my website. Here, I'll be taking advantage of 
            today's incredible open-source, web development community to 
            learn and conduct a variety of projects in both web design and 
            web application. This site may not look the same 
             month to month, week to week, or even day to day depending on 
             how much time I have...but then again,
             that's the point. 
          </p>
          <p>
            If you have any suggestions, tips, tricks, or comments please
            feel free to shoot me a message.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
        <p>I ate a bagel with cream cheese this morning&mdash; 
          that's gotta count for something, right? If not, feel free to check out some of my experiences below or my&nbsp;
          <a href="https://www.linkedin.com/in/arya-murthi/">LinkedIn</a>:
        </p>
<p>
            <h3> <a href="https://www.delltechnologies.com/en-us/services/consulting-services/index.htm">Dell Technologies</a></h3>
            <h4>Part Time Analyst</h4>
            <li>Initiated an internal asset performance tracking process through Adobe Analytics</li>
           <h1></h1>
            <h4>Consulting Services Marketing Intern</h4>
            <li>Completed 250+ hours of Adobe Analytics experience tracking and utilizing website visitor data</li>
            <li>Identified and resolved data reporting misalignments that overestimated performance by more than 500%</li>
            <li>Used misalignment data to propose a platform solution to increase visitor visibility by 1800% </li>
         <li>Ran 20+ models using predictive analytics and data mining to develop statistically significant insights into the team’s performance measurement strategy</li>
          <li>Proposed a dynamic consulting homepage to re-engage 60,000+ visitors each quarter</li>
</p>
<p>
          <h3> <a href="https://www.breaktime.org/">Breaktime (volunteer)</a></h3>
          <h4> Director of Marketing and Advertising </h4>
           <li>Successfully ran 4 social media campaigns driving a 3x return on engagement over previous ad spend</li> 
           <li>Integrated a multi-faceted, digital marketing approach with HubSpot CRM, Mail Chimp, Facebook Business Manager, and Google Analytics</li>
           <li>Oversaw a team of undergraduates striving to provide stable employment to homeless youth by establishing cafes	</li>
</p>
<p>
            <h3> <a href="https://www.bjs.com/membershipEnroll">BJs Wholesale Club</a></h3>
            <h4>Management Development Intern: Membership Acquisition</h4>
            <li>Project managed 6 functional areas to successfully launch 4 digital acquisition campaigns with a combined reach of 1.5M+ and budgeted cost of $160,000</li>
            <li>Analyzed BJ’s current social media acquisition campaigns and proposed a mobile-optimized ad experience to recapture 90,000+ qualified leads</li>
            <li>Implemented tracking strategies (pixels, market codes, vanity URLs etc.) to collect and measure acquisition KPIs</li>
</p>

          <p></p> 
          <p></p>
           <ul className="icons"> 
           <li>
              <a href="https://www.linkedin.com/in/arya-murthi/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            </ul>

      
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I'm a senior at Boston College pursuing my B.S in management with concentrations in
            marketing and business analytics. The best thing about being home is my Mom's 
            cooking with Chik-fil-a coming in at a close second. Fun fact, I was the 
            treasurer of my school's DJ club and DJed our Holi festival on campus my sophomore year!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/xlewpbeb">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="_replyto" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
          <li>
              <a href="https://www.linkedin.com/in/arya-murthi/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/arya.murthi.10" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aryamurthi?tab=repositories"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
