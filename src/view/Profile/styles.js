import styled from 'styled-components';

/** Create Playlist */
export const Panel = styled.div`    
    display: flex;
    flex-direction: column;
    /* padding-top: 16px; */
    padding: 32px 32px;
    margin: 0;

    .editProfile{
        position: relative;
        margin-top: 20px;
        margin-left:0;
        width:100%;
        max-width: 700px;
    }

    .btnSaveProfileChanges{
        position: absolute;
        margin-top: 30px;
        right: 20px;
        cursor: pointer;
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

    a:hover{
        transform: scale(1.06);
    }

`;