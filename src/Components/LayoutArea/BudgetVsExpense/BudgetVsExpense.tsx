import React from 'react';
import "./BudgetVsExpense.css";

interface BudgetVsExpenseProps {
    budget: number;
    expense: number;
    startDate: string;
    endDate: string;
}

export function BudgetVsExpense({ budget, expense, startDate, endDate }: BudgetVsExpenseProps): JSX.Element {
    const radius = 70;
    const strokeWidth = 10;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * Math.PI;
    const progressPercentage = (expense / budget) * 100;
    const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

    return (
        <div className="BudgetVsExpense">
            <h2 className="title">Budget Vs Expense</h2>
            <p className="date-range">From {startDate} - {endDate}</p>
            <div className="progress-container">
                <svg
                    viewBox="0 0 180 90"
                    className="progress-circle"
                >
                    <path
                        className="progress-background"
                        d="M 10,90 A 80,80 0 0 1 170,90"
                        fill="none"
                        strokeWidth={strokeWidth}
                    />
                    <path
                        className="progress-bar"
                        d="M 10,90 A 80,80 0 0 1 170,90"
                        fill="none"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    />
                </svg>
                <div className="progress-text">
                    <span className="expense">${expense.toLocaleString()}</span>
                    <span className="budget">of ${budget.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
}