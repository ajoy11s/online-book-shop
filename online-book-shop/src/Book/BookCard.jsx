import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {

    const { bookId, bookName, author, image, category, tags, rating } = book;

    return (
        
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <figure>
                <img
                    src={image}
                    alt={`image of book named ${bookName}`} className="w-96 h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className='flex gap-2 justify-center items-center'>
                        <div className="badge badge-secondary">{category}</div>
                        <div className='text-sm'>{rating} <FontAwesomeIcon icon={faStar} /></div>
                    </div>
                </h2>
                <p>By- {author}</p>
                <div className="card-actions justify-end">
                    {
                        tags.map((tag, index) =>
                            <div key={index} className="badge badge-outline">
                                {tag}
                            </div>
                        )
                    }

                    <Link to={`/books/${bookId}`}>
                        <button className="btn btn-success text-whit">Book Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BookCard;