import styled from 'styled-components';

import iHome from '../../assets/svg/home.svg';
import iSearch from '../../assets/svg/search.svg';
import iLibrary from '../../assets/svg/library.svg';

/** Menu Lateral */
export const Aside = styled.aside`
    display:flex;
    justify-content:center;
    background: #000000;
    padding: 0 16px;
    color: #FFF;
    
`;

export const IconHome = styled.div`
    background: url(${iHome}) no-repeat;
    background-size:contain;
    margin-right: 10px;
    width:24px;
    height: 24px;
`;

export const IconSearch = styled.div`
    background: url(${iSearch}) no-repeat;
    background-size:contain;
    margin-right: 10px;
    width:24px;
    height: 24px;
`;

export const IconLibrary = styled.div`
    background: url(${iLibrary}) no-repeat;
    background-size:contain;
    margin-right: 10px;
    width:24px;
    height: 24px;
`;

export const SideMenu = styled.ul`
    list-style: none;
    
    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px 16px;
        width:auto;
        border-radius: 5px;

        a {
            text-decoration: none;
            display: block;
            width: 100%;
            height: 100%;
            color: #FFF;
        }
    }

    li:hover{
        background-color: #999;
    }

    #svgCreatePlaylist{
        margin-right: 16px;
        background: #fff;
        width: 32px;
        height: 32px;
        padding: 4px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        fill: #000;
    }

`;