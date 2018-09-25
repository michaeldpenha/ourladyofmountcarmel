import React from 'react';
import { Switch,Route,Redirect} from 'react-router-dom';
import HomeComponent from '../components/home/HomeComponent';
import AboutComponent from '../components/about/AboutComponent';
import EventsComponent from '../components/events/EventsComponent';
import ContactComponent from '../components/contact/ContactComponent';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/about' component={AboutComponent} />
        <Route exact path='/events' component={EventsComponent} />
        <Route exact path='/contactus' component={ContactComponent} />
        <Redirect to="/" />
    </Switch>
)

export default Router;