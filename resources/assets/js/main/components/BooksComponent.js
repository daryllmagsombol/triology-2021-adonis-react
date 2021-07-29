
import { Button, ListGroupItem } from 'reactstrap'

const Books = (props) => {
    const {
        books,
        toggle, deleteBook
    } = props

    return books.map((book) => (
        <ListGroupItem key={book.id}>
            {book.name} - {book.author}
            <div className="float-right">
                <Button color="primary btn-sm mr-1" onClick={() => toggle('view', book.id)}>View</Button>
                <Button color="warning btn-sm mr-1" onClick={() => toggle('edit', book.id)}>Edit</Button>
                <Button color="danger btn-sm mr-1" onClick={() => deleteBook(book.id)}>Delete</Button>
            </div>
        </ListGroupItem>
    ))
}

export default Books