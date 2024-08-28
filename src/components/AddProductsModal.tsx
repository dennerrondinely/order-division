import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useProducts } from "../hooks/useProducts";

export interface AddProductsModalProps {
  open: boolean;
  onClose: () => void;
}

const AddProductsModal = ({ open, onClose }: AddProductsModalProps) => {
  const { addProduct, handleProductNameChange, handleProductPriceChange } =
    useProducts();

  const handleAddProduct = () => {
    addProduct();
    onClose();
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <TextField
          placeholder="Digite o nome produto"
          onChange={handleProductNameChange}
        />
        <TextField
          placeholder="Digite o valor produto"
          onChange={handleProductPriceChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleAddProduct} autoFocus>
        Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductsModal;
