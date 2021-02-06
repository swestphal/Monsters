import React from 'react';
import {Card} from '../card/card.component'
import './cardList.styles.css'


export const CardList = ({monsters})=> {
  
    return (<div className="card-list">  {
        monsters.map((monster) =>
        (
          <Card monster={monster} key={monster.id}/>
        )
        )
      }</div>)
}