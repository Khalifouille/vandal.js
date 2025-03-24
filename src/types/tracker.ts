export type BaseOptions = {
    raw?: boolean;
};

export type TrackerPlatformInfo = {
    platformSlug: string;
    platformUserId: string;
    platformUserHandle: string;
    platformUserIdentifier: string;
    avatarUrl: string;
    additionalParameters: unknown | null;
};

export type TrackerUserInfo = {
    userId: unknown;
    isPremium: boolean;
    isVerified: boolean;
    isInfluencer: boolean;
    isPartner: boolean;
    countryCode: string | null;
    customAvatarUrl: string | null;
    customHeroUrl: string | null;
    customAvatarFrame: unknown;
    customAvatarFrameInfo: unknown;
    premiumDuration: unknown;
    socialAccounts: unknown[];
    pageviews: number;
    xpTier: unknown;
    isSuspicious: boolean | null;
};

type TrackerMetadata = {
    activeShard: string;
    schema: string;
    privacy: string;
    defaultPlaylist: string;
    defaultSeason: string;
    premierRosterId: string | null;
    premierCrests: unknown | null;
    accountLevel: number;
};

type SegmentStat = {
    rank: unknown | null;
    percentile: unknown | null;
    displayName: string;
    displayCategory: string;
    category: string;
    description: unknown | null;
    metadata: {
        tierName?: string;
    };
    value: number | string;
    displayValue: string;
    displayType: string;
};

export type SegmentSeasonStats = {
    matchesPlayed: SegmentStat;
    matchesWon: SegmentStat;
    matchesLost: SegmentStat;
    matchesTied: SegmentStat;
    matchesWinPct: SegmentStat;
    matchesDisconnected: SegmentStat;
    matchesDuration: SegmentStat;
    timePlayed: SegmentStat;
    mVPs: SegmentStat;
    roundsPlayed: SegmentStat;
    roundsWon: SegmentStat;
    roundsLost: SegmentStat;
    roundsWinPct: SegmentStat;
    roundsDuration: SegmentStat;
    score: SegmentStat;
    scorePerMatch: SegmentStat;
    scorePerRound: SegmentStat;
    kills: SegmentStat;
    killsPerRound: SegmentStat;
    killsPerMatch: SegmentStat;
    deaths: SegmentStat;
    deathsPerRound: SegmentStat;
    deathsPerMatch: SegmentStat;
    assists: SegmentStat;
    assistsPerRound: SegmentStat;
    assistsPerMatch: SegmentStat;
    kDRatio: SegmentStat;
    kDARatio: SegmentStat;
    kADRatio: SegmentStat;
    damage: SegmentStat;
    damageDelta: SegmentStat;
    damageDeltaPerRound: SegmentStat;
    damagePerRound: SegmentStat;
    damagePerMatch: SegmentStat;
    damagePerMinute: SegmentStat;
    damageReceived: SegmentStat;
    headshots: SegmentStat;
    headshotsPerRound: SegmentStat;
    headshotsPercentage: SegmentStat;
    grenadeCasts: SegmentStat;
    grenadeCastsPerRound: SegmentStat;
    grenadeCastsPerMatch: SegmentStat;
    ability1Casts: SegmentStat;
    ability1CastsPerRound: SegmentStat;
    ability1CastsPerMatch: SegmentStat;
    ability2Casts: SegmentStat;
    ability2CastsPerRound: SegmentStat;
    ability2CastsPerMatch: SegmentStat;
    ultimateCasts: SegmentStat;
    ultimateCastsPerRound: SegmentStat;
    ultimateCastsPerMatch: SegmentStat;
    dealtHeadshots: SegmentStat;
    dealtBodyshots: SegmentStat;
    dealtLegshots: SegmentStat;
    receivedHeadshots: SegmentStat;
    receivedBodyshots: SegmentStat;
    receivedLegshots: SegmentStat;
    econRating: SegmentStat;
    econRatingPerMatch: SegmentStat;
    econRatingPerRound: SegmentStat;
    suicides: SegmentStat;
    firstBloods: SegmentStat;
    firstBloodsPerRound: SegmentStat;
    firstBloodsPerMatch: SegmentStat;
    firstDeaths: SegmentStat;
    firstDeathsPerRound: SegmentStat;
    lastDeaths: SegmentStat;
    survived: SegmentStat;
    traded: SegmentStat;
    kAST: SegmentStat;
    mostKillsInMatch: SegmentStat;
    flawless: SegmentStat;
    thrifty: SegmentStat;
    aces: SegmentStat;
    teamAces: SegmentStat;
    clutches: SegmentStat;
    clutchesPercentage: SegmentStat;
    clutchesLost: SegmentStat;
    clutches1v1: SegmentStat;
    clutches1v2: SegmentStat;
    clutches1v3: SegmentStat;
    clutches1v4: SegmentStat;
    clutches1v5: SegmentStat;
    clutchesLost1v1: SegmentStat;
    clutchesLost1v2: SegmentStat;
    clutchesLost1v3: SegmentStat;
    clutchesLost1v4: SegmentStat;
    clutchesLost1v5: SegmentStat;
    kills1K: SegmentStat;
    kills2K: SegmentStat;
    kills3K: SegmentStat;
    kills4K: SegmentStat;
    kills5K: SegmentStat;
    kills6K: SegmentStat;
    esr: SegmentStat;
    plants: SegmentStat;
    plantsPerMatch: SegmentStat;
    plantsPerRound: SegmentStat;
    attackKills: SegmentStat;
    attackKillsPerRound: SegmentStat;
    attackDeaths: SegmentStat;
    attackKDRatio: SegmentStat;
    attackAssists: SegmentStat;
    attackAssistsPerRound: SegmentStat;
    attackRoundsWon: SegmentStat;
    attackRoundsLost: SegmentStat;
    attackRoundsPlayed: SegmentStat;
    attackRoundsWinPct: SegmentStat;
    attackScore: SegmentStat;
    attackScorePerRound: SegmentStat;
    attackDamage: SegmentStat;
    attackDamagePerRound: SegmentStat;
    attackHeadshots: SegmentStat;
    attackTraded: SegmentStat;
    attackSurvived: SegmentStat;
    attackFirstBloods: SegmentStat;
    attackFirstBloodsPerRound: SegmentStat;
    attackFirstDeaths: SegmentStat;
    attackFirstDeathsPerRound: SegmentStat;
    attackKAST: SegmentStat;
    defuses: SegmentStat;
    defusesPerMatch: SegmentStat;
    defusesPerRound: SegmentStat;
    defenseKills: SegmentStat;
    defenseKillsPerRound: SegmentStat;
    defenseDeaths: SegmentStat;
    defenseKDRatio: SegmentStat;
    defenseAssists: SegmentStat;
    defenseAssistsPerRound: SegmentStat;
    defenseRoundsWon: SegmentStat;
    defenseRoundsLost: SegmentStat;
    defenseRoundsPlayed: SegmentStat;
    defenseRoundsWinPct: SegmentStat;
    defenseScore: SegmentStat;
    defenseScorePerRound: SegmentStat;
    defenseDamage: SegmentStat;
    defenseDamagePerRound: SegmentStat;
    defenseHeadshots: SegmentStat;
    defenseTraded: SegmentStat;
    defenseSurvived: SegmentStat;
    defenseFirstBloods: SegmentStat;
    defenseFirstBloodsPerRound: SegmentStat;
    defenseFirstDeaths: SegmentStat;
    defenseFirstDeathsPerRound: SegmentStat;
    defenseKAST: SegmentStat;
    rank: SegmentStat;
    trnPerformanceScore: SegmentStat;
    peakRank: SegmentStat;
};

export type SegmentAgentStats = {
    matchesPlayed: SegmentStat;
    matchesWon: SegmentStat;
    matchesLost: SegmentStat;
    matchesTied: SegmentStat;
    matchesWinPct: SegmentStat;
    matchesDisconnected: SegmentStat;
    matchesDuration: SegmentStat;
    timePlayed: SegmentStat;
    mVPs: SegmentStat;
    roundsPlayed: SegmentStat;
    roundsWon: SegmentStat;
    roundsLost: SegmentStat;
    roundsWinPct: SegmentStat;
    roundsDuration: SegmentStat;
    score: SegmentStat;
    scorePerMatch: SegmentStat;
    scorePerRound: SegmentStat;
    kills: SegmentStat;
    killsPerRound: SegmentStat;
    killsPerMatch: SegmentStat;
    deaths: SegmentStat;
    deathsPerRound: SegmentStat;
    deathsPerMatch: SegmentStat;
    assists: SegmentStat;
    assistsPerRound: SegmentStat;
    assistsPerMatch: SegmentStat;
    kDRatio: SegmentStat;
    kDARatio: SegmentStat;
    kADRatio: SegmentStat;
    damage: SegmentStat;
    damageDelta: SegmentStat;
    damageDeltaPerRound: SegmentStat;
    damagePerRound: SegmentStat;
    damagePerMatch: SegmentStat;
    damagePerMinute: SegmentStat;
    damageReceived: SegmentStat;
    headshots: SegmentStat;
    headshotsPerRound: SegmentStat;
    headshotsPercentage: SegmentStat;
    grenadeCasts: SegmentStat;
    grenadeCastsPerRound: SegmentStat;
    grenadeCastsPerMatch: SegmentStat;
    ability1Casts: SegmentStat;
    ability1CastsPerRound: SegmentStat;
    ability1CastsPerMatch: SegmentStat;
    ability2Casts: SegmentStat;
    ability2CastsPerRound: SegmentStat;
    ability2CastsPerMatch: SegmentStat;
    ultimateCasts: SegmentStat;
    ultimateCastsPerRound: SegmentStat;
    ultimateCastsPerMatch: SegmentStat;
    dealtHeadshots: SegmentStat;
    dealtBodyshots: SegmentStat;
    dealtLegshots: SegmentStat;
    receivedHeadshots: SegmentStat;
    receivedBodyshots: SegmentStat;
    receivedLegshots: SegmentStat;
    econRating: SegmentStat;
    econRatingPerMatch: SegmentStat;
    econRatingPerRound: SegmentStat;
    suicides: SegmentStat;
    firstBloods: SegmentStat;
    firstBloodsPerRound: SegmentStat;
    firstBloodsPerMatch: SegmentStat;
    firstDeaths: SegmentStat;
    firstDeathsPerRound: SegmentStat;
    lastDeaths: SegmentStat;
    survived: SegmentStat;
    traded: SegmentStat;
    kAST: SegmentStat;
    mostKillsInMatch: SegmentStat;
    flawless: SegmentStat;
    thrifty: SegmentStat;
    aces: SegmentStat;
    teamAces: SegmentStat;
    clutches: SegmentStat;
    clutchesPercentage: SegmentStat;
    clutchesLost: SegmentStat;
    clutches1v1: SegmentStat;
    clutches1v2: SegmentStat;
    clutches1v3: SegmentStat;
    clutches1v4: SegmentStat;
    clutches1v5: SegmentStat;
    clutchesLost1v1: SegmentStat;
    clutchesLost1v2: SegmentStat;
    clutchesLost1v3: SegmentStat;
    clutchesLost1v4: SegmentStat;
    clutchesLost1v5: SegmentStat;
    kills1K: SegmentStat;
    kills2K: SegmentStat;
    kills3K: SegmentStat;
    kills4K: SegmentStat;
    kills5K: SegmentStat;
    kills6K: SegmentStat;
    esr: SegmentStat;
    plants: SegmentStat;
    plantsPerMatch: SegmentStat;
    plantsPerRound: SegmentStat;
    attackKills: SegmentStat;
    attackKillsPerRound: SegmentStat;
    attackDeaths: SegmentStat;
    attackKDRatio: SegmentStat;
    attackAssists: SegmentStat;
    attackAssistsPerRound: SegmentStat;
    attackRoundsWon: SegmentStat;
    attackRoundsLost: SegmentStat;
    attackRoundsPlayed: SegmentStat;
    attackRoundsWinPct: SegmentStat;
    attackScore: SegmentStat;
    attackScorePerRound: SegmentStat;
    attackDamage: SegmentStat;
    attackDamagePerRound: SegmentStat;
    attackHeadshots: SegmentStat;
    attackTraded: SegmentStat;
    attackSurvived: SegmentStat;
    attackFirstBloods: SegmentStat;
    attackFirstBloodsPerRound: SegmentStat;
    attackFirstDeaths: SegmentStat;
    attackFirstDeathsPerRound: SegmentStat;
    attackKAST: SegmentStat;
    defuses: SegmentStat;
    defusesPerMatch: SegmentStat;
    defusesPerRound: SegmentStat;
    defenseKills: SegmentStat;
    defenseKillsPerRound: SegmentStat;
    defenseDeaths: SegmentStat;
    defenseKDRatio: SegmentStat;
    defenseAssists: SegmentStat;
    defenseAssistsPerRound: SegmentStat;
    defenseRoundsWon: SegmentStat;
    defenseRoundsLost: SegmentStat;
    defenseRoundsPlayed: SegmentStat;
    defenseRoundsWinPct: SegmentStat;
    defenseScore: SegmentStat;
    defenseScorePerRound: SegmentStat;
    defenseDamage: SegmentStat;
    defenseDamagePerRound: SegmentStat;
    defenseHeadshots: SegmentStat;
    defenseTraded: SegmentStat;
    defenseSurvived: SegmentStat;
    defenseFirstBloods: SegmentStat;
    defenseFirstBloodsPerRound: SegmentStat;
    defenseFirstDeaths: SegmentStat;
    defenseFirstDeathsPerRound: SegmentStat;
    defenseKAST: SegmentStat;
    ability1Kills: SegmentStat;
    ability1KillsPerMatch: SegmentStat;
    ability2Kills: SegmentStat;
    ability2KillsPerMatch: SegmentStat;
    grenadeKills: SegmentStat;
    grenadeKillsPerMatch: SegmentStat;
    primaryKills: SegmentStat;
    primaryKillsPerMatch: SegmentStat;
    ultimateKills: SegmentStat;
    ultimateKillsPerMatch: SegmentStat;
};

export type SegmentAgentRoleStats = {
    matchesPlayed: SegmentStat;
    matchesWon: SegmentStat;
    matchesLost: SegmentStat;
    matchesTied: SegmentStat;
    matchesWinPct: SegmentStat;
    timePlayed: SegmentStat;
    scorePerRound: SegmentStat;
    kills: SegmentStat;
    deaths: SegmentStat;
    assists: SegmentStat;
    kDRatio: SegmentStat;
    kADRatio: SegmentStat;
    damageDelta: SegmentStat;
    damageDeltaPerRound: SegmentStat;
    damagePerRound: SegmentStat;
    kAST: SegmentStat;
};

export type SegmentPeakRatingStats = {
    peakRating: SegmentStat;
};

export type Segments = {
    type: 'season' | 'agent' | 'agent-role' | 'peak-rating';
    attributes: {
        playlist?: string;
        seasonId?: string;
        key?: string | null;
    };
    metadata?: {
        name: string;
        shortName: string;
        playlistName: string;
        startTime: string;
        endTime: string;
        schemav2: string;
    };
    stats: SegmentSeasonStats | SegmentAgentStats | SegmentAgentRoleStats | SegmentPeakRatingStats;
    expiryDate: string;
};

export type TrackerResponse = {
    data: {
        platformInfo: TrackerPlatformInfo;
        userInfo: TrackerUserInfo;
        metadata: TrackerMetadata;
        segments: Segments[];
        availableSegments: unknown[];
        expiryDate: string;
    };
    errors?: { message: string }[];
};

export interface Match {
    id: string;
    metadata: {
        map: string;
        mode: string;
    };
    stats: {
        kills: number;
        deaths: number;
        assists: number;
    };
}

export interface MatchesResponse {
    data: {
        matches: Match[];
        metadata: {
            schema: string;
            next: string | null;
        };
        paginationType: string;
        requestingPlayerAttributes: {
            platformSlug: string;
            platformUserIdentifier: string;
        };
        expiryDate: string;
    };
}