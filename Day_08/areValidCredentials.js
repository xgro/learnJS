module.exports = function areValidCredentials(name, password) {
    // TODO: 여기에 코드를 작성합니다.
    name = name !== undefined ? name.length : 0 
    password = password !== undefined ? password.length : 0 
    
    return name > 3 && password > 8;
}