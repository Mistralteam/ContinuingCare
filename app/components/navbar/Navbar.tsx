import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
          {/* Display a message if the user is a Nursing Home */}
          {currentUser && currentUser.role === 'NURSING_HOME' && (
            <div className="text-sm text-gray-600">
              Logged in as Nursing Home
            </div>
          )}
        </Container>
      </div>
      <Categories />
    </div>
  );
}

export default Navbar;
