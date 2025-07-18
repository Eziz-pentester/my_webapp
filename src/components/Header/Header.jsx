import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../hooks/useTelegram";
import './Header.css';
import Form from "../form/Form";

const Header = () => {
    const{tg,user,onClose} = useTelegram();
    

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.first_name || "User"}
            </span>
        </div>
    );
};
function App() {
    return (
    <div className="App">
      <Header/>
       <Button onClick={onToggleButton}>закрыть</Button>
       <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
        </Routes>
    </div>
  );
};
export default Header;
