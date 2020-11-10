import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header    from './components/Header';
import Footer    from './components/Footer';
import Home      from './view/Home';
import Playlists from './view/Playlists';
import Playlist  from './view/Playlist';
import Signup    from './view/Signup';
import Signin    from './view/Signin' 
import Help      from './view/Help';
import { useEffect } from 'react';
import { useLocalStorage } from './view/Signin/localStorage'

export default function Routes() {
    const [user, setUser] = useLocalStorage("@spotify/user", "")
    console.log(user)
    return(
        <BrowserRouter>
            {/* componentes fixos */}
            <Header 
                user={user}
                logout={setUser}
            />
                {/* componentes mutaveis */}
                <Switch>
                    <Route path="/" exact component={Home} />                                    
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" render={props => <Signin {...props} login={setUser} />} />
                    <Route path="/help" component={Help} />
                    <Route path="/playlist/create" component={PlaylistCreate} />
                    <Route path="/playlist/:id" component={Playlist} />
                    <Route path="/playlists" component={Playlists} />
                    <Route path="/collection" component={Collection} />
                </Switch>
            <Footer/>
        </BrowserRouter>
    );
}
