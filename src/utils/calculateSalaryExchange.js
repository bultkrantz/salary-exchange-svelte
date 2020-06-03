// export interface ICalculateSalaryExchange {
//     monthlySaving: number;
//     startAmount?: number;
//     avarageYield: number;
//     timeHorizon: number;
//   }

//   export interface IAnnualResult {
//     year: number;
//     startAmount: number;
//     yearlySaving: number;
//     accumulatedSavings: number;
//     yearsReturn: number;
//     accumulatedReturn: number;
//     finalValue: number;
//   }

const calculateSalaryExchange = (props) => {
    console.log(props);
    const { monthlySaving, avarageYield, startAmount = 0, timeHorizon } = props;

    let accumulatedStartValue = startAmount;
    const yearlySaving = monthlySaving * 12;
    let year = 1;
    let accumulatedSavings = 0;
    let accumulatedReturn = 0;

    const result = new Array();

    for (let index = 0; year <= timeHorizon; index++) {
        const yearsReturn =
            ((accumulatedStartValue + yearlySaving) * avarageYield) / 100;
        accumulatedSavings += yearlySaving;
        accumulatedReturn += yearsReturn;
        const finalValue = accumulatedStartValue + yearlySaving + yearsReturn;
        result.push({
            year,
            accumulatedReturn: Math.round(accumulatedReturn),
            accumulatedSavings: Math.round(accumulatedSavings),
            startAmount: Math.round(accumulatedStartValue),
            yearlySaving: Math.round(yearlySaving),
            yearsReturn: Math.round(yearsReturn),
            finalValue: Math.round(finalValue)
        });
        accumulatedStartValue = finalValue;
        year++;
    }
    console.log(result)
    return result;
};

export default calculateSalaryExchange;
