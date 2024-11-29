import { usePage } from "@inertiajs/react";

const CardOverFlow = (props) => {
    const page = usePage();
    const origin = page.props.ziggy.url;

    const {
        card_name,
        id,
        name,
        publisher_name,
        short_description,
        image,
        url,
        setSectionToId,
        setSectionToCard_name,
    } = props;

    const handleRadioChange = () => {
        setSectionToId(id);
        setSectionToCard_name(card_name);
    };

    return (
        <div className="max-h-96 overflow-y-auto">
            <input
                type="radio"
                name="DeliveryOption"
                value={id}
                id={`radio-${name}-${id}`}
                className="peer hidden"
                onChange={handleRadioChange}
            />
            <label
                htmlFor={`radio-${name}-${id}`}
                className="flex relative items-center p-4 bg-white shadow-xs cursor-pointer border-white border-2 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
            >
                <div className="p-3 mr-4 text-blue-500 bg-white">
                    <img
                        src={`${origin}/storage/${image}`}
                        alt={`${name}-${id}`}
                        className="object-cover h-10 w-10"
                    />
                </div>
                <div>
                    <p className="text-lg font-semibold text-gray-700">
                        {name}
                    </p>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        {short_description.length < 50
                            ? short_description
                            : `${short_description.slice(0, 50)}...`}
                    </p>
                </div>
            </label>
            {/*<div>*/}
            {/*    <input*/}
            {/*        type="radio"*/}
            {/*        name="DeliveryOption"*/}
            {/*        value={id}*/}
            {/*        id={`radio-${name}-${id}`}*/}
            {/*        className="peer hidden"*/}
            {/*        onChange={handleRadioChange}*/}
            {/*    />*/}

            {/*    <label*/}
            {/*        htmlFor={`radio-${name}-${id}`}*/}
            {/*        className="flex justify-between cursor-pointer rounded-lg border border-gray-100 bg-white p-2 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"*/}
            {/*    >*/}
            {/*        <div className="flex flex-col">*/}
            {/*            <p>{name}</p>*/}
            {/*            /!* Deskripsi *!/*/}
            {/*            <p className="text-gray-700">{short_description.length < 50 ? short_description : `${short_description.slice(0, 50)}...`}</p>*/}
            {/*        </div>*/}
            {/*        <img src={`${window.location.origin}/storage/${image}`} alt="" className="h-[4rem] w-h-[4rem]" />*/}
            {/*    </label>*/}
            {/*</div>*/}
        </div>
    );
};

export default CardOverFlow;
