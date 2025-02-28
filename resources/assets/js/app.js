import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import NavLayout from '@/components/NavLayout';
import Major from './page/Major';
import Post from './page/Post/index';
import Login from './page/Login';
import Department from './page/Department';
import Announcement from './page/Announcement';

import GlobalStyle from './theme/global';

import { Provider } from 'react-redux';
import { store } from './model/store.js';

import { ThemeProvider } from '@material-ui/styles';
import { materialTheme } from './theme/global';
import RouteAdmin from './RouteAuth.js';

function App() {
    const [token, setToken] = useState('');

    const updateToken = useCallback((tokenNext) => {
        Cookies.set('adminToken', tokenNext, { expires: 7 });
        setToken(tokenNext);
    }, []);

    return (
        <HashRouter>
            <Provider store={store}>
                <ThemeProvider theme={materialTheme}>
                    <GlobalStyle />
                    <Switch>
                        <NavLayout>
                            <Route exact path="/" component={Major} />
                            <Route path="/post" component={Post} />
                            <Route
                                path="/admin/login"
                                render={(props) => (
                                    <Login setToken={updateToken} />
                                )}
                            />
                            <RouteAdmin
                                path="/admin/major"
                                component={Major}
                                token={token}
                            />
                            <RouteAdmin
                                path="/admin/post"
                                component={Post}
                                token={token}
                            />
                            <RouteAdmin
                                path="/admin/department"
                                component={Department}
                                token={token}
                            />
                            <RouteAdmin
                                path="/admin/announcement"
                                component={Announcement}
                                token={token}
                            />
                        </NavLayout>
                    </Switch>
                </ThemeProvider>
            </Provider>
        </HashRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
