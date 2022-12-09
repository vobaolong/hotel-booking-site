import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import NewUser from './pages/new/NewUser';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import {
  hotelColumns,
  roomColumns,
  userColumns,
  tranColumns,
} from './datatablesource';
import NewHotel from './pages/hotel/newHotel/NewHotel';
import ListHotel from './pages/hotel/listHotel/ListHotel';
import NewRoom from './pages/room/newRoom/NewRoom';
import ListRoom from './pages/room/listRoom/ListRoom';
import UpdateHotel from './pages/hotel/updateHotel/UpdateHotel';
import EditRoom from './pages/room/EditRoom/EditRoom';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to='/login' />;
    }
    return children;
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path='users'>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=':userId'
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path='new'
                element={
                  <ProtectedRoute>
                    <NewUser />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path='hotels'>
              <Route index element={<ListHotel columns={hotelColumns} />} />
              <Route
                path='edit/:hotelId'
                element={
                  <ProtectedRoute>
                    <UpdateHotel />
                  </ProtectedRoute>
                }
              />
              <Route
                path=':hotelId'
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path='new'
                element={
                  <ProtectedRoute>
                    <NewHotel />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path='rooms'>
              <Route index element={<ListRoom columns={roomColumns} />} />
              <Route
                path='edit/:roomId'
                element={
                  <ProtectedRoute>
                    <EditRoom />
                  </ProtectedRoute>
                }
              />
              <Route
                path=':roomId'
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path='new'
                element={
                  <ProtectedRoute>
                    <NewRoom />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path='transactions'>
              <Route index element={<List columns={tranColumns} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
