import EditBlog from "@/Components/Dashboard/Blog/EditBlog";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Edit() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <Head title="Edit | Blog" />

            <EditBlog />
        </>
    );
}

Edit.layout = (page) => (
    <DashboardLayout
        children={page}
        title="Dashboard"
        user={page.props.auth.user}
        header={
            <h2 className="font-semibold text-lg text-white lg:text-gray-900">
                <Link
                    href={route("blog.index")}
                    className="hover:text-indigo-600"
                >
                    Blog
                </Link>
                <span className="font-medium"> / </span>
                Edit
            </h2>
        }
    />
);
