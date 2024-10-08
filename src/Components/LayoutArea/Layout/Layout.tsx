import { BudgetVsExpense } from "../BudgetVsExpense/BudgetVsExpense";
import { CategoryExpenses } from "../CategoryExpenses/CategoryExpenses";
import { ExpensesGraph } from "../ExpensesGraph/ExpensesGraph";
import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import "./Layout.css";

export function Layout(): JSX.Element {
    const budgetData = {
        budget: 12000,
        expense: 8630,
        startDate: "01 August",
        endDate: "22 August"
    };
    return (
        <div className="Layout">
			<div className="upper-info">
                <PersonalInfo />
                <BudgetVsExpense
                    budget={budgetData.budget}
                    expense={budgetData.expense}
                    startDate={budgetData.startDate}
                    endDate={budgetData.endDate}
                />
                <ExpensesGraph />
            </div>
            <div className="bottom-info">
                <CategoryExpenses />
            </div>
        </div>
    );
}
