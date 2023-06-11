import axios from "axios";

const usersData = () => {
  const url = "http://localhost:3001/users";

  axios
    .get(url)
    .then()
    .catch((error) => console.log(error.message));
}

export default usersData;