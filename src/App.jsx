import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSelector from './components/MainSelector/MainSelector';
import MainCenter from './components/MainCenter/MainCenter';
import PersContact from './components/Personal/PersContact/PersContact';
import PersHome from './components/Personal/PersHome/PersHome';
import PersOther from './components/Personal/PersOther/PersOther';
import Restaurant from './components/Restaurant/Restaurant';
import RestReserve from './components/Restaurant/RestReserve/RestReserve';
import RestList from './components/Restaurant/RestList/RestList';

const bioItems = [
  `Nací en Sueca, una pequeña ciudad de Valencia rodeada de arrozales 🌾🌾 y naranjos 🍊🍊, en una familia dedicada al cultivo 🚜 del arroz 🌾 desde hace siglos ⌛.`,
  `Mis grandes pasiones son la informática 🖥️ y la educación 👨‍🏫.`,
  `Comencé con los ordenadores a finales de los años 80 (con un MSX... ¡qué tiempos!), y me he dedicado a aprender por mi cuenta varios lenguajes, aplicaciones y gestores de contenido: BASIC, ObjectPascal, C, HTML, Python, PHP, MySQL, SQLite, JavaScript, CSS; Delphi, Lazarus, C++Builder, HotMetal, RPGMaker, GIMP, Ren’Py, WordPress, CPanel, moodle, CSS, Nodejs, Express, MongoDB, Sequelize, XML, Mongoose, React...`,
  `He realizado aplicaciones web de aprendizaje y he colaborado con la gestión informática de varios proyectos académicos.`,
  `Soy Doctor en Ciencias Bíblicas 📖, y he sido docente universitario 🎓 durante 16 años en Barcelona y Roma.`
];

const fakeDB = {
  users: [],
  loadUsers: function () {
    this.users = localStorage.S5_users ? JSON.parse(localStorage.S5_users) : [];
  },
  saveUser: function (user) {
    this.loadUsers();
    this.users.unshift(user);
    localStorage.S5_users = JSON.stringify(this.users);
  },
  reservations: [],
  loadReservations: function () {
    this.reservations = localStorage.S5_reservations ? JSON.parse(localStorage.S5_reservations) : [];
  },
  saveReservation: function (reservation) {
    this.loadReservations();
    this.reservations.unshift(reservation);
    localStorage.S5_reservations = JSON.stringify(this.reservations);
  },
}

const dishes = [
  {
    id: 1,
    name: 'Pollo teriyaki',
    description: 'Este es el plato 1',
    price: 10,
    img: 'https://bakeitwithlove.com/wp-content/uploads/2021/11/teriyaki-chicken-stir-fry-sq.jpg'
  },
  {
    id: 2,
    name: 'Sushi',
    description: 'Este es el plato 2',
    price: 20,
    img: 'https://t1.rg.ltmcdn.com/es/posts/1/3/0/hacer_sushi_paso_a_paso_16031_600.jpg'
  },
  {
    id: 3,
    name: 'Ramen',
    description: 'Este es el plato 3',
    price: 15,
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/f4/3c/12/photo2jpg.jpg'
  }
]

function App() {
  return (
    <>
      <BrowserRouter>
        <MainSelector />
        <Routes>
          <Route path="/" element={<MainCenter />} />
          <Route
            path="/personal"
            element={<PersHome bioItems={bioItems} db={fakeDB} />} />
          <Route path='/personal/contact' element={<PersContact db={fakeDB} />} />
          <Route path='/personal/other' element={<PersOther db={fakeDB} />} />
          <Route path="/restaurant" element={<Restaurant dishes={dishes} />} />
          <Route path="/restaurant/reserve" element={<RestReserve db={fakeDB} />} />
          <Route path="/restaurant/reservations" element={<RestList db={fakeDB} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
