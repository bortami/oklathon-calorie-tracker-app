'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const ProfilePage = () => {
  const [calorieGoal, setCalorieGoal] = useState('');
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
      <div className="container relative h-screen flex-col items-center justify-center lg:px-0">
        <div className="p-2 mt-48 sm:mt-0 w-screen md:w-full mx-auto">
          <div className="mx-auto flex w-96 flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-4 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Enter your desired calorie goal
              </h1>
            </div>
            <div className="px-12">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Calorie Goal
                    </Label>
                    <Input
                      id="calories"
                      placeholder="Calorie Goal"
                      type="text"
                      autoCapitalize="none"
                      autoCorrect="off"
                      onChange={(e) => setCalorieGoal(e.target.value)} 
                    />
                  </div>
                  <Button>
                    Submit
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

export default ProfilePage;