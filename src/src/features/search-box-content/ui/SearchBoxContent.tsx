import { Input } from "antd";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
   value: string
   setValue: Dispatch<SetStateAction<string>>
}

export const SearchBoxContent: FC<Props> = ({ value, setValue }) => {
   return <Input value={value} placeholder="Название или описание из заметки" onChange={(e) => setValue(e.target.value)} />
}