import styled from 'styled-components';

const error = '#E83F5B';
const primaryColor = '#FF577F';
const grey1 = '#868E96';
const grey2 = '#343B41';
const grey3 = '#212529';
const grey0 = '#F8F9FA';

export const Container = styled.div`
  header{
    display: flex;
    justify-content: space-around;
    padding: 20px;

    button{
        background-color: ${grey3};
        color: ${grey0};
        padding: 10px;
        width: 60px;
    }
  }

  .userInfo{
    display: flex;
    justify-content: space-around;
    border: 1px solid ${grey3};
    padding: 40px;
  }

  .create__tech{
    display: flex;
    justify-content: space-around;
    padding: 20px;

    h3{
        font-size: 16px;
    }

    button{
        width: 32px;
        height: 32px;
        background-color: ${grey3};
        color: #FFFFFF;
    }
  }

  .techList__container{
    display: flex;
    justify-content: space-around;
  }
  
  .techList{
    overflow-y: scroll;
    background-color: ${grey3};
    border-radius: 5px;
    background-color: ${grey3};
    width: 720px;
    height: 316px;

      ::-webkit-scrollbar {
        width: 20px;
      }

      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #FFFFFF;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${primaryColor};
      }

  }

  .modal__container{
    position: fixed;
    top: 29%;
    left: 40%;
    border-radius: 10px;
  }

  .modal{
    width: 300px;
    height: 242px;
    background-color: ${grey3};
  }

  .modal__header{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: ${grey2};
    
    h3{
      font-size: 13px;
    }

    button{
      background-color: transparent;
      color: ${grey1}
    }
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
      background: ${primaryColor};
      color: #FFFFFF;
      padding: 10px;
      width: 250px;
      margin-top: 10px
    }
  }

  .input__container{
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 10px;
    
    p{
      color:${error}
    }

    input{
      padding: 5px;
      border: 1px solid #FFFFFF;
      color: #FFFFFF;
      margin-top: 10px;
    }

  }

  .select__container{
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 10px;

    p{
      color:${error}
    }
    
    select{
      padding: 5px;
      background-color: ${grey2};
      border: 1px solid #FFFFFF;
      color: #FFFFFF;
      margin-top: 10px;
    }
  }
`;
