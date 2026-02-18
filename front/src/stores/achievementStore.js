import create from 'zustand';

export const useAchievementStore = create((set, get) => ({
    cache: {},
    meta: { pendingCount: 0, completedCount: 0 },
    setPageData(status, page, data, meta) {
        const key = `${status}:${page}`;
        set((state) => ({ cache: { ...state.cache, [key]: data }, meta }));
    },
    getPageData(status, page) {
        const key = `${status}:${page}`;
        return get().cache[key];
    },
}));
