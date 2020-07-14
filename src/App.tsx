import React from 'react';
import './App.css';
import DropDown from "./DropDown/DropDown";
import { State } from './store/reducer';
import { getLocations } from './store/selectors';
import { connect } from 'react-redux';

interface Props{
  locations: string[];
}

function App(props: Props) {
  const {locations} = props;
  return (
    <div className="App">
      <DropDown label="Locations DropDown" locations={locations}/>
    </div>
  );
}

const mapStateToProps = (state: State):Props => ({
  locations: getLocations(state)
})

export default connect(mapStateToProps)(App);
