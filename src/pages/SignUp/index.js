import { Container } from './styles';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const history = useHistory()

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").matches(/\S+@\S+\.\S+/,'E-mail inválido'),
    password: yup.string().required("Senha obrigatória").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/, 'Ex: 123456Dn$'),
    confirmPassword: yup.string().required("Senha obrigatório"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    modules: yup.string().required("Módulo obrigatório")
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
  
      axios.post('https://kenziehub.herokuapp.com/users',{
          email: data.email,
          password: data.password,
          name: data.name,
          bio: data.bio,
          contact: data.contact,
          course_module: data.modules
      })
      .then((response)=>{
        console.log(response)
        if(response.status === 201){
          setTimeout(() => history.push(`/signin`), 1000)
          toast.success('Cadastro concluído!')
        }
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }

  return(
    <Container>
      <div className='header__form'>
        <h2>Kenzie Hub</h2>
        <button onClick={()=>history.push('/signin')}>Voltar</button>
      </div>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className='form__title'>
          <h3>Crie sua conta</h3>
          <p>Rápido e grátis, vamos nessa!</p>
        </div>
        
        <div className='input__container'>
          <p htmlFor="">{errors.name?.message}</p>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Digite aqui seu nome" {...register('name')}/>
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
        
        <div className='input__container'>
          <p htmlFor="">{errors.confirmPassword?.message}</p>
          <label htmlFor="">Confirmar Senha</label>
          <input type="password" placeholder="Digite novamente sua senha" {...register('confirmPassword')}/>
        </div>
        
        <div className='input__container'>
          <p htmlFor="">{errors.bio?.message}</p>
          <label htmlFor="">Bio</label>
          <input type="text" placeholder="Fale sobre você" {...register('bio')}/>
        </div>
        
        <div className='input__container'>
          <p htmlFor="">{errors.contact?.message}</p>
          <label htmlFor="">Contato</label>
          <input type="text" placeholder="Opção de contato" {...register('contact')}/>
        </div>
        
        <div className='select__container'>
          <p htmlFor="">{errors.modules?.message}</p>
          <select name="" id="" {...register('modules')}>
            <option >Primeiro Módulo (Introdução ao Frontend)</option>
            <option>Segundo Módulo (Frontend Avançado)</option>
            <option>Terceiro Módulo (Introdução ao Backend)</option>
            <option>Quarto Módulo (Backend Avançado)</option>
          </select>
        </div>
        
        <div className='btn__container'>
          <button type='submit'>Cadastrar</button>
        </div>
      </form>
    </Container>
  )
}

export default SignUp;