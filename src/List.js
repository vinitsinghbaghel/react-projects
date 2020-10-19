import React, { useState } from 'react';
import data from './data';

const List = ({ people }) => {

    return (
        <div>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="person">
                        <img src={image} />
                        <div>
                            <h2>{name}</h2>
                            <h3>{age} years</h3>
                        </div>
                    </article>
                )
            })}
        </div>
    );
};

export default List;