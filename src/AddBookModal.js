import React, { Component } from "react";
import { observer } from "mobx-react";

import authStore from "./stores/authStore";

import BookForm from "./forms/BookForm";
import Modal from "react-responsive-modal";

class AddBookModal extends Component {
  state = {
    open: false
  };

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <BookForm author={this.props.author} closeModal={this.onCloseModal} />
        </Modal>
        {authStore.user && (
          <input
            type="button"
            onClick={this.onOpenModal}
            value="Add New Book!"
          />
        )}
      </div>
    );
  }
}
export default observer(AddBookModal);
