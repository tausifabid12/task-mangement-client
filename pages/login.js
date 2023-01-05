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
import { GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Layout from '../Components/Layout/Layout';
import Nav from '../Components/Navbar/Navbar';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, socialLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data, e) => {
    const { email, password } = data;
    setLoading(true);
    console.log(data);

    login(email, password)
      .then((result) => {
        setLoading(false);
        setError('');
        e.target.reset();
        toast('login Success');
        console.log(result);
        router.push('/');
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    socialLogin(googleProvider)
      .then((result) => {
        setLoading(false);
        setError('');
        toast('login Success');
        router.push('/');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <Layout title="Login Page">
      <div className="max-w-screen-2xl mx-auto h-screen flex justify-center mt-20">
        <Card className="w-full lg:w-[450px] h-[500px] border-2 border-t-gray-200">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <CardBody className="flex flex-col gap-4 mt-5">
              <p className="text-red-600 font-bold">{error}</p>

              <Input
                label="Email"
                size="lg"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
              <Input
                label="Password"
                size="lg"
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
                  Sign In
                </Button>
              )}

              <Typography variant="small" className="mt-1">
                Don't have an account?
                <Link href="/login" className="ml-1 font-bold text-blue-500">
                  Sign Up
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

export default login;
