import styled from 'styled-components';

/** Create Playlist */
export const Panel = styled.div`
     position: relative;
    display: flex;
    flex-direction: column;
    /* padding-top: 16px; */
    padding: 32px 32px;
    margin: 0;


    .btnEditProfile{
        position: absolute;
        right: 25px;
        background-color: #fff;
        color: #181818;
        font-size: 12px;
        line-height: 18px;
        font-weight: 700;
        letter-spacing: 1.76px;
        text-transform: uppercase;
        border: 2px solid transparent;
        border-radius: 500px;
        -webkit-transition: all 33ms cubic-bezier(.3,0,0,1);
        transition: all 33ms cubic-bezier(.3,0,0,1);
        will-change: transform;
        white-space: nowrap;
        padding: 8px 34px;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
    }

    a:hover{
        transform: scale(1.06);
    }

`;