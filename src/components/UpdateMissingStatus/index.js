import { Modal } from "antd";
import { STATUS } from "../../utils/constants";
import { ButtonWrapper, Heading } from "./MissingStatus.style";
import styles from "./modal.module.css";

const UpdateMissingStatus = ({
  item,
  handleStatus,
  open,
  handleClose,
  orderId,
}) => {
  const handleStatusUpdate = (status) => {
    handleStatus(orderId, item.id, status);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      title="Missing Product"
      centered
      className={styles.missingStatusWrapper}
    >
      <Heading>Is {item?.productName} urgent ?</Heading>

      <ButtonWrapper>
        <button onClick={() => handleStatusUpdate(STATUS.MISSING_URGENT)}>
          Yes
        </button>
        <button onClick={() => handleStatusUpdate(STATUS.MISSING)}>No</button>
      </ButtonWrapper>
    </Modal>
  );
};

export default UpdateMissingStatus;
