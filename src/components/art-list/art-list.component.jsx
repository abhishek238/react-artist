import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectArts} from '../../redux/art/art.selectors';
import ArtCard from "../art-card/art-card.component";
import {Row, Col, Dropdown, DropdownButton, ToggleButton, ButtonGroup} from "react-bootstrap";

const ArtList = ({arts}) => {

    const [artType, setArtType] = useState('1');
    const [sortTitle, setSortTitle] = useState('Highest Price');

    const artTypes = [
        {name: 'All', value: '1'},
        {name: 'For Sale', value: '2'},
    ];

    const getSortedArts = (arts) => {
        if (sortTitle === 'Lowest Price') {
            return arts.sort((a, b) => (a.price > b.price) ? 1 : -1)
        } else if (sortTitle === 'Name Ascending') {
            return arts.sort((a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1));
        } else if (sortTitle === 'Name Descending') {
            return arts.sort((a, b) => (a.name === b.name ? 0 : a.name < b.name ? 1 : -1));
        } else {
            return arts.sort((a, b) => (a.price < b.price) ? 1 : -1)
        }
    }

    return (
        <>
            <Row style={{marginBottom: '8px'}}>
                <Col style={{textAlign: 'left'}}>
                    <ButtonGroup toggle>
                        {artTypes.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={radio.value}
                                checked={artType === radio.value}
                                onChange={(e) => setArtType(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>
                <Col>
                    <DropdownButton variant="secondary" id="dropdown-item-button" title={sortTitle}
                                    onClick={(e) => setSortTitle(e.target.outerText)}>
                        <Dropdown.Item as="button">Lowest Price</Dropdown.Item>
                        <Dropdown.Item as="button">Highest Price</Dropdown.Item>
                        <Dropdown.Item as="button">Name Ascending</Dropdown.Item>
                        <Dropdown.Item as="button">Name Descending</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <Row>
                {getSortedArts(arts).map(art => (
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
