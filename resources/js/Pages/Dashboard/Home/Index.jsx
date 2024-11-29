import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {

    return (
        <>
            <Head title="Home | Dashboard" />

            <div>
                <div className="p-6 text-gray-900">Home</div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => (
    <DashboardLayout
        children={page}
        title="Dashboard"
        user={page.props.auth.user}
        header={
            <h2 className="items-center font-semibold text-lg text-white lg:text-gray-900">
                Home
            </h2>
        }
    />
);
