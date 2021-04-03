import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectArts} from '../../redux/art/art.selectors';
import ArtCard from "../art-card/art-card.component";
import {Row, Col, Dropdown, DropdownButton, ToggleButtonGroup, ToggleButton} from "react-bootstrap";

const ArtList = ({arts}) => {
    return (
        <>
            <Row style={{marginBottom: '8px'}}>
                <Col style={{textAlign: 'left'}}>
                    <ToggleButtonGroup type="checkbox" value={1}>
                        <ToggleButton variant="secondary"  value={1}>All</ToggleButton>
                        <ToggleButton variant="secondary" value={2}>For Sale</ToggleButton>
                    </ToggleButtonGroup>
                </Col>
                <Col>
                    <DropdownButton variant="secondary" id="dropdown-item-button" title="Highest Price">
                        <Dropdown.ItemText>Highest Price</Dropdown.ItemText>
                        <Dropdown.Item as="button">Lowest Price</Dropdown.Item>
                        <Dropdown.Item as="button">Highest Price</Dropdown.Item>
                        <Dropdown.Item as="button">Popular</Dropdown.Item>
                        <Dropdown.Item as="button">Trending</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <Row>
                {arts.map(art => (
                    <ArtCard key={art.id} art={art}/>
                ))}
            </Row>
        </>

    );
}

const mapStateToProps = createStructuredSelector({
    arts: selectArts
});

export default connect(mapStateToProps)(ArtList);
