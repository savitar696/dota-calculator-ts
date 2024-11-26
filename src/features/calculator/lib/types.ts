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
    { level: 6, xpToNextLevel: 700, totalXP: 2550 },
    { level: 7, xpToNextLevel: 800, totalXP: 3350 },
    { level: 8, xpToNextLevel: 900, totalXP: 4250 },
    { level: 9, xpToNextLevel: 1000, totalXP: 5250 },
    { level: 10, xpToNextLevel: 1100, totalXP: 6350 },
    { level: 11, xpToNextLevel: 1200, totalXP: 7550 },
    { level: 12, xpToNextLevel: 1300, totalXP: 8850 },
    { level: 13, xpToNextLevel: 1400, totalXP: 10250 },
    { level: 14, xpToNextLevel: 1500, totalXP: 11750 },
    { level: 15, xpToNextLevel: 1600, totalXP: 13350 },
    { level: 16, xpToNextLevel: 1700, totalXP: 15050 },
    { level: 17, xpToNextLevel: 1800, totalXP: 16850 },
    { level: 18, xpToNextLevel: 1900, totalXP: 18750 },
    { level: 19, xpToNextLevel: 2000, totalXP: 20750 },
    { level: 20, xpToNextLevel: 2100, totalXP: 22850 },
    { level: 21, xpToNextLevel: 2200, totalXP: 25050 },
    { level: 22, xpToNextLevel: 2300, totalXP: 27350 },
    { level: 23, xpToNextLevel: 2400, totalXP: 29750 },
    { level: 24, xpToNextLevel: 2500, totalXP: 32250 },
    { level: 25, xpToNextLevel: 2600, totalXP: 34850 },
    { level: 26, xpToNextLevel: 2700, totalXP: 37550 },
    { level: 27, xpToNextLevel: 2800, totalXP: 40350 },
    { level: 28, xpToNextLevel: 2900, totalXP: 43250 },
    { level: 29, xpToNextLevel: 3000, totalXP: 46250 },
    { level: 30, xpToNextLevel: 3100, totalXP: 49350 },
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