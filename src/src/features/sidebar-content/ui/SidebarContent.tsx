import { FC, useState } from "react"
import { List } from 'antd';
import { useLiveQuery } from "dexie-react-hooks";
import styles from './SidebarContent.module.scss'
import { searchHendler } from "../utils/search-hendler";
import { ModalBlock } from "./modal";
import { clickHendler } from "../utils/click-hendler";
import { useEdit } from "../../../shared/lib/hooks/use-edit";
import { Note } from "../../../../../db";
import { timeHendler } from "../../../shared/lib/utils/time";
import { useValueWorkspace } from "../../../shared/lib/hooks/use-value-workspace";

interface Props {
   debounce: string
}

export const SidebarContent: FC<Props> = ({ debounce }) => {
   const notes = useLiveQuery(() => searchHendler(debounce), [debounce])
   const [activeModal, setActiveModal] = useState<Note | undefined>(undefined)
   const valueInputs = useValueWorkspace()
   const value = useEdit()

   return (
      <>
         <List
            itemLayout="horizontal"
            dataSource={notes}
            renderItem={item => (
               <List.Item key={item.title} style={{ position: 'relative' }}>
                  <List.Item.Meta
                     title={<span className={styles.title}>{item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title}</span>}
                     description={
                        <>
                           <span className={styles.time}>{timeHendler(JSON.parse(item.date)).toString()}</span>
                           <span>{
                              item.text.length
                                 ? ` | ${item.text.length > 20 ? item.text.substring(0, 20) + '...' : item.text}`
                                 : ''
                           }</span>
                        </>
                     }
                  />
                  <div className={styles.change}>
                     <div className={styles.edit} onClick={() => clickHendler(item, value, valueInputs)}>
                        {item.id === value?.note?.id ? <span>&#9997;</span> : <span>&#9998;</span>}
                     </div>
                     <div className={styles.delete} onClick={() => setActiveModal(item)}>&#10060;</div>
                  </div>
               </List.Item>
            )}
         />
         <ModalBlock activeModal={activeModal} setActiveModal={setActiveModal} item={activeModal} />
      </>
   )
}