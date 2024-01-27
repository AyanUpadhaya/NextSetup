"use client";

import { usePathname,useRouter } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <>
      <nav className='py-2 px-6'>
        <ul className="flex gap-3 items-center">
          <li>
            <Link
              href={"/dashboard"}
              className={`link ${
                pathname === "/dashboard" ? "font-semibold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href={"/dashboard/settings"}
              className={`link ${
                pathname === "/dashboard/settings" ? "font-semibold" : ""
              }`}
            >
              Settings
            </Link>
          </li>
          <li className="">
            <Link
              href={"/dashboard/profile"}
              className={`link ${
                pathname === "/dashboard/profile" ? "font-semibold" : ""
              }`}
            >
              Profile
            </Link>
          </li>
          <li className="ms-auto">
          <button className="py-2 px-4 rounded bg-red-600 text-white" type="button" onClick={() => router.push('/dashboard/login')}>Login</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
