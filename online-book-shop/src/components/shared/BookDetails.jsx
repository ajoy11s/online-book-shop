import { useLoaderData } from "react-router-dom";

export default function BoookDetails(props){
    const { book } = props;
  console.log('test');

  const { bookName, author } = book;
  return (
    <div>
      <h2>Details about user: {bookName}</h2>
      <p>Website: {author}</p>
    </div>
  );
};

