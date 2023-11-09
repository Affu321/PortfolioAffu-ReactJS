import React from "react";
import CommitteeItem from "./CommitteeItem";

const data = [
    {
        year: 2023,
        title: 'Bali Startup Expo',
        duration: '5 Months',
        detail:
        'Bertanggung jawab dalam merencanakan, mengelola, dan melancarkan acara, Berinteraksi dengan tim, peserta, dan pemangku kepentingan'
    },
    {
        year: 2023,
        title: 'Primakara English Competition',
        duration: '5 Months',
        detail:
        'Bertanggung jawab dalam merencanakan, mengelola, dan melancarkan acara, Berinteraksi dengan tim, peserta, dan pemangku kepentingan'
    },
];
const Committee = () => {
    return(
        <div id='committee' className='max-w-[1040px] m-auto md:pl-2- p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Committee</h1>
             {data.map ((item, idx ) => (
             <CommitteeItem key={idx} year={item.year} title={item.title} duration={item.duration} detail={item.detail}/>
             ))}
        </div>
    );
};

export default Committee