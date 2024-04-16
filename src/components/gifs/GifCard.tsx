import { Gif } from "../../utils/types";
import Card from "../ui/Card";

interface Props {
  gif: Gif;
}

const GifCard = ({ gif }: Props) => {
  return (
    <Card>
      <div>
        <img
          className="w-full"
          src={gif.images.preview_gif.url}
          alt={gif.slug}
        />
        <span className='text-xs text-gray-600'>{gif.title}</span>
      </div>
    </Card>
  );
};

export default GifCard;
