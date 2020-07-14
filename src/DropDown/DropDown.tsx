import * as React from"react";
import OptionsList from "./OptionsList";
import {getSelectedValue} from "../store/selectors";
import { State } from '../store/reducer';
import { connect } from "react-redux";


interface OwnProps{
    label: string;
    locations: string[];
};

interface ConnectedProps{
    value: string | undefined;
};

type Props = OwnProps & ConnectedProps

const DropDown:React.FunctionComponent<any> = (props: Props) => {

    const {label, locations, value} = props;

    const [showOptions, setShowOptions] = React.useState(false);
    
    const onClickShowOptions = () => {
        setShowOptions(!showOptions);
    }

    return <div className="drop-down">
        <div className="drop-bar" onClick={onClickShowOptions}>
            {value || label}
            <span>&#9660;</span>
        </div>
        {showOptions && <OptionsList 
        locations={locations} 
        showOptions={showOptions} 
        setShowOptions={setShowOptions}/>}
    </div>;
} 

const mapStateToProps = (state: State) => {
    return {
        value: getSelectedValue(state)
    }
}

export default connect(mapStateToProps)(DropDown);