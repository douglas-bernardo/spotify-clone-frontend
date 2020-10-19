import styled from 'styled-components';

export const HeaderMenu = styled.header`
    width: 100;
    height: 80px;
    background: #000000; 
    font-size: 18px;
    color: #fff;
    padding: 10px 15px;

    .headerContainer{
        /* max-width: 900px; */
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        align-items: center;
        overflow:hidden;
        margin: 5px auto;
        padding: 0 15px;


        @media (min-width: 992px) {
            max-width: 970px;
        }

        @media (min-width: 1200px){
            max-width: 1170px;
        }

    }

    .headerBrand{
        float:left;
    }

    nav{
        float: right;
    }    

`;

export const Nav = styled.nav`

    ul{
        list-style: none;
        li{
            display: inline-block;
            padding: 10px 10px;
        }

        a{
            color: #FFF;
            text-decoration: none;
        }
    }

`;