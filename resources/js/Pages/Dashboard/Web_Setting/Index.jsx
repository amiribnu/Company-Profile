import CardOverFlow from "@/Components/Dashboard/WebSetting/CardOverFlow.jsx";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, router } from "@inertiajs/react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Dashboard(props) {
    const { certificate, partnership, technology } = props;
    const [sectionToId, setSectionToId] = useState(null);
    const [sectionToCard_name, setSectionToCard_name] = useState("");

    function deletePost(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(
                    `${window.location.origin}/dashboard/web-setting/${id}`,
                    {
                        // notif
                        onSuccess: () => {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Data berhasil di Hapus",
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
        });
    }

    return (
        <>
            <Head title="Web Setting | Dashboard" />
            <div className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {/* Map Certificate */}
                    <div>
                        <fieldset className="space-y-4 border">
                            <div className="flex justify-between p-6">
                                <div className="text-gray-900">Certificate</div>
                                <div className="flex space-x-3">
                                    <a
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        href={route(
                                            "webSetting.certificate.create"
                                        )}
                                    >
                                        <IconPlus />
                                    </a>
                                    <button
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        onClick={() => {
                                            if (
                                                sectionToCard_name ===
                                                    "Certificate" &&
                                                sectionToId !== null
                                            ) {
                                                router.visit(
                                                    route(
                                                        "webSetting.certificate.edit",
                                                        {
                                                            CmsIndex:
                                                                sectionToId,
                                                        }
                                                    )
                                                );
                                            } else {
                                                Swal.fire({
                                                    position: "center",
                                                    icon: "error",
                                                    title: "Data belum dipilih!",
                                                    showConfirmButton: true,
                                                    timer: 2500,
                                                });
                                            }
                                        }}
                                    >
                                        <IconEdit />
                                    </button>
                                    <button
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        onClick={() => {
                                            if (
                                                sectionToId !== null &&
                                                sectionToCard_name ===
                                                    "Certificate"
                                            ) {
                                                deletePost(sectionToId);
                                            } else {
                                                Swal.fire({
                                                    position: "center",
                                                    icon: "error",
                                                    title: "Data belum dipilih!",
                                                    showConfirmButton: true,
                                                    timer: 2500,
                                                });
                                            }
                                        }}
                                    >
                                        <IconTrash />
                                    </button>
                                </div>
                            </div>
                            {/* Isi Card */}
                            <div className="max-h-[40rem] overflow-y-auto">
                                {certificate.map((item) => (
                                    <span key={item.id}>
                                        <CardOverFlow
                                            id={item.id}
                                            name={item.name}
                                            publisher_name={item.publisher_name}
                                            short_description={
                                                item.short_description
                                            }
                                            image={item.image}
                                            url={item.url}
                                            card_name={item.card_name}
                                            setSectionToId={setSectionToId}
                                            setSectionToCard_name={
                                                setSectionToCard_name
                                            }
                                        />
                                    </span>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    {/* Map Partners */}
                    <div>
                        <fieldset className="space-y-4 border">
                            <div className="flex justify-between p-6">
                                <div className="text-gray-900">Partnership</div>
                                <div className="flex space-x-3">
                                    <a
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        href={route(
                                            "webSetting.partnership.create"
                                        )}
                                    >
                                        <IconPlus />
                                    </a>
                                    <button
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        onClick={() => {
                                            if (
                                                sectionToCard_name ===
                                                    "Partnership" &&
                                                sectionToId !== null
                                            ) {
                                                router.visit(
                                                    route(
                                                        "webSetting.partnership.edit",
                                                        {
                                                            CmsIndex:
                                                                sectionToId,
                                                        }
                                                    )
                                                );
                                            } else {
                                                Swal.fire({
                                                    position: "center",
                                                    icon: "error",
                                                    title: "Data belum dipilih!",
                                                    showConfirmButton: true,
                                                    timer: 2500,
                                                });
                                            }
                                        }}
                                    >
                                        <IconEdit />
                                    </button>
                                    <button
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        onClick={() => {
                                            if (
                                                sectionToId !== null &&
                                                sectionToCard_name ===
                                                    "Partnership"
                                            ) {
                                                deletePost(sectionToId);
                                            } else {
                                                Swal.fire({
                                                    position: "center",
                                                    icon: "error",
                                                    title: "Data belum dipilih!",
                                                    showConfirmButton: true,
                                                    timer: 2500,
                                                });
                                            }
                                        }}
                                    >
                                        <IconTrash />
                                    </button>
                                </div>
                            </div>
                            {/* Isi Card */}
                            <div className="max-h-[40rem] overflow-y-auto">
                                {partnership.map((item) => (
                                    <span key={item.id}>
                                        <CardOverFlow
                                            id={item.id}
                                            name={item.name}
                                            publisher_name={item.publisher_name}
                                            short_description={
                                                item.short_description
                                            }
                                            image={item.image}
                                            url={item.url}
                                            card_name={item.card_name}
                                            setSectionToId={setSectionToId}
                                            setSectionToCard_name={
                                                setSectionToCard_name
                                            }
                                        />
                                    </span>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    {/* Map Technology */}
                    <div>
                        <fieldset className="space-y-4 border">
                            <div className="flex justify-between p-6">
                                <div className="text-gray-900">Technology</div>
                                <div className="flex space-x-3">
                                    <a
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        href={route(
                                            "webSetting.technology.create"
                                        )}
                                    >
                                        <IconPlus />
                                    </a>
                                    <button
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        onClick={() => {
                                            if (
                                                sectionToCard_name ===
                                                    "Technology" &&
                                                sectionToId !== null
                                            ) {
                                                router.visit(
                                                    route(
                                                        "webSetting.technology.edit",
                                                        {
                                                            CmsIndex:
                                                                sectionToId,
                                                        }
                                                    )
                                                );
                                            } else {
                                                Swal.fire({
                                                    position: "center",
                                                    icon: "error",
                                                    title: "Data belum dipilih!",
                                                    showConfirmButton: true,
                                                    timer: 2500,
                                                });
                                            }
                                        }}
                                    >
                                        <IconEdit />
                                    </button>
                                    <button
                                        className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm"
                                        onClick={() => {
                                            if (
                                                sectionToCard_name ===
                                                    "Technology" &&
                                                sectionToId !== null
                                            ) {
                                                deletePost(sectionToId);
                                            } else {
                                                Swal.fire({
                                                    position: "center",
                                                    icon: "error",
                                                    title: "Data belum dipilih!",
                                                    showConfirmButton: true,
                                                    timer: 2500,
                                                });
                                            }
                                        }}
                                    >
                                        <IconTrash />
                                    </button>
                                </div>
                            </div>
                            {/* Isi Card */}
                            <div className="max-h-[40rem] overflow-y-auto">
                                {technology.map((item) => (
                                    <span key={item.id}>
                                        <CardOverFlow
                                            id={item.id}
                                            name={item.name}
                                            publisher_name={item.publisher_name}
                                            short_description={
                                                item.short_description
                                            }
                                            image={item.image}
                                            url={item.url}
                                            card_name={item.card_name}
                                            setSectionToId={setSectionToId}
                                            setSectionToCard_name={
                                                setSectionToCard_name
                                            }
                                        />
                                    </span>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </div>
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
                Web Setting
            </h2>
        }
    />
);
