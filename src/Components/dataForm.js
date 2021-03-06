import React from 'react';
import {Button, InputGroup, InputGroupAddon, InputGroupText, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import React, { Component } from 'react';

class dataForm extends Component{
    constructor(props){
        super(props);
        this.findToggleNew = this.findToggleNew.bind(this);

        this.state = {
            matchName:"",
            modalNew: false,
        }
    }


    render(){
        <div>
            <Button color='success' onClick={this.findToggleNew} className="mb-1" block>Create Event</Button>
                <Modal isOpen={this.state.modalNew} toggle={this.findToggleNew}>
                    <ModalHeader toggle={this.findToggleNew}>Create Event</ModalHeader>
                    <ModalBody>
                        {/* InputGroup here */}
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Create</InputGroupText>
                            </InputGroupAddon>
                                <Input
                                    placeholder="Event Name"
                                    onChange={this.functionTakingMatchInput}
                                />
                            
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.fetchFind} color="success">Add</Button>
                        <Button color='secondary' onClick={this.findToggleNew}>Cancel</Button>
                    </ModalFooter>
                </Modal>

        </div>
    }

    findToggleNew() {
        this.setState({
            modalNew: !this.state.modalNew
        });
    }

    functionTakingMatchInput = (event) =>{
        this.setState({matchName: event.target.value})
    }
}
export default dataForm;
