import Button, { ButtonSize, ButtonType } from './components/Button/Button';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>Large Button</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>Small Button</Button>
      <Button btnType={ButtonType.Primary}>Primary Button</Button>
      <Button btnType={ButtonType.Default}>Default Button</Button>
      <Button btnType={ButtonType.Danger}>Danger Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">Link Button</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Disabled Link Button</Button>
    </div> 
  );
}
export default App;
