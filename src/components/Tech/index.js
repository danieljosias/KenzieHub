import React from "react";
import { Container } from "./styles";
import { BiTrash } from "react-icons/bi";
import {toast} from 'react-toastify'
import axios from 'axios'

function Tech({ name, status, id, techs, setTechs }) {
  
  function deleteTech() {
    const techId = localStorage.getItem('techId')
    const token = localStorage.getItem('token')

    axios.delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`,{
      headers: {Authorization: `Bearer ${token}`}
    })
    const result = techs.filter((tech, i) => {
      return id !== i;
    });

    setTechs(result);
    toast.success('Tecnologia removida!')

  }
  
  return (
    <Container>
        <div className="tech">
          <h3 className="tech__name">{name}</h3>
          <div className="techAndTrash">
            <p>{status}</p>
            <BiTrash className="trash" onClick={() => deleteTech()} />
          </div>
        </div>
    </Container>
  );
}

export default Tech;
