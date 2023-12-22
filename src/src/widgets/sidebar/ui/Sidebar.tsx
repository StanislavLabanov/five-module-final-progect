import { FC, useState } from "react";
import { useDebounce } from "../../../shared/lib/hooks/use-debounce";
import { SearchBox } from "../components/search-box";
import { SidebarBox } from "../components/sidebar-box";
import { Layout } from "antd";

export const Sidebar: FC = () => {
   const [value, setValue] = useState('')
   const debounce = useDebounce(value)

   return (
      <Layout.Sider
         style={{ background: '#FFFFFF', height: "100vh" }}
         width={300}
         breakpoint="lg"
         collapsedWidth="0"
      >
         <SearchBox value={value} setValue={setValue} />
         <SidebarBox debounce={debounce} />
      </Layout.Sider>
   )
}