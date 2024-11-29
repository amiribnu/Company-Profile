
export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <a
            {...props}
            className={
                'inline-flex items-center text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'text-blue-700 font-bold '
                    : 'border-transparent text-gray-500 hover:text-blue-400 ') +
                className
            }
        >
            {children}
        </a>
    );
}
