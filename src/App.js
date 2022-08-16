import { lazy, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Error, Loading } from './components/common';
import { DashboardLayout } from './components/layout';
import { CampaignPage } from './pages';

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
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="*" element={<Error icon="/static/illustration_404.svg" message="Sorry, page not found!" />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Switch>
    </Suspense>
  );
}

export default App;
