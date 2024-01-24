import "./Stars.css";
import Star from "./Star";

interface props {
  count?: number;
}

export default function Stars({ count = 0 }: props) {
  const starsValue: Array<number> = [];

  if (typeof count !== 'number' || count > 5 || count < 1) {
    return
  } 
  for (let i = 0; i < count; i++) {
    starsValue.push(i);
  }

  return (
    <ul className="card-body-stars u-clearfix" key={count.toString()}>
      {starsValue.map((el) => (
        <li key={el.toString()}>
          <Star></Star>
        </li>
      ))}
    </ul>
  );
}
