// userInfo.js
let idCounter = 0;

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: ++idCounter
    }));
}
