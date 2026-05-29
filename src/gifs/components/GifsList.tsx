import type { Gif } from "../../gifs/actions/gif.interface";
export interface Props {
  gifs: Gif[];
}
export const GifsList = ({ gifs }: Props) => {
  return (
    <div className="gifs-container">
      {gifs.map((item) => (
        <div key={item.id} className="gif-card">
          <img
            src={item.url}
            alt={item.title}
            width={item.width}
            height={item.height}
          />
          <h3>{item.title}</h3>
          <p>
            {item.width} x {item.height} (
            {(item.size / (1024 * 1024)).toFixed(2)} MB)
          </p>
        </div>
      ))}
    </div>
  );
};
