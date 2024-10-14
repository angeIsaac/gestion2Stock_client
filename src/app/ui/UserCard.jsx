import Image from "next/image";
import { motion } from "framer-motion"

const UserCard = ({ type }) => {
    return (
        <motion.div 
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.5 } }}
        className="rounded-2xl ring-1 ring-slate-900/5 p-4 flex-1 max-w-sm bg-gray-300 ">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
                    2024/25
                </span>
            </div>
            <h1 className="text-2xl font-semibold my-4">1,234</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
        </motion.div>
    );
};

export default UserCard;
