import { motion } from "framer-motion";

const Table = ({ columns, renderRow, data }) => {
    return (
        <motion.table 
        className="w-full mt-4"
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
                            {col.header}
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
