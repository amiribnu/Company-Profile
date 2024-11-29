import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";
import { router, Head, Link } from "@inertiajs/react";
import { IconEdit, IconEyeCheck, IconTrash } from "@tabler/icons-react";
import Swal from "sweetalert2";
import { Button } from "@/shadcn/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shadcn/ui/table";
import DialogImage from "@/Components/Dashboard/Blog/DialogImage.jsx";
import Pagination from "@/Components/Pagination";

export default function Dashboard(props) {
    const { data: posts, meta, links } = props.posts;
    //method destroy
    function deletePost(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`blog/${id}`, {
                    // notif
                    onSuccess: () => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Data berhasil di Hapus",
                            showConfirmButton: true,
                            timer: 2500,
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Error, Something went wrong!",
                            showConfirmButton: true,
                            timer: 2500,
                        });
                    },
                });
            }
        });
    }

    return (
        <>
            <Head title="Blog | Dashboard" />

            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="space-x-3">
                            <Link href={route("dashboard.blog.create")}>
                                <Button className="mb-4 font-bold">
                                    Create Post
                                </Button>
                            </Link>
                            <Link href={route("CategoriesOrTags.index")}>
                                <Button className="mb-4 font-bold">
                                    Categories & Tags
                                </Button>
                            </Link>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Thumbnail</TableHead>
                                    <TableHead className="text-right">
                                        Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {posts?.map((post, index) => (
                                    <TableRow key={post.id}>
                                        <TableCell className="font-medium pl-4">
                                            {/* {1 + index} */}
                                            {(meta.current_page - 1) *
                                                meta.per_page +
                                                index +
                                                1}
                                        </TableCell>
                                        <TableCell>{post.title}</TableCell>
                                        <TableCell>
                                            ({post.category.category})
                                        </TableCell>
                                        <TableCell>
                                            <DialogImage img={post.image} />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="space-x-3">
                                                <a
                                                    href={route("blog.detail", {
                                                        id: post.slug,
                                                    })}
                                                    className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                                >
                                                    <IconEyeCheck />
                                                </a>
                                                <a
                                                    href={route(
                                                        "dashboard.blog.edit",
                                                        {
                                                            id: post.id,
                                                        }
                                                    )}
                                                    className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                                >
                                                    <IconEdit />
                                                </a>
                                                <Button
                                                    onClick={() =>
                                                        deletePost(post.id)
                                                    }
                                                    className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                                >
                                                    <IconTrash />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Pagination meta={meta} links={links} max={5} />
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => (
    <DashboardLayout
        children={page}
        title="Dashboard"
        user={page.props.auth.user}
        header={
            <h2 className="items-center font-semibold text-lg text-white lg:text-gray-900">
                Blog
            </h2>
        }
    />
);
