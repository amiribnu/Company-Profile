import { Fragment, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
    IconMenu2,
    IconX,
    IconChevronDown,
    IconHome,
    IconNews,
    IconUsers,
    IconTools,
} from "@tabler/icons-react";

export default function Authenticated({ user, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <IconX
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-800 px-6 pb-4">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <ApplicationLogo className="h-11" />
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul
                                            role="list"
                                            className="flex flex-1 flex-col gap-y-7"
                                        >
                                            <li>
                                                <ul
                                                    role="list"
                                                    className="-mx-2 space-y-1"
                                                >
                                                    <NavLink
                                                        className="gap-2 hover:text-violet-500"
                                                        href={route(
                                                            "dashboard"
                                                        )}
                                                        active={route().current(
                                                            "dashboard"
                                                        )}
                                                    >
                                                        <IconHome className="w-6 h-6" />
                                                        Home
                                                    </NavLink>
                                                    <NavLink
                                                        className="gap-2"
                                                        href={route(
                                                            "dashboard.blog.index"
                                                        )}
                                                        active={route().current(
                                                            "dashboard.blog.index"
                                                        )}
                                                    >
                                                        <IconNews className="w-6 h-6" />
                                                        Blog
                                                    </NavLink>
                                                    <NavLink
                                                        className="gap-2"
                                                        href={route(
                                                            "webSetting.index"
                                                        )}
                                                        active={route().current(
                                                            "webSetting.index"
                                                        )}
                                                    >
                                                        <IconTools className="w-6 h-6" />
                                                        Web Setting
                                                    </NavLink>
                                                    <NavLink className="gap-2">
                                                        <IconUsers className="w-6 h-6" />
                                                        User
                                                    </NavLink>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-slate-800 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <ApplicationLogo className="h-11 mt-4" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    <NavLink
                                        className="gap-2"
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        <IconHome className="w-6 h-6" />
                                        Home
                                    </NavLink>
                                    <NavLink
                                        className="gap-2"
                                        href={route("dashboard.blog.index")}
                                        active={route().current(
                                            "dashboard.blog.index"
                                        )}
                                    >
                                        <IconNews className="w-6 h-6" />
                                        Blog
                                    </NavLink>
                                    <NavLink
                                        className="gap-2"
                                        href={route("webSetting.index")}
                                        active={route().current(
                                            "webSetting.index"
                                        )}
                                    >
                                        <IconTools className="w-6 h-6" />
                                        Web Setting
                                    </NavLink>
                                    <NavLink className="gap-2">
                                        <IconUsers className="w-6 h-6" />
                                        User
                                    </NavLink>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-slate-800 lg:bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <IconMenu2
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                        />
                    </button>

                    <div className="flex flex-1 justify-between lg:gap-x-6">
                        <div className="flex items-center">{header}</div>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            {/* Profile dropdown */}
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white lg:text-gray-900 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {user.name}

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <main>
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </div>
    );
}
