import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useProducts } from "../hooks/useProducts";
import { Restaurant } from "@mui/icons-material";

const ProductsList = () => {
  const { products } = useProducts();
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {products.map((product) => (
        <ListItem key={product.name}>
          <ListItemAvatar>
            <Avatar>
              <Restaurant />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={product.name} secondary={product.price} />
        </ListItem>
      ))}
    </List>
  );
};

export default ProductsList;
