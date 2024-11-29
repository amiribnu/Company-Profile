import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link, router } from "@inertiajs/react";
import AddCategoryOrTags from "@/Components/Dashboard/Blog/AddCategoryOrTags";
import TableCom from "@/Components/Dashboard/Global/TableCom";
import { IconTrash } from "@tabler/icons-react";
import { Button } from "@/Components/ui/button";
import { useState } from "react";
import Swal from "sweetalert2";
import Pagination from "@/Components/Pagination";

export default function CategoriesTags(props) {
    const {
        data: categories,
        meta: metaCategory,
        links: linksCategory,
    } = props.categories;

    const { data: tags, meta: metaTags, links: linksTags } = props.tags;
    const [searchCategory, setSearchCategory] = useState("");
    const [searchName, setSearchName] = useState("");

    const handleCategoryChange = (event) => {
        setSearchCategory(event.target.value);
    };

    const handleNameChange = (event) => {
        setSearchName(event.target.value);
    };

    const filteredData1 = categories.filter((item) =>
        item.category.toLowerCase().includes(searchCategory.toLowerCase())
    );

    const filteredData2 = tags.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
    );

    function deleteData(type, id) {
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
                router.delete(
                    `${window.location.origin}/blog/deleteCategoriesOrTags/${type}/${id}`,
                    {
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
                    }
                );
            }
        });
    }

    return (
        <>
            <Head title="Web Setting | CategoriesTags" />

            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between py-3">
                        <p className="font-semibold"> Categories & Tags</p>
                        <AddCategoryOrTags />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {/* Categories */}
                        <div>
                            <div className="flex justify-between items-center">
                                <h4 className="text-base">Categories</h4>
                                <div className="py-3 px-4">
                                    <div className="relative max-w-xs">
                                        <label
                                            htmlFor="hs-table-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <input
                                            type="text"
                                            value={searchCategory}
                                            onChange={handleCategoryChange}
                                            id="hs-table-search"
                                            className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            placeholder={`Search for Categories`}
                                        />
                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                                            <svg
                                                className="h-3.5 w-3.5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <TableCom>
                                <TableCom.THeader>
                                    <TableCom.TRow>
                                        <TableCom.THead>No</TableCom.THead>
                                        <TableCom.THead>Name</TableCom.THead>
                                        <TableCom.THead>Slug</TableCom.THead>
                                        <TableCom.THead>Action</TableCom.THead>
                                    </TableCom.TRow>
                                </TableCom.THeader>

                                {filteredData1?.map((item, index) => (
                                    <TableCom.TBody key={item.id}>
                                        <TableCom.TRow>
                                            <TableCom.TCell>
                                                {(metaCategory.current_page -
                                                    1) *
                                                    metaCategory.per_page +
                                                    index +
                                                    1}
                                            </TableCom.TCell>
                                            <TableCom.TCell>
                                                {item.category}
                                            </TableCom.TCell>
                                            <TableCom.TCell>
                                                {item.slug}
                                            </TableCom.TCell>
                                            <TableCom.TCell>
                                                <Button
                                                    onClick={() =>
                                                        deleteData(
                                                            "category",
                                                            item.id
                                                        )
                                                    }
                                                    className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                                >
                                                    <IconTrash />
                                                </Button>
                                            </TableCom.TCell>
                                        </TableCom.TRow>
                                    </TableCom.TBody>
                                ))}
                            </TableCom>
                            <Pagination
                                meta={metaCategory}
                                links={linksCategory}
                            />
                        </div>

                        {/* Tags */}
                        <div>
                            <div className="flex justify-between items-center">
                                <h4 className="text-base">Tags</h4>
                                <div className="py-3 px-4">
                                    <div className="relative max-w-xs">
                                        <label
                                            htmlFor="hs-table-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <input
                                            type="text"
                                            value={searchName}
                                            onChange={handleNameChange}
                                            id="hs-table-search"
                                            className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            placeholder={`Search for Tags`}
                                        />
                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                                            <svg
                                                className="h-3.5 w-3.5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <TableCom>
                                <TableCom.THeader>
                                    <TableCom.TRow>
                                        <TableCom.THead>No</TableCom.THead>
                                        <TableCom.THead>Name</TableCom.THead>
                                        <TableCom.THead>Slug</TableCom.THead>
                                        <TableCom.THead>Action</TableCom.THead>
                                    </TableCom.TRow>
                                </TableCom.THeader>

                                {filteredData2?.map((item, index) => (
                                    <TableCom.TBody key={item.id}>
                                        <TableCom.TRow>
                                            <TableCom.TCell>
                                                {(metaTags.current_page - 1) *
                                                    metaTags.per_page +
                                                    index +
                                                    1}
                                            </TableCom.TCell>
                                            <TableCom.TCell>
                                                {item.name}
                                            </TableCom.TCell>
                                            <TableCom.TCell>
                                                {item.slug}
                                            </TableCom.TCell>
                                            <TableCom.TCell>
                                                <Button
                                                    onClick={() =>
                                                        deleteData(
                                                            "tag",
                                                            item.id
                                                        )
                                                    }
                                                    className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                                >
                                                    <IconTrash />
                                                </Button>
                                            </TableCom.TCell>
                                        </TableCom.TRow>
                                    </TableCom.TBody>
                                ))}
                            </TableCom>
                            <Pagination meta={metaTags} links={linksTags} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

CategoriesTags.layout = (page) => (
    <DashboardLayout
        children={page}
        title="Dashboard"
        user={page.props.auth.user}
        header={
            <h2 className="items-center font-semibold text-lg text-white lg:text-gray-900">
                <Link
                    href={route("dashboard.blog.index")}
                    className="hover:text-indigo-600"
                >
                    Blog
                </Link>
                <span className="font-medium"> / </span>
                Categories & Tags
            </h2>
        }
    />
);
