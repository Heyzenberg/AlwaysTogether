import './Main.scss';
import { NavPanel } from './NavPanel/NavPanel'
import { Content } from './Content/Content';

const Main = ({myData}) => {
    return(
        <div className="Main">
            <NavPanel />
            <Content myData={myData} /> 
        </div>
    )
}

export { Main };