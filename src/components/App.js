import React from 'react';
import axios from 'axios';

import './reset.css';
import './App.css';
import Program from './program';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [], data2: [], filterOn: false };
  }

  componentDidMount() {
    axios.get('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses').then((response) => {
      this.setState({
        data:
          response.data.data.slice(0, 5)
      });
    });

    axios.get('https://24.javascript.pages.academy/keksobooking/data').then((response) => {
      this.setState({
        data2:
          response.data.slice(0, 5)
      });
    });
  }

  changeCard = (x) => {
    const newData = [...this.state.data];
    const item = newData.find((item) => item._id === x);
    item.isLiked = !item.isLiked;

    this.setState({
      data: newData
    })
  };

  closeCard = (x) => {
    const copyData = [...this.state.data];
    const index = copyData.findIndex((item) => item._id === x);
    copyData.splice(index, 1);
    this.setState({
      data: copyData
    });

  };

  handlerFilter = () => {
    this.setState({ filterOn: !this.state.filterOn })
  }

  render() {
    return (
      <React.Fragment>
        <header className='header'>Специализированные дисциплины</header>
        <div className='container'>
          <button onClick={this.handlerFilter} className='filter'>
            Показать избранные
          </button>
          {this.state.data.filter((item) => !this.state.filterOn ? item : item.isLiked).map((item, index) => (
            <Program onChange={this.changeCard} onClose={this.closeCard} {...item} moreInfo={this.state.data2[index]} key={item._id} />
          ))}
        </div>

        <footer className='footer'>
          <div className='footer__modules'>
            <span className='footer__modules--title'>Практические модули</span>
            <p className='footer__modules--text'>Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</p>
          </div>
          <div className='footer__test'>
            <span className='footer__test--title'>Итоговая аттестация</span>

            <ul className='footer__test--list'>
              <li className='footer__test--item'>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по проектированию)</li>
              <li className='footer__test--item'>Защита итоговой аттестационной работы
              </li>
            </ul>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
