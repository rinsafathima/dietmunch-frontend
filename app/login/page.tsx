import DietMunchLogo from '@/app/ui/diet_munch-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center bg-white md:h-screen "  >
       <div className="relative flex w-full max-w-screen-xl">
      <div className="hidden rounded-lg md:block w-1/2">
          <img src="14.jpg" alt="Image"  className="ml-52 rounded-lg w-[450PX] h-[450px]" />
      </div>
      
      <div className="absolute mr-[70px] inset-y-0 right-0 w-1/2 flex items-center justify-center">
          <div className="mx-auto p-4">
            <div className="flex items-end rounded-lg bg-sky-500 p-3">
              <div className="w-32 text-white md:w-36">
                <DietMunchLogo />
              </div>
            </div>
            <div className="mt-4">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}