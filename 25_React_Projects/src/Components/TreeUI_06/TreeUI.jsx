/* eslint-disable react/prop-types */
import MenuList from "./MenuList";
import './Styles_06.css'

function TreeUI({ menus = [] }) {
  return (
    <section className="sec06">
      <div className="heading">TreeUI 04</div>
      <div>
        <MenuList list={menus} />
      </div>
    </section>
  );
}

export default TreeUI;
