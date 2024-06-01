import axios from 'axios'

const ListOfStudents = () => {
    let url = "http://localhost:4000/"

    const getData = ()=> {
        axios
        .get(url)
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
  return (
    <div>
        <button onClick={getData} className='bg-blue-600 rounded py-4 px-6'>Get Student</button>
    </div>
  )
}

export default ListOfStudents