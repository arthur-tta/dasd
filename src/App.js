import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Homepage from './features/homepage';
import Login from './features/auth/login';
import Signup from './features/auth/signup';
import Test from './features/test';
import Vocab from './features/vocab/vocab';
import Infor from './features/infor'
import TopicVocabs from './features/vocab/topicVocabs';
import ForgetPassword from './features/auth/forgetPassword';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/test' element={<Test />} />
          <Route path='/vocab' element={<Vocab />} />
          <Route path='/infor' element={<Infor />} />
          <Route path='/vocab/topic-vocabs' element={<TopicVocabs />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
