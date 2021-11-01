import Joi from "joi";

export const initalFsm = {
  initialState: "up",
  states: {
    up: {
      transitions: {
        RIGHT: "right",
        LEFT: "left",
      },
    },
    right: {
      transitions: {
        DOWN: "down",
      },
    },
    down: {
      transitions: {
        LEFT: "left",
      },
    },
    left: {
      transitions: {
        UP: "up",
      },
    },
  },
};

export const schema = Joi.object({
  initialState: Joi.string().lowercase(),
  states: Joi.object().pattern(
    Joi.string().lowercase(),
    Joi.object({
      transitions: Joi.object().pattern(
        Joi.string().uppercase(),
        Joi.string().lowercase()
      ),
    })
  ),
}).options({ convert: false });

export const getFilteredFsm = (fsm) => {
  const {
    state,
    error,
    errorSubscribers,
    transitionSubsrcibers,
    ...filteredFsm
  } = fsm;
  return filteredFsm;
};
