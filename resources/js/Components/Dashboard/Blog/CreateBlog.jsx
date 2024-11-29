import AddCategoryOrTags from "@/Components/Dashboard/Blog/AddCategoryOrTags.jsx";
import MultiSelectTags from "@/Components/Dashboard/Blog/MultiSelectTags.jsx";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/shadcn/ui/tooltip";
import { router, useForm } from "@inertiajs/react";
import { IconInfoCircle } from "@tabler/icons-react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CreateBlog(props) {
    const { categories } = props;
    const [imagePreview, setImagePreview] = useState(null);
    const imageRef = React.useRef();
    const [selectedImage] = useState(null);
    const [title, setTitle] = useState("");
    const [short_desc, setShort_desc] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [isQuillContentEmpty, setIsQuillContentEmpty] = useState(true);
    const { data, setData, errors } = useForm({
        body: "",
    });
    const [selectedTags, setSelectedTags] = React.useState([]);

    const toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }, { font: [] }, { align: [] }],
        ["link", "image", "video"],
    ];
    const quillRef = React.useRef(null);
    React.useEffect(() => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current, {
                placeholder: "Write something awesome ...........",
                theme: "snow",
                formats: [
                    "background",
                    "bold",
                    "color",
                    "font",
                    "code",
                    "italic",
                    "link",
                    "size",
                    "strike",
                    "script",
                    "underline",
                    "blockquote",
                    "header",
                    "indent",
                    "list",
                    "align",
                    "direction",
                    "code-block",
                    "image",
                    "video",
                ],
                modules: {
                    toolbar: toolbarOptions,
                },
            });
            quill.on("text-change", () => {
                const html = quill.root.innerHTML;
                setData("body", html);
                setIsQuillContentEmpty(html.trim() === "");
            });
        }
    }, []);

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

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("short_desc", short_desc);
        formData.append("category_id", category_id);
        formData.append("tags", selectedTags);

        for (let key in data) {
            formData.append(key, data[key]);
        }
        if (imageRef.current.files[0]) {
            formData.append("image", imageRef.current.files[0]);
        }

        router.post(route("dashboard.blog.store"), formData, {
            // notif
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data berhasil ditambahkan",
                    showConfirmButton: true,
                    timer: 2500,
                });
            },
            onError: (errors) => {
                let errorMessages = [];

                for (const [key, value] of Object.entries(errors)) {
                    errorMessages.push(value);
                }

                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error, Something went wrong!",
                    text: errorMessages[0],
                    showConfirmButton: true,
                });
            },
        });
    }

    return (
        <>
            <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Card */}
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            Create new Post
                        </h2>
                    </div>
                    <form
                        name="createForm"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        className="form-inline"
                    >
                        {/* Grid */}
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                            {/* Title */}
                            <div className="sm:col-span-2">
                                <Label htmlFor="title">Title</Label>
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
                                            <p>Title is required</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="sm:col-span-10">
                                <Input
                                    placeholder="Masukkan Judul artikel"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="inline-block text-sm font-medium text-gray-500 "
                                />
                            </div>
                            {/* End Title */}

                            {/* Category */}
                            <div className="sm:col-span-2">
                                <Label htmlFor="title">Category & Tags</Label>
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
                                            <p>Category is required</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="sm:col-span-10 flex flex-col md:flex-row md:space-x-5">
                                <select
                                    className="flex h-9 md:w-[180px] items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mb-3 md:mb-0"
                                    id="category_id"
                                    name="category_id"
                                    value={category_id}
                                    onChange={(e) =>
                                        setCategory_id(e.target.value)
                                    }
                                >
                                    <option className="bg-white" value="">
                                        Select Category
                                    </option>
                                    {categories.map((category) => (
                                        <option
                                            className="bg-white"
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.category}
                                        </option>
                                    ))}
                                </select>

                                {/* Tags */}
                                <MultiSelectTags
                                    tags={props.tags}
                                    selectedTags={selectedTags}
                                    setSelectedTags={setSelectedTags}
                                />

                                {/* Add Category Or Tags*/}
                                <AddCategoryOrTags />

                                <span className="text-red-600">
                                    {errors.category_id}
                                </span>
                            </div>
                            {/* End Category */}

                            {/* short desc */}
                            <div className="sm:col-span-2">
                                <Label htmlFor="short_desc">
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
                                    placeholder="Masukkan Deskripsi Singkat"
                                    type="text"
                                    id="short_desc"
                                    name="short_desc"
                                    value={short_desc}
                                    onChange={(e) =>
                                        setShort_desc(e.target.value)
                                    }
                                    className="inline-block text-sm font-medium text-gray-500 "
                                />
                            </div>
                            {/* End short desc */}

                            {/* Textarea */}
                            <div className="sm:col-span-2">
                                <label className="inline-block text-sm text-gray-800  dark:text-gray-200">
                                    Body (Content)
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
                                            <p>Body is required</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="sm:col-span-10 form-group mb-40 w-full md:mb-16 max-w-xs  md:max-w-md xl:max-w-7xl">
                                <div ref={quillRef}></div>
                                <span className="text-red-600">
                                    {errors.body}
                                </span>
                            </div>
                            {/* End Textarea */}

                            {/* Image */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="image"
                                    className="inline-block text-sm text-gray-800  dark:text-gray-200"
                                >
                                    Image (Thumbnail)
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
                                {selectedImage && (
                                    <p>Selected Image: {selectedImage.name}</p>
                                )}
                                <span className="text-red-600">
                                    {errors.image}
                                </span>
                                {imagePreview && (
                                    <div className="mt-3">
                                        <img
                                            src={imagePreview}
                                            alt="Image Preview"
                                            className="object-cover h-48"
                                        />
                                        <button
                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                            onClick={() => {
                                                setImagePreview(null);
                                                imageRef.current.value = null; // Menghapus nilai input file
                                            }}
                                        >
                                            Remove Image
                                        </button>
                                    </div>
                                )}
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
