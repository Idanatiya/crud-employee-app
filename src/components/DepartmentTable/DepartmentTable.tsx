import { TableCell, TableRow } from "@mui/material";

import BaseTable from "@/components/BaseTable/BaseTable";
import { Department } from "@/types";

interface Props {
  departments: Department[];
  onOpenPopup: (id: string) => void;
}

const DepartmentTable = ({ departments, onOpenPopup }: Props) => {
  return (
    <BaseTable headers={["Department", "Id", "Action"]}>
      {departments.map(({ id, name }) => (
        <TableRow key={id}>
          <TableCell>{name}</TableCell>
          <TableCell>{id}</TableCell>
          <TableCell>
            <button onClick={() => onOpenPopup(id)}>Delete Department</button>
          </TableCell>
        </TableRow>
      ))}
    </BaseTable>
  );
};

export default DepartmentTable;
