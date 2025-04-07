import { nanoid } from "nanoid";
import css from "./ImagesList.module.css";

const ImagesList = ({ gallery }) => {
  return (
    <>
      <ul className={css.imagesList}>
        {gallery &&
          gallery.length > 0 &&
          gallery.map((image) => (
            <li className={css.imageItem} key={nanoid()}>
              <img className={css.image} src={image.original} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ImagesList;
