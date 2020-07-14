import * as React from"react";
import {setValue} from "../store/actions";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import OptionsItem from "./OptionItem";
import {debounce} from "lodash-es";

interface OwnProps{
    locations: string[];
    showOptions: boolean;
    setShowOptions(showOptions: boolean): void;
    maxItems?: number;
}

interface DispatchProps{
    setDropDownValue(location: string, add?: boolean): void;
}

type Props = OwnProps & DispatchProps;

const DEFAULT_MAX_ITEMS = 5;

const OptionsList:React.FunctionComponent<any> = (props: Props) => {

    const {locations, maxItems, setShowOptions, showOptions, setDropDownValue} = props;

    const [limitedLocations, setLimitedLocations] = React.useState<string[]>([]);
    const [inputValue, setInputValue] = React.useState<string>("");
    const [maxLocations, setMaxLocations] = React.useState<number>(maxItems || DEFAULT_MAX_ITEMS);

    React.useEffect(() => {
        const filtered = !!inputValue ?  
        locations.filter(item => {
                return item.toLowerCase().search(inputValue.toLowerCase()) > -1
            }).slice(0, maxLocations)
        : [...locations.slice(0, maxLocations)];
        setLimitedLocations(filtered);
    }, [inputValue, maxLocations]);

    const inputChange = (e: any) => {
        e.persist();
        let debouncedFn;
        if (!debouncedFn) {
        debouncedFn =  debounce(() => {
            setInputValue(e.target.value);
            console.log(e.target.value);
        }, 500);
        }
        debouncedFn();
    }

    const selectValue = (location?: string) => {
        if(location){
            setShowOptions(!showOptions);
            setDropDownValue(location);
        }
    }

    const addSelect = () => {
        setDropDownValue(inputValue, true);
        setShowOptions(!showOptions);
    }

    const moreClick = () => {
        setMaxLocations(locations.length);
    }

    return <div className="options-list">
        <div>
            <input placeholder="Search.." onChange={inputChange}/>
        </div>
        {
            (limitedLocations.length === 0 ? 
                <OptionsItem
                location={inputValue}     
                addSelect={addSelect}
                selectValue={selectValue}
            /> : 
            limitedLocations.map((location, index) => 
            <OptionsItem     
                key={index}
                location={location}
                selectValue={selectValue}
                moreClick={moreClick}
                moreCount={ index === limitedLocations.length - 1 ? 
                    locations.length - limitedLocations.length : 0}
            />
            ))
        }
    </div>;
} 


const mapDispatchToProps = (dispatch: any) => {
    return {
      ...bindActionCreators(
        {
          setDropDownValue: setValue,
        },dispatch),
    }
  }

export default connect(null, mapDispatchToProps)(OptionsList);