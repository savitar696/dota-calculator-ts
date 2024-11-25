import {FC} from "react";
import {Box, Typography} from "@mui/material";

interface TierDisplayProps {
    gamesNumber: number;
}

export const TierDisplay: FC<TierDisplayProps> = ({ gamesNumber }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                marginTop: 2,
            }}
        >
            <Typography variant="h6" color="text.primary">
                Количество игр: <strong>{gamesNumber}</strong>
            </Typography>
        </Box>
    );
};