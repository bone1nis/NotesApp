export const addNotesLocalStorage = function (updateList) {
    localStorage.setItem("notes", JSON.stringify(updateList));
}

export const getNotesLocalStorage = function () {
    const list = localStorage.getItem("notes");

    if (list) {
        return JSON.parse(list);
    }
};