import { IShoppingSaleUnitOptionCandidate } from '../../api/structures/shoppings/sales/IShoppingSaleUnitOptionCandidate';

export interface IDropdownProps {
  name: string;
  value?: IShoppingSaleUnitOptionCandidate;
  candidates: IShoppingSaleUnitOptionCandidate[];
  onUpdateBlock: (data: IShoppingSaleUnitOptionCandidate) => void;
}
