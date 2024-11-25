import {FC, FormEvent, useState} from "react";
import {
    Box,
    Button,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";

interface TierInputFormProps {
    onCalculate: (data: {
        currentTier: number;
        currentExp: number;
        targetTier: number;
        mode: "All Pick" | "Turbo";
    }) => void;
}

export const TierInputForm: FC<TierInputFormProps> = ({ onCalculate }) => {
    const [currentTier, setCurrentTier] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [targetTier, setTargetTier] = useState(6);
    const [mode, setMode] = useState<"All Pick" | "Turbo">("All Pick");

    const [errors, setErrors] = useState<{
        currentTier?: string;
        targetTier?: string;
    }>({});

    const validateForm = () => {
        const newErrors: typeof errors = {};
        if (currentTier < 1 || currentTier > 30) {
            newErrors.currentTier = "Текущий тир должен быть в диапазоне от 1 до 30.";
        }
        if (targetTier < 1 || targetTier > 30) {
            newErrors.targetTier = "Желаемый тир должен быть в диапазоне от 1 до 30.";
        }
        if (currentTier > targetTier) {
            newErrors.targetTier = "Желаемый тир должен быть больше текущему.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(validateForm()) {
            onCalculate({
                currentTier,
                currentExp,
                targetTier,
                mode,
            });
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                margin: "0 auto",
                paddingTop: "6%",
            }}
        >
            <Typography variant="h5" textAlign="center">
                Калькулятор тира Dota 2
            </Typography>
            <TextField
                label="Текущий тир"
                type="number"
                value={currentTier}
                onChange={(e) => setCurrentTier(Number(e.target.value))}
                error={!!errors.currentTier}
                helperText={errors.currentTier}
                fullWidth
                required
            />
            <TextField
                label="Текущий опыт"
                type="number"
                value={currentExp}
                onChange={(e) => setCurrentExp(Number(e.target.value))}
                fullWidth
                required
            />
            <TextField
                label="Желаемый тир"
                type="number"
                value={targetTier}
                onChange={(e) => setTargetTier(Number(e.target.value))}
                error={!!errors.targetTier}
                helperText={errors.targetTier}
                fullWidth
                required
            />
            <Select
                value={mode}
                onChange={(e) => setMode(e.target.value as "All Pick" | "Turbo")}
                fullWidth
                displayEmpty
            >
                <MenuItem value="All Pick">All Pick</MenuItem>
                <MenuItem value="Turbo">Turbo</MenuItem>
            </Select>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Рассчитать
            </Button>
        </Box>
    );
};