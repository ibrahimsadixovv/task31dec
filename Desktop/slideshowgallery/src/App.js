import React, { useState } from 'react';
import './App.css';
export function App() {


    const images = [
        { id: 0, value: "https://cdn.pixabay.com/photo/2020/12/02/01/06/chipmunk-5795916_960_720.jpg" },
        { id: 1, value: "https://cdn.pixabay.com/photo/2022/11/29/11/31/robin-7624340_960_720.jpg" },
        { id: 2, value: "https://cdn.pixabay.com/photo/2022/12/12/12/58/dog-7651002_960_720.jpg" },
    ];

    
    const [MainSlideData, setMainSlideData] = useState(images[0])
    const handleClick = (index) => {
        const slide = images[index];
        setMainSlideData(slide)
    }
    return (
        <div className='SlideshowGallery'>
            <img className='mainSlide' src={MainSlideData.value}
            />
            <div className='SelectableImages'>
                {
                    images.map((d, i) =>
                        <img key={d.id} src={d.value} onClick={() => handleClick(i)}
                        />
                    )
                }
            </div>
        </div>
    );
}