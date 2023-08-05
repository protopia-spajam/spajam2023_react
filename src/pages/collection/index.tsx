import { Text, TextSizes } from "ui/atoms/text";
import "./index.scss";
import Tumbler from "assets/image/tumbler.svg";
import { Title } from "ui/molecules/title";
import { Grid } from "ui/atoms/grid";
import { BottleBadge } from "components/bottle-badge";

export const Collection = () => {
  const collection = [
    { name: "keito", color: "#b0c4de" },
    { name: "しの", color: "#8fbc8f" },
    { name: "あみでぃ", color: "#deb887" },
    { name: "nishi", color: "#ffa500" },
    { name: "うっちー", color: "#808000" },
    { name: "加藤", color: "#db7093" },
    { name: "りか", color: "#696969" },
    { name: "タムタム", color: "#5f9ea0" },
    { name: "justin", color: "#d2b48c" },
  ];
  return (
    <div className="Collection">
      <div className="title">Collection</div>
      <Grid
        list={collection.map((col, index) => (
          <CollectionIcon key={index} name={col.name} color={col.color} />
        ))}
      />
    </div>
  );
};

const CollectionIcon = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className="CollectionIcon">
      <BottleBadge color={color} />
      <div className="name">{name}</div>
    </div>
  );
};
