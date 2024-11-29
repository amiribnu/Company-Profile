import { Head, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import RelatedBlogs from "@/Components/Main/Blog/RelatedBlogs";
import "quill/dist/quill.snow.css";

export default function ProductDetail(props) {
    const page = usePage();
    const origin = page.props.ziggy.url;
    const url = page.props.ziggy.location;
    
    const blog = props.posts.data;
    
    return (
        <div className="mt-[85px]">
            <Head>
                <title>{blog.title}</title>

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="title" content={blog.title} />
                <meta name="description" content={blog.short_desc} />
                <meta name="author" content={blog.author?.author_name} />
                <meta
                    name="keywords"
                    content={blog.tags.map((tag) => tag.tag_name)}
                />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={url} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.short_desc} />
                <meta property="og:image" content={`${origin}/storage/${blog?.image}`} />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={origin.split("//")[1]} />
                <meta property="twitter:url" content={url} />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.short_desc} />
                <meta
                    name="twitter:image"
                    content={`${origin}/storage/${blog?.image}`}
                />

                <link rel="icon" href="/assets/svg/favicon.svg" />
            </Head>

            {/* Body */}
            <>
                {/* Banner */}
                <div className="w-screen relative">
                    <p className="absolute ml-6 bg-gradient-to-tl from-[#5ADCE4] to-[#044DDC] text-white font-semibold text-sm md:text-base z-10 rounded-b-lg px-4 py-2">
                        {blog.categories?.category_name}
                    </p>
                    <img
                        className="object-cover h-[200px] sm:h-[300px] md:h-[320px] lg:h-[400px] xl:h-[450px] w-full"
                        src={`/storage/${blog?.image}`}
                        alt={blog.title}
                    />
                </div>
                {/* Body */}
                <div className="w-full lg:max-w-5xl mx-auto mt-5 md:mt-10">
                    <div className="flex px-4 md:px-6 lg:px-8 xl:px-4 items-center mb-6 md:mb-12">
                        <img
                            src="/storage/blog/assets/vHmWfRvLqptIsWh1mmDW6ZmcUs05hiwgz0QSBNYG.png"
                            className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full"
                            alt="Author"
                        />
                        <h3 className="font-medium ml-3 mr-4 text-base md:text-lg text-slate-900">
                            {blog.author?.author_name}
                        </h3>
                        <p className="text-xs md:text-sm">{blog.created_at}</p>
                    </div>
                    <h1 className="font-bold px-4 md:px-6 lg:px-8 xl:px-4 text-3xl md:text-5xl text-slate-900">
                        {blog.title}
                    </h1>
                    <div className="ql-snow my-5 md:my-10">
                        {/* {blog.body} */}
                        <div
                            className="ql-editor font-medium text-sm md:text-base text-slate-800"
                            dangerouslySetInnerHTML={{ __html: blog.body }}
                        />
                    </div>
                </div>
                <div>
                    <RelatedBlogs categoryId={blog.categories?.id} />
                </div>
            </>
        </div>
    );
}

ProductDetail.layout = (page) => <MainLayout children={page} />;
