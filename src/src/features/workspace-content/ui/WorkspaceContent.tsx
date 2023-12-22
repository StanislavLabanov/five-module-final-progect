import { FC, useEffect } from "react"
import { Button, Form, Input } from 'antd';
import { onFinish } from "../utils/on-finish";
import { useEdit } from "../../../shared/lib/hooks/use-edit";
import { useDebounce } from "../../../shared/lib/hooks/use-debounce";
import { useValueWorkspace } from "../../../shared/lib/hooks/use-value-workspace";
const { TextArea } = Input

export const WorkspaceContent: FC = () => {
   const valueInputs = useValueWorkspace()
   const debounced = useDebounce(valueInputs?.value)
   const value = useEdit()

   useEffect(() => {
      localStorage.setItem('value', JSON.stringify(debounced))
   }, [debounced])

   return (
      <Form
         onFinish={e => onFinish(value, e.title.trim(), e.text.trim(), valueInputs?.setValue)}
         tabIndex={0}
         fields={valueInputs?.value}
      >
         <Form.Item name="title" rules={[{ required: true, message: 'Введите заголовок' }]}>
            <Input
               value={valueInputs?.value[0].value}
               onChange={(e) => valueInputs?.setValue(prev => [{ name: 'title', value: e.target.value }, prev[1]])}
               showCount
               maxLength={200}
               placeholder="Название заметки"
            />
         </Form.Item>
         <Form.Item name="text">
            <TextArea
               value={valueInputs?.value[1].value}
               onChange={(e) => valueInputs?.setValue(prev => [prev[0], { name: 'text', value: e.target.value }])}
               placeholder="Описание заметки"
               autoSize={{ minRows: 20, maxRows: 20 }}
            />
         </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit">{value?.note ? 'Сохранить' : 'Создать'}</Button>
         </Form.Item>
      </Form>
   )
}