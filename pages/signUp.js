import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Nav from '../Components/Navbar/Navbar';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { useRouter } from 'next/router';
import Layout from '../Components/Layout/Layout';

const signUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { createUser, SocialLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    const { email, password } = data;
    setLoading(true);
    createUser(email, password)
      .then((result) => {
        console.log(result);
        router.push('/');
        setLoading(false);
        setError('');
        toast.success(' Sign up success');
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    SocialLogin(googleProvider)
      .then((result) => {
        setLoading(false);
        setError('');
        toast.success(' log in success', {
          position: 'top-center',
          autoClose: 4000,
        });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  return (
    <Layout title="sign up page">
      <div className="max-w-screen-2xl mx-auto h-screen flex justify-center lg:mt-20">
        <Card className="w-full lg:w-[480px] h-[550px] border-2 border-t-gray-200">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <CardBody className="flex flex-col gap-4 mt-10">
              <p className="text-red-600 font-bold">{error}</p>
              <Input
                label="User Name"
                size="lg"
                name="username"
                {...register('username', { required: true })}
              />
              {errors.username && (
                <span className="text-red-500">This field is required</span>
              )}
              <Input
                label="Email"
                size="lg"
                name="email"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
              <Input
                label="Password"
                size="lg"
                name="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && errors.password.type === 'required' && (
                <span className="text-red-500">This is required</span>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <span className="text-red-500 ">
                  Password must have 6 character
                </span>
              )}
              {loading ? (
                <Button
                  type="submit"
                  color="blue-gray"
                  variant="gradient"
                  fullWidth
                >
                  Loading...
                </Button>
              ) : (
                <Button type="submit" variant="gradient" fullWidth>
                  Sign Up
                </Button>
              )}

              <Typography variant="small" className="mt-2 ">
                Already have an account?
                <Link href="/login" className="ml-1 font-bold text-blue-500">
                  Sign in
                </Link>
              </Typography>
            </CardBody>
            <CardFooter divider className="pt-0">
              <Button
                onClick={handleGoogleSignIn}
                variant="gradient"
                fullWidth
                className="mt-6"
              >
                SignIn with google
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default signUp;
