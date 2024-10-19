'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //await signIn(email,password, false);
      //router.replace('/');
    } catch (error) {
      //window.alert(error);
    }
  };

  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid md:max-w-none md:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white md:flex lg:flex ">
          <div className="absolute inset-0 bg-black" />
          <div className="relative z-20 flex items-center text-lg font-medium text-white">
            Oklathon Calorie Tracker
          </div>
        </div>
        <div className="p-2 mt-48 sm:mt-0 lg:p-8 w-screen md:w-full mx-auto">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign into your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to sign into your account
              </p>
            </div>
            <div className="grid gap-6 px-12">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Email Address"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="Password"
                      type="password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                  </div>
                  <Button>
                    Sign In with Email
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;