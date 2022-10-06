import { IShoppingSaleUnitStock } from '../../api/structures/shoppings/sales/IShoppingSaleUnitStock';

export interface IDropdownProps {
  count: number;
  stock: IShoppingSaleUnitStock;
  onDelete: (stock: IShoppingSaleUnitStock) => void;
  onPlus: (stock: IShoppingSaleUnitStock) => void;
  onMinus: (stock: IShoppingSaleUnitStock) => void;
}
