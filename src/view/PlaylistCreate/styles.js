import styled from 'styled-components';

/** Create Playlist */
export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    /* padding-top: 16px; */
    padding: 0 32px 32px;
    margin: 0;


    .addMusic{
        background-color: transparent;
        border: 1px solid #535353;
        font-size: 12px;
        line-height: 18px;
        font-weight: 700;
        letter-spacing: 1.76px;
        text-transform: uppercase;
        border-radius: 500px;
        color: #fff;
        -webkit-transition: all 33ms cubic-bezier(.3,0,0,1);
        transition: all 33ms cubic-bezier(.3,0,0,1);
        will-change: transform;
        white-space: nowrap;
        padding: 8px 34px;
        display: inline-block;
        cursor: pointer;
        text-align: center;        
    }

    button:hover{
        transform: scale(1.06);
    }

`;


export const Banner = styled.div`
    position: relative;
    grid-column: 1/-1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 10px 10px;
    color: #FFF;
    min-height: 300px;
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5)));    
    background: linear-gradient(transparent,rgba(0,0,0,.5));
    background-color: rgb(83, 83, 83);

    img{
        width: 300px;
        box-shadow: 0 8px 24px rgba(0,0,0,.5);
    }

    .playlistCover{
        margin-right: 24px;
        align-self: flex-end;
        width: 192px;
        min-width: 192px;
        height: 192px;
    }


    .formCreatePanel{
        display: block;
        width:100%;
        max-width: 500px;
    }

    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        -webkit-box-shadow: 0 4px 60px rgba(0,0,0,.5);
        box-shadow: 0 4px 60px rgba(0,0,0,.5);
        background-color: #282828;
        color: #7f7f7f;

        svg{
            width: 48px;
            height: 48px;
        }
    }


    .btnSavePlaylist{
        position: absolute;
        right: 10px;
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
    }

    button:hover{
        transform: scale(1.06);
    }

`;

export const PanelMyMusics = styled.div`
    grid-column: 1/-1;
    padding: 10px 10px;
    margin-top: 20px;
    color: #FFF;

    table > thead > tr > th {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: .1em;
        border-top-width: 0;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
    }

`;


export const PanelAvailableMusics = styled.div`


    #searchBar{
        border-bottom: 1px solid hsla(0,0%,100%,.1);
    }

    #inputSearch{
        color: #000;
        padding: 6px 48px;
        height: 40px;
        width: 500px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-radius: 500px;
        text-overflow: ellipsis;
    }
`;