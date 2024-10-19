'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const Index = () => {
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
                Hi! Welcome to our Oklathon Calorie Tracker App
              </h1>
            </div>
            <div className="grid gap-6 px-12">
              <Button>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button>
              <Link href="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;