import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      buttonRoute="/sign-up"
      buttonText="Don't have an account? Sign up"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
