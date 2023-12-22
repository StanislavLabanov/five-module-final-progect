import { Modal } from "antd"
import { Dispatch, FC, SetStateAction } from "react"
import { okHendler } from "../utils/ok-hendler"
import { useEdit } from "../../../../../shared/lib/hooks/use-edit"
import { Note } from "../../../../../../../db"

interface Props {
   activeModal: Note | undefined
   setActiveModal: Dispatch<SetStateAction<Note | undefined>>
   item: Note | undefined
}

export const ModalBlock: FC<Props> = ({ activeModal, setActiveModal, item }) => {
   const value = useEdit()

   return (
      <Modal
         title="Удалить заметку?"
         open={activeModal !== undefined}
         onOk={() => okHendler(() => item && value?.deleteNote(item), setActiveModal)}
         okText="Удалить"
         cancelText="Закрыть"
         onCancel={() => setActiveModal(undefined)}
      >
         <p>{activeModal ? activeModal.title : ''}</p>
      </Modal>
   )
}