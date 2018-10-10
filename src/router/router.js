import React from 'react';
import { Switch,Route,Redirect} from 'react-router-dom';
import HomeComponent from '../components/home/HomeComponent';
import AboutComponent from '../components/about/AboutComponent';
import EventsComponent from '../components/events/EventsComponent';
import ContactComponent from '../components/contact/ContactComponent';
import AnnouncementComponent from "../components/announcements/AnnouncementComponent";

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route path='/about' component={AboutComponent} />
        <Route exact path='/events' component={EventsComponent} />
        <Route exact path='/contactus' component={ContactComponent} />
        <Route exact path='/announcements' component={AnnouncementComponent} />
        <Redirect to="/" />
    </Switch>
)

export default Router;