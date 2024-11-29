import clsx from "clsx";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table.jsx";

const TableCom = ({ children, className = "" }) => {
    return (
        <Table className="min-w-full divide-y divide-gray-200">
            {children}
        </Table>
    );
};

const THeader = ({ children, className }) => {
    return <TableHeader className={className}>{children}</TableHeader>;
};

const TRow = ({ children, className }) => {
    return <TableRow className={className}>{children}</TableRow>;
};

const THead = ({ children, className }) => {
    return <TableHead className={className}>{children}</TableHead>;
};

const TBody = ({ className, children, ...props }) => {
    return (
        <TableBody {...props} className={className}>
            {children}
        </TableBody>
    );
};

const TCell = ({ children, className }) => {
    return <TableCell className={className}>{children}</TableCell>;
};

TableCom.THeader = THeader;
TableCom.TRow = TRow;
TableCom.THead = THead;
TableCom.TBody = TBody;
TableCom.TCell = TCell;

export default TableCom;
