import { Layout } from "antd"
import { FC, ReactNode } from "react"

interface Props {
   children: ReactNode
}

export const WorkspaceContainer: FC<Props> = ({ children }) => {
   return (
      <Layout>
         <Layout.Content style={{ margin: '24px' }}>
            {children}
         </Layout.Content>
         <Layout.Footer style={{ textAlign: 'center' }}>Итоговый проект по модулю React JS</Layout.Footer>
      </Layout>
   )
}