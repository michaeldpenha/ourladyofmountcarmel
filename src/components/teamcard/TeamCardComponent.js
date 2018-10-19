import React, { Component } from 'react'
import './TeamCard.css';
class TeamCardComponent extends Component {
    render() {
        const card = this.props.teamData ? this.props.teamData.map(el => (
            <div className="col-md-4">
                <div class="card" key={el.name}>
                    <img src={`images/${el.profileImg}`} className="team-profile" alt={el.name} />
                    <h1 className="cardName">{el.name}</h1>
                    <p class="cardTitle">{el.subTitle}</p>
                    <button className="contact">Contact</button>
                </div>
            </div>
        )) : []
        return (<div className="row">{card}</div>)
    }
}
export default TeamCardComponent;
// /images/profile.png