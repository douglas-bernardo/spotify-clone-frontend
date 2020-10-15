import styled from 'styled-components';

import bursts from '../../assets/svg/bursts.svg';
import burstsTablet from '../../assets/svg/bursts-tablet.svg';

export const Section = styled.section`
    height: 70vh;

    /* Section responsive */
    @media (min-width: 768px) {
        background: url(${burstsTablet}) no-repeat;
        background-size: 153%;
        background-position: right 40% center;
        justify-content: center;
    }

    @media (min-width: 1200px) {
        background: url(${bursts}) no-repeat;
        background-size: 175%;
        background-position: 46% 4%;
        justify-content: center;
        min-height: 846px;
    }
`;
