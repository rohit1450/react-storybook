import React from 'react';

interface Solution {
    name: string;
    description: string;
}

export interface LangProps {
    solutions: Solution[];
}

const Lang: React.FC<LangProps> = ({ solutions }) => {
    return (
        <div>
            {solutions.map((solution, index) => (
                <div key={index}>
                    <h3>{solution.name}</h3>
                    <p>{solution.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Lang;
