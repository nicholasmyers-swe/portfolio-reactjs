type AppColor = 'dark-green' | 'dark-vanilla' | 'dutch-white' | 'eggshell' | 'light-blue';

export const getAppColors = (color: AppColor) => {
    switch (color) {
        case 'dark-green':
            return '#8EA895'
        case 'dark-vanilla':
            return '#CFC6B0'
        case 'dutch-white':
            return '#E8DABA'
        case 'eggshell':
            return '#F0ECD8'
        case 'light-blue':
            return '#D3DCE6'
    }
};