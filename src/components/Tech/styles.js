import styled from "styled-components";

const grey4 = "#121214";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
  .tech {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${grey4};
    padding: 15px;
    border-radius: 5px;
    width: 680px;
    margin-top: 20px;
  }

  .tech__name {
    font-size: 13px;
}

.techAndTrash {
    display: flex;
    align-items: center;
    gap: 10px;
    
    p{
        font-size: 13px;

    }
  }

  .trash {
    color: #ffffff;
  }
  .trash:hover{
    cursor: pointer;
  }

`;
