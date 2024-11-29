import React from "react";

const CardOverFlowCategory = (props) => {
    const { id, category, slug, setSectionToId } = props;

    const handleRadioChange = () => {
        setSectionToId(id);
    };

    return (
        <div className="max-h-96 overflow-y-auto">
            <div>
                <input
                    type="radio"
                    name="DeliveryOption"
                    value={id}
                    id={`radio-${category}-${id}`}
                    className="peer hidden"
                    onChange={handleRadioChange}
                />

                <label
                    htmlFor={`radio-${category}-${id}`}
                    className="flex justify-between cursor-pointer rounded-lg border border-gray-100 bg-white p-2 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                >
                    <div className="flex flex-col">
                        <p className="text-gray-700">{category}</p>
                    </div>
                        <p className="text-gray-500">{slug}</p>
                </label>
            </div>
        </div>
    );
};

export default CardOverFlowCategory;
