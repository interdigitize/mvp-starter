import React from 'react';
import {Dialog} from 'material-ui';

const Intro = (props) => {
  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onClick={this.handleClose}
    />
  ];

  return (
    <Dialog
      actions={actions}
      open={props.open}
      onRequestClose={props.handleClose}
      contentStyle={{ maxWidth: '800px'}}
      {...dialogAttrs}
      >
        <span className="imgResponsive imgCenter" id="obliterationRoom"></span>
        <h1>Dot Dot Dots</h1>
        <p style={{fontSize: '1.2em', padding: '0px 30px', color: 'black'}}>Leave a dot and a lingering thought, then check back to see the page transform into a blur of thoughts and colors.</p>
        <p style={{fontSize: '0.8em'}}>Inspired by <span style={{color: 'rgb(0, 188, 212)', cursor: 'pointer'}} onClick={() => this.openInNewTab('https://www.designboom.com/art/yayoi-kusama-david-zwirner-obliteration-room-new-york-05-26-2015/')}>yayoi kusama's dot-covered obliteration room</span>.</p>
      </Dialog>
  )

}

export default Intro;
