import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Input } from "@/Components/ui/input";

function MultiSelectTags(props) {
    const [search, setSearch] = React.useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredOptions = props.tags?.filter(tag =>
        tag.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Listbox
            value={props.selectedTags} // Menggunakan props.selectedTags sebagai nilai yang akan ditampilkan
            onChange={props.setSelectedTags} // Menggunakan props.setSelectedTags sebagai fungsi untuk mengubah nilai yang dipilih
            multiple
        >
            <div className="relative">
                <Listbox.Button className="flex h-9 w-full md:w-[180px] items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mb-3 md:mb-0">
                    {props.selectedTags.length > 0 ? (
                        <span className="block truncate">
                            {" "}
                            {props.selectedTags.join(", ")}
                        </span>
                    ) : (
                        <span className="block text-gray-400 truncate">
                            Select Tags
                        </span>
                    )}
                    <CaretSortIcon className="h-4 w-4 opacity-50" />
                </Listbox.Button>
                <Transition
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-popover py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <div className="mb-2 px-3">
                            <Input
                                type="text"
                                placeholder="Search Tags"
                                value={search}
                                onChange={handleChange}
                            />
                        </div>
                        {filteredOptions?.map((tag) => (
                            <Listbox.Option
                                key={tag.id}
                                className="relative cursor-default select-none py-1.5 pl-10 pr-4 text-sm rounded-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                value={tag.name}
                            >
                                {({ selected }) => (
                                    <>
                                        {tag.name}
                                        {selected ? (
                                            <span className="absolute inset-y-0 right-2 flex items-center pl-3">
                                                <CheckIcon className="h-4 w-4" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}

export default MultiSelectTags;
