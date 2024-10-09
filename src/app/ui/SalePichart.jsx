import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const SalesPieChart = ({ data }) => {
    // Couleurs des sections du camembert
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', "#76EB5F", "#2B7744", "#77FF9B", "#CADB6B", "#DFB633", "#BE9566"];
    return (
        <div className='w-full px-5 py-3'>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="sales"
                        nameKey="productName"
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        fill="#8884d8"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesPieChart;
