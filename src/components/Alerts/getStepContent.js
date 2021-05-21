import React from "react";
import { Box } from "@material-ui/core";
import CreateOperand from "./steps/CreateOperand";
import { Logic } from "./steps/Logic";
import { Actions } from "./steps/Actions";
import { Notifications } from "./steps/Notifications";
import { NotificationTime } from "./steps/NotificationTime";
import { Name } from "./steps/Name";

export function getStepContent(step) {
  switch (step) {
    case 0:
      return <CreateOperand />;
    case 1:
      return <Logic />;
    case 2:
      return <Actions />;
    case 3:
      return <Notifications />;
    case 4:
      return <NotificationTime />;
    case 5:
      return <Name />;
    default:
      return <Box />;
  }
}
