import React from 'react';
import {Label} from "@/Components/ui/label.jsx";

function ImagePreview({imagePreview, oldImage}) {
    return (
        <div className={"py-10"}>
            {imagePreview && (
                <div>
                    {oldImage &&
                        <Label htmlFor="new">
                            New Image
                        </Label>
                    }
                    <img
                        src={imagePreview}
                        alt="Image Preview"
                        className="h-full w-full max-w-xs"
                    />
                </div>
            )}
            {oldImage && (<div className="mt-3 space-y-3">
                {imagePreview &&
                <Label htmlFor="old">
                    Old Image
                </Label>}
                <img
                    src={`/storage/${oldImage}`}
                    alt="Current Image"
                    className=" h-full w-full max-w-xs"
                    loading="lazy"
                />
            </div>)}
        </div>
    );
}

export default ImagePreview;
