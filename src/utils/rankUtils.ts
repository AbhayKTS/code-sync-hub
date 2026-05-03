export const getRankColor = (rank: string) => {
    switch (rank) {
        case 'SSS':
            return {
                border: 'border-yellow-500',
                bg: 'bg-yellow-500/10',
                text: 'text-yellow-500',
                glow: 'shadow-[0_0_10px_rgba(234,179,8,0.3)]'
            };
        case 'SS':
            return {
                border: 'border-red-500',
                bg: 'bg-red-500/10',
                text: 'text-red-500',
                glow: 'shadow-[0_0_10px_rgba(239,68,68,0.3)]'
            };
        case 'S':
            return {
                border: 'border-purple-500',
                bg: 'bg-purple-500/10',
                text: 'text-purple-500',
                glow: 'shadow-[0_0_10px_rgba(168,85,247,0.3)]'
            };
        case 'A':
            return {
                border: 'border-blue-500',
                bg: 'bg-blue-500/10',
                text: 'text-blue-500',
                glow: 'shadow-[0_0_10px_rgba(59,130,246,0.3)]'
            };
        case 'B':
            return {
                border: 'border-cyan-500',
                bg: 'bg-cyan-500/10',
                text: 'text-cyan-500',
                glow: 'shadow-[0_0_10px_rgba(6,182,212,0.3)]'
            };
        case 'C':
            return {
                border: 'border-green-500',
                bg: 'bg-green-500/10',
                text: 'text-green-500',
                glow: 'shadow-[0_0_10px_rgba(34,197,94,0.3)]'
            };
        default:
            return {
                border: 'border-primary',
                bg: 'bg-primary/10',
                text: 'text-primary',
                glow: ''
            };
    }
};
