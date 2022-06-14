import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSelector from './components/MainSelector/MainSelector';
import PersContact from './components/Personal/PersContact/PersContact';
import PersHome from './components/Personal/PersHome/PersHome';
import PersOther from './components/Personal/PersOther/PersOther';
import Restaurant from './components/Restaurant/Restaurant';

const bioItems = [
  `Nací en Sueca, una pequeña ciudad de Valencia rodeada de arrozales 🌾🌾 y naranjos 🍊🍊, en una familia dedicada al cultivo 🚜 del arroz 🌾 desde hace siglos ⌛.`,
  `Mis grandes pasiones son la informática 🖥️ y la educación 👨‍🏫.`,
  `Comencé con los ordenadores a finales de los años 80 (con un MSX... ¡qué tiempos!), y me he dedicado a aprender por mi cuenta varios lenguajes, aplicaciones y gestores de contenido: BASIC, ObjectPascal, C, HTML, Python, PHP, MySQL, SQLite, JavaScript, CSS; Delphi, Lazarus, C++Builder, HotMetal, RPGMaker, GIMP, Ren’Py, WordPress, CPanel, moodle, CSS, Nodejs, Express, MongoDB, Sequelize, XML, Mongoose, React...`,
  `He realizado aplicaciones web de aprendizaje y he colaborado con la gestión informática de varios proyectos académicos.`,
  `Soy Doctor en Ciencias Bíblicas 📖, y he sido docente universitario 🎓 durante 16 años en Barcelona y Roma.`
];

const fakeDB = {
  users: [],
  loadUsers: function() {
    this.users = localStorage.S5_users ? JSON.parse(localStorage.S5_users) : [];
    },
  saveUser: function(user) {
    this.loadUsers();
    this.users.unshift(user);
    localStorage.S5_users = JSON.stringify(this.users);
  },
}

function App() {
  return (
    <>
      <BrowserRouter>
        <MainSelector />
        <Routes>
          <Route path="/" element={null} />
          <Route
            path="/personal"
            element={<PersHome bioItems={bioItems} db={fakeDB} />} />
          <Route path='/personal/contact' element={<PersContact db={fakeDB} />} />
          <Route path='/personal/other' element={<PersOther db={fakeDB} />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
