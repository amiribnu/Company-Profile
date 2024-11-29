import DashboardLayout from "@/Layouts/DashboardLayout";
import CreateBlog from "@/Components/Dashboard/Blog/CreateBlog";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";


export default function Create(props) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <Head title="Create | Blog" />

            <CreateBlog {...props} />
        </>
        );
}

Create.layout = (page) => (
    <DashboardLayout
        children={page}
        title="Dashboard"
        user={page.props.auth.user}
        header={
            <h2 className="items-center font-semibold text-lg text-white lg:text-gray-900">
                <Link
                    href={route("blog.index")}
                    className="hover:text-indigo-600"
                >
                    Blog
                </Link>
                <span className="font-medium"> / </span>
                Create
            </h2>
        }
    />
);
