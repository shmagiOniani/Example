import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class Input extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.error ? (
          this.props.inputType === "select" ? (
            <TextField
              disabled={this.props.additable}
              required
              select
              error
              id={this.props.userId}
              name={this.props.userName}
              label={this.props.userLabel}
              fullWidth
              defaultValue=""
              onChange={this.props.handleChange}
              value={this.props.inputValue}
              helperText={this.props.error}
            >
              {this.props.children}
            </TextField>
          ) : this.props.inputType === "date" ? (
            <TextField
              disabled={this.props.additable}
              required
              error
              type={this.props.inputType}
              id={this.props.userId}
              name={this.props.userName}
              label={this.props.userLabel}
              fullWidth
              onChange={this.props.handleChange}
              value={this.props.inputValue}
              helperText={this.props.error}
              InputLabelProps={{
                shrink: true,
              }}
            />
          ) : (
            <TextField
              disabled={this.props.additable}
              required
              error
              type={this.props.inputType}
              id={this.props.userId}
              name={this.props.userName}
              label={this.props.userLabel}
              fullWidth
              onChange={this.props.handleChange}
              value={this.props.inputValue}
              helperText={this.props.error}
              autoComplete={this.props.autoComplete}
              variant={this.props.variant}
            />
          )
        ) : this.props.inputType === "select" ? (
          <TextField
            disabled={this.props.additable}
            required
            select
            id={this.props.userId}
            name={this.props.userName}
            label={this.props.userLabel}
            fullWidth
            defaultValue=""
            onChange={this.props.handleChange}
            value={this.props.inputValue}
            helperText={this.props.error}
          >
            {this.props.children}
          </TextField>
        ) : this.props.inputType === "date" ? (
          <TextField
            disabled={this.props.additable}
            required
            type={this.props.inputType}
            id={this.props.userId}
            name={this.props.userName}
            label={this.props.userLabel}
            fullWidth
            onChange={this.props.handleChange}
            value={this.props.inputValue}
            helperText={this.props.error}
            InputLabelProps={{
              shrink: true,
            }}
          />
        ) : (
          <TextField
            disabled={this.props.additable}
            required
            type={this.props.inputType}
            id={this.props.userId}
            name={this.props.userName}
            label={this.props.userLabel}
            fullWidth
            onChange={this.props.handleChange}
            value={this.props.inputValue}
            helperText={this.props.error}
            autoComplete={this.props.autoComplete}
            variant={this.props.variant}
          />
        )}
        {}
      </>
    );
  }
}

export default Input;
