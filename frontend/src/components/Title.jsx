import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className="inline-flex items-center justify-center gap-3">
            <div className="w-10 h-[2px] bg-gray-700"></div>

            <h2 className="text-2xl md:text-3xl text-gray-500 uppercase tracking-wide">
                {text1}{" "}
                <span className="font-semibold text-gray-800">
                    {text2}
                </span>
            </h2>

            <div className="w-10 h-[2px] bg-gray-700"></div>
        </div>
    );
};

export default Title;