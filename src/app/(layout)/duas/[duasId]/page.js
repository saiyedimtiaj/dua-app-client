import Duas from '@/components/Duas/Duas';
import React from 'react';

const page = ({params}) => {
    return (
        <div>
            <Duas search={params?.duasId} />
        </div>
    );
};

export default page;