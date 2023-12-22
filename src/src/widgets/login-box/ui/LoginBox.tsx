import { Button, Form, Input } from "antd"
import { FC } from "react"
import { useAuth } from "../../../shared/lib/hooks/use-auth"
import { useNavigate } from "react-router-dom"
import styles from './LoginBox.module.scss'
import { navigateCallback } from "../utils/navigate"

interface FieldType {
   username: string
   password: string
}

export const LoginBox: FC = () => {
   const navigate = useNavigate()
   const value = useAuth()

   return (
      <div className={styles.block}>
         <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={(e) => value?.singIn(e.username, () => navigateCallback(navigate))}
            autoComplete="off"
            className={styles.form}
         >
            <Form.Item<FieldType>
               label="Введите имя"
               name="username"
               rules={[{ required: true, message: 'Пожалуйста введите имя!' }]}
            >
               <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5, span: 20 }}>
               <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
            </Form.Item>
         </Form>
      </div>
   )
}