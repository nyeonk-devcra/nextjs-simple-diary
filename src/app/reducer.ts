import { MockData } from "../types/mock";

function reducer(
  state: MockData[],
  action: { type: string; data?: MockData; id?: number }
) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item: any) =>
        String(item.id) === String(action.data?.id) ? action.data : item
      );
    case "DELETE":
      return state.filter(
        (item: MockData) => String(item.id) !== String(action.id)
      );
    default:
      return state;
  }
}

export { reducer };
