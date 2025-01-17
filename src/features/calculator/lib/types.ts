import {bronzeBadge, goldBadge, grandmasterBadge, ironBadge, masterBadge, platinumBadge} from "#/shared/icons";

interface TierData {
    level: number;
    xpToNextLevel: number;
    totalXP: number;
}

export const tiers: TierData[] = [
    { level: 1, xpToNextLevel: 50, totalXP: 50 },
    { level: 2, xpToNextLevel: 300, totalXP: 350 },
    { level: 3, xpToNextLevel: 400, totalXP: 750 },
    { level: 4, xpToNextLevel: 500, totalXP: 1250 },
    { level: 5, xpToNextLevel: 600, totalXP: 1850 },
    { level: 6, xpToNextLevel: 900, totalXP: 2750 },
    { level: 7, xpToNextLevel: 1000, totalXP: 3750 },
    { level: 8, xpToNextLevel: 1100, totalXP: 4850 },
    { level: 9, xpToNextLevel: 1200, totalXP: 6050 },
    { level: 10, xpToNextLevel: 1300, totalXP: 7350 },
    { level: 11, xpToNextLevel: 1400, totalXP: 8750 },
    { level: 12, xpToNextLevel: 1700, totalXP: 10450 },
    { level: 13, xpToNextLevel: 1800, totalXP: 12250 },
    { level: 14, xpToNextLevel: 1900, totalXP: 14150 },
    { level: 15, xpToNextLevel: 2000, totalXP: 16150 },
    { level: 16, xpToNextLevel: 2100, totalXP: 18250 },
    { level: 17, xpToNextLevel: 2200, totalXP: 20450 },
    { level: 18, xpToNextLevel: 2500, totalXP: 22950 },
    { level: 19, xpToNextLevel: 2600, totalXP: 25550 },
    { level: 20, xpToNextLevel: 2700, totalXP: 28250 },
    { level: 21, xpToNextLevel: 2800, totalXP: 31050 },
    { level: 22, xpToNextLevel: 2900, totalXP: 33950 },
    { level: 23, xpToNextLevel: 3000, totalXP: 36950 },
    { level: 24, xpToNextLevel: 3100, totalXP: 40050 },
    { level: 25, xpToNextLevel: 6800, totalXP: 46850 },
    { level: 26, xpToNextLevel: 4000, totalXP: 50850 },
    { level: 27, xpToNextLevel: 4200, totalXP: 55050 },
    { level: 28, xpToNextLevel: 4400, totalXP: 59450 },
    { level: 29, xpToNextLevel: 4600, totalXP: 64050 },
    { level: 30, xpToNextLevel: 8000, totalXP: 72050 },
];

export const showBadge = ({ level }: { level: number }) => {
    if (level <= 5) {
        return bronzeBadge;
    }
    if (level >= 6 && level <= 11) {
        return ironBadge;
    }
    if (level >= 12 && level <= 17) {
        return goldBadge;
    }
    if (level >= 18 && level <= 24) {
        return platinumBadge;
    }
    if (level >= 25 && level <= 29) {
        return masterBadge;
    }
    if (level >= 30) {
        return grandmasterBadge;
    }
}
