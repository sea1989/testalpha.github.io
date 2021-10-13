import React from 'react';
import './style.css';
import { ReactComponent as Like } from '../../assets/img/like.svg';
import { ReactComponent as Nolike } from '../../assets/img/nolike.svg';
import { ReactComponent as Close } from '../../assets/img/close.svg';

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sub: [this.props.specializedSubjects] };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props._id);
  }

  handleClose() {
    this.props.onClose(this.props._id);
    console.log(this.props._id);
  }

  render() {
    return (
      <section className='program'>
        <Close onClick={this.handleClose} className='program__close' />
        <p className='program__title'>
          <img
            className='program__img'
            src={this.props.moreInfo.offer.photos[0]}
            width='100px'
            height='100px'
            alt='foto'
          />
          {this.props.title}
        </p>
        <div className='program__wrapper'>
          <div className='program__module1'>
            <label
              className='program__module1--number'
              htmlFor={this.props._id}
            >
              1 модуль
            </label>
            <input
              className='visually-hidden filter-input filter-input-checkbox'
              type='checkbox'
              name='module'
              id={this.props._id}
            />
            <ul className='program__module1--list'>
              {this.state.sub[0].slice(0, 5).map((item, index) => (
                <li key={index} className='program__module1--discipline'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='program__module1'>
            <label
              className='program__module1--number'
              htmlFor={this.props._id + 1}
            >
              2 модуль
            </label>
            <input
              className='visually-hidden filter-input filter-input-checkbox'
              type='checkbox'
              name='module'
              id={this.props._id + 1}
            />
            <ul className='program__module1--list'>
              {this.state.sub[0].slice(5, 10).map((item, index) => (
                <li key={index} className='program__module1--discipline'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button onClick={this.handleClick} className='program__like'>
          {this.props.isLiked ? <Like /> : <Nolike />}
        </button>
      </section>
    );
  }
}
