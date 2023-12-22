import { Layout } from "antd"
import { FC, ReactNode } from "react"

interface Props {
   children: ReactNode
}

export const SearchBoxContainer: FC<Props> = ({ children }) => {
   return (
      <Layout style={{ margin: '12px 12px 0 12px' }}>
         {children}
      </Layout>
   )
}