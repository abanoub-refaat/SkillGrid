import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  const { status, data: session } = useSession();

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <GraduationCap className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold">SkillGrid</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/courses"
        >
          Courses
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/paths"
        >
          Learning Paths
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/dashboard"
        >
          Dashboard
        </Link>
      </nav>
      <div className="ml-4 flex items-center gap-2">
        {status === "loading" ? (
          <span className="text-[#888] text-sm">Loading...</span>
        ) : session?.user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <Image
                src={session.user.image || "/default-avatar.png"}
                alt="Profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="text-sm font-semibold">{session.user.name}</p>
              </li>
              <li>
                <button className="text-red-500" onClick={() => signOut()}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login">
              <button className="btn btn-outline">Log In</button>
            </Link>
            <Link href="/register">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
