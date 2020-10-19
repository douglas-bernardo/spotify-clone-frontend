import styled from 'styled-components';

export const ContainerFooter = styled.div`
    display: block;
    color: #FFF;

    footer{
        background: #000;
        padding: 80px 0 50px;

        a{
            text-decoration: none;
            color: #FFF;
        }

    }
`;


export const NavFooter = styled.nav`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;

    .navBrand{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15px;
        min-height: 346px;
        small{
            padding: 10px 15px;
        }
    }

    .topLinks{
        display: flex;
        flex-wrap: wrap;
        div{
            padding: 0 15px;
            margin: 0;
        }

        ul{
            list-style: none;
            li {
                padding: 10px 15px;
                color: #919496;
                font-size: 12px;
                font-weight: 900;
                line-height: 1.4;
                letter-spacing: .08em;
                
                & + li {
                    color: #FFF;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                    text-decoration: none;
                }
            }
        }

    }

    .socialIcons{

        ul{
            list-style: none;
            margin: 20px 0 0;
            padding: 0;

            li{
                display: inline-block;
                margin-right: 15px;

                a{
                    display: inline-flex;
                    -webkit-box-align: center;
                    justify-content: center;
                    align-items: center;                             
                    border-radius: 50%;
                    background-color: #222326;
                    width: 54px;
                    height: 54px;
                    overflow: hidden;
                    cursor: pointer;
                }
            }
        }

        @media (min-width: 992px){
            margin: 0 15px 0 auto;
        }

    }

    /** relativo ao nav */
    @media (min-width: 992px) {
        max-width: 970px;
    }

    @media (min-width: 1200px){
        max-width: 1170px;
    }

`;