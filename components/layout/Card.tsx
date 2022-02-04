import React from 'react';

const Card = (props: React.PropsWithChildren<{}>) => {
    return <div className="bg-gray-100 my-4 rounded-md shadow-md  p-4 ">
        {props.children}
    </div>;
};

export default Card;
