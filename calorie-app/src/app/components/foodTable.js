import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table"

export function FoodTable(data) {
    return (
        <Table>
  <TableBody>
    <TableRow>
      <TableCell>Pizza</TableCell>
      <TableCell className="text-right">150 kCal</TableCell>
    </TableRow>
  </TableBody>
</Table>

    )
  }