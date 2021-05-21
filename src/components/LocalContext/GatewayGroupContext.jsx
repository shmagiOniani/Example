import React, { Component } from "react";
import { gatewayData } from "../../assets/dataImitators/gatewayData";

const GatewayGroup = React.createContext();
export const GatewayGroupConsumer = GatewayGroup.Consumer;

export class GatewayGroupProvider extends Component {
  state = {
    groups: [],
    groupElements: [],
  };

  setGroups = (groups) => {
    this.setState({ groups: groups });
    console.log(this.state.groups);
  };

  // setSelectedGroup = (name) => {
  //   this.setState({ selectedGroup: name });
  // };

  // removeSelectedGroup = () => {
  //   this.setState({ selectedGroup: "" });
  // };

  setGroupElements = (item) => {
    const data = this.state.groups.filter((x) => x.name === item);
    const models = data.map((item) => item.model);
    const newData = gatewayData.filter((x) => x.model === "d-34845");
    // models.forEach((element) => x.model === element)
    console.log(data, item, newData, models);
  };

  render() {
    const { groups, groupElements } = this.state;
    const { setGroups, setGroupElements } = this;
    return (
      <GatewayGroup.Provider
        value={{
          groups,
          groupElements,
          setGroups,
          setGroupElements,
        }}
      >
        {this.props.children}
      </GatewayGroup.Provider>
    );
  }
}

export default GatewayGroup;
