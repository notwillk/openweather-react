const AQI_GREEN = '#4EAC5B';
const AQI_YELLOW = '#FFFD54';
const AQI_ORANGE = '#ED6F2D';
const AQI_RED = '#EA3223';
const AQI_PURPLE = '#68389A';
const AQI_MAROON = '#8C1B35';

export const AQI_LEVELS = [
    {
        color: AQI_GREEN,
        colorCopy: 'Green',
        levelOfConcern: 'good',
        levelOfConcernCopy: 'Good',
        maxAqiIndex: 50,
        description: 'Air quality is satisfactory, and air pollution poses little or no risk.',
    } as const,
    {
        color: AQI_YELLOW,
        colorCopy: 'Yellow',
        levelOfConcern: 'moderate',
        levelOfConcernCopy: 'Moderate',
        maxAqiIndex: 100,
        description: 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.',
    } as const,
    {
        color: AQI_ORANGE,
        colorCopy: 'Orange',
        levelOfConcern: 'unhealthyForSensitiveGroups',
        levelOfConcernCopy: 'Unhealthy for Sensitive Groups',
        maxAqiIndex: 150,
        description: 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.',
    } as const,
    {
        color: AQI_RED,
        colorCopy: 'Red',
        levelOfConcern: 'unhealthy',
        levelOfConcernCopy: 'Unhealthy',
        maxAqiIndex: 200,
        description: 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.',
    } as const,
    {
        color: AQI_PURPLE,
        colorCopy: 'Purple',
        levelOfConcern: 'veryUnhealthy',
        levelOfConcernCopy: 'Very Unhealthy',
        maxAqiIndex: 300,
        description: 'Health alert: The risk of health effects is increased for everyone.',
    } as const,
    {
        color: AQI_MAROON,
        colorCopy: 'Maroon',
        levelOfConcern: 'hazardous',
        levelOfConcernCopy: 'Hazardous',
        maxAqiIndex: Infinity,
        description: 'Health warning of emergency conditions: everyone is more likely to be affected.',
    } as const,
] as const;

export type AqiLevel = typeof AQI_LEVELS[number];
export type AqiColor = AqiLevel['color'];
export type AqiLevelOfConcern = AqiLevel['levelOfConcern'];
