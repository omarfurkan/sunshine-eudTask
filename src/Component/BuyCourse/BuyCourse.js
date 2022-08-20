import React from 'react';
import { useParams } from 'react-router-dom';

const BuyCourse = () => {
    let { id } = useParams();
    console.log(id)
    return (
        <div>
            <h1>buy course{id}</h1>
        </div>
    );
};

export default BuyCourse;