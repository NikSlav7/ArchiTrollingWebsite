import logo from './logo.svg';
import './App.css';
import ArturPage from './ArturPage.jsx';

function App() {
  let pics = [require('../src/pics/triangle.jpeg'), require('../src/pics/nokia.jpeg'), require('../src/pics/nokia1.jpeg'), require('../src/pics/crush.jpeg'), require('../src/pics/artem.jpeg'), require('../src/pics/buhoj.jpeg')];

  let texts = [['Смотрите какой треугольный', "Как то раз его раздавил муравей", "ШОК! Тупо-угольный треугольник в жизни!"], ['Идиот звонит, как до телефона достал?', 'Не заметил его на улице, раздавил', "Как это играет в волейбол?"], ['Турция на связи', "Даже телефон больше его", "Обычный житель мира лилипутов"], ['Бомжара опять косметику в унитазе нашёл'], ['Не артур но тоже тот ещё идиот'], ['Опять обкуренный в школе', "Турецкий Мигрант"]]

  let memes = ['https://i.ytimg.com/vi/ZOuZLcH0OAg/maxresdefault.jpg'];
  return (
    <div className="App">
      <ArturPage pics={pics} texts={texts} memes = {memes}/>
    </div>
  );
}

export default App;
