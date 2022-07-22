import { lazy, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Loading } from './components/common';

const SignUpPage = lazy(() => import('./pages/SignUp'));
const SignInPage = lazy(() => import('./pages/SignIn'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-screen dark:bg-darkBg">
          <Loading size="lg" />
        </div>
      }
    >
      <Switch>
        <Route index element={<DashboardPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Switch>
    </Suspense>
  );
}

export default App;
