import {useState} from "react";
import {calculateTierProgress} from "#/features/calculator/lib/calculator.ts";
import {TierDisplay, TierInputForm} from "#/features/calculator";

export const CalculatorPage = () => {
    const [games, setGames] = useState<number | null>(null);
    const calculate = (data: {
        currentTier: number,
        currentExp: number,
        targetTier: number,
        mode: "All Pick" | "Turbo";
    }) => {
        const result = calculateTierProgress(
            data.currentTier,
            data.currentExp,
            data.targetTier,
            data.mode
        );
        setGames(result);
    }
    return (
        <div>
            <TierInputForm onCalculate={calculate} />
            {games !== null && <TierDisplay gamesNumber={games} />}
        </div>
    )
}