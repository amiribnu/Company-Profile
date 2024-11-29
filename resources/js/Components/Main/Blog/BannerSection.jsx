import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BannerSection = () => {
    const { t } = useTranslation();
    const [blog, setBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("/api/blog?limit=1");
            setBlog(response.data.data[0]);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full px-2 mx-auto md:px-4 lg:px-8 xl:px-0 lg:max-w-7xl md:mb-10">
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                </div>
            ) : (
                <div className="flex flex-col-reverse pt-[80px] md:pt-[100px] lg:pb-[100px] lg:pt-[150px] lg:flex-row items-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-5">
                    {/* Heading */}
                    <div className="flex flex-col items-start w-full px-4 pt-5 mb-8 lg:w-1/2 lg:mb-0 sm:pt-10 lg:pt-0">
                        <h1 className="text-4xl font-extrabold">
                            {blog.title}
                        </h1>
                        <p className="mt-2 mb-4 sm:mt-4 sm:mb-8 text-sm lg:w-[80%] sm:text-md text-slate-600">
                            {blog.short_desc}
                        </p>
                        <Link href={`/blog/${blog.slug}`}>
                            <Button
                                variant="primary"
                                className="px-8 py-6 text-lg font-semibold bg-blue-500 hover:bg-blue-600"
                            >
                                {t("Baca selengkapnya")}
                            </Button>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="w-full px-4 lg:w-1/2">
                        <img
                            className="rounded-xl"
                            src={`/storage/${blog.image}`}
                            alt="Blog Image"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BannerSection;
