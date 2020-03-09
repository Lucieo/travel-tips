import React from 'react';

import Button from '../../Button/Button';
import './PostThumbnail.css';

import {ReactComponent as DeleteIcon} from '../../../images/delete.svg';
import {ReactComponent as See} from '../../../images/see.svg';
import {ReactComponent as Edit} from '../../../images/edit.svg';


const post = props => (
  <article className="post">
    <div className="post__wrapper">
      <div className="post__image"
        style={{
        backgroundImage: `url('${props.imageUrl}')`,
        backgroundSize:'cover',
        backgroundPosition: props.left ? 'left' : 'center'
      }}
      >  
      </div>
      <div className="post__info">
        <header className="post__header">
          <h3 className="post__meta">
            Posted by {props.author} on {props.date}
          </h3>
          {!props.validated && <p className="post__warning">Waiting for validation</p>}
          <h1 className="post__title">{props.title}</h1>
        </header>
        <div className="post__actions">
          <Button mode="flat" link={props.id}>
            <See style={{width:30, height:30}}/>
          </Button>
          {
            props.is_author && 
            <>
              <Button mode="flat" onClick={props.onStartEdit}>
                <Edit style={{width:30, height:30}}/>
              </Button>
              <Button mode="flat" design="danger" onClick={props.onDelete}>
                <DeleteIcon style={{width:30, height:30}}/>
              </Button>
            </>
          }
        </div>
      </div>
    </div>
  </article>
);

export default post;
