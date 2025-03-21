import { ModalContainer } from "../../mui_configurations/styled_components/chart_sections/styled_modal_container";
import { Close } from "@mui/icons-material";
import { CloseModalButton } from "../../mui_configurations/styled_components/buttons/styled_close_modal";
//  See edmundo_example

interface TestingModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const ChartModalContainer: React.FC<TestingModalProps> = ({
  title,
  children,
  onClose,
}) => {
  return (
    <ModalContainer>
      <CloseModalButton onClick={onClose}>
        <Close />
      </CloseModalButton>

      {children}
    </ModalContainer>
  );
};
