import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, SocialButton } from '~/components/common';
import { EyeToggle, Field, Input, Label } from '~/components/form';
import { AuthLayout } from '../components/layout';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Images } from '~/assets';

const schemaValidation = Yup.object({
  email: Yup.string().required('This field is required').email(''),
  password: Yup.string().required('This field is required'),
});

function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: 'onSubmit',
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout heading="Welcome Back!">
      <p className="mb-6 text-sm font-medium text-center lg:text-xm text-text3 lg:mb-8">
        Don't have an account?{' '}
        <Link to="/signup" className="ml-1 font-semibold underline text-primary">
          Sign up
        </Link>
      </p>
      <SocialButton content="Sign up with google" icon={Images.googleLogo} />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Field>
          <Label title="Email" htmlFor="email" required />
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            type="email"
            error={errors.email?.message}
          />
        </Field>
        <Field>
          <Label title="Password" htmlFor="password" required />
          <Input
            control={control}
            name="password"
            placeholder="Enter password"
            type={showPassword ? 'text' : 'password'}
            error={errors.password?.message}
          >
            <div
              className="absolute cursor-pointer right-6 top-2/4 -translate-y-2/4 text-iconColor user-select-none hover:text-primary dark:hover:text-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              <EyeToggle isOpen={showPassword} />
            </div>
          </Input>
        </Field>
        <Field>
          <div className="text-right">
            <span className="text-sm font-semibold cursor-pointer text-primary hover:underline">
              Forgot password
            </span>
          </div>
        </Field>
        <Button type="submit" isLoading={false} className="w-full bg-primary">
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignIn;
