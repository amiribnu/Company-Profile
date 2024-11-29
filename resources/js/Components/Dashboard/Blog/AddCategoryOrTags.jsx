import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

function AddCategoryOrTags(props) {
    const [addCategories, setAddCategories] = useState("");
    const [addTags, setAddTags] = useState("");

    const handleCategoriesChange = (e) => {
        setAddCategories(e.target.value);
    };

    const handleTagsChange = (e) => {
        setAddTags(e.target.value);
    };

    function handleCategoriesOrTagsSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        if (addCategories) {
            formData.append("category", addCategories);
        }
        if (addTags) {
            formData.append("tag", addTags);
        }

        if (!addCategories && !addTags) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Input cannot be empty",
                showConfirmButton: true,
                timer: 2500,
            });
            return;
        }

        router.post(route("addCategoriesOrTags.store"), formData, {
            // notif
            onSuccess: () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data berhasil ditambahkan",
                    showConfirmButton: true,
                    timer: 1500,
                });
            },
        });
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Category Or Tags</DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Category</TabsTrigger>
                        <TabsTrigger value="password">Tags</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>Category</CardTitle>
                                <CardDescription>
                                    Make changes to your account here. Click
                                    save when you're done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name Category</Label>
                                    <Input
                                        placeholder="Masukkan Category..."
                                        type="text"
                                        required
                                        id="name"
                                        name="name"
                                        onChange={handleCategoriesChange}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handleCategoriesOrTagsSubmit}>
                                    Submit
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                            <CardHeader>
                                <CardTitle>Tags</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving,
                                    you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="tag">Name Tags</Label>
                                    <Input
                                        placeholder="Masukkan Tags..."
                                        type="text"
                                        required
                                        id="tag"
                                        name="tag"
                                        onChange={handleTagsChange}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handleCategoriesOrTagsSubmit}>
                                    Submit
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}

export default AddCategoryOrTags;
