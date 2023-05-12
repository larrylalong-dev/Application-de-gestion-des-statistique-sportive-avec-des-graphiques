const url = 'http://localhost:3000/user';

const getFetch = async (endpoint) => {
    try {
        let res = await fetch(`${url + '/' + endpoint}`);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export const getPerformance = async(id) => {
    const performance = await getFetch(`${id + '/performance'}`);
    return performance
};

export const getInitial = async(id) => {
    const initial = await getFetch(`${id + '/'}`);
    return initial
};

export const getSessions = async(id) => {
    const initial = await getFetch(`${id + '/average-sessions'}`);
    return initial
};

export const getActivity = async(id) => {
    const activity = await getFetch(`${id + '/activity'}`);
    return activity
};

// export default { getSessions, getInitial, getPerformance}