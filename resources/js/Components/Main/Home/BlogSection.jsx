import axios from "axios";
import { Clock3, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@inertiajs/react";
import "swiper/css";
import { Button } from "@/Components/ui/button";
import { useTranslation } from "react-i18next";

const BlogSection = () => {
    const { t } = useTranslation();
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/api/blog");
            setDatas(response.data.data);
        } catch (error) {
            console.log(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto text-center my-12 md:my-20">
            <div className="px-4 flex flex-col items-center justify-center">
                <img src="assets/svg/deco-line-blue.svg" />
                <h2 className="text-4xl mt-6 mb-4">Blog</h2>
                <h2 className="font-bold text-4xl">{t("Artikel")}</h2>
            </div>
            {isError && (
                <h4 className="my-40 mx-auto text-3xl text-red-500 font-semibold">
                    Something went wrong...
                </h4>
            )}
            <div className="flex items-center mt-10 justify-center">
                {isLoading ? (
                    <div className="my-40">
                        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                    </div>
                ) : (
                    <Swiper
                        grabCursor
                        slidesPerView={"auto"}
                        className="mySwiper"
                    >
                        {datas.map((data) => (
                            <SwiperSlide className="blog-swiper-slide" key={data.id}>
                                <BlogCard {...data} />
                            </SwiperSlide>
                        ))}
                        <div className="pb-10 md:pb-16" />
                    </Swiper>
                )}
            </div>

            <Link href="/blog">
                <Button
                    variant="primary"
                    className="text-lg py-6 px-8 font-semibold"
                >
                    {t("Baca lebih banyak")}
                </Button>
            </Link>
        </div>
    );
};

const BlogCard = (data) => {
    return (
        <Link href={`/blog/${data.slug}`}>
            <div className="relative shadow-lg group hover:shadow-2xl duration-300 transition-all rounded-xl text-start w-[300px] min-h-[450px] overflow-hidden cursor-pointer">
                <img
                    src={`/storage/${data.image_thumbnail ? data.image_thumbnail : data.image}`}
                    alt={data.title}
                    className="object-cover h-[224px] w-full rounded-md group-hover:scale-105 duration-300 transition-all"
                />
                <div className="p-5">
                    <div className="flex space-x-2">
                        {data.tags.slice(0, 1).map((tag) => (
                            <p
                                className="text-sky-500 font-semibold text-sm"
                                key={tag.id}
                            >
                                #{tag.tag_name}
                            </p>
                        ))}
                        {data.tags.slice(1, 2).map((tag) => (
                            <p
                                className="text-yellow-300 font-semibold text-sm"
                                key={tag.id}
                            >
                                #{tag.tag_name}
                            </p>
                        ))}
                        {data.tags.slice(2, 3).map((tag) => (
                            <p
                                className="text-lime-400 font-semibold text-sm"
                                key={tag.id}
                            >
                                #{tag.tag_name}
                            </p>
                        ))}
                    </div>
                    <h3 className="font-bold text-xl text-start py-3 group-hover:text-blue-500 transition-all duration-300">
                        {data.title}
                    </h3>
                    <p className="text-slate-500 line-clamp-2 mb-10">
                        {data.short_desc}
                    </p>
                </div>
                <div className="text-sm px-5 absolute bottom-4 md:bottom-6 lg:bottom-8 text-slate-400 flex space-x-1 items-center">
                    <Clock3 className="h-4 w-4" />
                    <p>{data.created_at}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogSection;
