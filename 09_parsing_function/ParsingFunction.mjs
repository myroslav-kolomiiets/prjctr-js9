import {stuffData} from "./stuffData.mjs";

/**
 * parsingStuff - main parsing function
 * @param workersData
 * @param property
 */
function parsingStuff(workersData, property) {
    const workersArray = [];
    flatStuff(workersData, workersArray);
    const uniqueWorkers = filterUniqueWorkers(workersArray);
    const sortedWorkers = uniqueWorkers.sort(byProperty(property));
    showDescriptionForEachWorker(sortedWorkers);
}

/**
 * flatStuff - flat all workers in one array
 * @param stuffStructure
 * @param accumulatingArray
 */
function flatStuff(stuffStructure, accumulatingArray) {
    accumulatingArray.push(stuffStructure);
    if (stuffStructure.subordinators === null) {
        return;
    }
    stuffStructure.subordinators.forEach((subordinator) => {
        flatStuff(subordinator, accumulatingArray);
    })
}

/**
 * filterUniqueWorkers
 * @param workers
 * @return {Array}
 */
function filterUniqueWorkers(workers) {
    const allWorkers = workers.map((item) => {
        return [`${item["firstName"]} ${item["secondName"]}`, item];
    });

    return Array.from(new Map(allWorkers).values());
}

/**
 * byProperty - sort function
 * @param property
 * @return {function(*, *): number}
 */
function byProperty(property = 'yearsOfExperience') {
    return (a, b) => a[property] < b[property] ? 1 : -1;
}

/**
 * showDescriptionForEachWorker - output final information
 * @param employees
 */
function showDescriptionForEachWorker(employees) {
    const greenColor = "\x1b[32m";

    employees.forEach((employee) => {
        const {firstName, secondName, role, yearsOfExperience, inCompanySince} = employee;

        const workDuration = Math.floor((Date.parse(new Date()) - Date.parse(inCompanySince)) / 1000 / 31536000);
        console.log(greenColor, `${firstName} ${secondName} is a ${role}, has ${yearsOfExperience} ${yearsOfExperience > 1 ? 'years' : 'year'} of experience and works ${workDuration} ${workDuration > 1 ? 'years' : 'year'} in the company
        `);
    })
}

parsingStuff(stuffData, 'age');
