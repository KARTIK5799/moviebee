import PropTypes from "prop-types";

const Card = ({ title, description, genre, stars, image }) => {
  const formattedStars = parseFloat(stars).toFixed(1);

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg h-auto bg-white">
      <img className="w-full" src={image} alt={`${title} Poster`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div
          className="h-28 overflow-y-auto text-gray-700 text-base"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="px-6 py-4 flex">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 overflow-hidden">
          {genre}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 overflow-hidde">
          {formattedStars}
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
