import { Link } from "@inertiajs/react";
import { Clock3 } from "lucide-react";

const BlogCard = (data) => {
    return (
        <Link href={`/blog/${data.slug}`}>
            <div className="relative mx-auto shadow-lg group hover:shadow-2xl duration-300 transition-all rounded-xl text-start w-[300px] h-[420px] md:w-[350px] md:h-[450px] lg:w-[420px] lg:h-[507px] overflow-hidden cursor-pointer">
                <p className="absolute ml-2 bg-gradient-to-tl from-[#5ADCE4] to-[#044DDC] text-white font-semibold z-10 text-sm rounded-b-lg px-2 py-1">
                    {data.categories.category_name}
                </p>
                <img
                    src={`/storage/${data.image_thumbnail ? data.image_thumbnail : data.image}`}
                    alt={data.title}
                    className="object-cover h-[50%] w-full rounded-md group-hover:scale-105 duration-300 transition-all"
                />
                <div className="p-5">
                    <div className="flex space-x-2">
                        {data.tags.slice(0, 1).map((tag) => (
                            <p
                                className="text-sky-500 font-semibold text-sm lg:text-base"
                                key={tag.id}
                            >
                                #{tag.tag_name}
                            </p>
                        ))}
                        {data.tags.slice(1, 2).map((tag) => (
                            <p
                                className="text-yellow-300 font-semibold text-sm lg:text-base"
                                key={tag.id}
                            >
                                #{tag.tag_name}
                            </p>
                        ))}
                        {data.tags.slice(2, 3).map((tag) => (
                            <p
                                className="text-lime-400 font-semibold text-sm lg:text-base"
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

export default BlogCard;
