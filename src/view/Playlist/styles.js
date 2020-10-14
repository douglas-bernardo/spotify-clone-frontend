import styled from 'styled-components';

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    margin: 32px 32px;
    color: #FFF;



    .musicas{
        grid-column: 1/-1;
        padding: 10px 10px;
        color: #FFF;
    }
`;

export const Banner = styled.div`
    grid-column: 1/-1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 10px 10px;
    color: #FFF;
    min-height: 300px;
    

    img{
        width: 300px;
        box-shadow: 0 8px 24px rgba(0,0,0,.5);
    }

    div{

        margin-left: 16px;
        display: flex;
        flex-direction: column;

        h2{
            font-size: 12px;
            margin-top: 4px;
        }

        h1{
            padding: 0.08em 0px;
            font-size: 96px;
            line-height: 96px;
            visibility: visible;
        }

        p{
            padding: 0.08em 0px;
        }
    }    
`;

export const Musics = styled.div`
    grid-column: 1/-1;
    padding: 10px 10px;
    color: #FFF;
`;

export const ActionBar = styled.div`
    grid-column: 1/-1;
    padding: 10px 10px;
    color: #FFF;

    button{
        --size: 56px;
        margin-right: 32px;
        color: #fff;
        background-color: #1db954;
        font-size: 8px;
        border: 0;
        border-radius: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: var(--size);
        width: var(--size);
        min-width: var(--size);

    }
`;
