import React from 'react';
import Image from 'next/image';
import Card from '../layout/Card';

export const Product = () => {
    return (
        // <div className="bg-gray-100 my-4 rounded-md shadow-md  p-4 ">
        <Card>
            <div className='flex-col space-y-8'>
                <div className="grid items-center">
                    <Image src="/tiedye-removebg-preview.png" width={250} height={250} />
                </div>
                <div className="">
                    <p className="text-center text-xl">Rainbow Spiral</p>
                    <p className="text-center text-xl">Ksh.700</p>
                </div>
            </div>
        </Card>
        // </div>
    )
};
