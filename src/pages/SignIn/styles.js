import styled from 'styled-components';

const primaryColor = '#FF577F';
const grey3 = '#212529'
const grey1 = '#868E96';
const error = '#E83F5B';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    .header__form{
        width: 25vw;
        display: flex;
        justify-content: center;
        margin: 1.5em;
    }
    
    form{
        width: 25vw;
        height: 70vh;
        background-color: ${grey3};
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form__title{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
        margin: 1.5em;
    }

    .input__container{
        display: flex;
        flex-direction: column;
        margin: .4em;

        p{
            color: ${error};
            font-size: 0.8em;
        }
    }

    label{
        margin: 0.5em 0;
    }

    input{
        width: 20vw;
        padding: .8em;
    }

    .btn__entrar{
        margin: 1em 0;

        button{
            color: #FFFFFF;
            background-color: ${primaryColor};
            padding: .8em;
            width: 20vw;
        }
    }

    .link{
        font-size: 12px;
        text-decoration: none;
        color: ${grey1};
    }

    .btn__container{
        margin: 1em 0;

        button{
            color: #FFFFFF;
            background-color: ${grey1};
            padding: .8em;
            width: 20vw;
        }
    }
`;
