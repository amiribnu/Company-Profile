import axios from "axios";
import { Clock3, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import "swiper/css/navigation";
import "swiper/css";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
const RelatedBlogs = ({ categoryId }) => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `/api/blog?category_id=${categoryId}&limit=4`
            );
            setDatas(response.data.data);
        } catch (error) {
            console.log(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-slate-50 border-y-2">
            <div className="mx-auto my-12 text-center max-w-7xl md:my-20">
                <div className="flex flex-col items-center justify-center px-4">
                    <h2 className="text-4xl font-bold">{t("Blog Terkait")}</h2>
                </div>
                {isError && (
                    <h3 className="mx-auto my-40 text-3xl font-semibold text-red-500">
                        Something went wrong...
                    </h3>
                )}
                <div className="flex items-center justify-center mt-10">
                    {isLoading ? (
                        <div className="my-40">
                            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                        </div>
                    ) : (
                        <>
                            <div className="grid items-center justify-between grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {datas.map((data) => (
                                    <div key={data.id}>
                                        <BlogCard {...data} />
                                    </div>
                                ))}
                            </div>
                            <div className="pb-10 md:pb-16" />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

const BlogCard = (data) => {
    return (
        <Link href={`/blog/${data.slug}`}>
            <div className="relative bg-white shadow-lg group hover:shadow-2xl duration-300 transition-all rounded-xl text-start w-[300px] min-h-[450px] overflow-hidden cursor-pointer">
                <img
                    src={`/storage/${data.image}`}
                    alt={data.title}
                    className="object-cover h-[224px] w-full rounded-md group-hover:scale-105 duration-300 transition-all"
                />
                <div className="p-5">
                    <div className="flex space-x-2">
                        {data.tags.slice(0, 1).map((tag) => (
                            <p
                                className="text-sm font-semibold text-sky-500"
                                key={tag.id}
                            >
                                #{tag.tag_name}
                            </p>
                        ))}
                        {data.tags.slice(1, 2).map((tag) => (
                            <p
                                className="text-sm font-semibold text-yellow-300"
                                key={tag.id}
                            >
                                #{tag.tag_name}
                            </p>
                        ))}
                        {data.tags.slice(2, 3).map((tag) => (
                            <p
                                className="text-sm font-semibold text-lime-400"
                                key={tag.id}
                            >
                                #{tag.tag_name}
                            </p>
                        ))}
                    </div>
                    <h3 className="py-3 text-xl font-bold transition-all duration-300 text-start group-hover:text-blue-500">
                        {data.title}
                    </h3>
                    <p className="mb-10 text-slate-500 line-clamp-2">
                        {data.short_desc}
                    </p>
                </div>
                <div className="absolute flex items-center px-5 space-x-1 text-sm bottom-4 md:bottom-6 lg:bottom-8 text-slate-400">
                    <Clock3 className="w-4 h-4" />
                    <p>{data.created_at}</p>
                </div>
            </div>
        </Link>
    );
};

export default RelatedBlogs;
