import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Button } from "@/Components/ui/button";
import { Filter, Loader2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/shadcn/ui/sheet";
import { useTranslation } from "react-i18next";

const BlogListSection = ({ categories }) => {
    const { t } = useTranslation();
    const [blog, setBlog] = useState([]);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState("");
    const [isMax, setIsMax] = useState(false);
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        getBlogs();
    }, [page, category]);

    const getBlogs = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `/api/blog?limit=${limit}&page=${page}&category_id=${category}`
            );

            const fetchedData = page * limit;
            if (fetchedData >= response.data.total_data) {
                setIsMax(true);
            } else {
                setIsMax(false);
            }

            setBlog((prev) => [...prev, ...response.data.data]);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const changeCategory = (categoryId) => {
        setBlog([]);
        setCategory(categoryId);
        setPage(1);
        setDrawer(false);
    };

    return (
        <div className="w-full px-2 mx-auto mb-10 md:px-4 lg:px-8 xl:px-0 lg:max-w-7xl lg:mb-32">
            {/* Mobile Category filter */}
            <div className="block my-5 ml-8 lg:hidden">
                <Sheet open={drawer} onOpenChange={setDrawer}>
                    <SheetTrigger>
                        <Button disabled={isLoading} variant="primary">
                            {t("Filter")}
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 ml-2 text-white animate-spin" />
                            ) : (
                                <Filter className="w-4 h-4 ml-2" />
                            )}
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="flex flex-col space-y-5 mt-28">
                            <h4 className="font-semibold">
                                {t("Filter berdasarkan kategori")} :
                            </h4>
                            <Button
                                disabled={isLoading | (category === "")}
                                variant="primary"
                                onClick={() => changeCategory("")}
                                className={
                                    category === ""
                                        ? "bg-gradient-to-bl from-[#000000] to-[#044DDC]"
                                        : "bg-gradient-to-tl from-[#5ADCE4] to-[#044DDC]"
                                }
                            >
                                {t("Semua")}
                            </Button>
                            {categories.map((_category) => (
                                <Button
                                    key={_category.id}
                                    disabled={
                                        isLoading | (category === _category.id)
                                    }
                                    variant="primary"
                                    onClick={() => changeCategory(_category.id)}
                                    className={
                                        category === _category.id
                                            ? "bg-gradient-to-bl from-[#000000] to-[#044DDC]"
                                            : "bg-gradient-to-tl from-[#5ADCE4] to-[#044DDC]"
                                    }
                                >
                                    {_category.category}
                                </Button>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Category filter */}
            <div className="items-center hidden my-10 space-x-4 lg:flex">
                <Button
                    disabled={isLoading | (category === "")}
                    variant="primary"
                    onClick={() => changeCategory("")}
                    className={
                        category === ""
                            ? "bg-gradient-to-bl from-[#000000] to-[#044DDC]"
                            : "bg-gradient-to-tl from-[#5ADCE4] to-[#044DDC]"
                    }
                >
                    {isLoading ? (
                        <Loader2 className="text-white w-7 h-7 animate-spin" />
                    ) : (
                        `${t("Semua")}`
                    )}
                </Button>
                {categories.map((_category) => (
                    <Button
                        key={_category.id}
                        disabled={isLoading | (category === _category.id)}
                        variant="primary"
                        onClick={() => changeCategory(_category.id)}
                        className={
                            category === _category.id
                                ? "bg-gradient-to-bl from-[#000000] to-[#044DDC]"
                                : "bg-gradient-to-tl from-[#5ADCE4] to-[#044DDC]"
                        }
                    >
                        {_category.category}
                    </Button>
                ))}
            </div>
            {/* Blogs */}
            <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {blog.map((data) => (
                    <div key={data.id}>
                        <BlogCard {...data} />
                    </div>
                ))}
            </div>

            {isLoading && (
                <div className="flex items-center justify-center h-60">
                    <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                </div>
            )}

            <div className="flex items-center justify-center mt-10">
                {isMax ? (
                    <p className="px-8 py-6 text-lg font-semibold text-slate-500">
                        {t("Semua blog telah ditampilkan")}
                    </p>
                ) : (
                    <Button
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={isLoading}
                        variant="primary"
                        className="px-8 py-6 text-lg font-semibold"
                    >
                        {t("Muat lebih banyak")}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default BlogListSection;
