import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
      <Sheet>
        <SheetTrigger>
          <Menu className="text-purple-500" />
        </SheetTrigger>
        <SheetContent className="bg-white space-y-3">
          <SheetTitle>
            {isAuthenticated ? (
              <span className=" flex items-center font-bold gap-2">
                <CircleUserRound className="text-purple-500" />
                {user?.email}
              </span>
            ) : (
              <span className="flex justify-center"> Welcome to DVote.com!</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
              <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-purple-500" />
              {user?.email}
            </span>
            ) : (
              <Button
                onClick={() => loginWithRedirect()}
                className="flex-1 font-bold bg-purple-500"
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    );
  };
  
  export default MobileNav;