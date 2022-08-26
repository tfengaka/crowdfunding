import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Images } from '~/assets';
import { Button, SocialButton } from '~/components/common';
import { CheckBox, EyeToggle, Field, Input, Label } from '~/components/form';
import { AuthLayout } from '~/components/layout';

const schemaValidation = Yup.object({
  name: Yup.string().required('This field is required'),
  email: Yup.string().required('This field is required').email('Email is invalid'),
  password: Yup.string().required('This field is required').min(6, 'Password must be at least 6 characters'),
});

function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: 'onSubmit',
  });

  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout heading="Sign Up">
      <p className="mb-6 text-sm font-medium text-center lg:text-xm text-text3 lg:mb-8">
        Already have an account?
        <Link to="/signin" className="ml-1 font-semibold underline text-primary">
          Sign in
        </Link>
      </p>
      <SocialButton content="Sign up with google" icon={Images.googleLogo} />
      <p className="mb-4 text-xs text-center lg:text-sm text-text3 lg:mb-8 dark:text-text4">Or sign up with email</p>
      <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
        <Field>
          <Label title="Full Name" htmlFor="name" required />
          <Input control={control} name="name" placeholder="Jhon Doe" error={errors.name?.message} />
        </Field>
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
            placeholder="Create a password"
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
        <CheckBox name="term" isSelected={accepted} setSelected={() => setAccepted(!accepted)}>
          <p className="flex-1 text-sm select-none text-text2">
            I agree to the <span className="underline text-secondary">Terms of Use</span> and have read and understand
            the <span className="underline text-secondary">Privacy policy.</span>
          </p>
        </CheckBox>
        <Button buttonType="submit" isLoading={false} color="primary" className="w-full">
          Create my account
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignUp;
