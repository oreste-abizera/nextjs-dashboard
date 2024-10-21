"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname, router, session]);

  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                Dashboard
              </Link>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <NavLink href="/">Overview</NavLink>
                <NavLink href="/visits">Visits</NavLink>
                <NavLink href="/customers">Customers</NavLink>
              </div>
            </div>
            {/* sign out */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                onClick={() => {
                  signOut();
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
