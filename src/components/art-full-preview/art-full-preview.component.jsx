import React from 'react';

import {
    ArtFullPreviewContainer,
    FooterContainer,
    BackgroundImage,
    NameContainer,
    SoldContainer,
    PriceContainer
} from './art-full-preview-styles.styles';
import {Image} from "react-bootstrap";

const ArtFullPreview = ({art, artist}) => {
    const {name, price, imageUrl} = art;
    const {imageUrl: artistImageUrl} = artist;

    return (
        <ArtFullPreviewContainer>
            <BackgroundImage className='image' imageUrl={`images/arts/${imageUrl}`}/>
            <FooterContainer>
                <NameContainer>{name}</NameContainer>
                <SoldContainer>Last Sold / 222 sold</SoldContainer>
                <PriceContainer>${price}</PriceContainer>
                <Image src={`images/artists/${artistImageUrl}`} roundedCircle style={{width: '48px', height: '48px'}}/>
            </FooterContainer>
        </ArtFullPreviewContainer>
    );
}

export default ArtFullPreview;