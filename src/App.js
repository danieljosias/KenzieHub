import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes/index.js'
import GlobalStyle from './styles/global.js'

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes/>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/><ToastContainer />
    </>
  );
}
