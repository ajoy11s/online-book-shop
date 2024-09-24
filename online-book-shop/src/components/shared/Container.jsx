import React from 'react';
import { Card } from 'react-daisyui'
import { Link } from "react-router-dom";


const Container = () => {
  // const [books, setBooks] = useState([]);
  const stockData = [
    {
      "bookId": 1,
      "bookName": "The Midnight Library",
      "author": "Matt Haig",
      "image": "https://media.uiargonaut.com/wp-content/uploads/2024/02/81YzHKeWq7L_cropped-1024x571.jpg",
      "review": "A heartfelt exploration of life's endless possibilities, full of hope and meaning.",
      "totalPages": 304,
      "rating": 4.5,
      "category": "Fiction",
      "tags": ["Philosophical", "Fantasy", "Self-Discovery"],
      "publisher": "Canongate Books",
      "yearOfPublishing": 2020
    },
    {
      "bookId": 2,
      "bookName": "Becoming",
      "author": "Michelle Obama",
      "image": "https://heartspoken.com/wp-content/uploads/2019/03/Becoming-Book-Review-Post-Graphic.jpg",
      "review": "An inspiring memoir that traces the life of one of America's most iconic first ladies.",
      "totalPages": 448,
      "rating": 4.8,
      "category": "Memoir",
      "tags": ["Inspiring", "Political", "Biography"],
      "publisher": "Crown Publishing",
      "yearOfPublishing": 2018
    },
    {
      "bookId": 3,
      "bookName": "Educated",
      "author": "Tara Westover",
      "image": "https://media.newyorker.com/photos/5b228bf92acbf821b1b75476/master/w_1920,c_limit/Educated-Tara-Westover.jpg",
      "review": "A powerful memoir about growing up in rural isolation and the transformative power of education.",
      "totalPages": 334,
      "rating": 4.7,
      "category": "Biography",
      "tags": ["Memoir", "Education", "Family"],
      "publisher": "Random House",
      "yearOfPublishing": 2018
    },
    {
      "bookId": 4,
      "bookName": "Where the Crawdads Sing",
      "author": "Delia Owens",
      "image": "https://bookclubchat.com/wp-content/uploads/2018/10/Where-The-Crawdads-Sing-Book-Club-Questions-Book-Club-Chat.jpg",
      "review": "A mesmerizing tale of survival, mystery, and the beauty of the natural world.",
      "totalPages": 368,
      "rating": 4.6,
      "category": "Mystery",
      "tags": ["Nature", "Crime", "Romance"],
      "publisher": "G.P. Putnam's Sons",
      "yearOfPublishing": 2018
    },
    {
      "bookId": 5,
      "bookName": "Atomic Habits",
      "author": "James Clear",
      "image": "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*IirUWdu5_jw10pEb1oaLtg.jpeg",
      "review": "A game-changing guide to forming good habits and breaking bad ones, grounded in science.",
      "totalPages": 320,
      "rating": 4.9,
      "category": "Self-Help",
      "tags": ["Productivity", "Self-Improvement", "Behavior"],
      "publisher": "Penguin Random House",
      "yearOfPublishing": 2018
    },
    {
      "bookId": 6,
      "bookName": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "image": "https://m.media-amazon.com/images/I/613w6Hitb+L._CR2,0,1276,720_SR684,386_.jpg",
      "review": "A sweeping exploration of human history from the Stone Age to modern times, both insightful and thought-provoking.",
      "totalPages": 443,
      "rating": 4.7,
      "category": "History",
      "tags": ["Anthropology", "Evolution", "Civilization"],
      "publisher": "Harper",
      "yearOfPublishing": 2014
    },
    {
      "bookId": 7,
      "bookName": "The Silent Patient",
      "author": "Alex Michaelides",
      "image": "https://bookclubchat.com/wp-content/uploads/2019/03/Silent-Patient-Review-Book-Club-Chat.jpg",
      "review": "A gripping psychological thriller that keeps you guessing until the very end.",
      "totalPages": 336,
      "rating": 4.4,
      "category": "Thriller",
      "tags": ["Suspense", "Psychological", "Mystery"],
      "publisher": "Celadon Books",
      "yearOfPublishing": 2019
    },
    {
      "bookId": 8,
      "bookName": "Dune",
      "author": "Frank Herbert",
      "image": "https://sm.ign.com/t/ign_za/lists/h/how-to-rea/how-to-read-the-dune-books-in-chronological-order_1jyy.1280.jpg",
      "review": "A sci-fi classic that masterfully weaves together politics, religion, and ecology in a futuristic desert world.",
      "totalPages": 412,
      "rating": 4.8,
      "category": "Science Fiction",
      "tags": ["Space", "Adventure", "Epic"],
      "publisher": "Chilton Books",
      "yearOfPublishing": 1965
    },
    {
      "bookId": 9,
      "bookName": "The Alchemist",
      "author": "Paulo Coelho",
      "image": "https://www.hollywoodreporter.com/wp-content/uploads/2021/07/book-The-Alchemist-book.jpg",
      "review": "A timeless tale about following one's dreams and listening to the heart, filled with deep wisdom.",
      "totalPages": 208,
      "rating": 4.3,
      "category": "Fiction",
      "tags": ["Spiritual", "Adventure", "Philosophical"],
      "publisher": "HarperOne",
      "yearOfPublishing": 1988
    }
  ]



  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-y-4" >

      {stockData.map((book) => (
        <div className="card card-compact bg-base-100 w-96 shadow-xl" key={book.bookId}>
          <figure>
            <img
              src={book.image}
              alt="" className="h-48 w-full gap-x-2" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">{book.bookName}</h2>
            <h4 className="card-title">{book.author}</h4>
            <p>[ {book.tags.toString()} ]</p>
            <p>Category: {book.category}</p>
            <p>Ratting: {book.rating}</p>
            <p>Comments:{book.review}</p>
            <div className="card-actions justify-end">
              <Link className="btn btn-success" key={book.bookId} book={book}>Book Details</Link>
            </div>
          </div>
        </div>

        //console.log(book.bookName)


      ))}
    </div>
  );

};

export default Container;