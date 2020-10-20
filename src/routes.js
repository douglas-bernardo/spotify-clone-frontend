import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header    from './components/Header';
import Footer    from './components/Footer';
import Home      from './view/Home';
import Playlists from './view/Playlists';
import Playlist  from './view/Playlist';
import Signup    from './view/Signup';
import Help      from './view/Help';

export default function Routes() {
    return(
        <BrowserRouter>
            {/* componentes fixos */}
            <Header/>
                {/* componentes mutaveis */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/playlists" component={Playlists} />
                    <Route path="/playlist/:id" component={Playlist} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/help" component={Help} />
                </Switch>
            <Footer/>
        </BrowserRouter>
    );
}
