import React, { Component } from 'react'
import './Team.css'
class TeamComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <img src="images/profile.png" className="team-profile" alt="John" />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <button className="contact">Contact</button>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
            <img src="images/profile.png" className="team-profile" alt="John" />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <button className="contact">Contact</button>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
            <img src="images/profile.png" className="team-profile" alt="John" />
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <button className="contact">Contact</button>
            </div>  
          </div>
        </div>
        {/* <div class="card col-md-3">
          <img src="img.jpg" alt="John"  />
          <h1>John Doe</h1>
          <p class="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <p><button>Contact</button></p>
        </div>
        <div class="card col-md-3">
          <img src="img.jpg" alt="John"  />
          <h1>John Doe</h1>
          <p class="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <p><button>Contact</button></p>
        </div>
        <div class="card col-md-3">
          <img src="img.jpg" alt="John"  />
          <h1>John Doe</h1>
          <p class="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <p><button>Contact</button></p>
        </div> */}
      </div>
    )
  }
}
export default TeamComponent;