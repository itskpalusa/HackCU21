import React, {Component} from 'react';
import {Button, InputGroup, InputGroupAddon, InputGroupText, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import DataForm from './DataForm'

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <p><DataForm></DataForm></p>
    
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
