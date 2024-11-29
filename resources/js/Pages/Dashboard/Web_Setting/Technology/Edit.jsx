import DashboardLayout from "@/Layouts/DashboardLayout";
import React, { useState } from "react";
import { Head, Link, router, usePage, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/shadcn/ui/tooltip";
import { IconInfoCircle } from "@tabler/icons-react";
import { Button } from "@/shadcn/ui/button";
import ImagePreview from "@/Components/Dashboard/WebSetting/ImagePreview.jsx";

export default function EditTechnology(props) {
    const { technology } = usePage().props;
    const imageRef = React.useRef();
    const [imagePreview, setImagePreview] = useState(null);
    const [techCategory, setTechCategory] = useState(technology.tech_category);
    const { data, setData, errors } = useForm({
        card_name: "Technology",
        name: technology.name,
        short_description: technology.short_description,
        url: technology.url,
    });

    function handleSubmit(e) {
        e.preventDefault();

        const form = new FormData();
        for (let key in data) {
            form.append(key, data[key]);
        }
        form.append("tech_category", techCategory);
        form.append("image", imageRef.current?.files?.[0]);
        form.append("_method", "PUT"); // Specify the PUT method

        router.post(
            route("webSetting.update", { CmsIndex: technology.id }),
            form,
            {
                // notif
                onSuccess: () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Data berhasil di Update",
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

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Head title="Edit | Technology" />

            <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Card */}
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            Edit Technology
                        </h2>
                    </div>
                    <form
                        name="editForm"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        className="form-inline"
                    >
                        {/* Grid */}
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                            {/* Name */}
                            <div className="sm:col-span-2">
                                <Label htmlFor="name">Technology Name</Label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                className="ml-1"
                                            >
                                                <IconInfoCircle
                                                    size={18}
                                                    className="inline-block text-gray-500 dark:text-gray-600"
                                                />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Technology Name is required</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="sm:col-span-10">
                                <Input
                                    placeholder="Masukkan Nama Sertifikat "
                                    type="text"
                                    required
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="inline-block text-sm font-medium text-gray-500 "
                                />
                                <span className="text-red-600">
                                    {errors.name}
                                </span>
                            </div>
                            {/* End Name */}

                            {/* Tech Category */}
                            <div className="sm:col-span-2">
                                <Label htmlFor="name">Technology Category</Label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                className="ml-1"
                                            >
                                                <IconInfoCircle
                                                    size={18}
                                                    className="inline-block text-gray-500 dark:text-gray-600"
                                                />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Technology Category is required</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="sm:col-span-10">
                            <select
                                    className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mb-3 md:mb-0"
                                    id="techCategory"
                                    name="techCategory"
                                    value={techCategory}
                                    onChange={(e) =>
                                        setTechCategory(e.target.value)
                                    }
                                    required
                                >
                                    <option className="bg-white" value="">
                                        Select Technology Category
                                    </option>
                                        <option
                                            className="bg-white"
                                            value='Cybersecurity'
                                        >
                                            Cybersecurity
                                        </option>
                                        <option
                                            className="bg-white"
                                            value='Cloud Services'
                                        >
                                            Cloud Services
                                        </option>
                                        <option
                                            className="bg-white"
                                            value='Training Authorized'
                                        >
                                            Training Authorized
                                        </option>
                                        <option
                                            className="bg-white"
                                            value='IT Enterprise'
                                        >
                                            IT Enterprise
                                        </option>
                            </select>
                            </div>
                            {/* End Tech Category */}

                            {/* Short Description */}
                            <div className="sm:col-span-2">
                                <Label htmlFor="short_description">
                                    Short Description
                                </Label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                className="ml-1"
                                            >
                                                <IconInfoCircle
                                                    size={18}
                                                    className="inline-block text-gray-500 dark:text-gray-600"
                                                />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Short Description is required</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="sm:col-span-10">
                                <Input
                                    placeholder="Masukkan Deskripsi Singkat "
                                    type="text"
                                    required
                                    id="short_description"
                                    name="short_description"
                                    value={data.short_description}
                                    onChange={(e) =>
                                        setData(
                                            "short_description",
                                            e.target.value
                                        )
                                    }
                                    className="inline-block text-sm font-medium text-gray-500 "
                                />
                                <span className="text-red-600">
                                    {errors.short_description}
                                </span>
                            </div>
                            {/* End Short Description */}

                            {/* URL */}
                            <div className="sm:col-span-2">
                                <Label htmlFor="url">Url Link</Label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                className="ml-1"
                                            >
                                                <IconInfoCircle
                                                    size={18}
                                                    className="inline-block text-gray-500 dark:text-gray-600"
                                                />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>URL is required</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="sm:col-span-10">
                                <Input
                                    type="url"
                                    id="url"
                                    name="url"
                                    value={data.url != "null" ? data.url : ""}
                                    onChange={(e) =>
                                        setData("url", e.target.value)
                                    }
                                    className="inline-block text-sm font-medium text-gray-500 "
                                />
                                <span className="text-red-600">
                                    {errors.url}
                                </span>
                            </div>
                            {/* End URL */}

                            {/* Image */}
                            <div className="sm:col-span-2">
                                <label className="inline-block text-sm text-gray-800  dark:text-gray-200">
                                    Image
                                </label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                className="ml-1"
                                            >
                                                <IconInfoCircle
                                                    size={18}
                                                    className="inline-block text-gray-500 dark:text-gray-600"
                                                />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Image is required</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="sm:col-span-10">
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center gap-5">
                                        <div>
                                            <label className="py-2 px-3 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    id="image"
                                                    ref={imageRef}
                                                    onChange={handleImageChange}
                                                />
                                                <svg
                                                    className="w-3 h-3"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                                </svg>
                                                Upload photo
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <ImagePreview imagePreview={imagePreview} oldImage={technology.image} />
                            </div>
                            {/* End Image */}
                        </div>
                        {/* End Grid */}
                        <div className="mt-5 flex justify-end gap-x-2">
                            <Button type="submit" className="font-bold">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
                {/* End Card */}
            </div>
        </>
    );
}

EditTechnology.layout = (page) => (
    <DashboardLayout
        children={page}
        title="Dashboard"
        user={page.props.auth.user}
        header={
            <h2 className="items-center font-semibold text-xl text-white lg:text-gray-900">
                <Link
                    href={route("webSetting.index")}
                    className="hover:text-indigo-600"
                >
                    Technology
                </Link>
                <span className="font-medium"> / </span>
                Edit
            </h2>
        }
    />
);
