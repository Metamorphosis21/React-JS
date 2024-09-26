/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul className="listContainer">
      {
      list && list.length
        ? list.map((Litem) => <MenuItem item={Litem} />)
        : null
        }
    </ul>
  );
}

export default MenuList;
