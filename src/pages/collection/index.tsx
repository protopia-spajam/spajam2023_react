import { Text, TextSizes } from "ui/atoms/text";
import "./index.scss";
import Tumbler from "assets/image/tumbler.png";
import { Title } from "ui/molecules/title";
import { Grid } from "ui/atoms/grid";

export const Collection = () => {
  const collection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="Collection">
      <Title>Collection</Title>
      <Grid
        list={collection.map((_, index) => (
          <CollectionIcon key={index} />
        ))}
      />
    </div>
  );
};

const CollectionIcon = () => {
  return (
    <div className="CollectionIcon">
      <img src={Tumbler} alt="Tumbler" />
    </div>
  );
};
