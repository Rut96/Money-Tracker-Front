import { BudgerVsExpense } from "../BudgetVsExpense/BudgetVsExpense";
import { CategoryExpenses } from "../CategoryExpenses/CategoryExpenses";
import { ExpensesGraph } from "../ExpensesGraph/ExpensesGraph";
import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<div className="upper-info">
                <PersonalInfo />
                <BudgerVsExpense />
                <ExpensesGraph />
            </div>
            <div className="bottom-info">
                <CategoryExpenses />
            </div>
        </div>
    );
}
