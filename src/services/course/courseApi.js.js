import api from '../Api'

const listCourses = async () => {
    let listSchools = [];
    try {
        const schools = await api().get('/recentCourses', {headers: `Authorization: ${localStorage.getItem('jwt')}`});
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

export default listCourses;