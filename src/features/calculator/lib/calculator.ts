import {tiers} from "#/features/calculator/lib";

export const calculateTierProgress = (
    currentTier: number,
    currentExp: number,
    targetTier: number,
    mode: "All Pick" | "Turbo",
    tasksCompleted: number[] = []
) => {
    const expPerGame = mode === "All Pick" ? 100 : 50
    const totalTaskExp = tasksCompleted?.reduce((total, exp) => total + exp, 0) || 0;
    const currentXP = tiers[currentTier - 1].totalXP + currentExp + totalTaskExp;
    const targetXP = tiers[targetTier - 1].totalXP;
    
    if (currentXP >= targetXP) {
        return 0;
    }
    
    const requiredExp = targetXP - currentXP;
    
    return Math.ceil(requiredExp / expPerGame);
}
