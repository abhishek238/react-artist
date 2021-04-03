import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Col, FormControl, Image, ListGroup, Row} from "react-bootstrap";
import {selectArtists} from "../../redux/artist/artist.selectors";

const ArtistList = ({artists}) => {

    const [localArtists, setLocalArtists] = useState(artists);
    const [inputVal, setInputVal] = useState('');

    const handleInputSearch = (e) => {
        e.preventDefault();
        setInputVal(e.target.value);
        setLocalArtists(artists.filter(a => a.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <Row>
            <Col lg={6} md={0}></Col>
            <Col lg={6} md={12} className={'pull-right'}>
                <h2 style={{textAlign: 'left', marginLeft: '16px'}}>Artists</h2>
                <FormControl
                    type="search"
                    value={inputVal}
                    onChange={handleInputSearch}
                    placeholder="search from 9,999 creators"
                    style={{width: '80%', margin: '14px 12px 16px'}}
                />
                <ListGroup variant="flush">
                    {localArtists.map(({id, name, imageUrl}) => (
                        <ListGroup.Item key={id} style={{textAlign: 'left', cursor: 'pointer'}}>
                            <Image src={`images/artists/${imageUrl}`} roundedCircle
                                   style={{width: '24px', height: '24px'}}/>
                            <span style={{fontWeight: 'bold', marginLeft: '6px'}}>{name}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>
    );
}

const mapStateToProps = createStructuredSelector({
    artists: selectArtists
});

export default connect(mapStateToProps)(ArtistList);