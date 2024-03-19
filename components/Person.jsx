// Person.jsx
import React from "react";

const Person = ({ name, spouse, children }) => {
    return (
        <div className="person border border-gray-300 p-4 m-2">
            <div className="name font-semibold">{name}</div>
            {spouse && <div className="spouse italic">{`Spouse: ${spouse}`}</div>}
            {children && (
                <div className="children mt-4">
                    {children.map((child, index) => (
                        <Person key={index} {...child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Person;
