import { Cell } from "..";
import { ActionType } from "../action-types";
import { CellType } from "../cell";

export type Direction = "up" | "down";

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: { id: string; content: string };
}
export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
}
export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}
export interface InsertCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: { id: string | null; type: CellType };
}

export interface StartBundleAction {
  type: ActionType.BUNDLE_START;
  payload: { cellId: string };
}
export interface SaveCellsError {
  type: ActionType.SAVE_CELLS_ERROR;
  payload: string;
}

export interface CompleteBundleAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    result: {
      code: string;
      err: string;
    };
  };
}

export interface FetchCellsAction {
  type: ActionType.FETCH_CELLS;
}
export interface FetchCellsCompleteAction {
  type: ActionType.FETCH_CELLS_COMPLETE;
  payload: Cell[];
}
export interface FetchCellErrorAction {
  type: ActionType.FETCH_CELLS_ERROR;
  payload: string;
}

export type Action =
  | MoveCellAction
  | UpdateCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | StartBundleAction
  | CompleteBundleAction
  | SaveCellsError
  | FetchCellsAction
  | FetchCellsCompleteAction
  | FetchCellErrorAction;
