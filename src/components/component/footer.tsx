import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-12 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-4 flex flex-col">
            <Link
              className="font-medium text-sm transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium text-sm transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              About
            </Link>
            <Link
              className="font-medium text-sm transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Services
            </Link>
            <Link
              className="font-medium text-sm transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Contact
            </Link>
          </div>
          <div className="space-y-4 flex flex-col">
            <h2 className="font-bold tracking-tighter">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sign up for the latest news, updates, and
              <br className="sm:hidden md:hidden lg:hidden" />
              offers
            </p>
            <div className="flex flex-1 w-full gap-2">
              <Input
                className="max-w-sm flex-1 text-sm"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="text-sm" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-4">
            <h2 className="font-bold tracking-tighter">Contact</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Have any questions? We're here to help.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Email us at :
                <span className="font-medium"> info@ve3z.co.za</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Call us :<span className="font-medium"> 084 014 1996</span>
              </p>
            </div>
          </div>
          <div className="border-t pt-4 items-center justify-center text-sm border-gray-200 md:border-0 md:pt-0 dark:border-gray-800">
            <form className="flex flex-1  flex-col gap-4 md:gap-8">
              <h3 className="font-bold tracking-tighter">
                Pop us a message and we will ge back to you
              </h3>
              <Input
                className="max-w-xs text-sm"
                placeholder="Name"
                type="text"
              />
              <Input
                className="max-w-xs text-sm"
                placeholder="Email"
                type="email"
              />
              <Input
                className="flex-1 text-sm"
                placeholder="Message"
                type="text"
              />
              <Button className="h-10 text-sm px-6" type="submit">
                Contact Us
              </Button>
            </form>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <TwitterIcon className="w-4 h-4" />
            <FacebookIcon className="w-4 h-4" />
            <InstagramIcon className="w-4 h-4" />
            <LinkedinIcon className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-sm md:gap-4 md:text-xs lg:gap-0">
          <span className="text-gray-500 text-xs sm:text-sm dark:text-gray-400">
            © 2024 Ve3z Pty Ltd. All rights reserved.
          </span>
          <nav className="flex flex-col gap-1 md:flex-row md:gap-2">
            <Link
              className="text-xs transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-xs transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Become An Agent
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
