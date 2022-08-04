import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import { Container } from './styles';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import Tech from '../../components/Tech/index.js';
import axios from 'axios';

function Home() {
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const [techs,setTechs] = useState([])

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    status: yup.string().required("Tecnologia obrigatória")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmitFunction = (data) =>{
    
    if(data.name){
      const token = localStorage.getItem('token')
      const dados = 
        {
          title: data.name,
          status: data.status
        }
      
      axios.post('https://kenziehub.herokuapp.com/users/techs', dados,{
        headers: {Authorization: `Bearer ${token}`}
      })
      .then(response =>{
        localStorage.setItem('techId',response.data.id) 
        setTechs([...techs,data])
        setIsOpen(false)
        toast.success('Tecnologia cadastrada!!')
      })
      .catch(error=>{
        if(error.response.status === 401){
          toast.error('Tecnologia já cadastrada!!')

        }
      })
      
    }
  }

  const name = localStorage.getItem('name')
  const modules = localStorage.getItem('modules')

  return(
    <Container>
      <header>
        <h2>Kenzie Hub</h2>
        <button onClick={()=> {
          history.push('/signin') 
          localStorage.clear()
          toast.success('Deslogado com sucesso!')
          }
        }
          >Sair</button>
      </header>

      <div className='userInfo'>
        <h3>Olá, {name}</h3>
        <p>{modules}</p>
      </div>

      <div className='create__tech'> 
        <h3>Tecnologias</h3>
        <button onClick={()=> setIsOpen(true)}>+</button>
      </div>

      <div className='techList__container'>
        <div className='techList'>
          {techs.map((tech,i)=>{
              return <Tech key={i} name={tech.name} status={tech.status} id={i} techs={techs} setTechs={setTechs}/>
          })}
        </div>
      </div>

      {isOpen === true? 
      
      <div className='modal__container'>
        <div className='modal'>
          <div className='modal__header'>
            <h3>Cadastrar Tecnologia</h3>
            <button onClick={()=> setIsOpen(false)}>X</button>
          </div>

          <form onSubmit={handleSubmit(onSubmitFunction)}>

            <div className='input__container'>
              <p>{errors.name?.message}</p>
              <label>Nome</label>
              <input type="text" placeholder='Digite sua tecnologogia' {...register('name')}/>
            </div>

            <div className='select__container'>
              <p htmlFor="">{errors.status?.message}</p>
              <label>Selecionar status</label>
              <select name="" id="" {...register('status')}>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </div>

            <button type='submit'>Cadastrar Tecnologia</button>

          </form>

        </div>
      </div>

      :

      ''
    }
      
    </Container>
  )
}

export default Home;