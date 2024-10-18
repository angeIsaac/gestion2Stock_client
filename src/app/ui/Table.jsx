import { motion } from "framer-motion";
import QueryInput from "@/app/ui/queryInput";

const Table = ({ columns, renderRow, data, handler, search }) => {
    return (
        <motion.table 
        className="w-full mt-4 table-auto min-w-[690px]"
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{duration: 0.3}}>
            <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map((col, index) => (
                        <motion.th 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.3, delay: index * 0.1}}
                            key={index} className={`${col.className}`}>
                            <div className="inline-flex space-x-5 items-center">
                                {col.header}
                                {col.header === "info" ? null : <QueryInput handler={handler} search={search}/>}
                            </div>
                            
                        </motion.th>
                    ))}
                </tr>
            </thead>
            <tbody className="">
                {data.map((item, index) => renderRow(item, index))}
            </tbody>
        </motion.table>
    );
};

export default Table;
