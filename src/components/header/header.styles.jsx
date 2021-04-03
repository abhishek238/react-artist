import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
  padding: 20px;
  margin-bottom: 2px;
  background: black;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const OptionLink = styled(Link)`
  padding: 5% 32px;
`;