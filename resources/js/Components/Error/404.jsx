import React from 'react';
import { IconHome } from '@tabler/icons-react';
function Error404(props)
{
    return (
        <section className={"flex flex-col items-center"}>
            <img  alt={"404"} src={"assets/svg/404.svg"}/>
            <div className="max-w-2xl text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block text-3xl font-bold text-gray-800 md:text-4xl ">Page not found...</h1>
                <p className="mt-3 text-gray-600 ">
                    Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.
                </p>
                <div className="mt-10 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4">
                        <IconHome />
                        Go To Home
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Error404;
