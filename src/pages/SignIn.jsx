import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/layout';

function SignIn() {
  return (
    <AuthLayout heading="Sign In">
      <p className="mb-6 text-xs text-center lg:text-xm text-text3 lg:mb-8">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}

export default SignIn;
