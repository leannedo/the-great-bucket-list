export type IModalState = {
  [key in ModalKeys]: IModal;
};

export interface IModal {
  isVisible: boolean;
  props?: Record<string, unknown>;
}

export interface IModalReducer {
  categoryEditingModal: IModal;
  categorySelectionModal: IModal;
  confirmModal: IModal;
  showModal: (key: ModalKeys, props?: Record<string, unknown>) => void;
  closeModal: (key: ModalKeys) => void;
  closeAllModals: () => void;
}

export type IModalAction =
  | {
      type: ModalActions.SHOW_MODAL;
      payload: { key: ModalKeys; props?: Record<string, unknown> };
    }
  | {
      type: ModalActions.CLOSE_MODAL;
      payload: { key: ModalKeys };
    }
  | {
      type: ModalActions.CLOSE_ALL_MODALS;
    };

export enum ModalActions {
  SHOW_MODAL = 'SHOW_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS',
}

export enum ModalKeys {
  CATEGORY_EDITING_MODAL = 'CATEGORY_EDITING_MODAL',
  CATEGORY_SELECTION_MODAL = 'CATEGORY_SELECTION_MODAL',
  CONFIRM_MODAL = 'CONFIRM_MODAL',
}
