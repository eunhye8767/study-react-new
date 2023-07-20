const useConfirm = (message = "", onConfirm, onCancel) => {
  const confirmAction = () => {
    /*eslint no-restricted-globals:1 */
    if (confirm(message)) {
      // 확인
      onConfirm();
    } else {
      // 취소
      onCancel();
    }
  };

  if (!onConfirm || typeof onConfirm !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;

  return confirmAction;
};

export default useConfirm;
