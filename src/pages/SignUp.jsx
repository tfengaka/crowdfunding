import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '~/components/common/Button';
import { CheckBox, EyeToggle, Field, Input, Label } from '~/components/common/Form/';
import { AuthLayout } from '~/components/layout';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schemaValidation = Yup.object({
  name: Yup.string().required('This field is required'),
  email: Yup.string().required('This field is required').email('Email is invalid'),
  password: Yup.string()
    .required('This field is required')
    .min(6, 'Password must be at least 6 characters'),
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
  const handleToggleTerms = () => {
    setAccepted(!accepted);
  };

  const handleSignUp = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout heading="Sign Up">
      <p className="mb-6 text-sm text-center lg:text-xm text-text3 lg:mb-8">
        Already have an account?
        <Link to="/signin" className="ml-1 font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <Button
        type="button"
        className="w-full py-3 mb-5 font-semibold transition-all border-2 gap-x-2 rounded-xl border-strock text-text2 hover:border-primary dark:text-white dark:border-darkStroke"
      >
        <img srcSet="/static/google.png 2x" alt="google" />
        <span>Sign up with google</span>
      </Button>
      <p className="mb-4 text-xs text-center lg:text-sm text-text2 lg:mb-8 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label title="Full Name *" htmlFor="name" />
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          />
        </Field>
        <Field>
          <Label title="Email *" htmlFor="email" />
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            type="email"
            error={errors.email?.message}
          />
        </Field>
        <Field>
          <Label title="Password *" htmlFor="password" />
          <Input
            control={control}
            name="password"
            placeholder="Create a password"
            type={showPassword ? 'text' : 'password'}
            error={errors.password?.message}
          >
            <div
              className="absolute cursor-pointer right-6 top-2/4 -translate-y-2/4 text-iconColor user-select-none hover:text-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              <EyeToggle isOpen={showPassword} />
            </div>
          </Input>
        </Field>
        <CheckBox name="term" isSelected={accepted} setSelected={handleToggleTerms}>
          <p className="flex-1 text-sm select-none text-text2">
            I agree to the <span className="underline text-secondary">Terms of Use</span> and have
            read and understand the{' '}
            <span className="underline text-secondary">Privacy policy.</span>
          </p>
        </CheckBox>
        <Button type="submit" className="w-full text-white bg-primary" isLoading={false}>
          Create my account
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignUp;
