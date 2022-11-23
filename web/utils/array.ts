/**
 * Order by specific key based on Array `Sort` function.
 * Example: Array.sort(orderBy("key"))
 */
export const orderBy = <T>(
  key: keyof T
): ((leftVal: T, rightVal: T) => number) => {
  return (leftVal: T, rightVal: T) => {
    if (leftVal[key] > rightVal[key]) {
      return 1;
    } else if (leftVal[key] < rightVal[key]) {
      return -1;
    } else {
      return 0;
    }
  };
};

/**
 * Descending order by specific key based on Array `Sort` function.
 * Example: Array.sort(orderByDesc("key"))
 */
export const orderByDesc = <T>(
  key: keyof T
): ((leftVal: T, rightVal: T) => number) => {
  return (leftVal: T, rightVal: T) => {
    if (leftVal[key] < rightVal[key]) {
      return 1;
    } else if (leftVal[key] > rightVal[key]) {
      return -1;
    } else {
      return 0;
    }
  };
};

// OrderBy with ThenOrderBy based on Array `sort` function.
export const orderFc = <T>(
  orderByModel: OrderByModel<T>,
  thenOrderByModel: ThenOrderByModel<T>
): ((leftVal: T, rightVal: T) => number) => {
  return (leftVal: T, rightVal: T) => {
    if (
      !orderByModel.type ||
      orderByModel.type === "number" ||
      orderByModel.type === "date"
    ) {
      if (leftVal[orderByModel.orderBy] === rightVal[orderByModel.orderBy]) {
        if (
          !thenOrderByModel.type ||
          thenOrderByModel.type === "number" ||
          thenOrderByModel.type === "date"
        ) {
          if (
            leftVal[thenOrderByModel.thenOrderBy] >
            rightVal[thenOrderByModel.thenOrderBy]
          ) {
            return thenOrderByModel.desc ? -1 : 1;
          } else if (
            leftVal[thenOrderByModel.thenOrderBy] <
            rightVal[thenOrderByModel.thenOrderBy]
          ) {
            return thenOrderByModel.desc ? 1 : -1;
          } else {
            return 0;
          }
        } else if (thenOrderByModel.type === "string") {
          return leftVal[thenOrderByModel.thenOrderBy].localeCompare(
            rightVal[thenOrderByModel.thenOrderBy],
            "en"
          );
        }
      } else {
        if (leftVal[orderByModel.orderBy] > rightVal[orderByModel.orderBy]) {
          return orderByModel.desc ? -1 : 1;
        } else if (
          leftVal[orderByModel.orderBy] < rightVal[orderByModel.orderBy]
        ) {
          return orderByModel.desc ? 1 : -1;
        } else {
          return 0;
        }
      }
    } else if (orderByModel.type === "string") {
      if (leftVal[orderByModel.orderBy] === rightVal[orderByModel.orderBy]) {
        if (
          !thenOrderByModel.type ||
          thenOrderByModel.type === "number" ||
          thenOrderByModel.type === "date"
        ) {
          if (
            leftVal[thenOrderByModel.thenOrderBy] >
            rightVal[thenOrderByModel.thenOrderBy]
          ) {
            return thenOrderByModel.desc ? -1 : 1;
          } else if (
            leftVal[thenOrderByModel.thenOrderBy] <
            rightVal[thenOrderByModel.thenOrderBy]
          ) {
            return thenOrderByModel.desc ? 1 : -1;
          } else {
            return 0;
          }
        } else if (thenOrderByModel.type === "string") {
          return leftVal[thenOrderByModel.thenOrderBy].localeCompare(
            rightVal[thenOrderByModel.thenOrderBy],
            "en"
          );
        }
      } else {
        return leftVal[orderByModel.orderBy].localeCompare(
          rightVal[orderByModel.orderBy],
          "en"
        );
      }
    }
    return 0;
  };
};

type OrderByModel<T> = {
  orderBy: keyof T & String;
  type?: OrderType;
  desc?: boolean;
};

type ThenOrderByModel<T> = {
  thenOrderBy: keyof T & String;
  type?: OrderType;
  desc?: boolean;
};

type OrderType = "number" | "string" | "date";
