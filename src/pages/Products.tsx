import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

import AddProductsModal from "../components/AddProductsModal";
import ProductsList from "../components/ProductsList";

const Products = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <AddProductsModal open={open} onClose={handleClose} />
      <Typography variant="h5">Products</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button variant="contained" onClick={handleClickOpen}>
          Adicionar produto
        </Button>
      </Box>
      <Box>
        <ProductsList />
      </Box>
    </Container>
  );
};

export default Products;
