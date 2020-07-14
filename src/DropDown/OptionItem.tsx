import * as React from "react";

interface Props{
    selectValue(location?: string): void;
    location: string;
    moreCount?: number;
    addSelect?(): void;
    moreClick?(): void;
}

const OptionItem: React.FunctionComponent<Props> = (props: Props) => {

    const {selectValue, location, moreCount, addSelect, moreClick} = props;

    return (
        <div className="option-item">
            <span  className="value" onClick={() => selectValue(location)}>{location}</span>
            {addSelect && location &&
            <button className="more-count" onClick={addSelect}>Add and select</button> }
            {!!moreCount && 
            <button className="more-count" onClick={moreClick}>{`${moreCount} more..`}</button>}
        </div>
    );
}

export default OptionItem;