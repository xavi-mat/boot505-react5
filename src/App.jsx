import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSelector from './components/MainSelector/MainSelector';
import PersContact from './components/Personal/PersContact/PersContact';
import PersHome from './components/Personal/PersHome/PersHome';
import Personal from './components/Personal/Personal';
import PersOther from './components/Personal/PersOther/PersOther';
import Restaurant from './components/Restaurant/Restaurant';

const bioItems = [
  `Nací en Sueca, una pequeña ciudad de Valencia rodeada de arrozales 🌾🌾 y naranjos 🍊🍊, en una familia dedicada al cultivo 🚜 del arroz 🌾 desde hace siglos ⌛.`,
  `Mis grandes pasiones son la informática 🖥️ y la educación 👨‍🏫.`,
  `Comencé con los ordenadores a finales de los años 80 (con un MSX... ¡qué tiempos!), y me he dedicado a aprender por mi cuenta varios lenguajes, aplicaciones y gestores de contenido: BASIC, ObjectPascal, C, HTML, Python, PHP, MySQL, SQLite, JavaScript, CSS; Delphi, Lazarus, C++Builder, HotMetal, RPGMaker, GIMP, Ren’Py, WordPress, CPanel, moodle, CSS, Nodejs, Express, MongoDB, Sequelize, XML, Mongoose, React...`,
  `He realizado aplicaciones web de aprendizaje y he colaborado con la gestión informática de varios proyectos académicos.`,
  `Soy Doctor en Ciencias Bíblicas 📖, y he sido docente universitario 🎓 durante 16 años en Barcelona y Roma.`
];

function App() {
  return (
    <>
      <BrowserRouter>
        <MainSelector />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/personal/home" element={<PersHome bioItems={bioItems} />} />
          <Route path='/personal/contact' element={<PersContact />} />
          <Route path='/personal/other' element={<PersOther />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
