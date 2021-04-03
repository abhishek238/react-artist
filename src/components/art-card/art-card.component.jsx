import React from 'react';
import {Card, Image} from "react-bootstrap";

const ArtCard = ({art, artist}) => {
    const {name, price, imageUrl} = art;

    return (
        <Card style={{width: '14rem', margin: '6px'}}>
            <Card.Img variant="top" style={{height: '200px'}} src={`images/arts/${imageUrl}`}/>
            <Card.Body style={{textAlign: 'left'}}>
                <span style={{fontSize: '16px'}}>{name}</span>
                <div>
                    <Image src={`images/artists/${art.artist.imageUrl}`} roundedCircle
                           style={{width: '24px', height: '24px', marginTop: '4px', marginBottom: '10px'}}/>
                    <span style={{marginLeft: '4px', fontSize: '14px'}}>{art.artist.name}</span>
                </div>
                <Card.Text style={{fontWeight: 'bold'}}>
                    ${price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ArtCard;