import { Coffee } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function Layout({ children }) {
  return (
    <main className="w-full min-h-screen bg-zinc-950">
      <div
        className={`${inter.variable} font-sans w-[92%] xl:w-full max-w-screen-lg text-white mx-auto min-h-screen flex flex-col items-center gap-y-12 justify-between`}
      >
        <div className="w-full flex flex-col gap-y-12">
          <nav className="border-b flex items-center py-6">
            <Link className="text-2xl font-semibold inline-flex items-end space-x-2 text-white dark:text-red-500" href="/">
              <Coffee size={36}/>
              <p>Coffey</p>
            </Link>
          </nav>
          {children}
        </div>
        <footer className="w-full text-center py-3 border-t border-neutral-600">
          <p>Created by Anes Diaf</p>
        </footer>
      </div>
    </main>
  );
}
export default Layout;