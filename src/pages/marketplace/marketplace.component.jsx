import React from 'react';
import {connect} from 'react-redux';
import {selectArtForPreview} from '../../redux/art/art.selectors';

import {
    MarketplacePageContainer,
} from './marketplace.styles';
import ArtFullPreview from "../../components/art-full-preview/art-full-preview.component";
import {selectArtistForPreview} from "../../redux/artist/artist.selectors";
import {Col, Row} from "react-bootstrap";
import ArtList from "../../components/art-list/art-list.component";
import ArtistList from "../../components/artists-list/artist-list.component";

const MarketplacePage = ({art, artist}) => {

    return (
        <MarketplacePageContainer>
            <Row>
                <Col>
                    <ArtFullPreview art={art} artist={artist}/>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: "center", marginTop: '12px'}}>
                <Col xs={4}>
                    <ArtistList/>
                </Col>
                <Col xs={8}>
                    <ArtList/>
                </Col>
            </Row>
        </MarketplacePageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    art: selectArtForPreview(state),
    artist: selectArtistForPreview(state),
});

export default connect(mapStateToProps)(MarketplacePage);
