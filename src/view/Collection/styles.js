import styled from 'styled-components';


/** Playlist */

export const List =  styled.div`
    display: grid;
    grid-gap: 32px;
    padding-top: 16px;
    padding: 32px 32px;
    margin: 0;
    max-width: 1955px;
`;

export const PlaylistRow =  styled.section`
    display: flex;
    flex-direction: column;
    min-height: 300px;

    .genero{
        grid-column: 1/-1;
        padding: 10px 10px;
        color: #FFF;
        h1{
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            letter-spacing: -.04em;
            text-transform: none;            
        }
    }

    .list-genero{
        display: flex;
        flex-direction: row;
        padding: 10px 10px;
        grid-template-rows: repeat(auto-fit,186px);

        a:not(:first-child){
            margin-left: 10px;
        }

        a{
            text-decoration: none;
        }
    }

`;


export const Item =  styled.section`
    padding: 16px;
    background: #373737;
    border-radius: 4px;
    isolation: isolate;
    transition: background-color .3s ease;
    color: #FFFFFF;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;

        img{
            width: 150px;
            position: relative;
            margin-bottom: 16px;
            background-color: #333;
            box-shadow: 0 8px 24px rgba(0,0,0,.5);
        }

        small{
            white-space: nowrap;
            width: 12em;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #b3b3b3;
        }

    }
`;