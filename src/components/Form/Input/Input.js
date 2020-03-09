import React from 'react';

import './Input.css';

const input = props => (
  <div className="input">
    {props.label && <label htmlFor={props.id}>{props.label}</label>}
    {props.control === 'input' && (
      <input
        className={[
          !props.valid ? 'invalid' : 'valid',
        ].join(' ')}
        type={props.type}
        id={props.id}
        required={props.required}
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => props.onChange(props.id, e.target.value, e.target.files)}
      />
    )}
    {props.control === 'textarea' && (
      <textarea
        className={[
          !props.valid ? 'invalid' : 'valid',
        ].join(' ')}
        id={props.id}
        rows={props.rows}
        required={props.required}
        value={props.value}
        onChange={e => props.onChange(props.id, e.target.value)}
      />
    )}
  </div>
);

export default input;
