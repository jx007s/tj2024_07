import { MyProvider2 } from "./UseContextContext";
import MyThemeComp2 from "./UseContextComponent";

function UseContextApp(props) {
    return (
        <div>
            UseContextApp 이지롱
            <MyProvider2>
                <MyThemeComp2/>
            </MyProvider2>
        </div>
    );
}

export default UseContextApp;