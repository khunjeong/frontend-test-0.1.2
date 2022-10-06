import { IShoppingSaleUnitStock } from '../../api/structures/shoppings/sales/IShoppingSaleUnitStock';

export interface IResultStockProps {
  stock: IShoppingSaleUnitStock;
  onDelete: (stock: IShoppingSaleUnitStock) => void;
  onPlus: () => void;
  onMinus: () => void;
}
