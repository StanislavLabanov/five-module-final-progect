import { FC, ReactNode } from "react";
import { Layout } from 'antd';

interface Props {
   children: ReactNode
}

export const SidebarContainer: FC<Props> = ({ children }) => {
   return (
      <Layout style={{ margin: '12px 0 0 12px', background: '#FFFFFF' }}>
         {children}
      </Layout>
   )
}