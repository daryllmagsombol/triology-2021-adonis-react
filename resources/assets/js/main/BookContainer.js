/**
 * Simple Demo Library App for Triology 2021
 * Fullstack Web Dev
 * 
 * by Daryll Joshua Magsombol
 */

import React from 'react';
import { useState, useEffect } from 'react'
import { Button, ListGroup, Modal, ModalBody, ModalHeader, ModalFooter, Input, Label, FormGroup } from 'reactstrap'
import axios from 'axios'
import swal from 'sweetalert2'

import Books from './components/BooksComponent'

const App = () => {
  // States
  const [books, setBooks] = useState([])
  const defaultCurrentBook = {
    name: '',
    author: '',
  }
  const [currentBook, setCurrentBook] = useState(defaultCurrentBook)

  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(false);
  //

  const toggle = (type = null, id = null) => {
    setModal(!modal)
    setModalType(type)

    if (type === 'add') return setCurrentBook(defaultCurrentBook)

    if (type === 'view' || type === 'edit') {
      const bookFound = books.find((book) => (book.id === id))
      console.log(id)
      setCurrentBook(bookFound)
    }
  }

  const refreshData = () => axios.get('/fetch-books').then(({ data }) => setBooks(data))

  // Triggered at start
  useEffect(() => {
    refreshData()
  }, [])
  //

  // Actions
  const addBook = async () => {
    const isConfirmed = await swal.fire({
      title: 'Add',
      text: 'Are you sure you want to add this book?',
      icon: 'question',
      showCancelButton: true
    })
      .then(({ isConfirmed }) => isConfirmed)

    if (isConfirmed) await axios.post('/add-book', currentBook)
      .then(() => {
        swal.fire({
          title: 'Success',
          text: 'Save success!',
          icon: 'success'
        })
        toggle()
        refreshData()
      })
  }


  const editBook = async (id) => {
    const isConfirmed = await swal.fire({
      title: 'Edit',
      text: 'Are you sure you want to edit this book?',
      icon: 'question',
      showCancelButton: true
    })
      .then(({ isConfirmed }) => isConfirmed)

    if (isConfirmed) await axios.post('/edit-book', currentBook)
      .then(({ data }) => {
        swal.fire({
          title: 'Success',
          text: 'Edit success!',
          icon: 'success'
        })
        toggle()
        refreshData()
      })
  }

  const deleteBook = async (id) => {
    const isConfirmed = await swal.fire({
      title: 'Delete',
      text: 'Are you sure you want to delete this book?',
      icon: 'error',
      showCancelButton: true
    })
      .then(({ isConfirmed }) => isConfirmed)

    if (isConfirmed) await axios.post('/delete-book', { id })
      .then(({ data }) => {
        swal.fire({
          title: 'Success',
          text: 'Delete success!',
          icon: 'success'
        })
        refreshData()
      })
  }
  //

  // Modal for View, Add, Edit Book
  const renderModal = () => (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Book</ModalHeader>
        <ModalBody>

          <FormGroup>
            <Label for="name">Book Name</Label>
            <Input
              type="text"
              name="name"
              value={currentBook.name}
              onChange={(event) => setCurrentBook({ ...currentBook, name: event.target.value })}
              disabled={modalType === 'view' ? true : false}
              placeholder="name" />
          </FormGroup>

          <FormGroup>
            <Label for="author">Book Author</Label>
            <Input
              type="text"
              name="author"
              value={currentBook.author}
              onChange={(event) => setCurrentBook({ ...currentBook, author: event.target.value })}
              disabled={modalType === 'view' ? true : false}
              placeholder="author" />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          {renderFormButtons()}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
  //

  const renderFormButtons = () => {
    if (modalType === 'add') return <Button color="primary mr-2" onClick={() => addBook(currentBook.id)}>Add</Button>
    if (modalType === 'edit') return <Button color="warning mr-2" onClick={() => editBook(currentBook.id)}>Edit</Button>
  }


  // ======= Main Render =======
  return (
    <div className="container mt-3">
      <h1 className="display-3">
        Library List
        <Button color="primary mt-4 float-right" onClick={() => toggle('add')}>Add</Button>
      </h1>
      <div>
        {renderModal()}
        <ListGroup className="mt-3">
          <Books
            books={books}
            toggle={toggle}
            deleteBook={deleteBook}
          />
        </ListGroup>
      </div>
    </div>
  );
  // 
}

export default App;
