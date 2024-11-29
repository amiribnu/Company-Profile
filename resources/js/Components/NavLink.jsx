import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                "w-full inline-flex hover:text-violet-500 items-center px-4 py-4 rounded-md text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "text-white bg-slate-900 "
                    : "border-transparent text-gray-500 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
