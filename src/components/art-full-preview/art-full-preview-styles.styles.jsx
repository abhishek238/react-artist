import styled from 'styled-components';

export const ArtFullPreviewContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 340px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const FooterContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  text-align: center;
  position: absolute;
`;

export const NameContainer = styled.h1`
  font-size: 4rem;
  margin-bottom: 15px;
  color: white;
`;

export const SoldContainer = styled.span`
  color: white;
`;

export const PriceContainer = styled.h2`
  color: white;
`;