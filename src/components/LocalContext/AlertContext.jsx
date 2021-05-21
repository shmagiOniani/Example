import React, { Component } from "react";

const AlertContext = React.createContext();
export const AlertConsumer = AlertContext.Consumer;

export class AlertProvider extends Component {
  state = {
    variables: [],
    conditions: [],
    actions: [],
    notifications: [],
    notificationTimes: [],
    varName: "",
    conditionCounter: 1,
    conditionAlertOpen: false,
  };

  setVariable = (newVar) => {
    this.setState({
      variables: [...this.state.variables, newVar],
    });
    console.log(this.state.variables);
  };

  deleteVariable = (itemId) => {
    const newData = this.state.variables.filter((item) => item.id !== itemId);
    this.setState({ variables: [...newData] });
    console.log(this.state.variables);
  };

  setCondition = (item) => {
    item.name = `${this.state.conditionCounter} მდგომარეობა`;
    item.id = this.state.conditionCounter;
    this.setState({ conditions: [...this.state.conditions, item] });
    this.setState({ conditionCounter: this.state.conditionCounter + 1 });
    this.setState({ conditionAlertOpen: true });
    console.log(this.state.conditions);
  };

  deleteCondition = (itemId) => {
    const newData = this.state.conditions.filter((item) => item.id !== itemId);
    this.setState({ conditions: [...newData] });
    console.log(newData, itemId);
  };

  handleConditionAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ conditionAlertOpen: false });
  };

  setAction = (item) => {
    this.setState({ actions: { ...this.state.actions, item } });
  };

  setNotifications = (item) => {
    this.setState({ notifications: { ...this.state.notifications, item } });
    console.log(this.state.notifications);
  };

  deleteNotifications = (item) => {
    this.setState({ notifications: { ...this.state.notifications, item } });
  };

  setNotificationTimes = (item) => {
    this.setState({
      notificationTimes: { ...this.state.notificationTimes, item },
    });
    console.log(this.state.notificationTimes);
  };

  setVarName = (item) => {
    this.setState({
      varName: item,
    });
  };

  render() {
    const {
      variables,
      conditions,
      actions,
      notifications,
      notificationTimes,
      conditionAlertOpen,
      varName,
    } = this.state;
    const {
      setVariable,
      deleteVariable,
      setCondition,
      deleteCondition,
      handleConditionAlertClose,
      setAction,
      setNotifications,
      deleteNotifications,
      setNotificationTimes,
      setVarName,
    } = this;
    return (
      <AlertContext.Provider
        value={{
          conditionAlertOpen,
          variables,
          conditions,
          actions,
          notifications,
          notificationTimes,
          setVariable,
          deleteVariable,
          setCondition,
          deleteCondition,
          handleConditionAlertClose,
          setAction,
          setNotifications,
          deleteNotifications,
          setNotificationTimes,
          varName,
          setVarName,
        }}
      >
        {this.props.children}
      </AlertContext.Provider>
    );
  }
}

export default AlertContext;
