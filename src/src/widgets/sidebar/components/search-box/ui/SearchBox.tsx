import { Dispatch, FC, SetStateAction } from "react"
import { SearchBoxContainer } from "../../../../../entities/search-box-container"
import { SearchBoxContent } from "../../../../../features/search-box-content"

interface Props {
   value: string
   setValue: Dispatch<SetStateAction<string>>
}

export const SearchBox: FC<Props> = ({ value, setValue }) => {
   return (
      <SearchBoxContainer>
         <SearchBoxContent value={value} setValue={setValue} />
      </SearchBoxContainer>
   )
}
