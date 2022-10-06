import { IShoppingSaleUnit } from '../../api/structures/shoppings/sales/IShoppingSaleUnit';
import { IShoppingSaleUnitOptionCandidate } from '../../api/structures/shoppings/sales/IShoppingSaleUnitOptionCandidate';
import { IShoppingSaleUnitStock } from '../../api/structures/shoppings/sales/IShoppingSaleUnitStock';

export interface ICandidateProps {
  unit: IShoppingSaleUnit;
  onAddShopping: (unitStock: IShoppingSaleUnitStock) => void;
}
export interface ICandidatesResult extends IShoppingSaleUnitOptionCandidate {
  optionId: string;
}
