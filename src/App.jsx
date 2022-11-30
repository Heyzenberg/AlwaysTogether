import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import React from 'react';

const App = () => {

 const [myData, setMyData] = React.useState({
    id: 1,
    photo: '/assets/userProfile/ava.jpg',
    name: 'Evgeny',
    surname: 'Murenets',
 })

  return (
    <div className="App">
      <Header myData={myData} />
      <Main myData={myData} />
      <Footer />
    </div>
  );
}

export { App };
