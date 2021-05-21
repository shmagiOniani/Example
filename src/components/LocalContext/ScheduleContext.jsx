import React, { Component } from "react";

const ScheduleContext = React.createContext();
export const ScheduleConsumer = ScheduleContext.Consumer;

export class ScheduleProvider extends Component {
  state = {
    time: "",
    days: [],
    devices: [],
    gateways: [],
  };

  setTime = (newVar) => {
    this.setState({
      time: { newVar },
    });
  };

  setDay = (item) => {
    this.setState({ days: { ...this.state.days, item } });
  };

  setDevice = (item) => {
    this.setState({ devices: { ...this.state.devices, item } });
    console.log(this.state.device);
  };

  setGateway = (item) => {
    this.setState({ gateways: { ...this.state.gateways, item } });
  };

  render() {
    const { time, days, devices, gateways } = this.state;
    const { setTime, setDay, setDevice, setGateway } = this;
    return (
      <ScheduleContext.Provider
        value={{
          time,
          days,
          devices,
          gateways,
          setTime,
          setDay,
          setDevice,
          setGateway,
        }}
      >
        {this.props.children}
      </ScheduleContext.Provider>
    );
  }
}

export default ScheduleContext;
