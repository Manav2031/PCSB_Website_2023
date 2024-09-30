import React, { useState } from 'react';
import plus from '../assets/images/plusblack.svg';
import minus from '../assets/images/minusblack.svg';

export default function Accordian(props) {
    const [hidden, setHidden] = useState(true); 
    const [expand, setExpand] = useState(false); 

    const handleExpand = () => {
        setHidden(!hidden);
        setExpand(!expand);
    }

    return (
        <div>
            <div className="flex-col px-0 lg:px-2 py-2 bg-color1 text3">
                <div className="lg:mx-14">
                    <div className="title-box cursor-pointer flex justify-between items-center mb-8" onClick={handleExpand}>
                        <span className="title-name">{props.title}</span>
                        <div className="title-icon"><img src={expand ? minus : plus} alt='expand' className="xeniacard"/></div>
                    </div>
                    {!hidden && (
                        <ul className='px-5 lg:mx-14 lg:px-4 py-1 mt-8'>
                            {props.list.map((element, index) => (
                                <li key={index} className='list-disc px-2 text-sm lg:text-base text3 linesize2'>{element} <br/> <br/></li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}


