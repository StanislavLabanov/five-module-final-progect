import { FC } from "react"
import { WorkspaceContainer } from "../../../entities/workspace-container"
import { WorkspaceContent } from "../../../features/workspace-content"

export const Workspace: FC = () => {
   return (
      <WorkspaceContainer>
         <WorkspaceContent />
      </WorkspaceContainer>
   )
}