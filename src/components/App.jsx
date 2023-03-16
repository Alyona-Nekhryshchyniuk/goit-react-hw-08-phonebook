// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';
// import { selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/contacts"
          element={<PrivateRoute navPath="/register" element={<Contacts />} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
// navPath = '/register';
export default App;
