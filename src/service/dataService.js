let test = [];

const setLS = (name) => {
    test.push(name)
    localStorage.setItem("studentNames", JSON.stringify(test))
}
const setLSARR = (arr) => {
    localStorage.setItem("studentNames", JSON.stringify(arr))
}
const getLS = () => {
    let lsData = [];
    let ls = localStorage.getItem("studentNames");
    if (ls && ls != null) {
        lsData = JSON.parse(ls);
    }
    return lsData;
}

export {setLS, getLS, setLSARR}