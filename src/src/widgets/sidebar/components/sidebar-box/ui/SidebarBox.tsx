import { FC } from "react"
import { SidebarContainer } from "../../../../../entities/sidebar-container"
import { SidebarContent } from "../../../../../features/sidebar-content"

interface Props {
   debounce: string
}

export const SidebarBox: FC<Props> = ({ debounce }) => {
   return (
      <SidebarContainer>
         <SidebarContent debounce={debounce} />
      </SidebarContainer>
   )
}