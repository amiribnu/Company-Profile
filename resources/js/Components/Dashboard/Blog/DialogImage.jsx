import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/shadcn/ui/dialog.jsx";
import { usePage } from "@inertiajs/react";
import { IconPhoto } from "@tabler/icons-react";


const DialogImage = ({ img }) => {
    const page = usePage();
    const origin = page.props.ziggy.url;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="px-6 py-1.5">
                    <div className="py-1 px-2 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm">
                        <IconPhoto />
                        View
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className={"lg:max-w-2xl max-h-screen px-10"}>
                <div>
                    {img ? (
                        <img
                            src={`${origin}/storage/${img}`}
                            className="h-full w-full max-w-7xl"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex flex-col items-center">
                            <img src="/assets/svg/no-image.svg" alt="" />
                            <span>No Image</span>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogImage;
