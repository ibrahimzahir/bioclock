const StatsGrid = ({ stats }) => {
    // If no stats, return placeholder or empty
    if (!stats) return null;

    const items = [
        { label: 'Total Days', value: stats.totalDays },
        { label: 'Total Weeks', value: stats.totalWeeks },
        { label: 'Total Months', value: stats.totalMonths },
        { label: 'Total Hours', value: stats.totalHours },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((stat, index) => (
                <div key={index} className="bg-gray-100/50 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-gray-100 transition-colors">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                        {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
