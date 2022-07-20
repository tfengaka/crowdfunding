import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '~/components/common/Button';
import { Field, Input, Label } from '~/components/common/Form/';

import { AuthLayout } from '~/components/layout';

function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({});

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
      <button className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold transition-all border rounded-xl border-strock gap-x-2 text-text2 hover:bg-primary hover:bg-opacity-80 hover:text-white">
        <img srcSet="/static/google.png 2x" alt="google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs text-center lg:text-sm text-text2 lg:mb-8">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label title="Full Name *" htmlFor="name" />
          <Input control={control} name="name" placeholder="Jhon Doe" />
        </Field>
        <Field>
          <Label title="Email *" htmlFor="email" />
          <Input control={control} name="email" placeholder="example@gmail.com" type="email" />
        </Field>
        <Field>
          <Label title="Password *" htmlFor="password" />
          <Input
            control={control}
            name="password"
            placeholder="Create a password"
            type="password"
          />
        </Field>
        <div className="flex items-start justify-center mb-5 gap-x-5">
          <span className="inline-block w-5 h-5 border rounded border-text4"></span>
          <p className="flex-1 text-sm text-text2">
            I agree to the <span className="underline text-secondary">Terms of Use</span> and have
            read and understand the{' '}
            <span className="underline text-secondary">Privacy policy.</span>
          </p>
        </div>
        <Button type="submit" className="w-full text-white bg-primary">
          Create my account
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignUp;
