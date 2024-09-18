import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { dataOrder } from '@/constants/data-order';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
export function ActiveOrders() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[80px] sm:table-cell">
              </TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead className="hidden md:table-cell">
                Priority
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">
                Complete Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataOrder.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={`/avatars/${index + 1}.png`} alt="Avatar" />
                    <AvatarFallback>{order.customerName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">
                  {order.customerName}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="outline">{order.priority}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{order.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {order.estimatedCompletion.toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div></div>
  );
}
