import React, { lazy } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

const SignUpPage = lazy(() => import('./pages/SignUp'));
const SignInPage = lazy(() => import('./pages/SignIn'));

function App() {
  return (
    <Switch>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Switch>
  );
}

export default App;
