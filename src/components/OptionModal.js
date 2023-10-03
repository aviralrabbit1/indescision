import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    ariaHideApp={false}
    onRequestClose={props.clearSelectedOption}
    >
        <h3>Selected Option: </h3>
        {props.selectedOption &&  <p> {props.selectedOption} </p> }
        <button onClick={props.clearSelectedOption} >Close</button>
    </Modal>
  )
}

export default OptionModal;
