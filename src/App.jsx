import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Admin from 'pages/admin/Index';
import Clientes from 'pages/admin/Clientes';
import Productos from 'pages/admin/Productos';
import Usuarios from 'pages/admin/Usuarios';
import Ventas from 'pages/admin/Ventas';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css'
import { Auth0Provider } from "@auth0/auth0-react";

function App() {


  return (

    <Auth0Provider 
      domain="aplicacion-des-arrolladores.us.auth0.com"
      clientId="dnxGxlXuVhvNSC8hzfH3yMF8QmK17zjc"
      redirectUri='http://localhost:3000/admin'
      audience='api-autenticacion-aplicacion-des-arrolladores'
    >
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/clientes', '/admin/productos', '/admin/usuarios', '/admin/ventas']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/clientes'>
                  <Clientes />
                </Route>
                <Route path='/admin/productos'>
                  <Productos />
                </Route>
                <Route path='/admin/usuarios'>
                  <Usuarios />
                </Route>
                <Route path='/admin/ventas'>
                  <Ventas />
                </Route>
                <Route path='/admin'>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login', '/registro']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/registro'>
                  <Registro />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>
              <Switch>
                <Route path='/'>
                  <Index />
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </Auth0Provider>
  )
}

export default App;
