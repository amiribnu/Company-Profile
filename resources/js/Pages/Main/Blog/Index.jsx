import BannerSection from "@/Components/Main/Blog/BannerSection";
import BlogListSection from "@/Components/Main/Blog/BlogListSection";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Index(props) {
    return (
        <>
            <Head title="Blog" />
            <div className="bg-slate-50">
                <BannerSection />
            </div>
            <BlogListSection categories={props.categories} />
        </>
    );
}

Index.layout = (page) => <MainLayout children={page} />;
