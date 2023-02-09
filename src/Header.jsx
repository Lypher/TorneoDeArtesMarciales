import { NavLink } from "react-router-dom";

<<<<<<< HEAD
export function Header() {
  return (
    <>
      <div className="header_content">
        <div className="link content">
          <li className="header_links">
            <NavLink to="/start">
              <button className="btn_link">Empezar a Jugar</button>
            </NavLink>
            <NavLink to="playing">
              <button className="btn_link">Como Jugar?</button>
            </NavLink>
            <NavLink to="/">
              <button className="btn_link">Creadores</button>
            </NavLink>
            <NavLink to="/">
              <button className="btn_link">Historia</button>
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
}
=======
export function Header () {
    return <>
        <div className="header_content">
            <div className="link content">
                <li className="header_links">
                    <NavLink to="/start">
                        <button className="btn_link">Empesar a Jugar</button>
                    </NavLink>
                    <NavLink to='playing'>
                        <button className="btn_link">Como Jugar?</button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className="btn_link">Creadores</button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className="btn_link">Historia</button>
                    </NavLink>
                </li>
            </div>
        </div>
    </>
}
>>>>>>> 58cf3fe774dc6f4db3f2c7304f07197c5ee10b81
