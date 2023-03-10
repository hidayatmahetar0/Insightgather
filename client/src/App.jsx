import { createContext, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import User from './pages/User'
export const MainContext = createContext();

function App() {
  return (
    <MainContext.Provider>
      <BrowserRouter>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Layout>

          <GithubProvider>

            <AlertProvider>

              <Routes>

                <Route path="/" exact element={<ProtectedRoute />}>
                  <Route path="/home" exact element={<Home />} />
                </Route>
                <Route path="/" exact element={<ProtectedRoute />}>
                  <Route path="/Dashboard" element={<Dashboard />} />
                </Route>
                <Route path='/user/:login' element={<User />} />
              </Routes>
            </AlertProvider>

          </GithubProvider>
        </Layout>
      </BrowserRouter>
    </MainContext.Provider>
  )
}

export default App
