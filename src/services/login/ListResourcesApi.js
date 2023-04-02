import api from '../Api'

const listSchools = async () => {
    let listSchools = [];
    try {
        const schools = await api().get('/schools', {headers: `Authorization: ${localStorage.getItem('jwt')}`});
        console.log(localStorage.getItem('jwt'))
        if (schools.data.success === true) {
            schools.data.message.map((school) => (
                listSchools.push({'schoolId': school.id, 'schoolName': school.name})
            ));
        }
        return listSchools;
    } catch (err) {
        console.log(err.message)
    }
}

const listClasses = async () => {
    let listClasses = [];
    try {
        const schoolClasses = await api().get('/classes', {headers: `Authorization: ${localStorage.getItem('jwt')}`});
        if (schoolClasses.data.success === true) {
            schoolClasses.data.message.map((schoolClass) => (
                listClasses.push({'classId': schoolClass.id, 'className': schoolClass.name, 'schoolId': schoolClass.school_id})
            ));
        }
        return listClasses;
    } catch (err) {
        console.log(err.message)
    }
}

const listRoles = async () => {
    let listRoles = [];
    try {
        const roles = await api().get('/roles', {headers: `Authorization: ${localStorage.getItem('jwt')}`});
        if (roles.data.success === true) {
            roles.data.message.map((role) => (
                listRoles.push({'roleName': role.value})
            ));
        }
        return listRoles;
    } catch (err) {
        console.log(err.message)
    }
}

export {listSchools, listClasses, listRoles};