import styled from 'styled-components';
   
const primaryNegative = '#59323F';
const grey3 = '#212529'
const grey2 = '#343B41';
const grey1 = '#868E96';
const grey0 = '#F8F9FA';
const error = '#E83F5B';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    .header__form{
        width: 25vw;
        display: flex;
        justify-content: space-between;
        margin: 1.5em;
        
        button{
            background-color: ${grey3};
            color: ${grey0};
            font-weight: bold;
            padding: 0.7em;
        }
    }
    
    form{
        width: 25vw;
        height: 200vh;
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

        p{
            font-size: 0.8em;
        }
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

    .select__container{
        margin: 0.5em 0;
        height: 5vh;

        p{
            color: ${error};
            font-size: 0.8em;
        }

        select{
            background-color: ${grey2};
            color: ${grey1};
            width: 20vw;
            height: 6.5vh;
            margin: 0.5em 0;
        }
    }
    
    
    .btn__container{
        margin: 2.4em 0;

        button{
            color: #FFFFFF;
            background-color: ${primaryNegative};
            padding: .8em;
            width: 20vw;
        }
    }
`;
