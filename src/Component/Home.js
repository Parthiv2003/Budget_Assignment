import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

function Home() {
    const [revenueData, setRevenueData] = useState([
        { id: 0, code: 411000, name: "Regular Assessment Income", budget_2022: 887514.92, actual_2022: 887512.44, budget_2023: 914798.32, actual_2023: 533634.15, projection_2023: 914801.40, budget_2024: 930767.00, default_budget_2024: false, change_revenue: 15968.68, read: true, delete: false },
        { id: 1, code: 411400, name: "Late Fees & Fines", budget_2022: 0, actual_2022: 1550.00, budget_2023: 0, actual_2023: 2550.00, projection_2023: 2550.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0, read: true, delete: false },
        { id: 2, code: 411500, name: "Violation Fees", budget_2022: 0, actual_2022: 100.00, budget_2023: 0, actual_2023: -1810.00, projection_2023: -1810.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0.00, read: true, delete: false },
        { id: 3, code: 411500, name: "Parking Fees", budget_2022: 4800.00, actual_2022: 4800.00, budget_2023: 4800.00, actual_2023: 1950.00, projection_2023: 1950.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: -4800.00, read: true, delete: false },
        { id: 4, code: 429000, name: "Moving In/Move Out Fees", budget_2022: 0, actual_2022: 300.00, budget_2023: 0, actual_2023: 750.00, projection_2023: 1500.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0.00, read: false, delete: false },
        { id: 5, code: 431100, name: "Administrative Fees", budget_2022: 0, actual_2022: 0, budget_2023: 0, actual_2023: 0, projection_2023: 0, budget_2024: 0, default_budget_2024: true, change_revenue: 0, read: true, delete: false },
        { id: 6, code: 431300, name: "Other Member Income", budget_2022: 0, actual_2022: 2570.00, budget_2023: 0, actual_2023: 240.00, projection_2023: 411.43, budget_2024: 0, default_budget_2024: true, change_revenue: 0, read: false, delete: false },
        { id: 7, code: 431300, name: "Interest Income", budget_2022: 0, actual_2022: 533.95, budget_2023: 0, actual_2023: 243.99, projection_2023: 418.27, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0, read: true, delete: false },
        { id: 8, code: null, name: "Insurance Settlement", budget_2022: 0, actual_2022: 46972.81, budget_2023: 0, actual_2023: 0, projection_2023: 0, budget_2024: 0, default_budget_2024: true, change_revenue: 0.00, read: true, delete: false },
        { id: 9, code: null, name: "Allowance For Doubtful Accounts", budget_2022: 0, actual_2022: -65.00, budget_2023: 0, actual_2023: 0, projection_2023: 0, budget_2024: 0, default_budget_2024: true, change_revenue: 0.00, read: true, delete: true },
    ]);

    const [expenseData, setExpenseData] = useState([
        { id: 0, code: 510100, name: "Bank Fees", budget_2022: 36.00, actual_2022: 0.00, budget_2023: 20.00, actual_2023: 0, projection_2023: 0, budget_2024: 0, default_budget_2024: true, change_revenue: -20.00, read: true, delete: false },
        { id: 1, code: 512300, name: "Management Fees", budget_2022: 32716.92, actual_2022: 32841.92, budget_2023: 35988.61, actual_2023: 27316.20, projection_2023: 46827.77, budget_2024: 39960.00, default_budget_2024: true, change_revenue: 3971.39, read: false, delete: false },
        { id: 2, code: 512400, name: "Meeting Expense", budget_2022: 0, actual_2022: 0, budget_2023: 0, actual_2023: 67.50, projection_2023: 115.71, budget_2024: 500.00, default_budget_2024: true, change_revenue: 500.00, read: true, delete: false },
        { id: 3, code: 512600, name: "Office Expense(Lot)", budget_2022: 4170.00, actual_2022: 2090.18, budget_2023: 4170.00, actual_2023: 1813.62, projection_2023: 3109.06, budget_2024: 2500.00, default_budget_2024: true, change_revenue: -1670.00, read: true, delete: false },
        { id: 4, code: 512900, name: "Postage", budget_2022: 0, actual_2022: 0, budget_2023: 0, actual_2023: 425.49, projection_2023: 729.41, budget_2024: 850.00, default_budget_2024: true, change_revenue: 850.00, read: false, delete: false },
        { id: 5, code: 513000, name: "Printing", budget_2022: 0, actual_2022: 0, budget_2023: 0, actual_2023: 2321.45, projection_2023: 3979.63, budget_2024: 4000.00, default_budget_2024: true, change_revenue: 4000.00, read: true, delete: false },
        { id: 6, code: 513200, name: "Social Event Expense", budget_2022: 0, actual_2022: 0, budget_2023: 0, actual_2023: 1500.00, projection_2023: 1500.00, budget_2024: 2500.00, default_budget_2024: true, change_revenue: 0, read: false, delete: false },
        { id: 7, code: 513300, name: "Storage", budget_2022: 0, actual_2022: 0, budget_2023: 0, actual_2023: 546.50, projection_2023: 936.86, budget_2024: 96.00, default_budget_2024: true, change_revenue: 96.00, read: true, delete: false },
        { id: 8, code: 513900, name: "Website Expense", budget_2022: 756.00, actual_2022: 756.00, budget_2023: 756.00, actual_2023: 252.00, projection_2023: 432.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: -756.00, read: true, delete: false },
        { id: 9, code: 519100, name: "Delinquent Admin Fee", budget_2022: 0, actual_2022: 0, budget_2023: 0, actual_2023: 410.00, projection_2023: 702.86, budget_2024: 0, default_budget_2024: true, change_revenue: 0, read: true, delete: false },
    ])

    const [taxData, setTaxData] = useState([
        { id: 0, code: 522100, name: "Federal Income Taxes", budget_2022: 725.00, actual_2022: 1600.00, budget_2023: 1600.00, actual_2023: 1800.00, projection_2023: 1800.00, budget_2024: 2100.00, default_budget_2024: true, change_revenue: 500.00, read: true, delete: false }
    ])

    const [insuranceData, setInsuranceData] = useState([
        { id: 0, code: 522100, name: "Master Insurance", budget_2022: 126454.00, actual_2022: 123656.12, budget_2023: 145984.00, actual_2023: 79362.97, projection_2023: 105691.64, budget_2024: 46500.00, default_budget_2024: true, change_revenue: -99484.00, read: true, delete: false },
        { id: 1, code: 521240, name: "Insurance Earthquake", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 0.00, projection_2023: 39155.33, budget_2024: 120500.00, default_budget_2024: true, change_revenue: 120500.00, read: false, delete: false },
        { id: 2, code: 522100, name: "Master Insurance", budget_2022: 0.00, actual_2022: 46972.81, budget_2023: 0, actual_2023: 0, projection_2023: 0.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0.00, read: true, delete: false }
    ])

    const [professionalData, setProfessionalData] = useState([
        { id: 0, code: 521100, name: "Audit Fees", budget_2022: 3200.00, actual_2022: 3200.00, budget_2023: 3200.00, actual_2023: 3200.00, projection_2023: 3200.00, budget_2024: 3700.00, default_budget_2024: true, change_revenue: 500.00, read: true, delete: false },
        { id: 1, code: 521240, name: "Project Management Fees", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 0.00, projection_2023: 0, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0.00, read: false, delete: false },
        { id: 2, code: 521700, name: "Legal Fees", budget_2022: 4000.00, actual_2022: 1591.00, budget_2023: 4000.00, actual_2023: 4000.00, projection_2023: 12735.00, budget_2024: 5000.00, default_budget_2024: true, change_revenue: 10000.00, read: true, delete: false },
        { id: 3, code: 521700, name: "Board Training & Professional Fees", budget_2022: 1155.00, actual_2022: 0.00, budget_2023: 0, actual_2023: 0, projection_2023: 0.00, budget_2024: 5000.00, default_budget_2024: true, change_revenue: 5000.00, read: true, delete: false },
        { id: 4, code: 521700, name: "Reserve Study/ Update", budget_2022: 0.00, actual_2022: 1155.00, budget_2023: 1155.00, actual_2023: 0, projection_2023: 0.00, budget_2024: 1185.00, default_budget_2024: true, change_revenue: 30.00, read: false, delete: false },
    ])

    const [landscapeData, setLandscapeData] = useState([
        { id: 0, code: 540000, name: "Landscape Expense", budget_2022: 0.00, actual_2022: 3200.00, budget_2023: 3200.00, actual_2023: 0.00, projection_2023: 0.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0.00, read: true, delete: false },
        { id: 1, code: 542000, name: "Irrigation Repairs", budget_2022: 3000.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 3421.71, projection_2023: 4500.00, budget_2024: 4000.00, default_budget_2024: true, change_revenue: 1000.00, read: false, delete: false },
        { id: 2, code: 543000, name: "Landscape Contract", budget_2022: 67600.00, actual_2022: 1591.00, budget_2023: 4000.00, actual_2023: 34831.91, projection_2023: 59711.85, budget_2024: 64000.00, default_budget_2024: true, change_revenue: 5470.84, read: true, delete: false },
        { id: 3, code: 545000, name: "Tree Service", budget_2022: 16300.00, actual_2022: 0.00, budget_2023: 0, actual_2023: 37313.14, projection_2023: 37313.14, budget_2024: 0.00, default_budget_2024: true, change_revenue: -16300.00, read: true, delete: false },
        { id: 4, code: 547000, name: "Water- Irrigation", budget_2022: 12022.16, actual_2022: 1155.00, budget_2023: 1155.00, actual_2023: 5121.11, projection_2023: 8779.05, budget_2024: 10000.00, default_budget_2024: true, change_revenue: 1500.00, read: false, delete: false },
        { id: 5, code: 549000, name: "Other Landscaping Expenses", budget_2022: 15000.00, actual_2022: 1155.00, budget_2023: 1155.00, actual_2023: 12551.79, projection_2023: 21517.35, budget_2024: 7500.00, default_budget_2024: true, change_revenue: -8800.00, read: false, delete: false },
    ])

    const [maintenanceData, setMaintenanceData] = useState([
        { id: 0, code: 551360, name: "Roof Maintenance", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 914798.32, actual_2023: 8752.95, projection_2023: 8752.95, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0.00, read: true, delete: false },
        { id: 1, code: 553060, name: "Cleaning & Janitorial", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 0.00, projection_2023: 0.00, budget_2024: 18000.00, default_budget_2024: true, change_revenue: 18000.00, read: false, delete: false },
        { id: 2, code: 553080, name: "Dryer Vent Cleaning", budget_2022: 37000.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 2449.73, projection_2023: 4199.54, budget_2024: 4000.00, default_budget_2024: true, change_revenue: 500.00, read: true, delete: false },
        { id: 3, code: 553100, name: "Cutter Cleaning", budget_2022: 13609.00, actual_2022: 10473.5, budget_2023: 4800.00, actual_2023: 440.40, projection_2023: 10000.00, budget_2024: 15000.00, default_budget_2024: true, change_revenue: 4500.00, read: true, delete: false },
        { id: 4, code: 553150, name: "Pest Control Service", budget_2022: 6342.00, actual_2022: 14885.63, budget_2023: 0.00, actual_2023: 1763.35, projection_2023: 3022.89, budget_2024: 6000.00, default_budget_2024: true, change_revenue: -2341.76, read: false, delete: false },
        { id: 5, code: 553180, name: "Repair & Maintenance Service", budget_2022: 45000.00, actual_2022: 51385.93, budget_2023: 0, actual_2023: 41412.58, projection_2023: 52000.00, budget_2024: 5000.00, default_budget_2024: true, change_revenue: -45000.00, read: false, delete: false },
        { id: 6, code: 553330, name: "Fire System Maintenance", budget_2022: 5000.00, actual_2022: 500.86, budget_2023: 0.00, actual_2023: 0.00, projection_2023: 0.00, budget_2024: 5000.00, default_budget_2024: true, change_revenue: 0.00, read: true, delete: false },
        { id: 7, code: 553320, name: "Fire Alarm Inspection", budget_2022: 14500.00, actual_2022: 16045.84, budget_2023: 0.00, actual_2023: 1893.72, projection_2023: 3246.38, budget_2024: 20000.00, default_budget_2024: true, change_revenue: 800.00, read: false, delete: false },
        { id: 8, code: 555030, name: "Storm Drainage", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 4346.20, projection_2023: 4346.20, budget_2024: 4000.00, default_budget_2024: true, change_revenue: 4000.00, read: true, delete: false },
        { id: 9, code: 555020, name: "Storm & Snow Removal", budget_2022: 1720.00, actual_2022: 2150.00, budget_2023: 0, actual_2023: 2394.68, projection_2023: 2394.68, budget_2024: 2500.00, default_budget_2024: true, change_revenue: 350.00, read: true, delete: false },
        { id: 10, code: 555030, name: "Backflow Device Inspection", budget_2022: 4000.00, actual_2022: 11114.63, budget_2023: 0.00, actual_2023: 3338.06, projection_2023: 3338.06, budget_2024: 8000.00, default_budget_2024: true, change_revenue: 3500.00, read: false, delete: false },
        { id: 11, code: 555020, name: "Water Damage Repairs", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 2722.62, projection_2023: 2722.62, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0.00, read: false, delete: false },
        { id: 12, code: 583000, name: "Miscellaneous Expense", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 0.00, projection_2023: 0.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: -15000.00, read: true, delete: false },
    ])

    const [utilityData, setUtilityData] = useState([
        { id: 0, code: 572000, name: "Electricity", budget_2022: 3991.52, actual_2022: 3918.06, budget_2023: 3991.52, actual_2023: 2664.97, projection_2023: 4568.52, budget_2024: 4500.00, default_budget_2024: true, change_revenue: 508.48, read: true, delete: false },
        { id: 1, code: 576000, name: "Sewer", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 31605.91, projection_2023: 54181.56, budget_2024: 60000.00, default_budget_2024: true, change_revenue: 60000.00, read: false, delete: false },
        { id: 2, code: 578000, name: "Water", budget_2022: 156502.32, actual_2022: 155467.53, budget_2023: 161197.39, actual_2023: 44799.69, projection_2023: 76799.47, budget_2024: 95000.00, default_budget_2024: true, change_revenue: -66197.39, read: true, delete: false }
    ])

    const [operatingData, setOperatingData] = useState([
        { id: 0, code: 581000, name: "Bad debit/Write Off", budget_2022: 0, actual_2022: 0, budget_2023: 0, actual_2023: 0, projection_2023: 0, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0, read: true, delete: false },
        { id: 1, code: 582500, name: "Licenses & Permits", budget_2022: 10.00, actual_2022: 60.00, budget_2023: 60.00, actual_2023: 20.00, projection_2023: 20.00, budget_2024: 30.00, default_budget_2024: true, change_revenue: -30.00, read: false, delete: false },
    ])

    const [reserveData, setReserveData] = useState([
        { id: 0, code: 581000, name: "Reserve Contribution", budget_2022: 350805.00, actual_2022: 350805.00, budget_2023: 368345.25, actual_2023: 214868.08, projection_2023: 368345.28, budget_2024: 368345.28, default_budget_2024: true, change_revenue: 0.75, read: true, delete: false },
        { id: 1, code: 582500, name: "Insurance REserve Contribution", budget_2022: 0.00, actual_2022: 0.00, budget_2023: 0.00, actual_2023: 0.00, projection_2023: 0.00, budget_2024: 0.00, default_budget_2024: true, change_revenue: 0.00, read: false, delete: false },
    ])

    const [totalRevenue, setTotalRevenue] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    const [totalExpense, setTotalExpense] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    const [totalTax, setTotalTax] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    const [totalInsurance, setTotalInsurance] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    const [totalProfessional, setTotalProfessional] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    const [totalLandscape, setTotalLandscape] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    const [totalMaintenance, setTotalMaintenance] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    const [totalUtility, setTotalUtility] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });


    const [totalOperating, setTotalOperating] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    const [totalReserve, setTotalReserve] = useState({
        budget_2022: 0,
        actual_2022: 0,
        budget_2023: 0,
        actual_2023: 0,
        projection_2023: 0,
        budget_2024: 0,
        change: 0
    });

    useEffect(() => {
        const budget_2022 = calculateRevenueColumnSum('budget_2022');
        const actual_2022 = calculateRevenueColumnSum('actual_2022');
        const budget_2023 = calculateRevenueColumnSum('budget_2023');
        const actual_2023 = calculateRevenueColumnSum('actual_2023');
        const projection_2023 = calculateRevenueColumnSum('projection_2023');
        const budget_2024 = calculateRevenueColumnSum('budget_2024');
        const change = calculateRevenueColumnSum('change_revenue');

        setTotalRevenue({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [revenueData]);

    useEffect(() => {
        const budget_2022 = calculateExpenseColumnSum('budget_2022');
        const actual_2022 = calculateExpenseColumnSum('actual_2022');
        const budget_2023 = calculateExpenseColumnSum('budget_2023');
        const actual_2023 = calculateExpenseColumnSum('actual_2023');
        const projection_2023 = calculateExpenseColumnSum('projection_2023');
        const budget_2024 = calculateExpenseColumnSum('budget_2024');
        const change = calculateExpenseColumnSum('change_revenue');

        setTotalExpense({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [expenseData]);

    useEffect(() => {
        const budget_2022 = calculateTaxColumnSum('budget_2022');
        const actual_2022 = calculateTaxColumnSum('actual_2022');
        const budget_2023 = calculateTaxColumnSum('budget_2023');
        const actual_2023 = calculateTaxColumnSum('actual_2023');
        const projection_2023 = calculateTaxColumnSum('projection_2023');
        const budget_2024 = calculateTaxColumnSum('budget_2024');
        const change = calculateTaxColumnSum('change_revenue');

        setTotalTax({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [taxData]);

    useEffect(() => {
        const budget_2022 = calculateInsuranceColumnSum('budget_2022');
        const actual_2022 = calculateInsuranceColumnSum('actual_2022');
        const budget_2023 = calculateInsuranceColumnSum('budget_2023');
        const actual_2023 = calculateInsuranceColumnSum('actual_2023');
        const projection_2023 = calculateInsuranceColumnSum('projection_2023');
        const budget_2024 = calculateInsuranceColumnSum('budget_2024');
        const change = calculateInsuranceColumnSum('change_revenue');

        setTotalInsurance({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [insuranceData]);

    useEffect(() => {
        const budget_2022 = calculateProfessionalColumnSum('budget_2022');
        const actual_2022 = calculateProfessionalColumnSum('actual_2022');
        const budget_2023 = calculateProfessionalColumnSum('budget_2023');
        const actual_2023 = calculateProfessionalColumnSum('actual_2023');
        const projection_2023 = calculateProfessionalColumnSum('projection_2023');
        const budget_2024 = calculateProfessionalColumnSum('budget_2024');
        const change = calculateProfessionalColumnSum('change_revenue');

        setTotalProfessional({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [professionalData]);

    useEffect(() => {
        const budget_2022 = calculateLandscapeColumnSum('budget_2022');
        const actual_2022 = calculateLandscapeColumnSum('actual_2022');
        const budget_2023 = calculateLandscapeColumnSum('budget_2023');
        const actual_2023 = calculateLandscapeColumnSum('actual_2023');
        const projection_2023 = calculateLandscapeColumnSum('projection_2023');
        const budget_2024 = calculateLandscapeColumnSum('budget_2024');
        const change = calculateLandscapeColumnSum('change_revenue');

        setTotalLandscape({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [landscapeData]);

    useEffect(() => {
        const budget_2022 = calculateMaintenanceColumnSum('budget_2022');
        const actual_2022 = calculateMaintenanceColumnSum('actual_2022');
        const budget_2023 = calculateMaintenanceColumnSum('budget_2023');
        const actual_2023 = calculateMaintenanceColumnSum('actual_2023');
        const projection_2023 = calculateMaintenanceColumnSum('projection_2023');
        const budget_2024 = calculateMaintenanceColumnSum('budget_2024');
        const change = calculateMaintenanceColumnSum('change_revenue');

        setTotalMaintenance({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [maintenanceData]);

    useEffect(() => {
        const budget_2022 = calculateUtilityColumnSum('budget_2022');
        const actual_2022 = calculateUtilityColumnSum('actual_2022');
        const budget_2023 = calculateUtilityColumnSum('budget_2023');
        const actual_2023 = calculateUtilityColumnSum('actual_2023');
        const projection_2023 = calculateUtilityColumnSum('projection_2023');
        const budget_2024 = calculateUtilityColumnSum('budget_2024');
        const change = calculateUtilityColumnSum('change_revenue');

        setTotalUtility({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [utilityData]);

    useEffect(() => {
        const budget_2022 = calculateOperatingColumnSum('budget_2022');
        const actual_2022 = calculateOperatingColumnSum('actual_2022');
        const budget_2023 = calculateOperatingColumnSum('budget_2023');
        const actual_2023 = calculateOperatingColumnSum('actual_2023');
        const projection_2023 = calculateOperatingColumnSum('projection_2023');
        const budget_2024 = calculateOperatingColumnSum('budget_2024');
        const change = calculateOperatingColumnSum('change_revenue');

        setTotalOperating({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [operatingData]);

    useEffect(() => {
        const budget_2022 = calculateReserveColumnSum('budget_2022');
        const actual_2022 = calculateReserveColumnSum('actual_2022');
        const budget_2023 = calculateReserveColumnSum('budget_2023');
        const actual_2023 = calculateReserveColumnSum('actual_2023');
        const projection_2023 = calculateReserveColumnSum('projection_2023');
        const budget_2024 = calculateReserveColumnSum('budget_2024');
        const change = calculateReserveColumnSum('change_revenue');

        setTotalReserve({
            ['budget_2022']: budget_2022,
            ['actual_2022']: actual_2022,
            ['budget_2023']: budget_2023,
            ['actual_2023']: actual_2023,
            ['projection_2023']: projection_2023,
            ['budget_2024']: budget_2024,
            ['change_revenue']: change
        })
    }, [reserveData]);

    const calculateRevenueColumnSum = (columnName) => {
        const total = revenueData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateExpenseColumnSum = (columnName) => {
        const total = expenseData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateTaxColumnSum = (columnName) => {
        const total = taxData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateInsuranceColumnSum = (columnName) => {
        const total = insuranceData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateProfessionalColumnSum = (columnName) => {
        const total = professionalData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateLandscapeColumnSum = (columnName) => {
        const total = landscapeData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateMaintenanceColumnSum = (columnName) => {
        const total = maintenanceData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateUtilityColumnSum = (columnName) => {
        const total = utilityData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateOperatingColumnSum = (columnName) => {
        const total = operatingData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };

    const calculateReserveColumnSum = (columnName) => {
        const total = reserveData.reduce((prev, item) => prev + item[columnName], 0);
        return parseFloat(total).toFixed(2);
    };


    const handleRevenueInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = revenueData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setRevenueData(update);
    };

    const handleExpenseInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = expenseData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setExpenseData(update);
    };

    const handleTaxInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = taxData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setTaxData(update);
    };

    const handleInsuranceInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = insuranceData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setInsuranceData(update);
    };

    const handleProfessionalInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = professionalData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setProfessionalData(update);
    };

    const handleLandscapeInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = landscapeData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setLandscapeData(update);
    };

    const handleMaintenanceInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = maintenanceData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setMaintenanceData(update);
    };

    const handleUtilityInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = utilityData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setUtilityData(update);
    };
    const handleOperatingInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = operatingData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setOperatingData(update);
    };

    const handleReserveInputChange = (e, id) => {
        const updatedValue = e.target.value === "" ? 0 : e.target.value;
        const update = reserveData.map(item => {
            if (item.id === id) {
                return {
                    ...item, ['budget_2024']: parseFloat(updatedValue), ['change_revenue']: parseFloat(updatedValue - item.budget_2023)
                };
            }
            return item;
        })
        setReserveData(update);
    };


    return (
        <div>
            <div className='container top-heading'>
                <div className="btn-group" role="group" aria-label="btnGroup">
                    <button type="button" className="btn btn-outline-primary" style={{ 'color': 'gray' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-contract" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 13.854a.5.5 0 0 0 .708 0L8 10.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708m0-11.708a.5.5 0 0 1 .708 0L8 5.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                    <button type="button" className="btn btn-outline-primary" style={{ 'color': 'gray' }}>
                        <i className="far fa-square-plus"></i>
                    </button>
                    <button type="button" className="btn btn-outline-primary" style={{ 'color': 'gray' }}>
                        <i className="far fa-square-minus"></i>
                    </button>
                </div>
                <div className="rightComponent">
                    <Link to="#"> View assessment dues</Link> &emsp;
                    <button className='btn btn-light border'> Question & answers on budget (1)</button>
                </div>
            </div>
            <div>
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{'backgroundColor':'rgb(37, 162, 224)'}}>
                                Revenue
                            </button>
                        </h2>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{'backgroundColor':'rgb(187, 227, 197)'}}>
                                Operating Income
                            </button>
                        </h2>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Revenue
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            revenueData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 ? row.budget_2024.toFixed(2) : row.budget_2024}
                                                            onChange={(e) => handleRevenueInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleRevenueInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Revenue</td>
                                            <td>$ {totalRevenue.budget_2022 > 0 ? totalRevenue.budget_2022 : "(" + -totalRevenue.budget_2022 + ")"}</td>
                                            <td>$ {totalRevenue.actual_2022 > 0 ? totalRevenue.actual_2022 : "(" + -totalRevenue.actual_2022 + ")"}</td>
                                            <td>$ {totalRevenue.budget_2023 > 0 ? totalRevenue.budget_2023 : "(" + -totalRevenue.budget_2023 + ")"}</td>
                                            <td>$ {totalRevenue.actual_2023 > 0 ? totalRevenue.actual_2023 : "(" + -totalRevenue.actual_2023 + ")"}</td>
                                            <td>$ {totalRevenue.projection_2023 > 0 ? totalRevenue.projection_2023 : "(" + -totalRevenue.projection_2023 + ")"}</td>
                                            <td>$ {totalRevenue.budget_2024 > 0 ? totalRevenue.budget_2024 : "(" + -totalRevenue.budget_2024 + ")"}</td>
                                            <td>$ {totalRevenue.change_revenue > 0 ? totalRevenue.change_revenue : "(" + -totalRevenue.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <nav className="navbar navbar-expand-lg navbar-light totalValue">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <h6> Total Operating Revenue</h6>
                            </div>
                            <h6> $ {totalRevenue.budget_2024}</h6>
                        </div>
                    </nav>
                </div>
                <hr />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" style={{'backgroundColor':'rgb(37, 162, 224)'}}>
                                Expense
                            </button>
                        </h2>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{'backgroundColor':'rgb(187, 227, 197)'}}>
                                Operating Expense
                            </button>
                        </h2>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Administrative Expense
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            expenseData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleExpenseInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleExpenseInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Administrative Expense</td>
                                            <td>$ {totalExpense.budget_2022 > 0 ? totalExpense.budget_2022 : "(" + -totalExpense.budget_2022 + ")"}</td>
                                            <td>$ {totalExpense.actual_2022 > 0 ? totalExpense.actual_2022 : "(" + -totalExpense.actual_2022 + ")"}</td>
                                            <td>$ {totalExpense.budget_2023 > 0 ? totalExpense.budget_2023 : "(" + -totalExpense.budget_2023 + ")"}</td>
                                            <td>$ {totalExpense.actual_2023 > 0 ? totalExpense.actual_2023 : "(" + -totalExpense.actual_2023 + ")"}</td>
                                            <td>$ {totalExpense.projection_2023 > 0 ? totalExpense.projection_2023 : "(" + -totalExpense.projection_2023 + ")"}</td>
                                            <td>$ {totalExpense.budget_2024 > 0 ? totalExpense.budget_2024 : "(" + -totalExpense.budget_2024 + ")"}</td>
                                            <td>$ {totalExpense.change_revenue > 0 ? totalExpense.change_revenue : "(" + -totalExpense.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Tax Expense
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingSeven">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            taxData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleTaxInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleTaxInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Tax Expense</td>
                                            <td>$ {totalTax.budget_2022 > 0 ? totalTax.budget_2022 : "(" + -totalTax.budget_2022 + ")"}</td>
                                            <td>$ {totalTax.actual_2022 > 0 ? totalTax.actual_2022 : "(" + -totalTax.actual_2022 + ")"}</td>
                                            <td>$ {totalTax.budget_2023 > 0 ? totalTax.budget_2023 : "(" + -totalTax.budget_2023 + ")"}</td>
                                            <td>$ {totalTax.actual_2023 > 0 ? totalTax.actual_2023 : "(" + -totalTax.actual_2023 + ")"}</td>
                                            <td>$ {totalTax.projection_2023 > 0 ? totalTax.projection_2023 : "(" + -totalTax.projection_2023 + ")"}</td>
                                            <td>$ {totalTax.budget_2024 > 0 ? totalTax.budget_2024 : "(" + -totalTax.budget_2024 + ")"}</td>
                                            <td>$ {totalTax.change_revenue > 0 ? totalTax.change_revenue : "(" + -totalTax.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Insurance Expense
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse show" aria-labelledby="headingEight">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            insuranceData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleInsuranceInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleInsuranceInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Insurance Expense</td>
                                            <td>$ {totalInsurance.budget_2022 > 0 ? totalInsurance.budget_2022 : "(" + -totalInsurance.budget_2022 + ")"}</td>
                                            <td>$ {totalInsurance.actual_2022 > 0 ? totalInsurance.actual_2022 : "(" + -totalInsurance.actual_2022 + ")"}</td>
                                            <td>$ {totalInsurance.budget_2023 > 0 ? totalInsurance.budget_2023 : "(" + -totalInsurance.budget_2023 + ")"}</td>
                                            <td>$ {totalInsurance.actual_2023 > 0 ? totalInsurance.actual_2023 : "(" + -totalInsurance.actual_2023 + ")"}</td>
                                            <td>$ {totalInsurance.projection_2023 > 0 ? totalInsurance.projection_2023 : "(" + -totalInsurance.projection_2023 + ")"}</td>
                                            <td>$ {totalInsurance.budget_2024 > 0 ? totalInsurance.budget_2024 : "(" + -totalInsurance.budget_2024 + ")"}</td>
                                            <td>$ {totalInsurance.change_revenue > 0 ? totalInsurance.change_revenue : "(" + -totalInsurance.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Professional Expense
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse show" aria-labelledby="headingNine">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            professionalData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleProfessionalInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleProfessionalInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Professional Expense</td>
                                            <td>$ {totalProfessional.budget_2022 > 0 ? totalProfessional.budget_2022 : "(" + -totalProfessional.budget_2022 + ")"}</td>
                                            <td>$ {totalProfessional.actual_2022 > 0 ? totalProfessional.actual_2022 : "(" + -totalProfessional.actual_2022 + ")"}</td>
                                            <td>$ {totalProfessional.budget_2023 > 0 ? totalProfessional.budget_2023 : "(" + -totalProfessional.budget_2023 + ")"}</td>
                                            <td>$ {totalProfessional.actual_2023 > 0 ? totalProfessional.actual_2023 : "(" + -totalProfessional.actual_2023 + ")"}</td>
                                            <td>$ {totalProfessional.projection_2023 > 0 ? totalProfessional.projection_2023 : "(" + -totalProfessional.projection_2023 + ")"}</td>
                                            <td>$ {totalProfessional.budget_2024 > 0 ? totalProfessional.budget_2024 : "(" + -totalProfessional.budget_2024 + ")"}</td>
                                            <td>$ {totalProfessional.change_revenue > 0 ? totalProfessional.change_revenue : "(" + -totalProfessional.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                Landscape & Amenities Expenses
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            landscapeData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleLandscapeInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleLandscapeInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Landscape Expense</td>
                                            <td>$ {totalLandscape.budget_2022 > 0 ? totalLandscape.budget_2022 : "(" + -totalLandscape.budget_2022 + ")"}</td>
                                            <td>$ {totalLandscape.actual_2022 > 0 ? totalLandscape.actual_2022 : "(" + -totalLandscape.actual_2022 + ")"}</td>
                                            <td>$ {totalLandscape.budget_2023 > 0 ? totalLandscape.budget_2023 : "(" + -totalLandscape.budget_2023 + ")"}</td>
                                            <td>$ {totalLandscape.actual_2023 > 0 ? totalLandscape.actual_2023 : "(" + -totalLandscape.actual_2023 + ")"}</td>
                                            <td>$ {totalLandscape.projection_2023 > 0 ? totalLandscape.projection_2023 : "(" + -totalLandscape.projection_2023 + ")"}</td>
                                            <td>$ {totalLandscape.budget_2024 > 0 ? totalLandscape.budget_2024 : "(" + -totalLandscape.budget_2024 + ")"}</td>
                                            <td>$ {totalLandscape.change_revenue > 0 ? totalLandscape.change_revenue : "(" + -totalLandscape.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                Maintenance Expenses
                            </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            maintenanceData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleMaintenanceInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleMaintenanceInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Maintenance Expense</td>
                                            <td>$ {totalMaintenance.budget_2022 > 0 ? totalMaintenance.budget_2022 : "(" + -totalMaintenance.budget_2022 + ")"}</td>
                                            <td>$ {totalMaintenance.actual_2022 > 0 ? totalMaintenance.actual_2022 : "(" + -totalMaintenance.actual_2022 + ")"}</td>
                                            <td>$ {totalMaintenance.budget_2023 > 0 ? totalMaintenance.budget_2023 : "(" + -totalMaintenance.budget_2023 + ")"}</td>
                                            <td>$ {totalMaintenance.actual_2023 > 0 ? totalMaintenance.actual_2023 : "(" + -totalMaintenance.actual_2023 + ")"}</td>
                                            <td>$ {totalMaintenance.projection_2023 > 0 ? totalMaintenance.projection_2023 : "(" + -totalMaintenance.projection_2023 + ")"}</td>
                                            <td>$ {totalMaintenance.budget_2024 > 0 ? totalMaintenance.budget_2024 : "(" + -totalMaintenance.budget_2024 + ")"}</td>
                                            <td>$ {totalMaintenance.change_revenue > 0 ? totalMaintenance.change_revenue : "(" + -totalMaintenance.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                Total Utility Expenses
                            </button>
                        </h2>
                        <div id="collapseTwelve" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            utilityData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleUtilityInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleUtilityInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Utility Expense</td>
                                            <td>$ {totalUtility.budget_2022 > 0 ? totalUtility.budget_2022 : "(" + -totalUtility.budget_2022 + ")"}</td>
                                            <td>$ {totalUtility.actual_2022 > 0 ? totalUtility.actual_2022 : "(" + -totalUtility.actual_2022 + ")"}</td>
                                            <td>$ {totalUtility.budget_2023 > 0 ? totalUtility.budget_2023 : "(" + -totalUtility.budget_2023 + ")"}</td>
                                            <td>$ {totalUtility.actual_2023 > 0 ? totalUtility.actual_2023 : "(" + -totalUtility.actual_2023 + ")"}</td>
                                            <td>$ {totalUtility.projection_2023 > 0 ? totalUtility.projection_2023 : "(" + -totalUtility.projection_2023 + ")"}</td>
                                            <td>$ {totalUtility.budget_2024 > 0 ? totalUtility.budget_2024 : "(" + -totalUtility.budget_2024 + ")"}</td>
                                            <td>$ {totalUtility.change_revenue > 0 ? totalUtility.change_revenue : "(" + -totalUtility.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                Total Operating Expenses
                            </button>
                        </h2>
                        <div id="collapseThirteen" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            operatingData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleOperatingInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleOperatingInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Operating Expense</td>
                                            <td>$ {totalOperating.budget_2022 > 0 ? totalOperating.budget_2022 : "(" + -totalOperating.budget_2022 + ")"}</td>
                                            <td>$ {totalOperating.actual_2022 > 0 ? totalOperating.actual_2022 : "(" + -totalOperating.actual_2022 + ")"}</td>
                                            <td>$ {totalOperating.budget_2023 > 0 ? totalOperating.budget_2023 : "(" + -totalOperating.budget_2023 + ")"}</td>
                                            <td>$ {totalOperating.actual_2023 > 0 ? totalOperating.actual_2023 : "(" + -totalOperating.actual_2023 + ")"}</td>
                                            <td>$ {totalOperating.projection_2023 > 0 ? totalOperating.projection_2023 : "(" + -totalOperating.projection_2023 + ")"}</td>
                                            <td>$ {totalOperating.budget_2024 > 0 ? totalOperating.budget_2024 : "(" + -totalOperating.budget_2024 + ")"}</td>
                                            <td>$ {totalOperating.change_revenue > 0 ? totalOperating.change_revenue : "(" + -totalOperating.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                Total Reserve Contribution
                            </button>
                        </h2>
                        <div id="collapseFourteen" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <table className="table" id='revenue'>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                GL Code <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                GL Name <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2022 Actuals <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2023 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className="header-cell">
                                                2023 Actuals <br /> (Till July)
                                            </th>
                                            <th scope="col">
                                                2023 Projection <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col">
                                                2024 Budget <i className="fa-solid fa-arrow-down"></i>
                                            </th>
                                            <th scope="col" className='header-cell'>
                                                Increase/Decrease <br /> Over 2023 Budget
                                            </th>
                                            <th scope="col" width="40px"></th>
                                            <th scope='col' width="40px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reserveData.map((row) => (
                                                <tr scope="row" key={row.id}>
                                                    <td>{row.code}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.budget_2022 < 0 ? "(" + (-row.budget_2022).toFixed(2) + ")" : row.budget_2022 ? row.budget_2022.toFixed(2) : row.budget_2022}</td>
                                                    <td>{row.actual_2022 < 0 ? "(" + (-row.actual_2022).toFixed(2) + ")" : row.actual_2022 ? row.actual_2022.toFixed(2) : row.actual_2022}</td>
                                                    <td>{row.budget_2023 < 0 ? "(" + (-row.budget_2023).toFixed(2) + ")" : row.budget_2023 ? row.budget_2023.toFixed(2) : row.budget_2023}</td>
                                                    <td>{row.actual_2023 < 0 ? "(" + (-row.actual_2023).toFixed(2) + ")" : row.actual_2023 ? row.actual_2023.toFixed(2) : row.actual_2023}</td>
                                                    <td>{row.projection_2023 < 0 ? "(" + (-row.projection_2023).toFixed(2) + ")" : row.projection_2023 ? row.projection_2023.toFixed(2) : row.projection_2023}</td>
                                                    <td>{row.default_budget_2024 ?
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024 == 0 ? row.budget_2024 : row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleReserveInputChange(e, row.id)}
                                                        /> :
                                                        <input
                                                            type="number"
                                                            value={row.budget_2024.toFixed(2)}
                                                            onChange={(e) => handleReserveInputChange(e, row.id)} readOnly style={{ 'border': '0px' }}
                                                        />}
                                                    </td>
                                                    <td>{row.change_revenue < 0 ? "(" + (-row.change_revenue).toFixed(2) + ")" : (row.change_revenue) ? row.change_revenue.toFixed(2) : row.change_revenue}</td>
                                                    <td>{row.read ? <i className="fa fa-message"></i> :
                                                        <span className="unread-message-icon">
                                                            <i className="fa fa-message"></i>
                                                        </span>
                                                    }
                                                    </td>
                                                    <td id='deleteRow'>{row.delete ? <i className="fa-solid fa-circle-minus"></i> : null}</td>
                                                </tr>
                                            ))
                                        }

                                        <tr scope="row" id='totalRow'>
                                            <td colSpan={2}>Total Reserve Contribution</td>
                                            <td>$ {totalReserve.budget_2022 > 0 ? totalReserve.budget_2022 : "(" + -totalReserve.budget_2022 + ")"}</td>
                                            <td>$ {totalReserve.actual_2022 > 0 ? totalReserve.actual_2022 : "(" + -totalReserve.actual_2022 + ")"}</td>
                                            <td>$ {totalReserve.budget_2023 > 0 ? totalReserve.budget_2023 : "(" + -totalReserve.budget_2023 + ")"}</td>
                                            <td>$ {totalReserve.actual_2023 > 0 ? totalReserve.actual_2023 : "(" + -totalReserve.actual_2023 + ")"}</td>
                                            <td>$ {totalReserve.projection_2023 > 0 ? totalReserve.projection_2023 : "(" + -totalReserve.projection_2023 + ")"}</td>
                                            <td>$ {totalReserve.budget_2024 > 0 ? totalReserve.budget_2024 : "(" + -totalReserve.budget_2024 + ")"}</td>
                                            <td>$ {totalReserve.change_revenue > 0 ? totalReserve.change_revenue : "(" + -totalReserve.change_revenue + ")"}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="#" id='addItem'> + Add New Budget Item </Link>
                            </div>
                        </div>
                    </div>
                </div> <br />
                <nav className="navbar navbar-expand-lg navbar-light totalValue" style={{'backgroundColor':'rgb(187, 227, 197)'}}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <h6> Total Operating Expense</h6>
                        </div>
                        <h6> $ {totalRevenue.budget_2024}</h6>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light totalValue mt-2">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <h6> Total Expense</h6>
                        </div>
                        <h6> $ {totalRevenue.budget_2024}</h6>
                    </div>
                </nav>
                <br /> <br /> <br /> <br />

                <div id='saveBtn' >
                    <button type="button" className='btn btn-light' style={{'backgroundColor':'grey', 'padding':'5px 3em'}}> Back </button> &emsp;
                    <button type="button" className='btn btn-outline-primary' style={{'backgroundColor':'white'}}>Save as Draft</button> &emsp;
                    <button type="button" className='btn btn-primary'>Submit For Review</button>
                </div>
            </div>
        </div>
    )
}

export default Home
