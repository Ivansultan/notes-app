export type AppState = {
  counter: number;
};

type ActionType = "INCREMENT";
type Action = {
  type: ActionType;
};

export const initialState: AppState = {
  counter: 0,
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };

    default: {
      return state;
    }
  }
};

export default rootReducer;
