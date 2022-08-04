import React from 'react';
import { Container } from './styles';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

function SignIn() {
  const history = useHistory()
  
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").matches(/\S+@\S+\.\S+/,'E-mail inválido'),
    password: yup.string().required("Senha obrigatória").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/, 'Ex: 123456Dn$')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmitFunction = (data) =>{
    if(data.email){

      axios.post('https://kenziehub.herokuapp.com/sessions',{
        email: data.email,
        password: data.password,
      })
      .then(response=>{
        const data = response.data
        const {user,token} = data

        if(response.status === 200){
          localStorage.setItem('token', token)
          localStorage.setItem('name', user.name)
          localStorage.setItem('modules', user.course_module)
          setTimeout(() => history.push(`/home`), 1000)
          toast.success('Logado com sucesso!')
        }
        
      })
      .catch(error=>{
        if(error.response.status === 401){
          toast.error('Email ou senha inválido!')

        }
      })
    }
  }

  return(
    <Container>
      <div className='header__form'>
        <h2>Kenzie Hub</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className='form__title'>
          <h3>Login</h3>
        </div>
        
        <div className='input__container'>
          <p htmlFor="">{errors.email?.message}</p>
          <label htmlFor="">E-mail</label>
          <input type="text" placeholder="Digite aqui seu e-mail" {...register('email')}/>
        </div>

        <div className='input__container'>
          <p htmlFor="">{errors.password?.message}</p>
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Digite aqui sua senha" {...register('password')}/>
        </div>

        <div className='btn__entrar'>
          <button type='submit'>Entrar</button>
        </div>

        <Link className='link' to='/signup'>Ainda não possui uma conta?</Link>
        
        <div className='btn__container'>
          <button type='submit' onClick={()=>history.push('/signup')}>Cadastre-se</button>
        </div>
      </form>
    </Container>
  )
}

export default SignIn;