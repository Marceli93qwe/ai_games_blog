// ImageSlider.tsx
import React, {FC} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageSliderProps {
    images: { id: number; image: string }[];
}

export const ImageSlider: FC<ImageSliderProps> = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const sliderStyle: React.CSSProperties = {
        width: '80%',
        maxWidth: "960px",
        minHeight: '300px', // Ustaw minimalną wysokość kontenera slajdera
        display: 'flex',
        flexDirection: 'column',
        marginBottom: "3rem"
    };

    const imgStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        marginBottom: '10px'
        // Aby zachować proporcje obrazu
    };

    return (
        <div style={sliderStyle}>
            <Slider {...settings}>
                {images.map(({image, id}, index) => (
                    <div key={id}>
                        <img src={image} alt={`slide-${index}`} style={imgStyle}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

