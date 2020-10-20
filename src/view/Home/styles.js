import styled from 'styled-components';

import bursts from '../../assets/svg/bursts.svg';
import burstsTablet from '../../assets/svg/bursts-tablet.svg';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 90vh;
  text-align: center;
  align-items: center;
  .content{

        h1{
            letter-spacing: -0.04em !important;

            /* responsive */
            @media (min-width: 768px) {
                color: #1ED760;
                font-size: 90px;
                margin-bottom: 40px;
            }

            @media (min-width: 1200px) {
                color: #1ED760;
                font-size: 142px;
                line-height: 166px;
                margin-bottom: 40px;
                width: 800px;
            }
            
        }

        h4{
            @media (min-width: 768px){
                color: #1ED760;
                font-size: 18px;
                margin-bottom: 40px;
            }
        }

    /* content responsive */
    @media(min-width:768px){
        padding-top: 0;
        width: 754px;
    }

    @media(min-width:1200px){
        padding-top: 0;
        width: auto;
    }

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
