import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout';
import Home from './pages/Home';
import PostForm from './components/PostForm';
import DetailPost from './components/DetailPost';

function App() {

  return (
    <div className='app'>
      <Routes >
        <Route path='/' element={<Layout />} >
          <Route exact path='/' element={<Home />} />
          <Route exact path='/posts/add' element={<PostForm />} />
          <Route exact path='/posts/:id' element={<DetailPost />} />
          <Route exact path='/posts/:id/update' element={<PostForm />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
