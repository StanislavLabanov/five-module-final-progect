import { FC } from "react"
import { Layout } from "antd"
import { Workspace } from "../widgets/workspace"
import { Sidebar } from "../widgets/sidebar"

export const Home: FC = () => {
   return (
      <Layout>
         <Sidebar />
         <Workspace />
      </Layout>
   )
}