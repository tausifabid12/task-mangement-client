import React, { useContext } from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const { logOut, user } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/addTask" className="flex items-center">
          Add Tasks
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/AllTasks" className="flex items-center">
          All Tasks
        </Link>
      </Typography>
      {user?.email && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link href="/completedTasks" className="flex items-center">
            Completed Tasks
          </Link>
        </Typography>
      )}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 text-2xl text-blue-500 cursor-pointer py-1.5 font-bold"
        >
          <span>Task Handler</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div>
          {user?.email ? (
            <Link href="/">
              <Button
                onClick={() => logOut()}
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block mr-2"
              >
                <span>LogOut</span>
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block mr-2"
                >
                  <span>SignIn</span>
                </Button>
              </Link>
              <Link href="/signUp">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block "
                >
                  <span>SignUp</span>
                </Button>
              </Link>
            </>
          )}
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div>
          {user?.email ? (
            <Link href="/">
              <Button
                onClick={() => logOut()}
                variant="gradient"
                size="sm"
                className="mb-2 "
              >
                <span>LogOut</span>
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="gradient" size="sm" className="mb-2 mr-3">
                  <span>SignIn</span>
                </Button>
              </Link>
              <Link href="/signUp">
                <Button variant="gradient" size="sm" className="mb-2">
                  <span>SignUp</span>
                </Button>
              </Link>
            </>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Nav;
