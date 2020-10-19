import styled from 'styled-components';

import bursts from '../../assets/svg/bursts.svg';
import burstsTablet from '../../assets/svg/bursts-tablet.svg';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 70vh;

    .headerSignup{
        max-width: 450px;
        padding: 40px 0px 32px;
        display: flex;
        flex-direction: column;

        a{
            text-align: center;
            color: rgb(0, 0, 0);
            text-decoration: none;

            svg {
                height: 40px;
            }
        }

        h2{
            margin-top: 40px;
            text-align: center;
            line-height: 36px;
            letter-spacing: -0.04em;
        }
    }


    #container-boots{        
        max-width: 450px;
        margin: 0px auto;
        padding-bottom: 130px;
    }

    .row{
        margin-left:0;

        div:not(:first-child) {
            margin-left: 20px;
        }
    }

    .form_signup .SugnupButton {
        display: flex;
        justify-content: space-around;
        margin-bottom: 24px;

        button {
            cursor: pointer;
            width: 100%;
            border: 0px;
            border-radius: 500px;
            display: inline-block;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2px;
            line-height: 1;
            text-align: center;
            text-transform: uppercase;
            touch-action: manipulation;
            transition-duration: 33ms;
            transition-property: background-color, border-color, color, box-shadow, filter, transform;
            user-select: none;
            vertical-align: middle;
            transform: translate3d(0px, 0px, 0px);
            padding: 17px 48px;
            background-color: rgb(29, 185, 84);
            color: rgb(255, 255, 255);
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
