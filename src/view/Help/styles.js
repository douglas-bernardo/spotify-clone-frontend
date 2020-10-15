import styled from 'styled-components';

import bursts from '../../assets/svg/bursts.svg';
import burstsTablet from '../../assets/svg/bursts-tablet.svg';

export const Section = styled.section`
  height: 70vh;

    .ConteudoFaq {
        color: #FFF;
        button {
        text-decoration: none;        
        }
    }

    .card-header{
        background-color: #2D46B9;
    }

    .card-header button {
        color: white;
    }

    .card-body{
    color: black;
    }

    .card{
        border-style: none;
        border-top: 1px solid #999; 
    }

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